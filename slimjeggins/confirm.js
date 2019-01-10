$(document).ready(function() {
    var url = location.href,
        id = $.url(url).param('id'),
        name = $.cookie("name"),
        phone = $.cookie("phone"),
        returnurl = $.cookie("return");
    $('#data-id').text(id);
    $('#data-name').text(name);
    $('#data-phone').text(phone);
    $('#data-returnurl').attr('href', returnurl);
    //yacounter.reachGoal('counter');
});