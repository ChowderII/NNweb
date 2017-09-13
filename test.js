paper.install(window);
var tool1, tool2;

window.onload = function() {
	paper.setup('myCanvas');

	var path;
	function onMouseDown(event) {
		path = new Path();
		path.strokeColor = 'black';
		path.add(event.point);
	}

	tool1 = new Tool();
	tool1.onMouseDown = onMouseDown;

	tool1. onMouseDrag = function(event) {
		path.add(event.point);
	}

	tool2 = new Tool();
	tool2.minDistance = 20;
	tool2.onMouseDown = onMouseDown;

	tool2.onMouseDrag = function(event) {
		path.arcTo(event.point)
	}
}