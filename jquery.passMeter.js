;(function ( $, window, document, undefined ) {
    $.passMeter = function(settings){
        var config = {
            // Config local
            'inputPass'     :   '#password',
            'localResult'   :   '#result',
            // Msg level pass
            'veryLow'   :   'Muito fraca',
            'low'       :   'Fraca',
            'good'      :   'Boa',
            'strong'    :   'Forte'
        };
        if (settings){settings = jQuery.extend(config, settings);}

        // variables
        var inputPass   = jQuery(settings.inputPass);
        var localResult = jQuery(settings.localResult);

        jQuery(inputPass).keyup(function(){
                jQuery(localResult).html(checkStrength(jQuery(inputPass).val()));
            });

            function checkStrength(password){

                //initial force
                var strength = 0;

                //if password length is less than 6, return message.
                if (password.length < 6) {
                    jQuery(inputPass).css('background','#FF0000');
                    return settings.veryLow;
                }

                //if password length is greater than 6, go.

                //if password length is 8 characters or more, increase force value.
                if (password.length > 7) strength += 1;

                //if password contains both lower and uppercase characters, increase strength value
                if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1;

                //if it has numbers and characters, increase strength value
                if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 ;

                //if it has one special character, increase strength value
                if (password.match(/([!,%,&,@,#,$,\^,*,?,_,~])/))  strength += 1;

                //if it has two special characters, increase strength value
                if (password.match(/(.*[!,%,&,@,#,$,\^,*,?,_,~].*[!,%,&,@,#,$,\^,*,?,_,~])/)) strength += 1;

                //now we have calculated strength value, we can return messages

                //if value is less than 2
                if (strength < 2 ) {
                    jQuery(inputPass).css('background','#E66C2C');
                    return settings.low;
                } else if (strength == 2 ) {
                    jQuery(inputPass).css('background','#2D98F3');
                    return settings.good;
                } else {
                    jQuery(inputPass).css('background','#006400');
                    return settings.strong;
                }
            }
        return this;
    };
})( jQuery, window, document );
