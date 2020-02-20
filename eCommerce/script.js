class Store {
  products = [];
  addProduct(product) {
    this.products.push(product);
  }
  filterProducts(search) {
    return this.products.filter(product => product.name.includes(search));
  }
  printProducts(arrOfProducts) {
    let container = document.querySelector('.products-container');
    container.innerHTML = '';
    arrOfProducts.map(product => {
      product.fillDiv();
    });
  }
}
class Product {
  constructor(name, imageUrl, stock, price) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.stock = stock;
    this.price = price;
  }
  category;
  div = document.createElement('div');
  fillDiv() {
    this.div.classList.add('product');
    console.log(this.div);
    this.div.innerHTML = `
    <h3>${this.name}</h3>
    <img
      src="${this.imageUrl}"
      alt="${this.name}"
    />
    <h4>${this.category}</h4>
    <h4>${this.price}</h4>
    <h4>in stock:${this.stock}</h4>`;
    document.querySelector('.products-container').appendChild(this.div);
  }
}
class Pot extends Product {
  constructor(name, imageUrl, stock, price, material) {
    super(name, imageUrl, stock, price);
    this.material = material;
  }
  category = 'Pot';
}
class Phone extends Product {
  constructor(name, imageUrl, stock, price, brand, OS) {
    super(name, imageUrl, stock, price);
    this.brand = brand;
    this.OS = OS;
  }
  category = 'Phone';
}
let myStore = new Store();
myStore.addProduct(
  new Phone(
    'iPhone11 Pro Max',
    'https://www.neptun.mk/2019/10/18/1._all-models-for-corrections-11-pro-max-2019_0001s_0005_11-red__4_.png',
    10,
    90000,
    'Apple',
    'MacOS'
  )
);
myStore.addProduct(
  new Phone(
    'SAMSUNG Galaxy S20',
    'https://www.neptun.mk/2020/02/11/s20Ultragray_4593609d-90b1-4fba-b89b-5533ad10b724.JPG',
    5,
    80000,
    'Samsung',
    'Android'
  )
);
myStore.addProduct(
  new Phone(
    'SAMSUNG Note 10',
    'https://www.neptun.mk/2019/08/28/33_73999b0c-af19-4182-80f9-fb98a0d8b472.jpg',
    8,
    60000,
    'Samsung',
    'Android'
  )
);
myStore.addProduct(
  new Pot(
    'Gril Tava',
    'https://www.neptun.mk/2018/01/30/1_8334ed58-4f68-4fdf-9282-27e7af531662.jpg',
    6,
    1700,
    'Teflon'
  )
);
myStore.addProduct(
  new Pot(
    'Wok Tava',
    'https://www.neptun.mk/2018/01/30/1_4c4a5d68-ec38-45b8-bbfa-0b867e133a34.jpg?width=192',
    12,
    1400,
    'Teflon'
  )
);
myStore.addProduct(
  new Pot(
    'Boiling Pot',
    'https://www.neptun.mk/2018/01/30/1_c88cb946-5bab-42fe-a1ea-b6f0448f8da8.jpg?width=192',
    1,
    2600,
    'Stainless Steal'
  )
);
let form = document.querySelector('form');
myStore.printProducts(myStore.products);
form.addEventListener('submit', e => {
  e.preventDefault();
  let search = document.querySelector('form>input').value;
  myStore.printProducts(myStore.filterProducts(search));
});
