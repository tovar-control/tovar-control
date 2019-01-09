var outtt = 0;


$(document).ready(function() {

    $('.form-link').click(function() {
        $('html, body').animate({ scrollTop: $('.form-block-bottom').offset().top }, 600);
        return false;
    });
    $('.confident-link').click(function() {
        $('.hidden-conf').show();
        if ($(window).height() < 760) {
            $('.conf-info').css({
                'height': ($(window).height() - 120),
                'overflow-y': 'scroll'
            });
        };
    });
    $('.close-conf').click(function() {
        $('.hidden-conf').hide();
    });
    if ($('select').length) {} else {
        $('.c-s').css({ 'display': 'none' })
    }
    GetCount();


    $('body').mouseleave(function(){
 if(outtt==0) {
    $('#modalForm').arcticmodal(); 
    outtt=2;
 }
});


    $('.more-link').click(function() {
        $('.block9 .item4').show();
        $('.block9 .item5').show();
        $('.block9 .item6').show();
        $('.block9 .back-link').show();
        $('.block9 .more-link').hide();

        return false;
    });

    $('.back-link').click(function() {
        $('.block9 .item4').hide();
        $('.block9 .item5').hide();
        $('.block9 .item6').hide();
        $('.block9 .back-link').hide();
        $('.block9 .more-link').show();

        return false;
    });

    $('.calc-form input').change(function() {
        calc();
    });

    $('.calc-form input').keyup(function() {
        calc();
    });


});

var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 30 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    amount = timerSec;
    timerSec = timerSec - 1;
    dateNow = new Date();
    delete dateNow;
    if (amount < 0) {
        $('.hours').html('00');
        $('.mins').html('00');
        $('.secs').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        days = 0;
        hours = 0;
        mins = Math.floor(amount / 60);
        secs = Math.floor(amount - mins * 60);
        if (days < 10) days = '0' + hours;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        $('.hours').html(hours);
        $('.mins').html(mins);
        $('.secs').html(secs);
        setTimeout("GetCount()", 1000);
    }
}

function to_form() {
    $('#modalForm').arcticmodal();
}
$(document).ready(function() {

    var i = 0;

    function yved() {
        i = 1;
        $('.yved:nth-child(' + i + ')').fadeIn(500).delay(7000).fadeOut(500); //В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
    }
    setTimeout(function() {
        setInterval(
            function() {
                i = i + 1;
                if (i > 10) i = 1; //10 - количество уведомлений
                $('.yved:nth-child(' + i + ')').fadeIn(500).delay(7000).fadeOut(500); //В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
            }, 15000); //25000 - задержка в мс меду показами уведомлений
        yved();
    }, 5000); //10000 - задержка в мс перед показом первого уведомления
    
});


function calc() {
    var age = $('.calc-form .inp1').val();
    var height2 = $('.calc-form .inp2').val();
    var weight2 = $('.calc-form .inp3').val();

    age = parseInt(age.replace(/\D+/g, ""));
    height2 = parseInt(height2.replace(/\D+/g, ""));
    weight2 = parseInt(weight2.replace(/\D+/g, ""));

    console.log(age);

    if (age > 0 && height2 > 0 && weight2 > 0) {
        if (weight2 < 55) {
            $('.calc-form .line1').attr('style', 'visibility: display;');
            $('.calc-form .line2').attr('style', 'visibility: display;');
            $('.calc-form .line1').html('<span class="green">У вас нормальный вес</span>');
            $('.calc-form .line2').html('Но если вы склонны к полноте остерегайтесь последствий!');
        } else {
            if (weight2 >= 55 && weight2 < 70) {
                $('.calc-form .line1').attr('style', 'visibility: display;');
                $('.calc-form .line2').attr('style', 'visibility: display;');
                $('.calc-form .line1').html('Ожирение<br>1-й степени');
                $('.calc-form .line2').html('Немедленно начните лечение!');
            } else {
                if (weight2 >= 70 && weight2 < 80) {
                    $('.calc-form .line1').attr('style', 'visibility: display;');
                    $('.calc-form .line2').attr('style', 'visibility: display;');
                    $('.calc-form .line1').html('Ожирение<br>2-й степени');
                    $('.calc-form .line2').html('Немедленно начните лечение!');
                } else {
                if (weight2 >= 80 ) {
                    $('.calc-form .line1').attr('style', 'visibility: display;');
                    $('.calc-form .line2').attr('style', 'visibility: display;');
                    $('.calc-form .line1').html('Ожирение<br>3-й степени');
                    $('.calc-form .line2').html('Немедленно начните лечение!');
                }
            }
            }
        }
    }

}
