(function($) {
    
    //1. MOBILE NAV
    var $navMain = $("#nav-main").html();
    $("#nav-mobile").html($navMain);
    
    $("#nav-trigger ").click(function(){
        if ($(this).children().is('.fa-bars')) {
            $(this).children().removeClass('fa-bars').addClass('fa-times');
        }else{
            $(this).children().removeClass('fa-times').addClass('fa-bars');
        }
        
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }

    });
    
    
    //2. ADD CLASS DARK TO EVERY EVEN JOBS WRAP CLASS
    $('.wrap').each(function (i) {
        if (i % 2 !== 0) $(this).addClass("dark");  
    });
    
    //MOBILE - PUT BEOGRAD CONTACT OFFICE ON TOP 
    $(window).bind("resize", listenWidth);
    var bgd = $('h5').eq(2).parent();
    function listenWidth( e ) {
        
        if($(window).width()<768){
            $('section.contact').prepend(bgd);
        } 
    }


    //3. MOBILE FOOTER REVERSE DIV ORDER
    var footer1 = $('.right').removeClass('large-device')
    $('footer').prepend(footer1);
    
    
    //4. MENU SCROLING
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
})(jQuery);

