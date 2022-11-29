import View from './View';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    // ...to execute _addHandler in this module, not in controller.js
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
    // this.addHandlerUpload();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const arrData = [...new FormData(this)]; // 'this' points to _parentElement
      const objData = Object.fromEntries(arrData); // converts values from arrays to key/value pairs
      handler(objData);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
