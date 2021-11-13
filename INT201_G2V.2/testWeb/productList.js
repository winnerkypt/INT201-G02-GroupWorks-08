import { product } from "./product.js";
const search = document.querySelector("#search");
const productsList = document.querySelector("#products");
let check = false;

search.addEventListener("click", () => {
    check = !check;
    if (check) {
        document.querySelector(
            "#searchBar"
        ).innerHTML += `<input type="text" style="width:180%;" class="form-control mb-2" placeholder="Enter Your Shirt" id="form">`;
        // document.querySelector("#searchBar").innerHTML += `<button id="submitSearch" class="btn btn-primary" style="display:inline-block;position:relative;left:250px;bottom:45px;">Submit</button>`;
        let log = document.getElementById("form");
        log.addEventListener("keyup", () => {
            let input = document.getElementById("form");
            let filter = input.value.toLowerCase();
            let divID = document.getElementById("products");
            let infoOfProduct = divID.getElementsByClassName("card");
            for (let i = 0; i < infoOfProduct.length; i++) {
                let txtValue = infoOfProduct[i].textContent;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    infoOfProduct[i].style.display = "";
                } else {
                    infoOfProduct[i].style.display = "none";
                }
            }
        });
    } else document.querySelector("#searchBar").innerHTML = "";
});
listProduct();

function listProduct() {
    for (let i = 0; i < product.length; i++) {
        let colProduct = document.createElement("span");
        // colProduct.setAttribute("class", "col");
        colProduct.style = 'display:inline-block;margin:10px;';

        let divProducts = document.createElement("div");
        divProducts.setAttribute("id", product[i].productId);
        divProducts.setAttribute("class", "card");
        // divProducts.setAttribute("class", "col-3")
        divProducts.style = 'width:18rem;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);';

        let imgShein = document.createElement("div");
        imgShein.innerHTML += `<img class='card-img-top' src='${product[i].productImg}' width="250px">`;
        // `<img src='${product[i].productImg}' width="250px" style="marginBottom:20px;"><div class="overlayText"><a href ='#' id="Add ${product[i].productId}"class="textImage">Add</a></div>`;

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let pProductName = document.createElement("h3");
        pProductName.innerHTML = `<h5 class="card-title">${product[i].productName}</h5>`;

        let list = document.createElement("ul");
        list.setAttribute("class", "list-unstyled");
        list.innerHTML += `<li class='card-text'>Des : ${product[i].productDesc}</li>`;
        list.innerHTML += `<li class='card-text'>Price ${product[i].productPrice}</li>`;
        list.innerHTML += `<li class='card-text'>Stock : ${product[i].productStock}</li>`;

        let btnAdd = document.createElement('span');
        btnAdd.innerHTML += `<button class='btn btn-outline-danger' id='add' style='width:100%;'>ADD TO CART</button>`

        divProducts.appendChild(imgShein);
        cardBody.appendChild(pProductName);
        cardBody.appendChild(list);
        cardBody.appendChild(btnAdd);
        divProducts.appendChild(cardBody);
        colProduct.appendChild(divProducts);
        productsList.appendChild(colProduct);
    }
}



let addCart = document.querySelectorAll("#add");
let cartNumbers = document.querySelector("#cart");
// let card = document.querySelector(".card-body")
let amount = 0;
cartNumbers.innerHTML = `${amount}`;
for (let i = 0; i < addCart.length; i++) {
    let cart = []
    let quality = 0
    addCart[i].addEventListener("click", () => {
        if(product[i].productId != cart){
            cart = product[i].productId
            localStorage.setItem(product[i].productId,quality  = 1)
        }else{
            localStorage.setItem(product[i].productId,quality+=1)
        }
        alert(`ADD ${product[i].productName} TO CART ! ! ! `)
        amount++; //เพิ่มจำนวนสินค้าในตะกร้า
        cartNumbers.innerHTML = `${amount}`;
    }) 
}

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    amount = 0;
    cartNumbers.innerHTML = `${amount}`
})



// addCart.addEventListener("click", () => {
//   alert("Helloworld");
// });