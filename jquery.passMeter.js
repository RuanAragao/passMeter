;(function ( $, window, document, undefined ) {
    $.passMeter = function(settings){
        var config = {
            // Config local
            'id_password'     :   '#password',
            'id_result'   :   '#password-result',

            // Msg level pass
            'msg_bad'   	:   'Bad',
            'msg_low'       :   'Low',
            'msg_good'      :   'Good',
            'msg_strong'    :   'Strong'

        };
        if (settings){settings = jQuery.extend(config, settings);}

        // variables
        var nodePassword   = $(settings.id_password);
        var nodeResult = $(settings.id_result);

		// all our potential results for css
		var resultClasses = Array ( 'bad', 'low', 'good', 'strong' );

        nodePassword.keyup(function(){
                nodeResult.html(checkStrength(nodePassword.val()));
            });

            function checkStrength(password){

                //initial force
                var strength = 0;

                // remove existing label
				for (var i = 0, len = resultClasses.length; i < len; i++ ) {
					nodePassword.removeClass( "passMeter-" + resultClasses[i] );
					nodeResult.removeClass( "passMeter-" + resultClasses[i] );
				}


                //if password length is less than 6, return message.
                if (password.length < 6) {
                    nodePassword.addClass('passMeter-bad')
                    nodeResult.addClass('passMeter-bad')
                    return settings.msg_bad;
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
                    nodePassword.addClass('passMeter-low')
                    nodeResult.addClass('passMeter-low')
                    return settings.msg_low;
                } else if (strength == 2 ) {
                    nodePassword.addClass('passMeter-good')
                    nodeResult.addClass('passMeter-good')
                    return settings.msg_good;
                } else {
                    nodePassword.addClass('passMeter-strong')
                    nodeResult.addClass('passMeter-strong')
                    return settings.msg_strong;
                }
            }
        return this;
    };
})( jQuery, window, document );
