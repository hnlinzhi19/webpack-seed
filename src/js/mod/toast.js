
var toastTimer = null;

export function Toast(str, callback, time) {
    var elemToast = $('#js-page-toast');
    elemToast.html(str).addClass('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        elemToast.html('').removeClass('show');
        callback && callback();
    }, time || 2000);
}
