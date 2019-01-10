var yandex={
  "v1":51363415,
  "v2":51363439,
  "v3":51363454,
  "v4":51363469,
  "v5":51363493,
  "v6":51363520,
  "v7":51363538
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
    .replace('prelp','')
    .replace('confirm.html','')
    .replace('149','');
}

console.log(site);


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
