(ns lt.plugins.boxcutter
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.platform :as platform]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.sidebar.workspace :as ws]
            [lt.objs.document :as doc]
            [lt.objs.editor :as editor]
            [lt.objs.plugins :as plugins]
            [lt.objs.popup :as popup]
            [lt.objs.menu :as menu]
            [lt.util.dom :as dom]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.auto-complete :as ac]
            [clojure.string :as string]
            [crate.binding :as bindings])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn asset
  [p] (files/join (:dir (plugins/by-name "boxcutter")) p))




(behavior ::subfile-copy-path
          :desc "Copies the absolute filesystem path of this workspace item to the platform clipboard designated for text."
          :triggers #{:copy-path}
          :reaction (fn [this] (platform/copy (:path @this))))


(behavior ::subfile-menu
          :triggers #{:menu-items}
          :reaction (fn [this items]
                      (conj items
                            {:label "Copy path"
                             :tooltip (-> (object/->behavior ::subfile-copy-path) :desc)
                             :icon  (asset "resources/icons/w8/copyref16.png")
                             :key "c"
                             :order 4
                             :click (fn [] (object/raise this :copy-path))}
                            )))

(behavior ::menu+
          :triggers #{:menu+}
          :reaction (fn [this menu]
                      (conj menu
                            {:label "forward"
                             :order 0
                             :click (fn [e]
                                      (cmd/exec! :browser.forward))}
                            {:label "back"
                             :order 1
                             :click (fn [e]
                                      (cmd/exec! :browser.back))}
                            {:type "separator"
                             :order 2}
                            {:label "copy"
                             :order 3
                             :click (fn [e]
                                      (.document.execCommand (to-frame this) "copy"))}
                            {:label "paste"
                             :order 4
                             :click (fn [e]
                                      (.document.execCommand (to-frame this) "paste")
                                      )}
                            )

                      ))


;; (-> (object/->behavior ::subfile-menu))



;; e.g. user.keymap entry [:editor "ctrl-shift-4" :editor.line-start :editor.selection.clear (:lt.plugins.boxcutter/copy-string "#") :editor.paste]
;; to bash/php/coffee comment with a pound the current line
(cmd/command {:command ::copy-string
              :desc "Box Cutter: Command which takes a single argument string then copies to platform clipboard"
              :exec (fn [s]
                      (platform/copy s))})



(cmd/command {:command ::delete-next-char
              :desc "Box Cutter: Command to delete the next n cols after the cursor"
              :exec (fn [this pos]
                      (let [ed (pool/last-active)]
;;                        (editor/->cursor (:ed this))
                        (-> this keys)
                        )
                      )
              })


(behavior ::editor-delete-next-n-chars
          :desc "Deletes the next n characters from the current cursor position."
          :triggers #{:delete-chars}
          :reaction (fn [this n] (-> @this keys println)))

;; (object/->behavior ::editor-delete-next-n-chars 4)
;; (object/raise this :delete-chars)


;; (cmd/exec! ::delete-next-char 4) abcd

;; (cmd/exec! :editor.open-pair "c")
;; (editor/->cursor (pool/last-active) "start")
;; (-> @ac/hinter :items)
;; pool/syntax-selector

(cmd/command {:command ::dialog
              :desc "Box Cutter: Command which creates a modal dialog popup easily"
              :exec (fn [hdr msg btns]
                        (popup/popup! {:header hdr
                                       :body (str msg)
                                       :buttons (condp = btns
                                                  :ok-cancel [{:label "Cancel"}
                                                              {:label "OK"}])}))})



;;                                                                "Download and install"
;;                                                                :action (fn []
;;                                                                          (fetch-and-deploy data))}]}))


