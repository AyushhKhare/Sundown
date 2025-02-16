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

project.addEventListener('mouseover', (e) => {
    let myEvent = e.target || e.currentTarget;
    var a = myEvent.getAttribute('data-image');
    if (a != null) {
        img.style.backgroundImage = `url(${a})`;
    }
    if (window.innerWidth < 600) {
        img.style.display = 'none';
    }
});

var shifter = document.querySelector("#page4 .left")
var para = document.querySelector('#page4 .left .btm p')
var changingImg = document.querySelector('#page4 .right img') 
var h1 = document.querySelectorAll('.left .box h1')

document.querySelector('#page4 .left .box').addEventListener('click', (e) => {
    if (e.target.tagName === 'H1') {
        let myEvent = e.target;
        var a = myEvent.getAttribute('data-p');
        var b = myEvent.getAttribute('data-image');
        myEvent.classList.add('active');
        if (a != null && b != null) {
            para.innerHTML = `${a}`;
            changingImg.src = `${b}`;
        }

        h1.forEach(selected => {
            if (selected !== myEvent) {
                selected.classList.remove('active');
            }
        });
    }
});

document.querySelector('#page4 .left .box').addEventListener('click', (e) => {
    if (e.target.tagName === 'H1') {
        let myEvent = e.target;
        var a = myEvent.getAttribute('data-p');
        var b = myEvent.getAttribute('data-image');
        myEvent.classList.add('active');
        if (a != null && b != null) {
            para.innerHTML = `${a}`;
            changingImg.src = `${b}`;
        }

        h1.forEach(selected => {
            if (selected !== myEvent) {
                selected.classList.remove('active');
            }
        });
    }
});

// Add CSS for the active class
// filepath: /c:/Users/DELL/Js/For Resume/style.css
// .active {
//     padding: 0 !important;
//     color: white !important;
// }
// .left .box h1 {
//     padding-left: 1vw;
//     color: rgba(255, 255, 255, 0.4);
// }

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