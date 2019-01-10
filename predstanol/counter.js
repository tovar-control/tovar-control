var yandex={
    "\/v1\/":42878344,
    "\/v2\/":42878684,
    "\/v2-t\/":42879064,
    "\/v3\/":42879379,
    "\/v3-t\/":42879524
};
var mailru={
    "\/v1\/":2863310,
    "\/v2\/":2863315,
    "\/v2-t\/":2863320,
    "\/v3\/":2863322,
    "\/v3-t\/":2863324
};
var google={
    "\/v1\/":"UA-92185210-1",
    "\/v2\/":"UA-92185210-2",
    "\/v2-t\/":"UA-92185210-3",
    "\/v3\/":"UA-92185210-4",
    "\/v3-t\/":"UA-92185210-5"
};


var site=document.location.pathname;
site=site.replace('index.html','');
site=site.replace('index2.html','');
site=site.replace('confirm.html','');

mailruId=mailru[site];
yandexId=yandex[site];
googleId=google[site];

// if  (window.location.pathname.indexOf('pre_lp')>=0) {
//     mailruId=2768084;
//     yandexId=36739025;
//     googleId='UA-74427059-40';
// }



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
