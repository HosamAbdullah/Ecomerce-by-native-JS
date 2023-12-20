/* slider */
var mysrc=["images/slider1.jpg","images/slider2.jpg","images/slider3.jpg"]


function nextShow()
{
    var image =document.getElementById("slide")
    var path=image.getAttribute("src")
    for (let j= 0; j < mysrc.length; j++) 
    {
        if(path==mysrc[j]) 
        {
            var num=j
        }
        
    }
    if(num<2)
    image.setAttribute("src",mysrc[num+1])
    else if(num==2)
    image.setAttribute("src",mysrc[0])
}
function previousShow()
{   var image =document.getElementById("slide")
    var path=image.getAttribute("src")
    for (let j= 0; j < mysrc.length; j++) 
    {
        if(path==mysrc[j]) 
        {
            var num=j
        }
        
    }
    if(num>0)
    image.setAttribute("src",mysrc[num-1])
    else if(num==0)
    image.setAttribute("src",mysrc[2])
}
var play;
function playShow()
{
    play= setInterval(nextShow, 1500);
   
}
function stopShow()
{
    clearInterval(play)
}
document.body.addEventListener ('load',playShow())
/* advantage_section/////////////////////////////////////////////////// */
/* product-section//////////////////////////////////////////// */
function watches()
{
    document.getElementById("watches").style.display="block"
    document.getElementById("phones").style.display ="none"
    document.getElementById("laptops").style.display ="none"
    document.getElementById("kitchen").style.display ="none"
    document.getElementById("furniture").style.display ="none"
    document.getElementById("cook").style.display ="none"
}
document.body.addEventListener ('load',watches())
function phones()
{
    document.getElementById("watches").style.display="none"
    document.getElementById("phones").style.display ="block"
    document.getElementById("laptops").style.display ="none"
    document.getElementById("kitchen").style.display ="none"
    document.getElementById("furniture").style.display ="none"
    document.getElementById("cook").style.display ="none"
}
function laptops()
{
    document.getElementById("laptops").style.display ="block"
    document.getElementById("watches").style.display="none"
    document.getElementById("phones").style.display ="none"
    document.getElementById("kitchen").style.display ="none"
    document.getElementById("furniture").style.display ="none"
    document.getElementById("cook").style.display ="none"
}
function kitchen()
{
    document.getElementById("watches").style.display="none"
    document.getElementById("phones").style.display ="none"
    document.getElementById("laptops").style.display ="none"
    document.getElementById("kitchen").style.display ="block"
    document.getElementById("furniture").style.display ="none"
    document.getElementById("cook").style.display ="none"
}
function furniture()
{
    document.getElementById("watches").style.display="none"
    document.getElementById("phones").style.display ="none"
    document.getElementById("laptops").style.display ="none"
    document.getElementById("kitchen").style.display ="none"
    document.getElementById("furniture").style.display ="block"
    document.getElementById("cook").style.display ="none" 
}
function cook()
{
    document.getElementById("watches").style.display="none"
    document.getElementById("phones").style.display ="none"
    document.getElementById("laptops").style.display ="none"
    document.getElementById("kitchen").style.display ="none"
    document.getElementById("furniture").style.display ="none"
    document.getElementById("cook").style.display ="block"  
}
////////////////////////////////////////////////////
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  //////////////////////////////////////////////////
  function setCookie(name,value,numOfmonthsToExpire)
  {
      var dateToExipire= new Date()
      var noOfMonths=dateToExipire.getMonth()+numOfmonthsToExpire
      dateToExipire.setMonth(noOfMonths)
      document.cookie=name+"="+value+";expires="+dateToExipire+";"
  }
  function getAllCookies()
      {
          var objectedCookie={}
          var cookieArray=document.cookie.split("; ")
          for(var i=0;i<cookieArray.length;i++)
          {
              var cookie =cookieArray[i].split("=")
  
              objectedCookie[cookie[0]]=cookie[1]
          }
          return objectedCookie
      }
  function deleteCookie(cookiname)
  {
      setCookie(cookiname,null,-10)
  }
  
  function getcooki(cookiName)
  {
      return getAllCookies()[cookiName]
  }

  ///////////////////////////////////////////////////
  var divs = document.getElementsByClassName('btn-success');
  var card_img = document.getElementsByClassName('card-img');
  var card_title = document.getElementsByClassName('card-title');
  var card_text = document.getElementsByClassName('card-text')
  var card_price = document.getElementsByClassName('card-price')
  var buttons = document.getElementsByClassName('btn-success')
  var added = document.getElementsByClassName('added')
  var cartItems=[];
  var div=""
  var count=0;
  var cart_span=document.getElementById("cart_span")
  setCookie("count",count,1)

  for (var i = 0; i < divs.length; i++) {
    divs[i].onclick = function() {
      var index = Array.prototype.indexOf.call(divs, this);
      var path= card_img[index].getAttribute("src")
      var pname=card_title[index].outerHTML
      var ptext=card_text[index].outerHTML
      var pprice=card_price[index].outerHTML
      buttons[index].style.display="none"
      added[index].style.display="block"
      count= Number(getcooki("count"))+1
      setCookie("count",count,1)
      cart_span.innerText=""
      cart_span.append(count)

      


    
     cartItems.push({imgSrc:path,ProductName:pname,productText:ptext,productPrice:pprice})
     sessionStorage.setItem("cartItems", cartItems)
    };

  }
  function ready(){
    div=""
    for (var i = 0; i < cartItems.length; i++) {
        
        div+=`
        <div class="cart-fromCartPage">
        <div class="imgDIV-fromCartPage">
        <img src="${cartItems[i]["imgSrc"]}" class="imageInCart">
        </div>
        <div class="text-fromCartPage">
        ${cartItems[i]["ProductName"]}
        ${cartItems[i]["productText"]}
        ${cartItems[i]["productPrice"]}
        <p class="paraFromCartPage"><br>Shop now and embrace the future with this product which is the perfect companion <br>for those who demand excellence in every aspect of their lives<br>
        Discover the power of innovation with our products Designed to revolutionize your daily life
        </p>
        </div>
        </div>
        `
        
      }
      sessionStorage.setItem('message', div);
  }

  function loading(){
    ready()
     window.open("./cart.html","_blank") 
    
}
