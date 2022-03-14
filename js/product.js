// Styling the main
document.getElementById("main").style.backgroundColor ="crimson";
document.getElementById("main").style.height ="75vh";
document.getElementById("main").style.width ="50%";
document.getElementById("main").style.borderRadius ="30px";
document.getElementById("main").style.position ="absolute";
document.getElementById("main").style.left ="25%";

// Styling the images
document.getElementById("product0Img").style.marginLeft ="25%";
document.getElementById("product0Img").style.marginTop ="1%";
document.getElementById("product0Img").style.height ="fit-content";
document.getElementById("product0Img").style.width ="50%"
document.getElementById("product0Img").style.borderRadius ="10px";
document.getElementById("product0Img").style.boxShadow ="5px 5px 10px black";

// Styling Properties
document.getElementById("properties").style.marginLeft ="30%";



// Decode The URI component
var queryString = decodeURIComponent(window.location.search);
// console.log(queryString);

var product0ID = queryString.substring(1);
// console.log(queryString);

var div1 = {
    productName :"Phone",
    productDesc :"Samsung Galaxy A71/4GB RAM/64GB ROM",
    productPrice :"KShs12400",
    productImg :"/images/phone.jpg",
    productID :"Phone1245gwatawq"
 }
 
 var div2 = {
     productName :"Sugar",
     productDesc :"Kabras Premium 2KGs",
     productPrice :"KShs249",
     productImg :"/images/sugar.jpg",
     productID :"Sugar3678gdsesg"
  }
 
  var div3 = {
     productName :"TV",
     productDesc :"VON 32' LED Smart TV",
     productPrice :"KShs16995",
     productImg :"/images/tv.jpg",
     productID :"TV9101112awwrte"
  }

  if(product0ID === div1.productID){
      document.getElementById("product0Img").src = div1.productImg;
      document.getElementById("product0Desc").innerText = div1.productDesc;
      document.getElementById("product0Name").innerText = div1.productName;
      document.getElementById("product0Price").innerText = div1.productPrice;

  }else if(product0ID === div2.productID){
    document.getElementById("product0Img").src = div2.productImg;
    document.getElementById("product0Desc").innerText = div2.productDesc;
    document.getElementById("product0Name").innerText = div2.productName;
    document.getElementById("product0Price").innerText = div2.productPrice;

  }else{
    document.getElementById("product0Img").src = div3.productImg;
    document.getElementById("product0Desc").innerText = div3.productDesc;
    document.getElementById("product0Name").innerText = div3.productName;
    document.getElementById("product0Price").innerText = div3.productPrice;  
  }