import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.elem = product;
  }

  set elem(obj){
    let elem = createElement(`
      <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${obj.image}" class="card__image" alt="product">
            <span class="card__price">€${obj.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${obj.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
    `);

    let event = new CustomEvent("product-add", {
      detail: obj.id,
      bubbles: true
    });

    let button = elem.querySelector('.card__button');

    button.onclick = function(e){
      elem.dispatchEvent(event);
    }

    this._elem = elem;
  }

  get elem(){
    return this._elem;
  }
}