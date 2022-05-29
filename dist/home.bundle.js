"use strict";
(self["webpackChunkcoffee_shop"] = self["webpackChunkcoffee_shop"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _coffeeBeansTransp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffeeBeansTransp.png */ "./src/coffeeBeansTransp.png");


function menuPage() {


    const main = document.querySelector('.main')

    if (main.hasChildNodes()) {
        main.removeChild(main.children[0]);
      }


    const section = document.createElement('section');
    const sectionText = document.createElement('div')
    const sectionTextPara = document.createElement('p')
    const sectionImage = document.createElement('div')

    section.classList.add('section', 'section--home')
    sectionText.classList.add('section--home__text')
    sectionImage.classList.add('section--home__image')

    sectionTextPara.innerHTML = 'Java chicory, black doppio and roast cream mocha turkish strong. Blue mountain doppio black, chicory, sugar medium, single shot a wings blue mountain turkish. Viennese et, cinnamon, turkish lungo qui cappuccino kopi-luwak.'

    const myIcon = new Image();
    myIcon.src = _coffeeBeansTransp_png__WEBPACK_IMPORTED_MODULE_0__;
    
    sectionImage.appendChild(myIcon)
    sectionText.appendChild(sectionTextPara)
    section.appendChild(sectionText)
    section.appendChild(sectionImage)
    main.appendChild(section)




}


/***/ }),

/***/ "./src/coffeeBeansTransp.png":
/*!***********************************!*\
  !*** ./src/coffeeBeansTransp.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4915436dd1d15831dbd0.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0M7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXNob3AvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICcuL2NvZmZlZUJlYW5zVHJhbnNwLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcclxuXHJcbiAgICBpZiAobWFpbi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uY2hpbGRyZW5bMF0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBjb25zdCBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBzZWN0aW9uVGV4dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHNlY3Rpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJywgJ3NlY3Rpb24tLWhvbWUnKVxyXG4gICAgc2VjdGlvblRleHQuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi0taG9tZV9fdGV4dCcpXHJcbiAgICBzZWN0aW9uSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi0taG9tZV9faW1hZ2UnKVxyXG5cclxuICAgIHNlY3Rpb25UZXh0UGFyYS5pbm5lckhUTUwgPSAnSmF2YSBjaGljb3J5LCBibGFjayBkb3BwaW8gYW5kIHJvYXN0IGNyZWFtIG1vY2hhIHR1cmtpc2ggc3Ryb25nLiBCbHVlIG1vdW50YWluIGRvcHBpbyBibGFjaywgY2hpY29yeSwgc3VnYXIgbWVkaXVtLCBzaW5nbGUgc2hvdCBhIHdpbmdzIGJsdWUgbW91bnRhaW4gdHVya2lzaC4gVmllbm5lc2UgZXQsIGNpbm5hbW9uLCB0dXJraXNoIGx1bmdvIHF1aSBjYXBwdWNjaW5vIGtvcGktbHV3YWsuJ1xyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLnNyYyA9IEljb247XHJcbiAgICBcclxuICAgIHNlY3Rpb25JbWFnZS5hcHBlbmRDaGlsZChteUljb24pXHJcbiAgICBzZWN0aW9uVGV4dC5hcHBlbmRDaGlsZChzZWN0aW9uVGV4dFBhcmEpXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UZXh0KVxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSW1hZ2UpXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==