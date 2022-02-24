$(function () {
  // include
  var includes = $('[data-include]');
  $.each(includes, function () {
    var file = 'https://new-arbeit.github.io/arbeit/html/include/' + $(this).data('include') + '.html'
    $(this).load(file);
  });


  // tab
  $('.tab_wrap li a').on('click', function(){
    $('.tab_wrap li').removeClass('on');
    $(this).parent().addClass('on');
    var tabIdx = $(this).parent().index();
    $('#tab_cont > div').hide();
    $('#tab_cont > div').eq(tabIdx).show();
  });

  // tab(market-orderbook)
  $('.orderbook_tab a').on('click', function(){
    $('.orderbook_tab a').removeClass('on');
    $(this).addClass('on');
    var obTabIdx = $(this).index();
    $('#orderbook_cont > div').hide();
    $('#orderbook_cont > div').eq(obTabIdx).show();
  });
});