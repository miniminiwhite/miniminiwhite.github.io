// 插入位置:
// ../../layout/_third-party/index.swig

// 崩溃欺骗
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
                switched = true;
            }, 3000);
        }
    } else if (switched) {
        document.title = '突然又好了~ (*/ω\\*)';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
            $('[rel="icon"]').attr('href', "/images/favicon-16x16.png");
            switched = false;
        }, 1000);
    }
});

// 建站时间统计
var currentTime = new Date();

function establishedSince() {
    var initialTime = new Date("August 25, 2019 12:00:00 GMT+08:00");
    var sections = {}
    currentTime.setTime(currentTime.getTime() + 500);
    sections['days'] = String(Math.floor((currentTime - initialTime) / 1000 / 60 / 60 / 24));
    sections['hours'] = String(Math.floor((currentTime - initialTime) / 1000 / 60 / 60 - 24 * sections['days']));
    sections['mins'] = String(Math.floor((currentTime - initialTime) / 1000 / 60 - 60 * sections['hours'] - 60 * 24 * sections['days']));
    sections['seconds'] = String(Math.round((currentTime - initialTime) / 1000 - 60 * sections['mins'] - 60 * 60 * sections['hours'] - 60 * 60 * 24 * sections['days']));
    for (var key in sections) {
        sections[key] = sections[key].length == 1? "0" + sections[key]: sections[key];
    }
    document.getElementById("site_duration").innerHTML = "小破站已运行" +
            sections['days'] + "天" +
            sections['hours'] + "小时" +
            sections['mins'] + "分" +
            sections['seconds'] + "秒";

}

setInterval(establishedSince, 500);
