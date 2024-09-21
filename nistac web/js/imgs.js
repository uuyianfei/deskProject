$(function() {
  $('.points').each(function() {
    var $points = $(this);
    $points.children('span').click(function() {
      // 获取当前点击的 span 的索引值
      var index = $(this).index();
      // 找到当前组中的 img 元素，并显示对应索引的图片
      $points.prev('.img_list').children('img').eq(index).removeClass('hidden').siblings().addClass('hidden');
      // 给当前点击的 span 添加 active 样式，移除其他 span 的 active 样式
      $(this).addClass('active').siblings().removeClass('active');
    });
  });
});


$(function() {
  $('.img_list li img').click(function() {
    var $clickedImg = $(this);
    var $imgList = $clickedImg.closest('.img_list');
    var $mainImg = $clickedImg.parent().parent().parent().prev()

    // 获取被点击图片的 src 和索引
    var clickedSrc = $clickedImg.attr('src');
    var clickedIndex = $clickedImg.parent().index();
    
    // 替换主图片的 src
    $mainImg.attr('src', clickedSrc);
    
    // 给被点击的图片添加 active 样式，移除其他图片的 active 样式
    $clickedImg.addClass('active').parent().siblings().find('img').removeClass('active');
  });
});
