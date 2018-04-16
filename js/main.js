$(function() {
                scrolllinks = $("a[href^=#]"),
    scrolllinks.click(function(e){
      var shref = $(this).attr("href"),
          offTop = shref === "#" ? 0 : $(shref).offset().top;
      $('html, body').stop().animate({ 
          scrollTop: offTop
      }, 1500);
      e.preventDefault();
    });
});
$(function () {
    $('.menu_icon').click(function () {
        $('.menu').slideToggle('show');
    });
  $(window).resize(function() {      
      $('.menu').removeAttr('style');
  });
});
$(document).ready(function(){
    $('.menu_icon').click(function (){
        if(!$('.menu_icon').hasClass('menu_transform')){
            $(this).addClass('menu_transform');
            $(this).children('.line').addClass('hide');
        } else {
            $('.menu_icon').removeClass('menu_transform');
            $('.line').removeClass('hide');
        }
    });
});
$(document).ready(function(){
    $('.menu_item').hover(function(){
        if(!$('.logo_img').hasClass('opac')){
            $('.logo_img').addClass('opac');
            $('.logo span').addClass('show');
        } else {
            $('.logo_img').removeClass('opac');
            $('.logo span').removeAttr('style');
        }
    });
});
$(document).ready(function(){
    $('.team_icon').click(function(){
        if(!$(this).hasClass('icon_transform')){
            $('.team_icon').removeClass('icon_transform');
            $('.team_contents').removeClass('team_transform');
            $(this).addClass('icon_transform').parents('.team_contents').toggleClass('team_transform');
        } else {
            $('.team_icon').removeClass('icon_transform');
            $('.team_contents').removeClass('team_transform');
        }
    });
});

$(document).ready(function(){
    $('.submenu_icon').click(function(){
        if(!$(this).parents('.menu_item').children('.menu_content').hasClass('show')){
            $('.submenu_icon').removeClass('submenu_transform');
            $('.menu_content').removeClass('show');
            $(this).addClass('submenu_transform');
            $(this).parents('.menu_item').children('.menu_content').addClass('show');
            $(this).parents('.menu_item').css({ padding: "10px 0px 0px 0px"});
        } else {
            $('.menu_content').removeClass('show');
            $('.menu_conten').removeAttr('style');
            $('.submenu_icon').removeClass('submenu_transform');
            $('.menu_item').css({ padding: "10px 0px 10px 0px"});
        }
    });
});

$(document).ready(function(){
    $('.sub_submenu_icon').click(function(){
        if(!$(this).parents('.submenu_item').children('.sub_submenu').hasClass('show')){
            $('.sub_submenu_icon').removeClass('submenu_transform');
            $('.sub_submenu').removeClass('show');
            $(this).addClass('submenu_transform');
            $(this).parents('.submenu_item').children('.sub_submenu').addClass('show');
            $(this).parents('.submenu_item').css({ padding: "10px 0px 0px 0px"});
        } else {
            $('.sub_submenu').removeClass('show');
            $('.sub_submenu').removeAttr('style');
            $('.sub_submenu_icon').removeClass('submenu_transform');
            $('.submenu_item').css({ padding: "10px 0px 10px 0px"});
            $('.submenu_item').removeAttr('style');
        }
    });
});

$(document).ready(function(){
    $('.event_list').click(function(){
        if(!$(this).parents('.event_item').children('.event_info').hasClass('show')){
            $('.event_info').removeClass('show');
            $(this).parents('.event_item').children('.event_info').addClass('show');
        } else {
            $('.event_info').removeClass('show');
        }
    });
});

$(document).ready(function(){
    $('.detail_more').click(function(){
        if(!$(this).parents('.event_details').children('.text_detail').hasClass('all')){
            $('.event_details').removeClass('all');
            $(this).parents('.event_details').children('.text_detail').addClass('all');
            $(this).children('.more').css({ display: "none"});
            $(this).children('.less').css({ display: "block"});
            $(this).css({ margin: "0px"});
        } else {
            $('.text_detail').removeClass('all');
            $(this).children('.more').css({ display: "block"});
            $(this).children('.less').css({ display: "none"});
            $('.detail_more').removeAttr('style');
        }
    });
});
$(document).ready(function(){
    $('.cart_mini').click(function(){
        $('.cart_mini_content').toggleClass("show");
    });
});
$(document).ready(function(){
    $('.btn-info').click(function(){
        window.location="checkout.html";
    });
});
$(document).ready(function(){
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

var currentProductId = getUrlParameter('product_id');

        $('.catalog_title').click(function(){
            var productId = $(this).parents('.catalog_item:first').attr('product_id');
            window.location="product.html?product_id=" + productId;
        });

        if( currentProductId != undefined ){
            $('.catalog_item').hide();
            $('#' + currentProductId).addClass('show');
        }
});