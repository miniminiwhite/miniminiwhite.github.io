<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/TEP.ico");
        document.title = '页面崩溃啦！ Σ(° △ °|||)';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon-16x16.png");
        document.title = '突然又好了~ (*/ω\\*)';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
