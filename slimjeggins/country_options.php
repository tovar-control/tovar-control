<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>    
<?
$kz_codes=array(28,379, 363, 383, '383-6938', 364,'383-7073', 378,365,375,373,374,366,367,368,362,369,370,372);
$ua_codes=array(196,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,274,275,276,277,278,279,280,281);
$md_codes=array(191);

$country=isset($_GET['country'])?strtoupper($_GET['country']):'';

if (empty($country)) {
    $code=$_GET['subid3'];
    $country='RU';
    if (in_array($code,$kz_codes)) {$country='KZ';}
    if (in_array($code,$ua_codes)) {$country='UA';}
}
if ($country=='KZ')  {$kz_selected='selected="selected"';} else {$kz_selected='';}
if ($country=='UA')  {$ua_selected='selected="selected"';} else {$ua_selected='';}
if ($country=='MD')  {$md_selected='selected="selected"';} else {$md_selected='';}


echo "<option value=\"RU\">Россия</option>";
echo "<option value=\"KZ\" $kz_selected>Казахстан</option>";
//echo "<option value=\"MD\" $md_selected>Молдова</option>";
//echo "<option value=\"UA\" $ua_selected>Украина</option>";

?>
<script>


$(function () {
    change=0;
    $("select").change(function () {
        
        if (change==0) updatePrices(this);
    }).change();
    
    function updatePrices(item) {
     change=1;

     $(item.children).each(function () {
       if(this.selected) sel= $(this).val();
     });
     
     if (typeof sel==='undefined') {sel='RU';}
     

     price_class=$('.price_ua, .price_kz, .price_ru, .price_md');
     price_class.removeClass('price_ru');
     price_class.removeClass('price_kz');
     price_class.removeClass('price_ua');
     price_class.removeClass('price_md');
     
     if (sel=='RU') {
        $('.old_price_val_').html('2 990');
        $('.old_price_val').html('2990');
        $('.old_price_cur').html('руб');
        $('.old_price_sig').html('&#8381;');
        $('.new_price_val_').html('1 290');
        $('.new_price_val').html('1290');
        $('.new_price_val_1').html('1490');
        $('.new_price_val_2').html('1690');
        $('.new_price_cur').html('руб');
        $('.new_price_sig').html('&#8381;');
        $('.discount_now').html('1700');
        $('.discount_1').html('1500');
        $('.discount_2').html('1300');
        
        
        price_class.addClass('price_ru');
        
        $('select').val('RU').trigger('change');
        
     }   
     
     if (sel=='KZ') {
        $('.old_price_val').html('10950');
        $('.old_price_val_').html('10 950');
        $('.old_price_cur').html('тнг');
        $('.old_price_sig').html('тнг');
        $('.new_price_val').html('6999');
        $('.new_price_val_1').html('7999');
        $('.new_price_val_2').html('8999');
        $('.new_price_val_').html('6 999');
        $('.new_price_cur').html('тнг');
        $('.new_price_sig').html('тнг');
        $('.discount_now').html('3951');
        $('.discount_1').html('2951');
        $('.discount_2').html('1951');

        $("option").removeAttr('selected');
        
        price_class.addClass('price_kz');

        $('select').val('KZ').trigger('change');
     }   
     
     if (sel=='UA') {
        $('.old_price_val').html('928');
        $('.old_price_cur').html('грн');
        $('.old_price_sig').html('грн');
        $('.new_price_val').html('399');
        $('.new_price_cur').html('грн');
        $('.new_price_sig').html('грн');
        //$("option").removeAttr('selected');
        $('select').val('UA').trigger('change');
        //$("option[value='UA']").attr("selected", "selected");
     }    
     
     if (sel=='MD') {
        $('.old_price_val').html('665');
        $('.old_price_cur').html('лей');
        $('.old_price_sig').html('лей');
        $('.new_price_val').html('399');
        $('.new_price_cur').html('лей');
        $('.new_price_sig').html('лей');
        $('select').val(sel).trigger('change');
     }     

  change=0;   
 }
});
</script>
