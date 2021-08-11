// varbales
let listDom = document.querySelector('.box-list');
//Events


//functions

function closeMenu(){
    event.preventDefault()
    listDom.style.right = "-300px";
}
function showMenu(){
    event.preventDefault()
    listDom.style.right = "0";
}

//btn come back up
$(document).ready(function(){

    //to hide and show attribute header-section
    $(window).scroll(function(){
        let windowScroll = $(this).scrollTop();
        if(windowScroll >= 500){
            $(".navbar").addClass('black-bg');
        }else{
            $(".navbar").removeClass('black-bg');
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() <= 200){
            $('.scrollTop').hide();
        }else{
            $('.scrollTop').show();
        }
    })

    // to move to top when click on btn
    $('.scrollTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1000);
    });
});