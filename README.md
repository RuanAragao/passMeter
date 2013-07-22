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
			'id_password'     :   '#password',
			'id_result'   	:   '#password-result',

			// Msg level pass
			'msg_bad'      :   'Nooooo',
			'msg_low'       :   'More',
			'msg_good'      :   'Okay',
			'msg_strong'    :   'Yeah!'
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


## Status

This is a fork of `https://github.com/RuanAragao/passMeter`

The original works great, except it hardcoded all the controls and had some unnecessary jquery calls..



## Example

#### [demo/](https://github.com/jvanasco/passMeter/tree/master/demo)
*Contains a simple HTML file to demonstrate the usage.*

## License

MIT License
