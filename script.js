let iphonePrice = parseInt(document.getElementById("iphone-price").innerText);
let coverPrice = parseInt(document.getElementById("cover-price").innerText);

let sTotal = parseInt(document.getElementById("s-total").innerText);
let mainTotal = parseInt(document.getElementById("total").innerText);

let plus1 = document.getElementById("plus-1");
let plus2 = document.getElementById("plus-2");
addToCart(plus1,"value-1","warning-1","iphone-price",iphonePrice);
addToCart(plus2,"value-2","warning-2","cover-price",coverPrice);

function addToCart(val1,val2,val3,val4,price){
    val1.addEventListener("click",function(){
        let value = parseInt(document.getElementById(val2).value);
        value++;
        if(value>=1){
            document.getElementById(val3).style.display = "none";
        }
        let total = price*value;
        document.getElementById(val4).innerText = total;
        let ipPrice = parseInt(document.getElementById("iphone-price").innerText);
        let covPrice = parseInt(document.getElementById("cover-price").innerText);
        document.getElementById("s-total").innerText = ipPrice + covPrice;
        document.getElementById("total").innerText = ipPrice + covPrice;
        document.getElementById(val2).value = value;
    });
}


let minus1 = document.getElementById("minus-1");
let minus2 = document.getElementById("minus-2");
removeFromCart(minus1,"value-1","warning-1","iphone-price",iphonePrice);
removeFromCart(minus2,"value-2","warning-2","cover-price",coverPrice);

function removeFromCart(val1,val2,val3,val4,price){
    val1.addEventListener("click",function(){
        let value = parseInt(document.getElementById(val2).value);
        value--;
        if(value<1){
            document.getElementById(val3).style.display = "block";
        }
        else{
            document.getElementById(val2).value = value;
            let total = price*value;
            document.getElementById(val4).innerText = total;
            document.getElementById(val3).style.display = "none";
            let ipPrice = parseInt(document.getElementById("iphone-price").innerText);
            let covPrice = parseInt(document.getElementById("cover-price").innerText);
            document.getElementById("s-total").innerText = ipPrice + covPrice;
            document.getElementById("total").innerText = ipPrice + covPrice;
        }
    });
}

document.getElementById("check-out").addEventListener("click",function(){
    document.getElementById("head").style.display = "block";
    document.getElementById("cart").style.display = "none";
});