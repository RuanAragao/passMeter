jQuery plugin passMeter
========================
*Helping in delicated moment.*

## What does this do?
- PassMeter analyzes entered password strings and helps you alert the user with the strength.
- The plugin works in real-time as the user types in his password.
- Along with changing the color, a small text can also be displayed.
- Text and decoration configurable.


## How does it do it ?

1. Call the plugin

* Specify the `id` of the password field and a result element.
* Specify custom messages for `bad` , `weak`, `good`, and `strong`.

2. The plugin updates the contents of `id_result` with the result message, and changes the css of the `id_result` and `id_password` to reflect the current status.

* passMeter-bad
* passMeter-weak
* passMeter-good
* passMeter-strong

You can write css to target `.passMeter-bad` or specifically `#password .passMeter-bad`


## Usage

1. Include jQuery:

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.passMeter.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$(document).ready(function(){
		$.passMeter({
			// Config local
			id_password     :   '#password',
			id_resul'   	:   '#password-result',

			// Msg level pass
			msg_bad       :   'Nooooo',
			msg_low       :   'More',
			msg_good      :   'Okay',
			msg_strong    :   'Yeah!'
		});
	)}
	```

4. Write some css

	<style type="text/css">
	/* style the password meter */
	  .passMeter-bad{color:#FF0000;}
	  .passMeter-low{color:#E66C2C;}
	  .passMeter-good{color:#2D98F3;}
	  .passMeter-strong{color:#006400;}
	</style>


## Advanced Customization

There are some advanced customization options for the configuration.

The "special characters" were pulled out into a configurable regex, because some backend systems may not support the default options.

These are the defaults:

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


min_chars
Minimum strength to display `msg_low`.  Lower than this, and `msg_bad` appears

min_chars_boost
If the password is at least this long, the strength gets an extra point

min_strength_good
Minimum strength to display `msg_good`

min_strength_strong
Minimum strength to display `msg_strong`

regex_special_chars
If the password has a special char, the strength gets an extra point

regex_advanced
If the password matches this (default 1 or more special chars), the strength gets an extra point

callback
If defined, this will be run after checking the password.  It will be called with the `message` as the only argument.
This can allow you to customize actions for each strength level.

callback example:

	$.passMeter({
		...
		callback: function(message){
		  console.log(message == this.msg_bad);
		}
		...
	});



## Example

#### [demo/](https://github.com/jvanasco/passMeter/tree/master/demo)
*Contains a simple HTML file to demonstrate the usage.*

## License

MIT License
