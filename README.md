jQuery plugin passMeter
========================
*Helping in delicated moment.*

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
