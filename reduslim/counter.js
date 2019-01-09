var yandex={
    "v1":51120440,
    "v2":51121205,
    "v3":51121388,
    "v4":51120473,
    "v5":51120578,
    "v6":51120542,
    "v6o":51121085,
    "v7":51120806,
    "v8":51120953,
    "v9":51120902,
    "v9n":51121022,
    "v10":51121037,
    "v10c":51121127,
    "v11":51121256,
    "v13":51121319,
    "v14":51120749,
    "v15":51121280,
    "v16":51120302,
    "v17":51120509,
    "v18":51120680,
    "v19":51120860,
    "v20":51120992,
    "v21":51121076,
    "v22":51121160,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('149', '')

if(!site) {
    var site=document.location.pathname
    .replace(/\/+/g,'')
    .replace('index.html','')
    .replace('index2.html','')
    .replace('confirm.html','') || $.url().param('version')
    .replace('149','');
}


yandexId=yandex[site];

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