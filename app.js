let main = document.querySelector("main");

function Product(image, title, price, description) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.description = description;
}

async function asyncCall() {
  const get = await fetch("https://fakestoreapi.com/products?limit=20");
  const product = await get.json();
  product.map((element) => {
    let image = element.image;
    let title = element.title;
    let price = element.price;
    let description = element.description;

    let newProduct = new Product(image, title, price, description);

    card(newProduct);

    // card();
  });
}
asyncCall();

function card(newProduct) {
  let section = document.createElement("section");
  let productImg = document.createElement("img");
  let paraTilte = document.createElement("p");
  let paraPrice = document.createElement("p");
  let paraDescription = document.createElement("p");

  productImg.innerHTML = newProduct.image;
  paraTilte.innerHTML = newProduct.title;
  paraPrice.innerHTML = `$${newProduct.price}`;
  paraDescription.innerHTML = newProduct.description;

  productImg.setAttribute("src", newProduct.image);
  productImg.style.width = "100px";

  section.style.background = "grey";
  section.style.width = "400px";
  section.style.marginRight = "100px";
  section.style.marginBottom = "50px";

  section.style.display = "inline-block";
  section.style.text = "column";
  section.style.alignItems = "center";

  main.style.display = "inline-block";

  main.appendChild(section);
  section.appendChild(productImg);
  section.appendChild(paraTilte);
  section.appendChild(paraPrice);
  section.appendChild(paraDescription);
}
