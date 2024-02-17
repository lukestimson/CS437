var bt=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var ne=bt(_t=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,X=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),G=new WeakMap;let dt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&G.set(e,t))}return t}toString(){return this.cssText}};const mt=i=>new dt(typeof i=="string"?i:i+"",void 0,V),K=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((n,s,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new dt(e,i,V)},yt=(i,t)=>{if(X)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),s=D.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}},Q=X?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return mt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vt,defineProperty:At,getOwnPropertyDescriptor:wt,getOwnPropertyNames:xt,getOwnPropertySymbols:St,getPrototypeOf:Et}=Object,z=globalThis,tt=z.trustedTypes,Pt=tt?tt.emptyScript:"",kt=z.reactiveElementPolyfillSupport,U=(i,t)=>i,R={toAttribute(i,t){switch(t){case Boolean:i=i?Pt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Z=(i,t)=>!vt(i,t),et={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,e);s!==void 0&&At(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){const{get:s,set:r}=wt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s?.call(this)},set(o){const c=s?.call(this);r.call(this,o),this.requestUpdate(t,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,n=[...xt(e),...St(e)];for(const s of n)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,s]of e)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const s=this._$Eu(e,n);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:R).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=n.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:R;this._$Em=s,this[s]=o.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??Z)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,r]of n)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[U("elementProperties")]=new Map,S[U("finalized")]=new Map,kt?.({ReactiveElement:S}),(z.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,L=J.trustedTypes,nt=L?L.createPolicy("lit-html",{createHTML:i=>i}):void 0,pt="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+_,Ot=`<${ut}>`,A=document,j=()=>A.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",ft=Array.isArray,Ct=i=>ft(i)||typeof i?.[Symbol.iterator]=="function",I=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,m=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,ot=/"/g,gt=/^(?:script|style|textarea|title)$/i,Ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),T=Ut(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),at=new WeakMap,y=A.createTreeWalker(A,129);function $t(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(t):t}const Tt=(i,t)=>{const e=i.length-1,n=[];let s,r=t===2?"<svg>":"",o=C;for(let c=0;c<e;c++){const a=i[c];let d,h,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===C?h[1]==="!--"?o=st:h[1]!==void 0?o=it:h[2]!==void 0?(gt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=m):h[3]!==void 0&&(o=m):o===m?h[0]===">"?(o=s??C,l=-1):h[1]===void 0?l=-2:(l=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?m:h[3]==='"'?ot:rt):o===ot||o===rt?o=m:o===st||o===it?o=C:(o=m,s=void 0);const f=o===m&&i[c+1].startsWith("/>")?" ":"";r+=o===C?a+Ot:l>=0?(n.push(d),a.slice(0,l)+pt+a.slice(l)+_+f):a+_+(l===-2?c:f)}return[$t(i,r+(i[e]||"<?>")+(t===2?"</svg>":"")),n]};class M{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let r=0,o=0;const c=t.length-1,a=this.parts,[d,h]=Tt(t,e);if(this.el=M.createElement(d,n),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=y.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(pt)){const u=h[o++],f=s.getAttribute(l).split(_),g=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?Nt:g[1]==="?"?Mt:g[1]==="@"?Ht:B}),s.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(gt.test(s.tagName)){const l=s.textContent.split(_),u=l.length-1;if(u>0){s.textContent=L?L.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],j()),y.nextNode(),a.push({type:2,index:++r});s.append(l[u],j())}}}else if(s.nodeType===8)if(s.data===ut)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:r}),l+=_.length-1}r++}}static createElement(t,e){const n=A.createElement("template");return n.innerHTML=t,n}}function P(i,t,e=i,n){if(t===E)return t;let s=n!==void 0?e._$Co?.[n]:e._$Cl;const r=N(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=s:e._$Cl=s),s!==void 0&&(t=P(i,s._$AS(i,t.values),s,n)),t}class jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,s=(t?.creationScope??A).importNode(e,!0);y.currentNode=s;let r=y.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new H(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Dt(r,this,t)),this._$AV.push(d),a=n[++c]}o!==a?.index&&(r=y.nextNode(),o++)}return y.currentNode=A,s}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=M.createElement($t(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(e);else{const r=new jt(s,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new M(t)),e}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const r of t)s===e.length?e.push(n=new H(this.S(j()),this.S(j()),this,this.options)):n=e[s],n._$AI(r),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}_$AI(t,e=this,n,s){const r=this.strings;let o=!1;if(r===void 0)t=P(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const c=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=P(this,c[n+a],e,a),d===E&&(d=this._$AH[a]),o||=!N(d)||d!==this._$AH[a],d===p?t=p:t!==p&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Mt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Ht extends B{constructor(t,e,n,s,r){super(t,e,n,s,r),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??p)===E)return;const n=this._$AH,s=t===p&&n!==p||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==p&&(n===p||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Rt=J.litHtmlPolyfillSupport;Rt?.(M,H),(J.litHtmlVersions??=[]).push("3.1.2");const Lt=(i,t,e)=>{const n=e?.renderBefore??t;let s=n._$litPart$;if(s===void 0){const r=e?.renderBefore??null;n._$litPart$=s=new H(t.insertBefore(j(),r),r,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}v._$litElement$=!0,v.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:v});const zt=globalThis.litElementPolyfillSupport;zt?.({LitElement:v});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:Z},It=(i=Bt,t,e)=>{const{kind:n,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,i),n==="accessor"){const{name:o}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.P(o,void 0,i),c}}}if(n==="setter"){const{name:o}=e;return function(c){const a=this[o];t.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+n)};function k(i){return(t,e)=>typeof e=="object"?It(i,t,e):((n,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(s,r):void 0})(i,t,e)}var Ft=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,w=(i,t,e,n)=>{for(var s=n>1?void 0:n?qt(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Ft(t,e,s),s};let $=class extends v{constructor(){super(...arguments),this.title="",this.cost="",this.type="",this.season="",this.activities="",this.imageUrl=""}render(){return T`
      <img src="${this.imageUrl}" alt="${this.title}">
      <div class="card-header">
        <h2>${this.title}</h2>
      </div>
      <div class="card-body">
        <div class="card-info">
          <svg class="icon"><use href="/icons/money.svg"></use></svg>
          <span>${this.cost}</span>
        </div>
        <div class="card-info">
          <svg class="icon"><use href="/icons/destination.svg"></use></svg>
          <span>${this.type}</span>
        </div>
        <div class="card-info">
          <svg class="icon"><use href="/icons/season.svg"></use></svg>
          <span>${this.season}</span>
        </div>
        <div class="card-info">
          <svg class="icon"><use href="/icons/activities.svg"></use></svg>
          <span>${this.activities}</span>
        </div>
      </div>
    `}};$.styles=K`
        :host {
            display: block;
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            background-color: var(--background-color);
            color: var(--text-color);
        }
        :host(:hover) {
            transform: translateY(-5px);
        }
        .card-header {
            padding: 20px;
            background-color: var(--header-bg-color);
            color: var(--header-text-color);
        }
        .card-body {
            padding: 20px;
        }
        h2 {
            margin: 0;
        }
        .card-info {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        .icon {
            fill: var(--text-color);
            margin-right: 10px;
        }
        img {
            width: 100%;
            height: auto;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    `;w([k({type:String})],$.prototype,"title",2);w([k({type:String})],$.prototype,"cost",2);w([k({type:String})],$.prototype,"type",2);w([k({type:String})],$.prototype,"season",2);w([k({type:String})],$.prototype,"activities",2);w([k({type:String})],$.prototype,"imageUrl",2);$=w([Y("destination-card")],$);var Wt=function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}(),lt=function(i,t){return Object.defineProperty?Object.defineProperty(i,"raw",{value:t}):i.raw=t,i},Xt=function(i,t,e,n,s,r){function o(O){if(O!==void 0&&typeof O!="function")throw new TypeError("Function expected");return O}for(var c=n.kind,a=c==="getter"?"get":c==="setter"?"set":"value",d=!t&&i?n.static?i:i.prototype:null,h=t||(d?Object.getOwnPropertyDescriptor(d,n.name):{}),l,u=!1,f=e.length-1;f>=0;f--){var g={};for(var x in n)g[x]=x==="access"?{}:n[x];for(var x in n.access)g.access[x]=n.access[x];g.addInitializer=function(O){if(u)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(O||null))};var b=(0,e[f])(c==="accessor"?{get:h.get,set:h.set}:h[a],g);if(c==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(l=o(b.get))&&(h.get=l),(l=o(b.set))&&(h.set=l),(l=o(b.init))&&s.unshift(l)}else(l=o(b))&&(c==="field"?s.unshift(l):h[a]=l)}d&&Object.defineProperty(d,n.name,h),u=!0},Vt=function(i,t,e){for(var n=arguments.length>2,s=0;s<t.length;s++)e=n?t[s].call(i,e):t[s].call(i);return n?e:void 0},Kt=function(i,t,e){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:e?"".concat(e," ",t):t})};Object.defineProperty(_t,"__esModule",{value:!0});var F=require("lit"),Zt=require("lit/decorators.js");(function(){var i=[(0,Zt.customElement)("user-panel")],t,e=[],n,s=F.LitElement;return n=function(r){Wt(o,r);function o(){return r!==null&&r.apply(this,arguments)||this}return o.prototype.render=function(){return(0,F.html)(ct||(ct=lt([`
      <a href="/app/profile">Profile</a>
      <a href="http://www.stimsonphoto.com" target="_blank">stimsonphoto.com</a>
      <label class="toggle-switch">
        <input type="checkbox" @change="`,`">
        <span class="slider round"></span>
      </label>
    `],[`
      <a href="/app/profile">Profile</a>
      <a href="http://www.stimsonphoto.com" target="_blank">stimsonphoto.com</a>
      <label class="toggle-switch">
        <input type="checkbox" @change="`,`">
        <span class="slider round"></span>
      </label>
    `])),this.toggleDarkMode)},o.prototype.toggleDarkMode=function(c){var a=c.target.checked;document.body.classList.toggle("light-mode",a)},o}(s),Kt(n,"UserPanel"),function(){var r,o=typeof Symbol=="function"&&Symbol.metadata?Object.create((r=s[Symbol.metadata])!==null&&r!==void 0?r:null):void 0;Xt(null,t={value:n},i,{kind:"class",name:n.name,metadata:o},null,e),n=t.value,o&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})}(),n.styles=(0,F.css)(ht||(ht=lt([`
    :host {
      display: block;
      padding: 10px;
      background: var(--panel-background-color, black);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      min-width: 200px; /* Ensure it's not too narrow */
    }
    a {
      display: block;
      color: var(--text-color, black);
      text-decoration: none;
      padding: 8px 0; /* Add padding for better clickability */
      text-align: center; /* Center align links */
    }
    a:hover {
      background-color: var(--hover-background-color, #f0f0f0); /* Optional: change on hover */
    }

    /* Adding styles for Toggle functionality */

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    /* Additional styles as needed */
    `],[`
    :host {
      display: block;
      padding: 10px;
      background: var(--panel-background-color, black);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      min-width: 200px; /* Ensure it's not too narrow */
    }
    a {
      display: block;
      color: var(--text-color, black);
      text-decoration: none;
      padding: 8px 0; /* Add padding for better clickability */
      text-align: center; /* Center align links */
    }
    a:hover {
      background-color: var(--hover-background-color, #f0f0f0); /* Optional: change on hover */
    }

    /* Adding styles for Toggle functionality */

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    /* Additional styles as needed */
    `]))),function(){Vt(n,e)}(),n})();var ct,ht,Jt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Gt=(i,t,e,n)=>{for(var s=n>1?void 0:n?Yt(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Jt(t,e,s),s};let q=class extends v{constructor(){super(...arguments),this.open=!1}render(){return T`
      <div class="profile-icon" @click="${this.toggleDropdown}"></div>
      ${this.open?T`<user-panel class="menu"></user-panel>`:T``} 
    `}toggleDropdown(){this.open=!this.open,this.setAttribute("open",this.open.toString()),this.requestUpdate()}};q.styles=K`
    :host {
      display: block;
      position: relative;
      cursor: pointer;
    }
    .profile-icon {     /* This style is referenced from index.html within the drop-down comp */
      width: 50px; /* Adjust size as needed */
      height: 50px;
      border-radius: 50%;
      background-image: url('/images/profilePhoto.jpg');
      background-size: cover;
      border: 3px solid white; /* Optional: style as needed */
    }
    .menu {
      display: none;
      position: absolute;
      top: 120%;
      right: 0; /* Aligns the menu to the right edge of the profile icon */
      border: 3px solid;
      background: var(--header-bg-color);
      z-index: 100; /* Ensure dropdown is above other content */
    }
    :host([open]) .menu {           /* When open is set, the drop down is opened */
      display: block;
    }
  `;q=Gt([Y("drop-down")],q);var Qt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ee=(i,t,e,n)=>{for(var s=n>1?void 0:n?te(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Qt(t,e,s),s};let W=class extends v{render(){return T`
      <a href="/app/profile">Profile</a>
      <a href="http://www.stimsonphoto.com" target="_blank">stimsonphoto.com</a>
      <label class="toggle-switch">
        <input type="checkbox" @change="${this.toggleDarkMode}">
        <span class="slider round"></span>
      </label>
    `}toggleDarkMode(i){const t=i.target.checked;document.body.classList.toggle("light-mode",t)}};W.styles=K`
    :host {
      display: block;
      padding: 10px;
      background: var(--panel-background-color, black);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      min-width: 200px; /* Ensure it's not too narrow */
    }
    a {
      display: block;
      color: var(--text-color, black);
      text-decoration: none;
      padding: 8px 0; /* Add padding for better clickability */
      text-align: center; /* Center align links */
    }
    a:hover {
      background-color: var(--hover-background-color, #f0f0f0); /* Optional: change on hover */
    }

    /* Adding styles for Toggle functionality */

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    /* Additional styles as needed */
    `;W=ee([Y("user-panel")],W)});export default ne();
