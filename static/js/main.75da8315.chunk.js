(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(2);
var client_default = /*#__PURE__*/__webpack_require__.n(client);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/PdfViewerComponent.js
function PdfViewerComponent(props){const containerRef=Object(react["useRef"])(null);Object(react["useEffect"])(()=>{const container=containerRef.current;// This `useRef` instance will render the PDF.
let PSPDFKit;(async function(){PSPDFKit=await __webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, 14, 7));PSPDFKit.unload(container);// Ensure that there's only one PSPDFKit instance.
return await PSPDFKit.load({licenseKey:'xCedLHtLRWdN1CwAtPQ1xKxKA8tS7EQvx3N6UtWa6_sU5Ktx0uv9oFJMDcS3E1BrTLx71_I54kvVnqxqoY2SiPojrFfsRCcjzJzWCsVlCnrGswj83RsCc6e-6g8fuv0BTMJLeAz0b3_-hi-skAxw-4JFew_jFP0UxHk5bcm7sqcj0cu-LrY6Xn4usygEz_kcc2OfzHXbUxSgDqxVCev8FZLm8LqlrxBjAeCr58ZBLT7kQZ2imalvR51ltX3hPWg0GENm3rxspqjVKkdfEfJT_UvRzgcQWpe_b-jrb9Sfq4oI1F76tTcOtzq7Hwxu6q2I2fGNVN25x3zSdpu7dR_zSsqfsXJoytHqOV1B_3k2ohEt7lIiW8y9AMfvLu9HJe0B--GUpKjiXvubG2Kgi4RRmJbvlPXpM2PoZCU90pycahCFkR2_e99tMy5zv4ePTaJN9BVX1Zf5Z1xlEeD4Sgd-Eh8JM6NcOxiT0vKWo_zMRtsYW0YPfABe7T4UWYCplCWXDXzdYVTLLBfNcrZ624Q1lUZvPL3-7IosFRzwySI1Twb6eXpGamb_h0xRyoLKj5LXLzrlUSbonBMIeePlRDvbnayTljvNEdmfZXLMOPGcizT6Yt3t6RbfMgMosEF6Z9LxyyjJyHDwEgP3tjaJ9xJ0SWHwWwoTQ8maPaIUNlkmBfkhJAr9snbJtJRWdc6z4S2JDT2WUmF4e5exDfSJ6zwFKzzqY-3wyjo2H8T0AQyoyR7kq50ToTcc1XdVRlh-eaki-4-SOzJvrx2s72euCTUyzGDgQoMoOTASZNG5lFtpqVXfoZB6egUSXQPkpK-C-9_Wb1erY7x5bxAFdK8SoSbcFlamOtf1KrQwl04jEXMQpXuUiBCfTtIpJXxZ6pLbhzX5t1vAlABoSTf7EIL4pGTd7uj6lFnocZH79njzu-C5UPYRANSPCBgVnblNXHwJeHa2igbVkEepchF-KVIvnxHgbQT-eOym-t3wtjQuDsQJaVzL8q6K6aqIFf_K5QJbrsNpK15Y_2_Lrow2lqURrKhfVEDdhlS7TOYzvAq9VwJ-llsPno_v5D4cpJBkI4C3_EKTx0NjpxoT8IIOdrdzNKBzveLkyL1bYzLVMybYc0kaUCECk08JfxgY8Rznp_cmhY5HXbyLE_Y23zPtDIxI979evyaCGkCO9WsJ0TSxIPWMux7fLZs1kWpgAzpw_bmd-dj_yHOsj8XyMPmZZpQB5FOmoUl9XA_eEBni7qm6YW7pX6LJV7KfK3UyoGzDsnE4xZANJXDapkFwKsJsp2o-UWei5FQJhbGOcSGIT6Bh1gEpuf35cD3oqftc41uQULKCDLNy-34AzWaY_FVrT_HxzXCruo==',// Container where PSPDFKit should be mounted.
container,// The document to open.
document:props.document,// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
baseUrl:"".concat(window.location.protocol,"//").concat(window.location.host,"/").concat("/pspdfkit-demo","/")});})();return()=>PSPDFKit&&PSPDFKit.unload(container);},[]);// This div element will render the document to the DOM.
return/*#__PURE__*/react_default.a.createElement("div",{ref:containerRef,style:{width:"100%",height:"100vh"}});}
// CONCATENATED MODULE: ./src/App.js
function App(){return/*#__PURE__*/react_default.a.createElement("div",{className:"App"},/*#__PURE__*/react_default.a.createElement("div",{className:"PDF-viewer"},/*#__PURE__*/react_default.a.createElement(PdfViewerComponent,{document:"document.pdf"})));}/* harmony default export */ var src_App = (App);
// CONCATENATED MODULE: ./src/reportWebVitals.js
const reportWebVitals=onPerfEntry=>{if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 15)).then(_ref=>{let{getCLS,getFID,getFCP,getLCP,getTTFB}=_ref;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// CONCATENATED MODULE: ./src/index.js
const root=client_default.a.createRoot(document.getElementById('root'));root.render(/*#__PURE__*/react_default.a.createElement(react_default.a.StrictMode,null,/*#__PURE__*/react_default.a.createElement(src_App,null)));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })

},[[4,1,2]]]);
//# sourceMappingURL=main.75da8315.chunk.js.map