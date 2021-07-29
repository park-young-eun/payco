$(function(){

    // 햄버거메뉴
    $('.menu_btn').click(function(){
        $('.nav').fadeIn();
    });

    // 닫기버튼
    $('.close').click(function(){
        $('.nav').fadeOut();
    });

    $('.nav nav>ul>li').click(function(){
        $('.nav nav >ul>li').removeClass('active');
        $(this).addClass('active');
        $('.sub').stop().slideUp();
        $(this).find('.sub').stop().slideToggle();
    });

    var swiper = new Swiper(".mainswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction:false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // 탭메뉴
    $('.tab_content>div').hide();
    $('.con1').show();
    $('.t1').addClass('active');
    $('.t1').click(function(){
        $('.con1').fadeIn();
        $('.con2').hide();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
    });
    $('.t2').click(function(){
        $('.con1').hide();
        $('.con2').fadeIn();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
    });

    // gallery 이미지 갤러리
    var
         // ACTIVITY INDICATOR

         activityIndicatorOn = function()
         {
            $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
         },
         activityIndicatorOff = function()
         {
            $( '#imagelightbox-loading' ).remove();
         },


         // OVERLAY

         overlayOn = function()
         {
            $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
         },
         overlayOff = function()
         {
            $( '#imagelightbox-overlay' ).remove();
         },


         // CLOSE BUTTON

         closeButtonOn = function( instance )
         {
            $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
         },
         closeButtonOff = function()
         {
            $( '#imagelightbox-close' ).remove();
         }

      arrowsOn = function( instance, selector )
         {
            var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

            $arrows.appendTo( 'body' );

            $arrows.on( 'click touchend', function( e )
            {
               e.preventDefault();

               var $this   = $( this ),
                  $target   = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                  index   = $target.index( selector );

               if( $this.hasClass( 'imagelightbox-arrow-left' ) )
               {
                  index = index - 1;
                  if( !$( selector ).eq( index ).length )
                     index = $( selector ).length;
               }
               else
               {
                  index = index + 1;
                  if( !$( selector ).eq( index ).length )
                     index = 0;
               }

               instance.switchImageLightbox( index );
               return false;
            });
         },
         arrowsOff = function()
         {
            $( '.imagelightbox-arrow' ).remove();
         };
      
      var selectorF = 'a[data-imagelightbox="f"]';
        var instanceF = $( selectorF ).imageLightbox(
         {
            onStart:      function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
            onEnd:         function() { overlayOff();  closeButtonOff(); arrowsOff(); activityIndicatorOff(); },
            onLoadEnd:       function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
         });
});