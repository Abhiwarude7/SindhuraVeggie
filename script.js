let products = [

{
name:"Onion Powder",
category:"onion",
image:"images/onionpowder.jpg"
},

{
name:"Onion Flakes",
category:"onion",
image:"images/onionflakes.jpg"
},

{
name:"Garlic Powder",
category:"garlic",
image:"images/garlicpowder.jpg"
},

{
name:"Chili Powder",
category:"chili",
image:"images/chilipowder.jpg"
}

];

let container = document.getElementById("productList");

function displayProducts(data){

container.innerHTML="";

data.forEach(p => {

container.innerHTML +=

`<div class="col-md-3">

<div class="card mb-4">

<img src="${p.image}" class="card-img-top">

<div class="card-body">

<h5>${p.name}</h5>

</div>

</div>

</div>`

});

}

displayProducts(products);

function filterProducts(category){

if(category === "all"){

displayProducts(products);

}else{

let filtered = products.filter(p => p.category === category);

displayProducts(filtered);

}

}

document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});