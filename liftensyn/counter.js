var yandex={
    "\/v1\/":42713834,
    "\/v1-mob\/":42713974,
    "\/v1-vk\/":44038564,
    "\/v2\/":44048804,
    "\/v3\/":44844994,
    "\/v4\/":45043466,
    "\/v5\/":45043541,
    "\/v6\/":45043595,
    "\/v7\/":45043625,
    "\/v8\/":45043685,
    "\/v9\/":45043706,
    "\/v10\/":45315042
};
var mailru={
    "\/v1\/":2860931,
    "\/v1-mob\/":2860935,
    "\/v1-vk\/":2889130,
    "\/v2\/":2889285,
    "\/v3\/":2904588,
    "\/v4\/":2909787,
    "\/v5\/":2909789,
    "\/v6\/":2909790,
    "\/v7\/":2909792,
    "\/v8\/":2909793,
    "\/v9\/":2909794,
    "\/v10\/":2915814
};
var google={
    "\/v1\/":"UA-91780222-1",
    "\/v1-mob\/":"UA-91780222-2",
    "\/v1-vk\/":"UA-91780222-3",
    "\/v2\/":"UA-91780222-4",
    "\/v3\/":"UA-91780222-5",
    "\/v4\/":"UA-91780222-6",
    "\/v5\/":"UA-91780222-7",
    "\/v6\/":"UA-91780222-8",
    "\/v7\/":"UA-91780222-9",
    "\/v8\/":"UA-91780222-10",
    "\/v9\/":"UA-91780222-11",
    "\/v10\/":"UA-91780222-19"
};


var site=document.location.pathname;
site=site.replace('index.html','');
site=site.replace('index2.html','');
site=site.replace('confirm.html','');

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
