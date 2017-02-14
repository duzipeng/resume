/**
 * Created by duzipeng on 17/2/12.
 */
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;

window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext('2d')) {
        var context = canvas.getContext('2d');
    } else {
        alert('当前浏览器不支持Canvas,请更换浏览器后再试');
    }
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context);
}

function render(ctx) {

}
