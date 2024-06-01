let loading = document.querySelector(".loading");
let container = document.querySelector(".div_container");
let card = document.querySelectorAll(".card");

card.forEach((cards)=>{
       cards.addEventListener("click", ()=>{
          console.log(cards);
    document.querySelector("body").innerHTML="";
    let div = document.createElement("div");
    div.classList.add("foodDeatalis");
    div.innerHTML=`
    <img src=${cards.firstElementChild.src} alt="">
    <div class="detailsText">
        <h1>East or West Foodie is the Best</h1>
        <h3>Exciting offer upto 50% off</h3>
       <p>Pay on delivery might avaliable</p>
       <p>Pay on delivery might avaliable</p>
       <button>Buy Now</button>
       <button>Add To Cart</button>
       <a href="">Back</a>
    </div>
    `
    document.querySelector("body").appendChild(div);
       })
})



container.style.display = "none";
setTimeout(()=>{
    container.style.display = "inline";
   loading.style.display="none";
   
}, 2000);