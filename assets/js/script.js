  $('#lien').click(function(){
    // var card = $(this).attr('id'); // Page cible
      $('html, body').animate( { scrollTop: $('#intro').offset().top }, 800 ); // Go
      return false;
});

//     $('#chevron').click(function(){
//     var intro = $(this).attr('href'); // Page cible
//       $('html, body').animate( { scrollTop: $(intro).offset().top }, 800 ); // Go
//       return false;
// });

// $("html, body").animate({ scrollTop: $("#myID").scrollTop() }, 1000);