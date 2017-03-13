webpackJsonp([20,21],{10:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{searchId:String},data:function(){return{isFocus:!1,searchVal:"",hasVal:!1}},methods:{s_input:function(){""!==this.searchVal?this.hasVal=!0:this.hasVal=!1},s_focus:function(){this.isFocus=!0},s_blur:function(){this.isFocus=!1},reset_val:function(){this.searchVal=""}}}},15:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"search-bar.vue",sourceRoot:"webpack://"}])},16:function(e,t,s){var i=s(15);"string"==typeof i&&(i=[[e.id,i,""]]);s(2)(i,{});i.locals&&(e.exports=i.locals)},17:function(e,t){e.exports=" <div class=weui_search_bar :class=\"isFocus?'weui_search_focusing':''\"> <form class=weui_search_outer> <div class=weui_search_inner> <i class=weui_icon_search></i> <input type=search class=weui_search_input placeholder=搜索 v-model=searchVal :id=searchId @input=s_input @focus=s_focus @blur=s_blur> <a href=javascript: class=weui_icon_clear @touchend=reset_val v-show=hasVal></a> </div> <label :for=searchId class=weui_search_text> <i class=weui_icon_search></i> <span>搜索</span> </label> </form> <a href=javascript: class=weui_search_cancel @touchend=s_blur>取消</a> </div> "},18:function(e,t,s){var i,a,n={};s(16),i=s(10),a=s(17),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(c.template=a),c.computed||(c.computed={}),Object.keys(n).forEach(function(e){var t=n[e];c.computed[e]=function(){return t}})},87:function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(8),n=s(19),c=s(18),o=i(c);t.default={vuex:{getters:{wechat_list:a.wechat_list},actions:{get_menu_wechat_list:n.get_menu_wechat_list,set_menu_active:n.set_menu_active,set_chat:n.set_chat,set_chat_count:n.set_chat_count,set_news_state:n.set_news_state,delete_news:n.delete_news}},route:{activate:function(e){var t=(e.from,e.to,e.next);this.set_menu_active(0),t()}},data:function(){return{decline:!1,currentIndex:-1,isTouchSwipe:!1}},events:{"route-pipe":function(e){this.decline=e,this.$parent.$emit("route-pipe",e)}},methods:{info_touchstart:function(e){this.currentIndex=-1},info_tap:function(e){var t=e;t>=0&&!this.isTouchSwipe&&(this.set_chat(this.wechat_list[t]),this.$router.go({path:"/chat/dialogue"})),this.isTouchSwipe=!1},info_swipeleft:function(e){event.stopPropagation(),this.isTouchSwipe?this.isTouchSwipe=!1:(this.isTouchSwipe=!0,this.currentIndex=e)},computed_unRead_count:function(){var e=0;console.log(this.wechat_list),this.wechat_list.forEach(function(t,s){var i=t.chatBaseModel,a=t.chatConfigModel;if(!a.newsMute){var n=i.newsUnreadCount;e+=n}}),this.set_chat_count(e)},increase_newsState:function(e,t){var s=this;this.isTouchSwipe=!1,this.set_news_state(e,t,function(){s.currentIndex=-1,s.computed_unRead_count()})},delete_item:function(e){var t=this;this.delete_news(e,function(){t.currentIndex=-1,t.computed_unRead_count()})}},filters:{f_news:function(e,t){var e=e||{},s=e.newsMute?"_news-dot":"_news-count",i=e.newsMute?"":e.newsUnreadCount,a=e.newsUnreadCount>0,n={nclass:s,ntext:i,nshow:a};return n[t]}},components:{searchBar:o.default},created:function(){var e=this;this.get_menu_wechat_list(function(){e.computed_unRead_count()})}}},163:function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"chat.vue",sourceRoot:"webpack://"}])},189:function(e,t,s){var i=s(163);"string"==typeof i&&(i=[[e.id,i,""]]);s(2)(i,{});i.locals&&(e.exports=i.locals)},264:function(e,t){e.exports=' <div class="_full_inner _scroll _effect component-chat" :class="{\'_effect--30\':decline}" _v-fd88a538=""> <search-bar _v-fd88a538=""></search-bar> <ul class=wechat-list _v-fd88a538=""> <li class="item _line-fine" v-for="item in wechat_list" transition=chat-item _v-fd88a538=""> <div class=info :class="{\n                \'current\':currentIndex==$index\n                }" @touchstart=info_touchstart($index) v-touch:tap=info_tap($index) v-touch:swipeleft=info_swipeleft($index) v-touch-options:swipe="{ direction: \'horizontal\' }" _v-fd88a538=""> <div class=ico-box _v-fd88a538=""> <i :class="item.chatConfigModel | f_news \'nclass\'" v-text="item.chatBaseModel | f_news \'ntext\'" v-show="item.chatBaseModel | f_news \'nshow\'" _v-fd88a538=""></i> <div class=ico _v-fd88a538=""> <img :src=item.base.iconSrc alt=pic _v-fd88a538=""> </div> </div> <div class=desc _v-fd88a538=""> <div class=desc-time v-text="item.chatBaseModel.endTimeStr | fmtDate \'hh:ss\'" _v-fd88a538=""></div> <div class=desc-title v-text=item.base.name _v-fd88a538=""></div> <div class=desc-message _v-fd88a538=""> <div class="desc-mute iconfont icon-mute" :title="item.chatConfigModel.newsMute | json" v-show=item.chatConfigModel.newsMute _v-fd88a538=""></div> <span :title=item.base.type v-show="item.base.type===\'friends\'" v-text="item.chatBaseModel.endChatAuth+\':\'" _v-fd88a538=""></span> <span v-text=item.chatBaseModel.endChatTxt _v-fd88a538=""></span> </div> </div> </div> <div class=handle _v-fd88a538=""> <div class=handle-unread v-touch:tap=increase_newsState($index,1) v-show="item.chatBaseModel.newsUnreadCount==0" _v-fd88a538="">标为未读</div> <div class=handle-unread v-touch:tap=increase_newsState($index,0) v-show="item.chatBaseModel.newsUnreadCount>0" _v-fd88a538="">标为已读</div> <div class=handle-del v-touch:tap=delete_item($index) _v-fd88a538="">删除</div> </div> </li> </ul> </div> <router-view transition=cover keep-alive="" _v-fd88a538=""></router-view> '},271:function(e,t,s){var i,a,n={};s(189),i=s(87),a=s(264),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(c.template=a),c.computed||(c.computed={}),Object.keys(n).forEach(function(e){var t=n[e];c.computed[e]=function(){return t}})}});
//# sourceMappingURL=20.647749457682378c5d3b.js.map