  $('.lien').click(function(){
    var card = $(this).attr('href'); // Page cible
      $('html, body').animate( { scrollTop: $(card).offset().top }, 1000 ); // Go
      return false;
});

