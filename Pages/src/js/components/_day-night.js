$(document).ready(function(){
  $('.day__toggle').click(function(){
      $('.day__toggle').toggleClass('active')
      $('day').toggleClass('night')
  })
})