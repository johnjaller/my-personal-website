$(document).ready(function () {
    if(window.innerWidth>=768)
    {
    $(".navbar-brand").slideUp().delay(250).slideDown(500)
    }
        
    $(".hero-text").show(2000)
    $(".hero-p").slideDown(2500)
    $(".hero-img").fadeIn(2000)
    $(".col").show(2000)
  
    for(let i=0;i<$(".nav-link").length;i++){
    $(".nav-link").eq(i).slideUp().delay(i*50).slideDown(500)
    }
    
    
});

$(".btn-hero").on("click", function () {
    window.location.href="#myself"
});
let toggle=false
$(".show-more").click( function () {
    if(toggle==false){
    $("#extra-row").toggleClass("extra-row extra-row-display", 1000, "linear");
    $(this).html("Show less")
    toggle=true
    }else{
    $("#extra-row").toggleClass("extra-row extra-row-display", 1000, "linear");
    toggle=false
    $(this).html("Show more")

    }
});
$(".goToTop").on("click",function(){
    $('body').delay(2000).scrollTop(0);
    $(document).delay(2000).scrollTop(0);
})

