/*!
 * jquery.passMeter v1.0.3
 * measure password strength
 * https://github.com/RuanAragao/passMeter
 * MIT License
 * by Ruan Aragão
 */
;(function ( $, window, document, undefined ) {
    $.passMeter = function(settings){
        var config = {
            // Config local
            id_password     : '#password',
            id_result       : '#password-result',

            // Msg level pass
            msg_bad         : 'Bad',
            msg_low         : 'Low',
            msg_good        : 'Good',
            msg_strong      : 'Strong',

            // configurable length
            min_chars       : 6,
            min_chars_boost : 8,

            // configurable strength check
            min_strength_good : 2,
            min_strength_strong : 3,

            // configurable regex for special chars
            regex_special_chars : /[!%&@#$\^*?_~]/,

			// at least 2 special chars
            regex_advanced : /.*[!%&@#$\^*?_~].*[!%&@#$\^*?_~].*/,

            // callback function
            callback : null,

        };
        if (settings){settings = jQuery.extend(config, settings);}

        // variables
        var nodePassword   = $(settings.id_password);
        var nodeResult = $(settings.id_result);

        // all our potential results for css
        var resultClasses = Array ('bad', 'low', 'good', 'strong' );

        nodePassword.keyup(function(){
        		var message = checkStrength(nodePassword.val());
                nodeResult.html(message);
				if (settings.callback !== null){
					settings.callback(message);
				}
            });

            function checkStrength(password){

                //initial force
                var strength = 0;

                // remove existing label
                for (var i = 0, len = resultClasses.length; i < len; i++ ) {
                    nodePassword.removeClass( "passMeter-" + resultClasses[i] );
                    nodeResult.removeClass( "passMeter-" + resultClasses[i] );
                }

                //if password length is less than settings.min_chars, return message.
                if (password.length < settings.min_chars) {
                    nodePassword.addClass('passMeter-bad');
                    nodeResult.addClass('passMeter-bad');
                    return settings.msg_bad;
                }

                //if password length is greater than settings.min_chars, go.

                //if password length is settings.min_chars_boost characters or more, increase force value.
                if (password.length >= settings.min_chars_boost) strength += 1;

                //if password contains both lower and uppercase characters, increase strength value
                if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;

                //if it has numbers and characters, increase strength value
                if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1 ;

                //if it has one special character, increase strength value
                if (password.match(settings.regex_special_chars)) strength += 1;

                //if it matches the advanced regex, increase strength value
                if (password.match(settings.regex_advanced)) strength += 1;

                console.log(password.length, strength);

                //now we have calculated strength value, we can return messages

                //if value is less than 2
                if (strength < settings.min_strength_good ) {
                    nodePassword.addClass('passMeter-low');
                    nodeResult.addClass('passMeter-low');
                    return settings.msg_low;
                } else if ((strength >= settings.min_strength_good) && (strength < settings.min_strength_strong) ) {
                    nodePassword.addClass('passMeter-good');
                    nodeResult.addClass('passMeter-good');
                    return settings.msg_good;
                } else {
                    nodePassword.addClass('passMeter-strong');
                    nodeResult.addClass('passMeter-strong');
                    return settings.msg_strong;
                }
            }
        return this;
    };
})( jQuery, window, document );
