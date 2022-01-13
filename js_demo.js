//<script type="text/javascript">
			/*window.alert("hello!");*/
			var radius = window.prompt("Enter the radius");
			function printPI(){
				document.getElementById('demo').
				innerHTML = Math.PI;
			}
			function calculateArea(){
				document.getElementById('area').innerHTML = Math.PI * radius * radius;
			}
			function RandomGen(){
				var randValue = Math.random() * 10;
				document.getElementById('demo').innerHTML = Math.floor(randValue);
			}
		//</script> 
		