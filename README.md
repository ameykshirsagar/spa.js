# spa.js
This is the simplest library for implementing single page applications. Works well with all web based and mobile browsers. 

###Directions

  - Add spa.css at the top before body tag
  - Add spa.js after the body tag.
  - Add divs as pages having class as 'page'. Put the attribute data-target as the page's unique identifier for navigation.
  - Now to browse between those pages just add anchor links with #page-you-where-you-want-to-go. 

###Example
  ```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="spa.css">
	<title></title>
</head>
<body>
	<div class="page" data-target="home">
		this is a home page
	</div>
	<div class="page" data-target="page2">
		this is a page2
	</div>
</body>
<script type="text/javascript" src="spa.js"></script>
</html>
  ```
