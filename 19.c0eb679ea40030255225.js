(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"XRr/":function(t,e,i){"use strict";i.r(e),i.d(e,"super_tab",function(){return o}),i.d(e,"super_tabs",function(){return a}),i.d(e,"super_tabs_container",function(){return h});var n=i("N9VD"),s=i("HLkV");class o{constructor(t){Object(n.h)(this,t)}componentDidLoad(){this.checkIonContent()}componentDidUpdate(){this.checkIonContent()}checkIonContent(){if("boolean"!=typeof this.noScroll){const t=this.el.querySelector("ion-content");t&&t.parentElement===this.el&&(this.noScroll=!0)}}async getRootScrollableEl(){if(!this.noScroll&&this.el.scrollHeight>this.el.clientHeight)return this.el;const t=this.el.querySelector("ion-content");return t?t.getScrollElement():this.noScroll?null:this.el}render(){return Object(n.g)("slot",null)}get el(){return Object(n.f)(this)}}o.style=":host{height:var(--super-tab-height, 100%);position:relative;display:block;overflow-x:hidden;overflow-y:auto;contain:size style;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width, 100vw);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host[noScroll]{overflow-y:hidden}ion-nav,ion-content{height:100%;max-height:100%;position:absolute}ion-nav>.ion-page,ion-content>.ion-page{position:absolute}";class a{constructor(t){Object(n.h)(this,t),this.activeTabIndex=0,this._config=s.a,this.initAttempts=0,this.initPromise=new Promise(t=>{this.initPromiseResolve=t}),this.tabChange=Object(n.d)(this,"tabChange",7)}async setConfig(t){this._config=Object.assign(Object.assign({},s.a),t)}propagateConfig(){this.container&&(this.container.config=this._config),this.toolbar&&(this.toolbar.config=this._config)}async selectTab(t,e=!0,i=!0){this.debug("selectTab",t,e),await this.initPromise;const n=this.activeTabIndex;this.container&&await this.container.setActiveTabIndex(t,!0,e),this.toolbar&&await this.toolbar.setActiveTab(t,!0,e),i&&this.emitTabChangeEvent(t,n),this.activeTabIndex=n}async onConfigChange(t){await this.setConfig(t)}onWindowResize(){this.debug("onWindowResize"),this.toolbar&&this.toolbar.setSelectedTab(this.activeTabIndex),this.container.reindexTabs()}async componentWillLoad(){this.config&&await this.setConfig(this.config)}componentDidLoad(){this.debug("componentDidLoad"),this.indexChildren(),this.container&&this.container.setActiveTabIndex(this.activeTabIndex,!0,!1),this.toolbar&&this.toolbar.setActiveTab(this.activeTabIndex,!0,!1),this.el.shadowRoot.addEventListener("slotchange",this.onSlotchange.bind(this)),requestAnimationFrame(()=>{this.initComponent()})}initComponent(){if(!this.container){if(++this.initAttempts<=1e3)return void requestAnimationFrame(()=>{this.initComponent()});this.debug("container still doesn't exists after 1000 frames")}this.container&&this.container.setActiveTabIndex(this.activeTabIndex,!0,!1),this.toolbar&&this.toolbar.setActiveTab(this.activeTabIndex,!0),this.propagateConfig(),this.setupEventListeners(),this.initPromiseResolve()}async setupEventListeners(){this.container?(await this.container.componentOnReady(),this.el.addEventListener("selectedTabIndexChange",this.onContainerSelectedTabChange.bind(this)),this.el.addEventListener("activeTabIndexChange",this.onContainerActiveTabChange.bind(this))):this.debug("setupEventListeners: container does not exist"),this.toolbar?(await this.toolbar.componentOnReady(),this.el.addEventListener("buttonClick",this.onToolbarButtonClick.bind(this))):this.debug("setupEventListeners: toolbar does not exist")}async onContainerSelectedTabChange(t){this.debug("onContainerSelectedTabChange called with: ",t),this.toolbar&&await this.toolbar.setSelectedTab(t.detail)}emitTabChangeEvent(t,e){"number"!=typeof t||t<0||(("number"!=typeof e||e<0)&&(e=this.activeTabIndex),this.tabChange.emit({changed:t!==e,index:t}))}onContainerActiveTabChange(t){this.debug("onContainerActiveTabChange",t);const e=t.detail;this.emitTabChangeEvent(e),this.activeTabIndex=e,this.toolbar&&this.toolbar.setActiveTab(e,!0,!0)}onToolbarButtonClick(t){this.debug("onToolbarButtonClick",t);const{index:e}=t.detail;this.container&&this.container.setActiveTabIndex(e,!0,!0),this.emitTabChangeEvent(e),this.activeTabIndex=e}indexChildren(){this.debug("indexChildren");const t=this.el.querySelector("super-tabs-container"),e=this.el.querySelector("super-tabs-toolbar");t&&this.container!==t&&(this.container=t),e&&this.toolbar!==e&&(this.toolbar=e),this.propagateConfig()}async onSlotchange(){this.indexChildren(),this.selectTab(this.activeTabIndex,!0,!1)}debug(...t){Object(s.d)(this._config,"tabs",t)}render(){return Object(n.g)(n.a,null,Object(n.g)("slot",{name:"top"}),Object(n.g)("slot",null),Object(n.g)("slot",{name:"bottom"}))}get el(){return Object(n.f)(this)}static get watchers(){return{config:["onConfigChange"]}}}a.style=":host{height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased;-ms-touch-action:none;touch-action:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}";class h{constructor(t){Object(n.h)(this,t),this.swipeEnabled=!0,this.autoScrollTop=!1,this.tabs=[],this.isDragging=!1,this.leftThreshold=0,this.rightThreshold=0,this.scrollWidth=0,this.width=0,this.activeTabIndexChange=Object(n.d)(this,"activeTabIndexChange",7),this.selectedTabIndexChange=Object(n.d)(this,"selectedTabIndexChange",7),this.queue=Object(n.e)(this,"queue")}async componentDidLoad(){this.debug("componentDidLoad"),this.updateWidth(),await this.indexTabs(),this.slot=this.el.shadowRoot.querySelector("slot"),this.slot.addEventListener("slotchange",this.onSlotChange.bind(this))}async onSlotChange(){this.debug("onSlotChange",this.tabs.length),this.updateWidth(),this.indexTabs()}async componentDidRender(){this.updateWidth()}async reindexTabs(){this.updateWidth(),await this.indexTabs()}moveContainerByIndex(t,e){const i=this.indexToPosition(t);return 0===i&&t>0?Promise.resolve():this.moveContainer(i,e)}moveContainer(t,e){return e?Object(s.g)(this.el,t,0,this.config.nativeSmoothScroll,this.config.transitionDuration):this.el.scroll(t,0),Promise.resolve()}async setActiveTabIndex(t,e=!0,i=!0){if(this.debug("setActiveTabIndex",t),this._activeTabIndex===t){if(!this.autoScrollTop)return;this.scrollToTop()}e&&this.moveContainerByIndex(t,i),this.updateActiveTabIndex(t,!1)}async scrollToTop(){if(void 0===this._activeTabIndex||void 0===this.tabs)return void this.debug("scrollToTop","activeTabIndex or tabs was undefined",this._activeTabIndex,this.tabs);const t=this.tabs[this._activeTabIndex];if(!t)return void this.debug("Current active tab was undefined in scrollToTop");const e=await t.getRootScrollableEl();e?Object(s.g)(e,0,0,this.config.nativeSmoothScroll,this.config.transitionDuration):this.debug("scrollToTop","couldnt find a scrollable element")}updateActiveTabIndex(t,e=!0){this.debug("updateActiveTabIndex",t,e,this._activeTabIndex),this._activeTabIndex=t,e&&this.activeTabIndexChange.emit(this._activeTabIndex)}updateSelectedTabIndex(t){t!==this._selectedTabIndex&&(this._selectedTabIndex=t,this.selectedTabIndexChange.emit(this._selectedTabIndex))}async onTouchStart(t){if(!this.swipeEnabled)return;if(this.config.avoidElements){let e=!1,i=t.target;if(i)do{if("function"==typeof i.getAttribute&&i.getAttribute("avoid-super-tabs"))return;i=i.parentElement}while(i&&!e)}const e=Object(s.f)(t);this.updateWidth(),e.x<this.leftThreshold||e.x>this.width-this.rightThreshold||(this.config.shortSwipeDuration>0&&(this.initialTimestamp=Object(s.b)()),this.initialCoords=e,this.lastPosX=e.x)}async onClick(t){this.isDragging&&(t.stopImmediatePropagation(),t.preventDefault())}async onTouchMove(t){if(!this.swipeEnabled||!this.initialCoords||"number"!=typeof this.lastPosX)return;const e=Object(s.f)(t);if(!this.isDragging){if(!Object(s.c)(e,this.initialCoords,this.config))return void(Math.abs(e.y-this.initialCoords.y)>100&&(this.initialCoords=void 0,this.lastPosX=void 0));this.isDragging=!0}this.config.allowElementScroll||t.stopImmediatePropagation();const i=this.lastPosX-e.x;if(0===i)return;const n=Math.max(0,Math.min(this.scrollWidth-this.width,this.el.scrollLeft+i));if(Math.floor(n)===Math.floor(this.el.scrollLeft))return;const o=Math.round(100*this.positionToIndex(n))/100;this.updateSelectedTabIndex(o),this.lastPosX=e.x,this.el.scroll(n,0)}async onTouchEnd(t){if(!this.swipeEnabled||!this.isDragging)return;const e=Object(s.f)(t),i=Object(s.b)()-this.initialTimestamp,n=this.config.shortSwipeDuration>0&&i<=this.config.shortSwipeDuration,o=e.x-this.initialCoords.x;let a=this.calcSelectedTab();const h=Math.round(a);n&&h===this._activeTabIndex&&(a+=o>0?-1:1),a=this.normalizeSelectedTab(a),this.updateActiveTabIndex(a),this.moveContainerByIndex(a,!0),this.isDragging=!1,this.initialCoords=void 0,this.lastPosX=void 0}updateWidth(){const t=this.el.getBoundingClientRect();this.width=Math.round(1e4*t.width)/1e4}async indexTabs(){if(0===this.width)return void requestAnimationFrame(()=>{this.updateWidth(),this.indexTabs()});const t=Array.from(this.el.querySelectorAll("super-tab"));if(this.scrollWidth=this.width*t.length,this.debug("indexTab",this.scrollWidth,this.width),await Promise.all(t.map(t=>t.componentOnReady())),this.tabs=t,this.ready&&"number"==typeof this._activeTabIndex&&this.moveContainerByIndex(this._activeTabIndex,!0),this.config)switch(this.config.sideMenu){case"both":this.rightThreshold=this.leftThreshold=this.config.sideMenuThreshold||0;break;case"left":this.leftThreshold=this.config.sideMenuThreshold||0;break;case"right":this.rightThreshold=this.config.sideMenuThreshold||0}void 0!==this._activeTabIndex&&this.moveContainerByIndex(this._activeTabIndex,!1).then(()=>{this.ready=!0})}calcSelectedTab(){const t=Math.max(0,Math.min(this.scrollWidth-this.width,this.el.scrollLeft));return this.positionToIndex(t)}positionToIndex(t){return t/this.width}indexToPosition(t){return Math.round(t*this.width*1e4)/1e4}normalizeSelectedTab(t){const e=Math.max(0,Math.min(this.scrollWidth-this.width,this.indexToPosition(t)));return Math.round(e/this.width)}debug(...t){Object(s.d)(this.config,"container",t)}render(){return Object(n.g)("slot",null)}get el(){return Object(n.f)(this)}}h.style=":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--super-tab-width, 100vw);height:var(--super-tab-height, 100%);overflow:hidden;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-ms-touch-action:pan-y;touch-action:pan-y;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}"}}]);