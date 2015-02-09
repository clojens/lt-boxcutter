if(!lt.util.load.provided_QMARK_('lt.plugins.boxcutter')) {
goog.provide('lt.plugins.boxcutter');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.document');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.menu');
goog.require('lt.objs.popup');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('crate.binding');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('clojure.string');
goog.require('lt.objs.document');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.plugins.auto_complete');
goog.require('clojure.string');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('crate.binding');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.menu');
lt.plugins.boxcutter.asset = (function asset(p){return lt.objs.files.join.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(lt.objs.plugins.by_name.call(null,"boxcutter")),p);
});
lt.plugins.boxcutter.__BEH__subfile_copy_path = (function __BEH__subfile_copy_path(this$){return lt.objs.platform.copy.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.boxcutter","subfile-copy-path","lt.plugins.boxcutter/subfile-copy-path",2336051757),new cljs.core.Keyword(null,"desc","desc",1016984067),"Copies the absolute filesystem path of this workspace item to the platform clipboard designated for text.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copy-path","copy-path",2473274095),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.boxcutter.__BEH__subfile_copy_path);
lt.plugins.boxcutter.__BEH__subfile_menu = (function __BEH__subfile_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1116631654),"Copy path",new cljs.core.Keyword(null,"tooltip","tooltip",4168794997),new cljs.core.Keyword(null,"desc","desc",1016984067).cljs$core$IFn$_invoke$arity$1(lt.object.__GT_behavior.call(null,new cljs.core.Keyword("lt.plugins.boxcutter","subfile-copy-path","lt.plugins.boxcutter/subfile-copy-path",2336051757))),new cljs.core.Keyword(null,"icon","icon",1017130987),lt.plugins.boxcutter.asset.call(null,"resources/icons/w8/copyref16.png"),new cljs.core.Keyword(null,"key","key",1014010321),"c",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"copy-path","copy-path",2473274095));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.boxcutter","subfile-menu","lt.plugins.boxcutter/subfile-menu",2421110793),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.boxcutter.__BEH__subfile_menu);
lt.plugins.boxcutter.__BEH__menu_PLUS_ = (function __BEH__menu_PLUS_(this$,menu){return cljs.core.conj.call(null,menu,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"forward",new cljs.core.Keyword(null,"order","order",1119910592),0,new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"browser.forward","browser.forward",4326300017));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"back",new cljs.core.Keyword(null,"order","order",1119910592),1,new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"browser.back","browser.back",2720710495));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"copy",new cljs.core.Keyword(null,"order","order",1119910592),3,new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.boxcutter.to_frame.call(null,this$).document.execCommand("copy");
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"paste",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.boxcutter.to_frame.call(null,this$).document.execCommand("paste");
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.boxcutter","menu+","lt.plugins.boxcutter/menu+",1045902893),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu+","menu+",1117686302),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.boxcutter.__BEH__menu_PLUS_);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.boxcutter","copy-string","lt.plugins.boxcutter/copy-string",3448556674),new cljs.core.Keyword(null,"desc","desc",1016984067),"Box Cutter: Command which takes a single argument string then copies to platform clipboard",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (s){return lt.objs.platform.copy.call(null,s);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.boxcutter","delete-next-char","lt.plugins.boxcutter/delete-next-char",2672637835),new cljs.core.Keyword(null,"desc","desc",1016984067),"Box Cutter: Command to delete the next n cols after the cursor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$,pos){var ed = lt.objs.editor.pool.last_active.call(null);return cljs.core.keys.call(null,this$);
})], null));
lt.plugins.boxcutter.__BEH__editor_delete_next_n_chars = (function __BEH__editor_delete_next_n_chars(this$,n){return cljs.core.println.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.boxcutter","editor-delete-next-n-chars","lt.plugins.boxcutter/editor-delete-next-n-chars",2481152131),new cljs.core.Keyword(null,"desc","desc",1016984067),"Deletes the next n characters from the current cursor position.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete-chars","delete-chars",3444914349),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.boxcutter.__BEH__editor_delete_next_n_chars);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.boxcutter","dialog","lt.plugins.boxcutter/dialog",1824558241),new cljs.core.Keyword(null,"desc","desc",1016984067),"Box Cutter: Command which creates a modal dialog popup easily",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (hdr,msg,btns){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),hdr,new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str(msg)].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),(function (){var pred__8393 = cljs.core._EQ_;var expr__8394 = btns;if(cljs.core.truth_(pred__8393.call(null,new cljs.core.Keyword(null,"ok-cancel","ok-cancel",3962269437),expr__8394)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"OK"], null)], null);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8394)].join('')));
}
})()], null));
})], null));
}

//# sourceMappingURL=boxcutter_compiled.js.map