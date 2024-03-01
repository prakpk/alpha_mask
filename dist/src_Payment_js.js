/*! For license information please see src_Payment_js.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_cra=self.webpackChunkreact_cra||[]).push([["src_Payment_js"],{"./node_modules/@juspay-tech/react-hyper-js/index.js":(e,n,t)=>{t.r(n),t.d(n,{CardCVCElement:()=>J,CardCVCWidget:()=>K,CardElement:()=>H,CardExpiryElement:()=>z,CardExpiryWidget:()=>G,CardNumberElement:()=>q,CardNumberWidget:()=>L,CardWidget:()=>W,Elements:()=>D,HyperElements:()=>U,PaymentElement:()=>V,UnifiedCheckout:()=>M,useElements:()=>B,useHyper:()=>R,useStripe:()=>j,useWidgets:()=>T});var r=t("./node_modules/react/index.js");function o(e,n,t){for(var r=new Array(t),o=0,c=n;o<t;)r[o]=e[c],o=o+1|0,c=c+1|0;return r}function c(e,n){for(;;){var t=n,r=e,u=r.length,a=0===u?1:u,s=a-t.length|0;if(0===s)return r.apply(null,t);if(s>=0)return function(e,n){return function(t){return c(e,n.concat([t]))}}(r,t);n=o(t,a,0|-s),e=r.apply(null,o(t,0,a))}}function u(e,n){var t=e.length;if(1===t)return e(n);switch(t){case 1:return e(n);case 2:return function(t){return e(n,t)};case 3:return function(t,r){return e(n,t,r)};case 4:return function(t,r,o){return e(n,t,r,o)};case 5:return function(t,r,o,c){return e(n,t,r,o,c)};case 6:return function(t,r,o,c,u){return e(n,t,r,o,c,u)};case 7:return function(t,r,o,c,u,a){return e(n,t,r,o,c,u,a)};default:return c(e,[n])}}function a(e){return 1===e.length?e:function(n){return u(e,n)}}function s(e,n,t){var r=e.length;if(2===r)return e(n,t);switch(r){case 1:return c(e(n),[t]);case 2:return e(n,t);case 3:return function(r){return e(n,t,r)};case 4:return function(r,o){return e(n,t,r,o)};case 5:return function(r,o,c){return e(n,t,r,o,c)};case 6:return function(r,o,c,u){return e(n,t,r,o,c,u)};case 7:return function(r,o,c,u,a){return e(n,t,r,o,c,u,a)};default:return c(e,[n,t])}}var i={on:function(e,n){},collapse:function(e){},blur:function(e){},update:function(e){},destroy:function(e){},unmount:function(e){},mount:function(e){},focus:function(e){},clear:function(e){}};function l(e){return void 0===e?{BS_PRIVATE_NESTED_SOME_NONE:0}:null!==e&&void 0!==e.BS_PRIVATE_NESTED_SOME_NONE?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function d(e){if(null===e||void 0===e.BS_PRIVATE_NESTED_SOME_NONE)return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;return 0!==n?{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}:void 0}function m(e,n){if(n in e)return l(e[n])}function f(e){if("string"==typeof e)return e}function p(e){if("object"==typeof e&&!Array.isArray(e)&&null!==e)return l(e)}function y(e){if(Array.isArray(e))return e}function E(e,n){return function(e,n){if(void 0!==e)return n(d(e))}(e,a(n))}function v(e,n){return void 0!==e?d(e):n}var C={clientSecret:"",confirmPayment:function(e){return Promise.resolve({})},confirmCardPayment:function(e,n,t){return Promise.resolve({})},retrievePaymentIntent:function(e){return Promise.resolve({})},paymentRequest:function(e){return e}},h=r.createContext(C);var S={makeProps:function(e,n,t){return{value:e,children:n}},make:h.Provider};function g(e,n,t){return v(E(m(e,n),f),t)}function P(e){var n=v(p(e),{});return{fonts:v(E(m(n,"fonts"),y),[]),locale:g(n,"locale",""),clientSecret:g(n,"clientSecret",""),appearance:v(E(m(n,"appearance"),p),{}),loader:g(n,"loader","auto")}}var _={options:{fonts:[],locale:"",clientSecret:"",appearance:{},loader:""},update:function(e){},getElement:function(e){},fetchUpdates:function(e){return new Promise((function(e,n){setTimeout((function(n){e({})}),1e3)}))},create:function(e,n){return i}},k=r.createContext(_);var x={makeProps:function(e,n,t){return{value:e,children:n}},make:k.Provider};function N(e,n){return n.then(a(e))}function R(e){return r.useContext(h)}function j(e){return console.warn("useStripe() is deprecated. Use useHyper() instead"),r.useContext(h)}function T(e){return r.useContext(k)}function B(e){return console.warn("useElements() is deprecated. Use useWidgets() instead"),r.useContext(k)}function A(e){var n=e.id,t=e.options,o=e.onChange,c=e.onReady,a=e.componentType,i=e.onFocus,l=e.onBlur,d=e.onClick,m=void 0!==n?n:"payment-Element",f=r.useContext(h),p=r.useContext(k),y=r.useRef(null),E=s(p.create,a,t);return r.useEffect((function(){u(s(p.create,a,t).mount,"#orca-elements-payment-element-"+m)}),[y,p]),r.useEffect((function(){s(E.on,"ready",c),s(E.on,"focus",i),s(E.on,"blur",l),s(E.on,"clickTriggered",d),s(E.on,"change",o)}),[p,f]),r.createElement("div",{ref:y,id:"orca-elements-payment-element-"+m})}function F(e){var n=e.id,t=e.options,o=e.onChange,c=e.onReady,u=e.onFocus,a=e.onBlur,s=e.onClick;return r.createElement(A,{id:n,options:t,onChange:o,onReady:c,componentType:"payment",onFocus:u,onBlur:a,onClick:s})}function O(e){var n=e.id,t=e.options,o=e.onChange,c=e.onReady,u=e.onFocus,a=e.onBlur,s=e.onClick;return r.createElement(A,{id:n,options:t,onChange:o,onReady:c,componentType:"card",onFocus:u,onBlur:a,onClick:s})}function b(e){var n=e.id,t=e.options,o=e.onChange,c=e.onReady,u=e.onFocus,a=e.onBlur,s=e.onClick;return r.createElement(A,{id:n,options:t,onChange:o,onReady:c,componentType:"cardNumber",onFocus:u,onBlur:a,onClick:s})}function I(e){var n=e.id,t=e.options,o=e.onChange,c=e.onReady,u=e.onFocus,a=e.onBlur,s=e.onClick;return r.createElement(A,{id:n,options:t,onChange:o,onReady:c,componentType:"cardCvc",onFocus:u,onBlur:a,onClick:s})}function w(e){var n=e.id,t=e.options,o=e.onChange,c=e.onReady,u=e.onFocus,a=e.onBlur,s=e.onClick;return r.createElement(A,{id:n,options:t,onChange:o,onReady:c,componentType:"cardExpiry",onFocus:u,onBlur:a,onClick:s})}var D=function(e){var n=e.children,t=e.stripe,o=e.options,c=P(o),a=r.useState((function(){return C})),s=a[1],i=r.useState((function(){return _})),l=i[1];return r.useEffect((function(){N((function(e){var n=u(e.elements,o),t=n.update,r=n.getElement,a=n.fetchUpdates,i=n.create,d={options:c,update:t,getElement:r,fetchUpdates:a,create:i},m=(c.clientSecret,e.confirmPayment),f=e.confirmCardPayment,p=e.retrievePaymentIntent,y=e.paymentRequest,E={clientSecret:c.clientSecret,confirmPayment:m,confirmCardPayment:f,retrievePaymentIntent:p,paymentRequest:y};return u(s,(function(e){return E})),u(l,(function(e){return d})),Promise.resolve(E)}),t)}),[]),r.createElement(S.make,S.makeProps(a[0],r.createElement(x.make,x.makeProps(i[0],n,void 0)),void 0))},U=function(e){var n=e.children,t=e.hyper,o=e.options,c=P(o),a=r.useState((function(){return C})),s=a[1],i=r.useState((function(){return _})),l=i[1];return r.useEffect((function(){N((function(e){var n=u(e.elements,o),t=n.update,r=n.getElement,a=n.fetchUpdates,i=n.create,d={options:c,update:t,getElement:r,fetchUpdates:a,create:i},m=(c.clientSecret,e.confirmPayment),f=e.confirmCardPayment,p=e.retrievePaymentIntent,y=e.paymentRequest,E={clientSecret:c.clientSecret,confirmPayment:m,confirmCardPayment:f,retrievePaymentIntent:p,paymentRequest:y};return u(s,(function(e){return E})),u(l,(function(e){return d})),Promise.resolve(E)}),t)}),[]),r.createElement(S.make,S.makeProps(a[0],r.createElement(x.make,x.makeProps(i[0],n,void 0)),void 0))},V=F,M=F,H=O,W=O,q=b,L=b,z=w,G=w,J=I,K=I},"./src/CheckoutForm.js":(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t("./node_modules/react/index.js"),o=t("./node_modules/@juspay-tech/react-hyper-js/index.js"),c=(t("./src/Cart.js"),t("./node_modules/react-router/dist/index.js")),u=(t("./src/App.css"),t("./src/Completion.js"),t("./node_modules/react-i18next/dist/es/index.js")),a=t("./node_modules/react-redux/dist/react-redux.mjs");t("./src/slices/paymentSlice.js");function s(){const e=(0,o.useHyper)(),n=((0,o.useElements)(),(0,c.useNavigate)()),{t}=((0,a.useDispatch)(),(0,u.useTranslation)());(0,a.useSelector)((e=>e.paymentStatus.isSuccess)),(0,a.useSelector)((e=>e.paymentStatus.message)),(0,a.useSelector)((e=>e.paymentStatus.isProcessing));(0,r.useEffect)((()=>{}),[e,n])}},"./src/Completion.js":(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t("./node_modules/react/index.js"),o=t.n(r),c=t("./node_modules/react-redux/dist/react-redux.mjs"),u=t("./src/slices/paymentSlice.js"),a=(t("./src/index.css"),t("./src/App.css"),t("./public/assets/Successsuccess.svg"));const s=function(){const e=(0,c.useDispatch)(),n=(0,c.useSelector)((e=>e.payment.transactionMessage));return o().createElement(o().Fragment,null,o().createElement("div",{className:"ConfirmContainer"},o().createElement("div",null,o().createElement("img",{src:a.default,width:"150px",height:"110px",alt:"Success"})),o().createElement("div",{className:"ConfirmText"},"Thanks for your order!"),n&&o().createElement("div",{className:"ConfirmDes"},n),o().createElement("div",null,o().createElement("button",{className:"returnLink",onClick:()=>{e((0,u.resetPayment)())}},"Try Hyperswitch Playground again"))))}},"./src/Payment.js":(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t("./node_modules/react/index.js"),o=t("./node_modules/react-redux/dist/react-redux.mjs"),c=t("./node_modules/@juspay-tech/react-hyper-js/index.js"),u=t("./src/CheckoutForm.js"),a=t("./src/slices/paymentSlice.js");const s=function(){const e=(0,o.useDispatch)(),{clientSecret:n,hyperPromise:t,status:s,error:i}=(0,o.useSelector)((e=>e.payment));return(0,r.useEffect)((()=>{e((0,a.initializePayment)())}),[e]),"loading"===s?React.createElement("div",null,"Loading..."):i?React.createElement("div",null,"Error: ",i):React.createElement("div",{className:"mainContainer"},React.createElement("div",{className:"heading"},React.createElement("h2",null,"Hyperswitch Unified Checkout")),n&&t&&React.createElement(c.HyperElements,{hyper:t,options:{clientSecret:n,appearance:{labels:"floating"}}},React.createElement(u.default,null)))}},"./public/assets/Successsuccess.svg":(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"/public/assets/Successsuccess.svg"}}]);
//# sourceMappingURL=src_Payment_js.js.map