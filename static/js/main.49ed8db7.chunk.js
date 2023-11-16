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
return await PSPDFKit.load({licenseKey:'skhUNdHevdfv3ocq8Y13s-tlpl-FkkxNnjpYxLQcJNnflz3zS7ostYvNw26Fevam2VRgvpfeSxvY5GwDZIsw4fxt3OhMhE3KSCmsJt_NNAC6Smdpt_HT7bB34N5ZNFwqO2gr5jHfwPRKUA24KWLgusRIZADLA1jLL0GNuZnPfPcu9tpKFZujBQAP9nlP6pVhSYOQ1OQQHQuM6pvnSTUT8xOsekn-OWAU-Cq8buUUtEFixXf_7bxymB9pKDPfltXZIfoxMGnVbC9Ccjo6B-mrbe83i5xG2yxAKux5hKv9O64J2wE9CGJOjWEn4SlmrUwVceOeAQr5ZQga-_YaRryuqP-K2tiliCzZlVLYMY9mCFE7Mo-nATvBW3uC87kyDnk1lyaCOU9l3tOAp4UnPb96eMwygMlspMSbwjUwHFh9ezF_m4THlVK3O2z9qlLEvORaW-8JYeqxJt9wqDKzNiXeIdVUdYrCMhqFm1LvbjjwRQ6pYbklcVHAMJyT4AlZU7i3X9hdQYUmWQkdmgrifqSi8bdanI7yGyMB7ny4EAYGTOJPgI7aVhFOZvMklw_putUWdActQvw6XdRFUufKTYo6--cXrjLSRk1Mr7NPrKqMIm1MqSPub9rWG5NR3apDbo0E2bMKYQ408eoKevfMWhc6mWUKT9ONiqMUTQ7_FiJuBtA=',// Container where PSPDFKit should be mounted.
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
//# sourceMappingURL=main.49ed8db7.chunk.js.map