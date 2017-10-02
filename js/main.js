$(document).ready(function(){

  $('.item').keydown(function(e){
    if(e.which == 13){
      var item = $('.item').val();
      $('ul').append('<li>'+ item +'</li>');
      $('.item').val("");
    }
  });

  $('.addItem').on('click',function(){
    var item = $('input').val();
    $('ul').append('<li>'+ item +'</li>');
    $('.item').val("");
  });

  $('.removeAll').on('click',function(){
    $('ul').empty();
  });

  $('.removeSome').on('click',function(){
    $('.selected').remove();
  });

  $('ul').on('click','li',function(){
    $(this).toggleClass('selected');
  });

  $('ul').on('click','.selected .remove',function(){
    $(this).parent().remove();
  });

});
