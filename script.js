$(document).ready(function () {
$('.previous').click(function (){

  $('.previous').removeClass('current')
  $('.previous').css('border', 'none')

  $('.current-image').html($(this).html())
  $(this).addClass('current')
  $(this).css('border', '4px solid black')
  
})
 

})


