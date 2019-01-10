$(document).ready(function() {
        var url = location.href;
        var query=$.url(url).attr().query;
        
        link = $.url(url).param('url');
        
        if (typeof link==='undefined') {
            link='http://cleanforte.ru/v1/?'+query;
        } else {
            if (link.indexOf('?')<0) {link=link+'?';}
            link=link+query;
        }
        
        bot_link=link+'&allow=0';
        url_comebacker=link.split("/").join("\/");
       
        
        $('a[class!="js_target_link"]').attr('href',link);
        $('a.js_target_link').attr('href',bot_link);
        
        
        
});