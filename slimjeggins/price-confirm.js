var country = $.url().param('country');

if (country === 'RU'){
    $('.price__cur').html('руб.');
    $('.new__price_val_swarovski').html('945');
    $('.old__price_val_swarovski').html('3470');
    $('.new__price_val_turbo').html('590');
    $('.old__price_val_turbo').html('1120');
    $('.new__price_val_botox').html('640');
    $('.old__price_val_botox').html('1960');
}

if (country === 'KZ'){
    $('.price__cur').html('тнг.');
    $('.new__price_val_swarovski').html('5250');
    $('.old__price_val_swarovski').html('19400');
    $('.new__price_val_turbo').html('3200');
    $('.old__price_val_turbo').html('6150');
    $('.new__price_val_botox').html('3550');
    $('.old__price_val_botox').html('10750');
}
