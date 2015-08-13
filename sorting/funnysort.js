var funnyCanvas = document.getElementById("funny");
var funnyContext = funnyCanvas.getContext('2d');

var funnyHeight = [];
var funnyWidth = 5;
var funnyColor = [];
var funnyTemp;
var funnyFrame = 0;
var funnyTotalFrames = 1;
var funnyTotalElements = 10;
var msPerFrame;

var COMMON_Y = 190;
var COMMON_X = 100;
var GAP = 3;



function animateFunny(){
	


	
	funnyTotalElements = parseInt(document.getElementById("numOfElements").value);
	msPerFrame = parseInt(document.getElementById("frameLength").value);
	
	funnyColor[funnyFrame] = new Array(funnyTotalElements);
	funnyHeight[funnyFrame] = new Array(funnyTotalElements);
	
	for (var i = 0; i < funnyTotalElements; i++){
		funnyColor[funnyFrame][i] = 'yellow';
		funnyHeight[funnyFrame][i] = parseInt(Math.random()*20+1)*9;
	}
	
	window.setInterval(drawGraph, msPerFrame);
	
	funnySort(0, funnyTotalElements);
	
	
	function drawGraph(){

		if (funnyFrame < funnyTotalFrames-1){
			funnyContext.clearRect(0, 0, 1000, 1000);
			for (var i = 0; i < funnyTotalElements; i++){
				funnyContext.beginPath();
				var xLoc = i*(funnyWidth+GAP) + COMMON_X;
				var yLoc = COMMON_Y - funnyHeight[funnyFrame][i];
				funnyContext.rect(xLoc, yLoc,funnyWidth, funnyHeight[funnyFrame][i]);
				funnyContext.fillStyle = funnyColor[funnyFrame][i];
				funnyContext.fill();
				funnyContext.linefunnyWidth = 1;
				funnyContext.strokeStyle = 'black';
				funnyContext.stroke();
			}
			funnyFrame++;
		}
		else{
			for (var i = 0; i < funnyTotalElements; i++){
				funnyContext.beginPath();
				var xLoc = i*(funnyWidth+GAP) + COMMON_X;
				var yLoc = COMMON_Y - funnyHeight[funnyFrame][i];
				funnyContext.rect(xLoc, yLoc,funnyWidth, funnyHeight[funnyFrame][i]);
				funnyContext.fillStyle = 'green';
				funnyContext.fill();
				funnyContext.linefunnyWidth = 1;
				funnyContext.strokeStyle = 'black';
				funnyContext.stroke();
			}
		}
	}
}
function funnySort (left, right){


	if (left < right){
		center = Math.floor((left + right)/2);
		funnySort (left, center);
		funnySort (center+1, right);
		funnyColor[funnyTotalFrames] = new Array(funnyTotalElements);
		funnyHeight[funnyTotalFrames] = new Array(funnyTotalElements);
		for (var i = 0; i < funnyTotalElements; i++){
			funnyColor[funnyTotalFrames][i] = 'yellow';
			funnyHeight[funnyTotalFrames][i] = funnyHeight[funnyTotalFrames-1][i];
		}
		funnyColor[funnyTotalFrames][center] = 'gray';
		funnyColor[funnyTotalFrames][right] = 'gray';
		if (funnyHeight[funnyTotalFrames-1][center] > funnyHeight[funnyTotalFrames-1][right]){
			funnyHeight[funnyTotalFrames][center] = funnyHeight[funnyTotalFrames-1][right];
			funnyHeight[funnyTotalFrames][right] = funnyHeight[funnyTotalFrames-1][center];
		}
		funnyTotalFrames++;
		funnySort (left, (right-1));
	}
	
	
}