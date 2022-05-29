"use strict";
(self["webpackChunkcoffee_shop"] = self["webpackChunkcoffee_shop"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _coffeeContactTrans_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffeeContactTrans.png */ "./src/coffeeContactTrans.png");

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
  
      sectionTextPara.innerHTML = 'Fair trade siphon crema extra, viennese qui, foam viennese siphon est so caramelization. Carajillo sit ut extra chicory aged instant crema chicory. '
  
      const myIcon = new Image();
      myIcon.src = _coffeeContactTrans_png__WEBPACK_IMPORTED_MODULE_0__;
      
      sectionImage.appendChild(myIcon)
      sectionText.appendChild(sectionTextPara)
      section.appendChild(sectionText)
      section.appendChild(sectionImage)
      main.appendChild(section)




}

/***/ }),

/***/ "./src/coffeeContactTrans.png":
/*!************************************!*\
  !*** ./src/coffeeContactTrans.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fdbd4b920dc9f74853d0.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDNUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXNob3AvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICcuL2NvZmZlZUNvbnRhY3RUcmFucy5wbmcnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlKCkge1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcbiAgICBpZiAobWFpbi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uY2hpbGRyZW5bMF0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgY29uc3Qgc2VjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjb25zdCBzZWN0aW9uVGV4dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgY29uc3Qgc2VjdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBcclxuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJywgJ3NlY3Rpb24tLWhvbWUnKVxyXG4gICAgICBzZWN0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLS1ob21lX190ZXh0JylcclxuICAgICAgc2VjdGlvbkltYWdlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tLWhvbWVfX2ltYWdlJylcclxuICBcclxuICAgICAgc2VjdGlvblRleHRQYXJhLmlubmVySFRNTCA9ICdGYWlyIHRyYWRlIHNpcGhvbiBjcmVtYSBleHRyYSwgdmllbm5lc2UgcXVpLCBmb2FtIHZpZW5uZXNlIHNpcGhvbiBlc3Qgc28gY2FyYW1lbGl6YXRpb24uIENhcmFqaWxsbyBzaXQgdXQgZXh0cmEgY2hpY29yeSBhZ2VkIGluc3RhbnQgY3JlbWEgY2hpY29yeS4gJ1xyXG4gIFxyXG4gICAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbXlJY29uLnNyYyA9IEljb247XHJcbiAgICAgIFxyXG4gICAgICBzZWN0aW9uSW1hZ2UuYXBwZW5kQ2hpbGQobXlJY29uKVxyXG4gICAgICBzZWN0aW9uVGV4dC5hcHBlbmRDaGlsZChzZWN0aW9uVGV4dFBhcmEpXHJcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvblRleHQpXHJcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkltYWdlKVxyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pXHJcblxyXG5cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9