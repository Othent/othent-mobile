!function(e){var n;"function"==typeof e&&(n=e,e=null),function(n,t,a,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[o]&&i[o],c=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(e,t){if(!c[e]){if(!n[e]){var a="function"==typeof i[o]&&i[o];if(!t&&a)return a(e,!0);if(s)return s(e,!0);if(l&&"string"==typeof e)return l(e);var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}f.resolve=function(t){var a=n[e][1][t];return null!=a?a:t},f.cache={};var d=c[e]=new u.Module(e);n[e][0].call(d.exports,f,d,d.exports,this)}return c[e].exports;function f(e){var n=f.resolve(e);return!1===n?{}:u(n)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=n,u.cache=c,u.parent=s,u.register=function(e,t){n[e]=[function(e,n){n.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var d=0;d<t.length;d++)u(t[d]);if(a){var f=u(a);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof e&&e.amd?e(function(){return f}):r&&(this[r]=f)}}({aBxl4:[function(e,n,t){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t),a.export(t,"config",()=>r);var o=e("nanoid");let r={matches:["<all_urls>"],exclude_matches:["*://*.google.com/*","*://*.youtube.com/*","*://*.apple.com/*","*://*.icloud.com/*","*://*.cdn-apple.com/*","*://*.icloud-content.com/*","*://*.icloud-content.com.cn/*","*://*.apple-mapkit.com/*","*://*.twitter.com/*","*://*.facebook.com/*","*://*.instagram.com/*","*://*.github.com/*"],run_at:"document_start",world:"MAIN"};function i(e,n){return new Promise(t=>{let a=(0,o.nanoid)(),r=n=>{let{data:o}=n;o.functionName===e&&"inject-handler"==o.origin&&o.messageId===a&&(window.removeEventListener("message",r),t(o.data))};window.addEventListener("message",r),window.postMessage({functionName:e,params:n,messageId:a,origin:"inject",ext:"othentExtension"},window.location.origin)})}function s(){return{getAPIID:async()=>await i("getAPIID"),queryWalletAddressTxns:async e=>await i("queryWalletAddressTxns",e),ping:async()=>await i("ping"),logIn:async()=>await i("logIn"),logOut:async()=>await i("logOut"),userDetails:async()=>await i("userDetails"),readContract:async()=>await i("readContract"),signTransactionWarp:async e=>await i("signTransactionWarp",e),sendTransactionWarp:async e=>await i("sendTransactionWarp",e),signTransactionArweave:async e=>await i("signTransactionArweave",e),sendTransactionArweave:async e=>await i("sendTransactionArweave",e),signTransactionBundlr:async e=>await i("signTransactionBundlr",e),sendTransactionBundlr:async e=>await i("sendTransactionBundlr",e),initializeJWK:async e=>await i("initializeJWK",e),JWKBackupTxn:async e=>await i("JWKBackupTxn",e),readCustomContract:async e=>await i("readCustomContract",e),verifyArweaveData:async e=>await i("verifyArweaveData",e),verifyBundlrData:async e=>await i("verifyBundlrData",e)}}async function c(e){let{data:n}=e;n.message&&("OthentInstalled"===n.message&&(window.othentInstalled=!0),window.removeEventListener("message",c))}async function l(e){let{data:n}=e;n.message&&("OthentLoaded"===n.message&&(window.othentLoaded=!0,window.othent=s()),window.removeEventListener("message",l))}window.initOthent=async e=>{let n=await i("initOthent",e||null);return window.othentLoaded=n,window.othent=s(),n},window.addEventListener("message",c),window.addEventListener("message",l)},{nanoid:"cImgp","@parcel/transformer-js/src/esmodule-helpers.js":"4S1uD"}],cImgp:[function(e,n,t){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t),a.export(t,"urlAlphabet",()=>o.urlAlphabet),a.export(t,"random",()=>r),a.export(t,"customRandom",()=>i),a.export(t,"customAlphabet",()=>s),a.export(t,"nanoid",()=>c);var o=e("./url-alphabet/index.js");let r=e=>crypto.getRandomValues(new Uint8Array(e)),i=(e,n,t)=>{let a=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*a*n/e.length);return (r=n)=>{let i="";for(;;){let n=t(o),s=o;for(;s--;)if((i+=e[n[s]&a]||"").length===r)return i}}},s=(e,n=21)=>i(e,n,r),c=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,n)=>((n&=63)<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"")},{"./url-alphabet/index.js":!1,"@parcel/transformer-js/src/esmodule-helpers.js":"4S1uD"}],"4S1uD":[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})}),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}]},["aBxl4"],"aBxl4","parcelRequire3896"),globalThis.define=n}(globalThis.define);