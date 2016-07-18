'use strict'
$(document).ready( function(){
  console.log('color.js has loaded');

  $('.input-number').click(function(e){
    e.preventDefault();
    var num         = $('#quantity-num');
    var type        = $(this).attr('data-type');
    var currentVal  = parseInt(num.val());
    if (type === 'plus') {
      currentVal++;
      
    }else {
      if (currentVal <= 0) {
        $('#minus')[0].setAttribute('disabled','disabled')
      }else{
        currentVal--;
      }
    }
    $('#quantity-num').val(currentVal)
    $('#quantity').val('quantity(' + currentVal + ')');
  });
})
