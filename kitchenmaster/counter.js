var yandex={
    "v1c":46326345,
    "v1c-mob":46326408,
    "v1ct-adp":47721385,
    "v2":46326447,
    "v2-mob":46326471,
    "v3":44400109,
    "v4":44548541,
    "v5":44766568,
    "v2t":44846614,
    "v6":44883163,
    "v7":44895700,
    "v8":44973424,
    "v9":44973511,
    "v10":44973592,
    "v11":44973649,
    "v12":44973820,
    "v13":44973928,
    "v14":44973988,
    "v15":45242457,
    "v16":45315177,
    "v17":46084140,
    "v18":46253868,
    "v19":46253919
};
var mailru={
    "v1c":2935560,
    "v1c-mob":2935562,
    "v2":2935563,
    "v2-mob":2935565,
    "v3":2894234,
    "v4":2897595,
    "v5":2902729,
    "v2t":2904621,
    "v6":2906086,
    "v7":2906387,
    "v8":2908254,
    "v9":2908257,
    "v10":2908260,
    "v11":2908263,
    "v12":2908264,
    "v13":2908265,
    "v14":2908267,
    "v15":2914122,
    "v16":2915817,
    "v17":2930959,
    "v18":2934147,
    "v19":2934149
};
var google={
    "v1c":"UA-107500278-23",
    "v1c-mob":"UA-107500278-24",
    "v2":"UA-107500278-25",
    "v2-mob":"UA-107500278-26",
    "v3":"UA-97020294-3",
    "v4":"UA-97020294-4",
    "v5":"UA-97020294-5",
    "v2t":"UA-97020294-6",
    "v6":"UA-97020294-10",
    "v7":"UA-97020294-11",
    "v8":"UA-97020294-13",
    "v9":"UA-97020294-14",
    "v10":"UA-97020294-15",
    "v11":"UA-97020294-16",
    "v12":"UA-97020294-17",
    "v13":"UA-97020294-18",
    "v14":"UA-97020294-19",
    "v15":"UA-97020294-25",
    "v16":"UA-97020294-26",
    "v17":"UA-97020294-33",
    "v18":"UA-97020294-36",
    "v19":"UA-97020294-37"
};


var site=document.location.pathname
.replace(/\/+/g,'')
.replace('landings','')
.replace('index.html','')
.replace('index2.html','')
.replace('confirm.html','') || $.url().param('version');
mailruId=mailru[site];
yandexId=yandex[site];
googleId=google[site];

(function(d, id){
    var _tmr = window._tmr || (window._tmr = []);
    _tmr.push({id: id, type: "pageView", start: (new Date()).getTime()});
    (function (d, w, id) {
        if (d.getElementById(id)) return;
        var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
        ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
        var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
        if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
    })(document, window, "topmailru-code");
    var r = d.createElement('img'), v = d.createElement('div'), n = d.createElement('noscript'); r.src = '//top-fwz1.mail.ru/counter?id='+id+';js=na';
    r.style = 'border:0;';r.height = 1;r.width = 1;v.style = 'position:absolute;left:-10000px;';v.appendChild(r);n.appendChild(v);d.body.appendChild(n);
})(document, mailruId);

(function (d, w, c, id) {
        (w[c] = w[c] || []).push(function() {
            try {
                var n='yaCounter'+id;
                w.n = new Ya.Metrika({
                    id:id,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks",yandexId);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://analytics.ksn.pw/analytics.js','ga');

  ga('create', googleId, 'auto');
  ga('send', 'pageview');
