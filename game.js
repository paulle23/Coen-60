function welcome(){
	let text,text1;
	text = name + ", welcome to rock paper scissors";
	text1 = name + " vs Computer";
	document.getElementById('demo').innerHTML = text;
	document.getElementById('gamename').innerHTML = text1;
}
function play(){
	var lengths = games.length;
	var x = Math.floor(Math.random() * 3);
	computerGen = games[x];
	document.getElementById('computer').innerHTML = computerGen;
}
function game(){
	var choice = document.getElementsByName('choice');
	for (var i = 0; i < choice.length; i++) {
    	if (choice[i].checked) {//checks the checked box
    		val = choice[i].value; 
    		break;
    	}
  	}
}
function compare(){
	let text,text1,text2,text3;
	if (val == "Rock" ) {
		rock++;
		if (computerGen == "Rock" ) {
			text = "<span class='highlight'>tie</span>";
			document.getElementById('result').innerHTML = text;
		}
		else if (computerGen == "Paper" ) {
			text = "<span class='highlight1'>lose</span>";
			document.getElementById('result').innerHTML = text;
		}
		else if (computerGen == "Scissors" ) {
			text = "<span class='highlight2'>win</span>";
			win++;
			document.getElementById('result').innerHTML = text;
		}	
  	} 
  	if (val == "Paper" ) {
  		paper++;
		if (computerGen == "Rock" ) {
			text = "<span class='highlight2'>win</span>";
			win++;
			document.getElementById('result').innerHTML = text;
		}
		else if (computerGen == "Paper" ) {
			text = "<span class='highlight'>tie</span>";
			document.getElementById('result').innerHTML = text;
		}
		else if (computerGen == "Scissors" ) {
			text = "<span class='highlight1'>lose</span>";
			document.getElementById('result').innerHTML = text;
		}	
  	} 
  	if (val == "Scissors" ) {
  		scissor++;
		if (computerGen == "Rock" ) {
			text = "<span class='highlight1'>lose</span>";
			document.getElementById('result').innerHTML = text;
		}
		else if (computerGen == "Paper" ) {
			text = "<span class='highlight2'>win</span>";
			win++;
			document.getElementById('result').innerHTML = text;
		}
		else if (computerGen == "Scissors" ) {
			text = "<span class='highlight'>tie</span>";
			document.getElementById('result').innerHTML = text;
		}
  	}
  	out.push(text); 
  	document.getElementById('demo1').innerHTML = out.join(" ");
  	text1 = "You have played total: " + times + " time(s)!";
  	text2 = "Rock: " + rock + " times & " + "Paper: " + paper + " times & " + "Scissor: " + scissor + " times"; 
  	avg = win/times;
  	avg = avg.toFixed(2);
  	text3 = "You have won " + win + " times and your win percentage is " + avg + " percent";
  	document.getElementById('number').innerHTML = text1;
  	document.getElementById('counting').innerHTML = text2;
  	document.getElementById('average').innerHTML = text3;
  	times++;
}