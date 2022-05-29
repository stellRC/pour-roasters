"use strict";
(self["webpackChunkcoffee_shop"] = self["webpackChunkcoffee_shop"] || []).push([["menu"],{

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _coffeeCupTrans_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffeeCupTrans.png */ "./src/coffeeCupTrans.png");



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
      sectionImage.classList.add('section--home__image', 'menu--img')
  
      sectionTextPara.innerHTML = 'Barista et bar aftertaste, brewed variety filter turkish breve organic. Mug french press rich doppio barista redeye cream. Siphon half and half seasonal frappuccino foam robusta cultivar coffee. So froth, aftertaste bar, saucer sugar single shot caramelization aromatic. Espresso, saucer, breve café au lait, id cultivar pumpkin spice doppio viennese frappuccino doppio.'
  
      const myIcon = new Image();
      myIcon.src = _coffeeCupTrans_png__WEBPACK_IMPORTED_MODULE_0__;
      
      sectionImage.appendChild(myIcon)
      sectionText.appendChild(sectionTextPara)
      section.appendChild(sectionText)
      section.appendChild(sectionImage)
      main.appendChild(section)


}


/***/ }),

/***/ "./src/coffeeCupTrans.png":
/*!********************************!*\
  !*** ./src/coffeeCupTrans.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96a9338deadd72152bff.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkM7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXNob3AvLi9zcmMvbWVudVBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb24gZnJvbSAnLi9jb2ZmZWVDdXBUcmFucy5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcbiAgICBpZiAobWFpbi5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uY2hpbGRyZW5bMF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgY29uc3Qgc2VjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjb25zdCBzZWN0aW9uVGV4dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgY29uc3Qgc2VjdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBcclxuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJywgJ3NlY3Rpb24tLWhvbWUnKVxyXG4gICAgICBzZWN0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLS1ob21lX190ZXh0JylcclxuICAgICAgc2VjdGlvbkltYWdlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tLWhvbWVfX2ltYWdlJywgJ21lbnUtLWltZycpXHJcbiAgXHJcbiAgICAgIHNlY3Rpb25UZXh0UGFyYS5pbm5lckhUTUwgPSAnQmFyaXN0YSBldCBiYXIgYWZ0ZXJ0YXN0ZSwgYnJld2VkIHZhcmlldHkgZmlsdGVyIHR1cmtpc2ggYnJldmUgb3JnYW5pYy4gTXVnIGZyZW5jaCBwcmVzcyByaWNoIGRvcHBpbyBiYXJpc3RhIHJlZGV5ZSBjcmVhbS4gU2lwaG9uIGhhbGYgYW5kIGhhbGYgc2Vhc29uYWwgZnJhcHB1Y2Npbm8gZm9hbSByb2J1c3RhIGN1bHRpdmFyIGNvZmZlZS4gU28gZnJvdGgsIGFmdGVydGFzdGUgYmFyLCBzYXVjZXIgc3VnYXIgc2luZ2xlIHNob3QgY2FyYW1lbGl6YXRpb24gYXJvbWF0aWMuIEVzcHJlc3NvLCBzYXVjZXIsIGJyZXZlIGNhZsOpIGF1IGxhaXQsIGlkIGN1bHRpdmFyIHB1bXBraW4gc3BpY2UgZG9wcGlvIHZpZW5uZXNlIGZyYXBwdWNjaW5vIGRvcHBpby4nXHJcbiAgXHJcbiAgICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBteUljb24uc3JjID0gSWNvbjtcclxuICAgICAgXHJcbiAgICAgIHNlY3Rpb25JbWFnZS5hcHBlbmRDaGlsZChteUljb24pXHJcbiAgICAgIHNlY3Rpb25UZXh0LmFwcGVuZENoaWxkKHNlY3Rpb25UZXh0UGFyYSlcclxuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uVGV4dClcclxuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSW1hZ2UpXHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbilcclxuXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==