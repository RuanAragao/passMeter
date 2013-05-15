jQuery plugin passMeter
========================
*Helping in delicated moment.*

## WTF?
- PassMeter analyzes entered password strings and changes the color of the password field input based on the string's complexity.
- The plugin works in real-time as the user types in his password.
- Along with changing the color, a small text can also be displayed.
- All of the above are configurable (text and color).

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
	$.passMeter({
		// Config local
		'inputPass'     :   '#password',
		'localResult'   :   '#result',
		// Msg level pass
		'veryLow'   :   'Nooooo',
		'low'       :   'More',
		'good'      :   'Okay',
		'strong'    :   'Yeah!'
	});
	```
	
## Example

#### [demo/](https://github.com/RuanAragao/passMeter/tree/master/demo)
*Contains a simple HTML file to demonstrate the usage.*

#### [View online](http://ruanaragao.com/lab/jquery/passMeter/)

## License

[MIT License](https://github.com/RuanAragao/passMeter/blob/master/LICENSE)