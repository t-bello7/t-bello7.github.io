$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >= 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");

    }
    
 });
 // toggle menu/ navbar script
 $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");

 });
 // owl carousel script
 $('.carousel').owlCarousel({
     margin: 20,
     loop: true,
     autoplayTimeOut:2000,
     autoplayHoverPause: true,
     responsive :{
         0:{
             items:1,
             nav:false  
         },
         600:{
            items:2,
            nav:false  
        },
        1000:{
            items:3,
            nav:false  
        }
    }
 });
});

// // get the form by its id
// const form = document.getElementById("contact-form");


// const formEvent = form.addEventListener("submit", (event)=>{
//     event.preventDefault();

//     let mail = new FormData(form);

//     sendMail(mail);
// })


