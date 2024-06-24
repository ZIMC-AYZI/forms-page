import{Ea as g,Fa as L,Ya as d,Z as S,aa as o,ba as b,cb as p,cc as R,da as f,dc as O,fa as a,fb as B,ga as c,jc as m,ka as v,ma as _,na as D,nc as F,oa as I,ua as M}from "./chunk-Y3JPPDWQ.js";var x=null;function C(){return x}function Ve(i){x??=i}var T=class{};var U=new f(""),z=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:()=>c(j),providedIn:"platform"});let i=t;return i})();var j=(()=>{let t=class t extends z{constructor(){super(),this._doc=c(U),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let n=C().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=C().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e, n, r){this._history.pushState(e,n,r)}replaceState(e, n, r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function V(i, t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function P(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function u(i){return i&&i[0]!=="?"?"?"+i:i}var A=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:()=>c(H),providedIn:"root"});let i=t;return i})(),G=new f(""),H=(()=>{let t=class t extends A{constructor(e, n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(U).location?.origin??""}ngOnDestroy(){for(; this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return V(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+u(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e, n, r, l){let h=this.prepareExternalUrl(r+u(l));this._platformLocation.pushState(e,n,h)}replaceState(e, n, r, l){let h=this.prepareExternalUrl(r+u(l));this._platformLocation.replaceState(e,n,h)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(a(z),a(G,8))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Y=(()=>{let t=class t{constructor(e){this._subject=new L,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=K(P(k(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e, n=""){return this.path()==this.normalize(e+u(n))}normalize(e){return t.stripTrailingSlash(Z(this._basePath,k(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e, n="", r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+u(n)),r)}replaceState(e, n="", r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+u(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="", n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e, n, r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=u,t.joinWithSlash=V,t.stripTrailingSlash=P,t.\u0275fac=function(n){return new(n||t)(a(A))},t.\u0275prov=o({token:t,factory:()=>W(),providedIn:"root"});let i=t;return i})();function W(){return new Y(a(A))}function Z(i, t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function k(i){return i.replace(/\/index.html$/,"")}function K(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function je(i, t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var E=/\s+/,N=[],Ge=(()=>{let t=class t{constructor(e, n){this._ngEl=e,this._renderer=n,this.initialClasses=N,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(E):N}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(E):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e, n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e, n){e=e.trim(),e.length>0&&e.split(E).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(d(g),d(p))},t.\u0275dir=D({type:t,selectors:[["","ngClass",""]],inputs:{klass:[v.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var He=(()=>{let t=class t{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e, n, r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e, n, r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}};t.\u0275fac=function(n){return new(n||t)(d(B))},t.\u0275dir=D({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[M]});let i=t;return i})();function q(i, t){return new S(2100,!1)}var y=class{createSubscription(t, s){return F(()=>t.subscribe({next:s,error: e=>{throw e}}))}dispose(t){F(()=>t.unsubscribe())}},w=class{createSubscription(t, s){return t.then(s, e=>{throw e})}dispose(t){}},X=new w,Q=new y,Ye=(()=>{let t=class t{constructor(e){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e, n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(R(e))return X;if(O(e))return Q;throw q(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e, n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};t.\u0275fac=function(n){return new(n||t)(d(m,16))},t.\u0275pipe=I({name:"async",type:t,pure:!1,standalone:!0});let i=t;return i})();var We=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=_({type:t}),t.\u0275inj=b({});let i=t;return i})(),J="browser",ee="server";function Ze(i){return i===J}function Ke(i){return i===ee}var $=class{};export{C as a,Ve as b,T as c,U as d,Y as e,je as f,Ge as g,He as h,Ye as i,We as j,J as k,Ze as l,Ke as m,$ as n};
