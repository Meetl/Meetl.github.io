<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/assets/favicon.ico");
        document.title = '╭(°A°`)╮走啥啊 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/assets/favicon.ico");
        document.title = '(ฅ>ω<*ฅ)欢迎光临~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});