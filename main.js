function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.cards)
})

/*var deck=document.querySelector(".card-deck")
console.log(deck)*/


function display(mb){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
     console.log(deck)

for(var i in mb){
   // console.log(mb[i])
   var caddiv=document.createElement("div")
    caddiv.classList.add("card")
   var cadimg=document.createElement("img")
   //console.log(cadimg)
   cadimg.src=mb[i].img
   console.log(cadimg)
   caddiv.appendChild(cadimg)
   deck.appendChild(caddiv)

   var cname=document.createElement("h2")
    cname.textContent=mb[i].Name;
    caddiv.appendChild(cname)

   var rate=document.createElement("h3")
    rate.textContent=mb[i].rate;
    caddiv.appendChild(rate)

   var off=document.createElement("h3")
      off.textContent="$"+mb[i].offer;
      caddiv.appendChild(off)

    var btn=document.createElement("button")
      btn.textContent=mb[i].button;
      btn.classList.add("btn-success")
      caddiv.appendChild(btn)
    
   

}

}