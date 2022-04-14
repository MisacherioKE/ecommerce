

document.getElementById("main").style.backgroundColor ="blue";
document.getElementById("main").style.height ="100vh";
document.getElementById("main").style.width ="100%"
document.getElementById("main").style.position ="relative"
document.getElementById("main").style.overflow ="hidden";


// circle decorations
document.getElementById("circle1").style.position ="absolute";
document.getElementById("circle1").style.height ="100vh";
document.getElementById("circle1").style.width ="100vh";
document.getElementById("circle1").style.borderRadius ="50%";
document.getElementById("circle1").style.backgroundColor ="tomato";
document.getElementById("circle1").style.bottom ="-5%";
document.getElementById("circle1").style.left ="-20%"


document.getElementById("circle2").style.position ="absolute";
document.getElementById("circle2").style.height ="100vh";
document.getElementById("circle2").style.width ="100vh";
document.getElementById("circle2").style.borderRadius ="50%";
document.getElementById("circle2").style.backgroundColor ="pink";
document.getElementById("circle2").style.top ="-45%";
document.getElementById("circle2").style.right ="-15%"


// cards
document.getElementById("div1").style.backgroundColor ="lightblue";
document.getElementById("div1").style.height ="350px";
document.getElementById("div1").style.width ="230px";
document.getElementById("div1").style.position ="absolute";
document.getElementById("div1").style.borderRadius ="20px";
document.getElementById("div1").style.top ="20%";
document.getElementById("div1").style.left ="18%";
// document.getElementById("div1").style.textAlign ="center";
document.getElementById("div1").style.cursor ="pointer";
document.getElementById("div1").style.backgroundSize ="cover";


document.getElementById("div2").style.backgroundColor ="lightblue";
document.getElementById("div2").style.height ="350px";
document.getElementById("div2").style.width ="230px";
document.getElementById("div2").style.position ="absolute";
document.getElementById("div2").style.borderRadius ="20px";
document.getElementById("div2").style.top ="20%";
document.getElementById("div2").style.left ="36%";
document.getElementById("div2").style.cursor ="pointer";

document.getElementById("div3").style.backgroundColor ="lightblue";
document.getElementById("div3").style.height ="350px";
document.getElementById("div3").style.width ="230px";
document.getElementById("div3").style.position ="absolute";
document.getElementById("div3").style.borderRadius ="20px";
document.getElementById("div3").style.top ="20%";
document.getElementById("div3").style.left ="54%";
document.getElementById("div3").style.cursor ="pointer";

var div1 = {
   productName :"Phone",
   productDesc :"Samsung Galaxy A71",
   productPrice :"KShs12400",
   productImg :"/images/phone.jpg",
   productID :"Phone1245gwatawq"
}

var div2 = {
    productName :"Sugar",
    productDesc :"Kabras Premium",
    productPrice :"KShs249",
    productImg :"/images/sugar.jpg",
    productID :"Sugar3678gdsesg"
 }

 var div3 = {
    productName :"TV",
    productDesc :"VON TV",
    productPrice :"KShs16995",
    productImg :"/images/tv.jpg",
    productID :"TV9101112awwrte"
 }

document.getElementById("productImg").src = div1.productImg;
document.getElementById("productDesc").innerText = div1.productDesc;
document.getElementById("productPrice").innerText = div1.productPrice


document.getElementById("productImg2").src = div2.productImg;
document.getElementById("productDesc2").innerText = div2.productDesc;
document.getElementById("productPrice2").innerText = div2.productPrice


document.getElementById("productImg3").src = div3.productImg;
document.getElementById("productDesc3").innerText = div3.productDesc;
document.getElementById("productPrice3").innerText = div3.productPrice

// OnClick
document.getElementById("div1").onclick =function(){
    
    var id = "Phone1245gwatawq";

    window.location.href = "product.html" `? ${id}`;
}

// onClick Div2
document.getElementById("div2").onclick =function(){
    
    var id = "Sugar3678gdsesg";

    window.location.href = "product.html" `? ${id}`;
}

// Onclick Div3
document.getElementById("div3").onclick =function(){
    
    var id = "TV9101112awwrte";

    window.location.href = "product.html" `? ${id}`;
}