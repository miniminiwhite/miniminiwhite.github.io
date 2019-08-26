<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
var switched = false;

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        if (Math.random() > 0.7) {
            clearTimeout(titleTime);
            titleTime = setTimeout(function () {
                $('[rel="icon"]').attr('href', "/images");
                document.title = '页面崩溃啦！ Σ(° △ °|||)';
                clearTimeout(titleTime);
            }, 3000);
            switched = true;
        }
    }
    else if (switched) {
        document.title = '突然又好了~ (*/ω\\*)';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
            $('[rel="icon"]').attr('href', "/images/favicon-16x16.png");
        }, 1000);
        switched = false;
    }
});
