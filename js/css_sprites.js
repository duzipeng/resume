/**
 * Created by Administrator on 2016/11/9.
 */
$(function () {
    var iconH = $('.sprite').find('s').height(),
        triggerLi = $('.sprite').find('li');
    triggerLi.each(function () {
        var $this = $(this),
            $index = $this.index();
        // console.log($index);
        // console.log($index*iconH);
        $this.children('s').css('background-position', '0 -' +$index*iconH+ 'px');
        
        $this.hover(function () {
            $this.children('s').css('background-position', '-24px -' +$index*iconH+ 'px');
        }, function () {
            $this.children('s').css('background-position', '0 -' +$index*iconH+ 'px');
        })
    });
    // console.log(iconH);
})