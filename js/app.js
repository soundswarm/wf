$(document).ready(function() {      
   //check if age ID cookie exists
   if($.cookie('warflagbeer.com')) {
      $('#ID').hide();
   } else {
      //check user age
      $('#content').hide();
      $('#ID').fadeIn();
      
      //if user clicks yes, display content
      $('.yes').on('click', function() {
         //set cookie
         $.cookie('warflagbeer.com','0',{expires: 30});
         //display content
         
         $('#ID').hide();
         $('#content').show();
         $('.google-maps').html('<iframe src="https://www.google.com/maps/d/embed?mid=z1AgUqVx4gRo.kt_HDdj9rA1w" width="640" height="480"></iframe>').css('display', 'block');
         
      });

      //if user click no, do nothing
   };

   
   //photo carousel
   $('.carousel').carousel({
    pause: true,
    interval: false
	});
   


});