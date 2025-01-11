(function($){"use strict"
var PATH={};PATH.preLoader=function(){$(".status").fadeOut();$(".preloader").delay(1000).fadeOut("slow");}
PATH.masonaryGrid=function(){$('.grid').masonry({itemSelector:'.grid-item',columnWidth:'.grid-item',});}
PATH.MenuClose=function(){$('.navbar-nav .nav-link').on('click',function(){var toggle=$('.navbar-toggler').is(':visible');if(toggle){$('.navbar-collapse').collapse('hide');}});}
PATH.stellerJs=function(){$(window).stellar({horizontalScrolling:false,});}
PATH.ssPopUp=function(){$('.zoom-gallery').magnificPopup({delegate:'a',type:'image',closeOnContentClick:false,closeBtnInside:false,mainClass:'mfp-with-zoom mfp-img-mobile',gallery:{enabled:true,},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}}});}
PATH.videoModal=function(){$(".js-modal-btn").modalVideo();}
PATH.scrollToUp=function(){$(window).on('scroll',function(){if($(this).scrollTop()>500){$('.scrollup').fadeIn();}else{$('.scrollup').fadeOut();}});$('.scrollup').on("click",function(){$("html, body").animate({scrollTop:0},800);return false;});}
$(function(){PATH.MenuClose();PATH.stellerJs();PATH.ssPopUp();PATH.videoModal();PATH.scrollToUp();});$(window).on("scroll",function(){});$(window).on('load',function(){PATH.preLoader();PATH.masonaryGrid();});$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=60){$(".header-nav").addClass("nav-sticky");}else{$(".header-nav").removeClass("nav-sticky");}});var type1=window.location.hash.substr(1);if(type1!=""){$('html,body').animate({scrollTop:$("#"+type1).offset().top-70},1500);}
$('.nav-link').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top-70},1500);return false;}}});})(jQuery);