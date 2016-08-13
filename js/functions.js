jQuery(document).ready(function($) {
   // get height of parallax container
   var pContainerHeight = $('.suit-box').height();

   $(window).scroll(function() {
      // scrolled distance from top
      var wScroll = $(this).scrollTop();
      var wWidth = $(window).width() > 600;
      // apply parallax effects only if the header is visible on screen and screen width is desktop
      if (wScroll <= pContainerHeight && wWidth) {
         $('.logo').css({
            'transform': 'translate(0px,' + wScroll / 2 + '%)'
         });
         $('.fore-suit').css({
            'transform': 'translate(0px, -' + wScroll / 40 + '%)'
         });
      }
      // gallery items animation. Apply only on large screens.
      if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2) && wWidth) {
         $('.clothes-pics figure').each(function(i) {
            setTimeout(function() {
               $('.clothes-pics figure').eq(i).addClass('is-showing');
            }, 150 * (i + 1));
         });
      }
      // promoscope round photo
      if (wScroll > $('.large-window').offset().top - $(window).height() && wWidth) {
         // repeat the background while scrolling
         $('.large-window').css({
            'background-position': 'center ' + (wScroll - $('.large-window').offset().top) + 'px'
         });
         // fade in the gray background
         var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 6);
         $('.window-tint').css({ 'opacity': opacity });
      }
      // blog posts
      if (wScroll > $('.blog-posts').offset().top - $(window).height() && wWidth) {

         var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 400);

         $('.post-1').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
         $('.post-3').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
      }

   });

});
