
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
var img = document.querySelector('.fixed-image')
var project = document.querySelector(".project")



var loading = document.querySelector("#loader")
var test = document.querySelector(".test")



// setTimeout(() => {
//     loading.style.top = "-100%" 
// }, 3000);






project.addEventListener("mouseenter",function(){
    img.style.display = 'block';
})
project.addEventListener("mouseleave",function(){
    img.style.display = 'none';
})

project.addEventListener('mouseover', (e) => {    
    let myEvent = e.target || e.currentTarget ;
    var a = myEvent.getAttribute('data-image') ;
    if(a == null){
    }
    else{
        img.style.backgroundImage = `url(${a})`
    }
    if(window.innerWidth < 600){
        img.style.display = 'none'
    }
    img.addEventListener('mouseover',()=>{
        img.style.display = 'block'
    })
   }) 




var shifter = document.querySelector("#page4 .left")
var para = document.querySelector('#page4 .left .btm p')
var changingImg = document.querySelector('#page4 .right img') 
var h1 = document.querySelectorAll('.left .box h1')

h1.forEach(elems => {
    elems.addEventListener('click',(e)=>{
        let myEvent = e.target || e.currentTarget ;
        var a = myEvent.getAttribute('data-p') ;
        var b = myEvent.getAttribute('data-image') ;
        myEvent.style.padding = 0
        myEvent.style.color = 'white'
        if(a == null || b == null){
        }
        else{
            para.innerHTML = `${a}`
            changingImg.src = `${b}`
        }

        h1.forEach(selected =>{
            if(selected !== myEvent){
                selected.style.paddingLeft = 1+'vw'
                selected.style.color = 'rgba(255, 255, 255, 0.4)'
            }

        })
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

loaderAnimation();