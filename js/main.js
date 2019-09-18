 function playVideo(){
            let video = document.getElementById('myVideo');
            let playBtn = document.getElementById('playBtn');
            let caption = document.getElementById('videoCaption');
            playBtn.classList.toggle('pause');
            if(video.paused){
                video.play();
                caption.classList.remove('opacity');
            }else{
                video.pause();
                caption.classList.add('opacity');
            }
        }
    //NavTop
//var mainSec = document.querySelector('#main');
//var mainTop = mainSec.offsetTop;
//var nav = document.querySelector("#headerNav");
//function stickyNav(){
//    if(window.scrollY > mainTop){
//        nav.classList.add('nav-top');
//    }
//    else{
//        nav.classList.remove('nav-top');
//    }
//}
//window.addEventListener('scroll',stickyNav);

var navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach(link=>{
    //scroll
    link.addEventListener("click",function(event){
        event.preventDefault();
        let target = document.querySelector(event.target.hash);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
    //End scroll
});
        
//Navbar hover

var anchors = document.querySelectorAll('.menu li a');
var menuLink = document.querySelectorAll('.menu li');
var indicator = document.getElementById('indicator');
for(let i =0; i <anchors.length; i++){
    anchors[i].onmouseover = function(){
        
        indicator.style.left=menuLink[i].offsetLeft-10+'px';
        console.log(menuLink[i].offsetLeft);
        indicator.style.width=anchors[i].offsetWidth+20+'px';
    }
}
        
//Navbar Toggle
window.onload = function(){
    
    let navToggle = document.getElementById('nav-btn');
    navToggle.addEventListener('click',function(){
        document.getElementById('menu').classList.toggle('active');
        navToggle.classList.toggle('nav-btn-active');
    });
}