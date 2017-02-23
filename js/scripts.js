$(document).ready(function () {
	$("form#userInput").submit(function (event) {
		event.preventDefault();
		var num = parseInt($("#input1").val());
		var field = [];
		for (var index = 1; index <= num; index++) {
			if (index % 15 === 0) {
				field.push("pingpong")
			} else if (index % 5 === 0) {
				field.push("pong")
			} else if (index % 3 === 0) {
				field.push("ping")
			} else {
				field.push(index)
			}
		}
		for (counter = 0; counter < num; counter++) {
			var ind = field[counter];
			$("ul#results").append("<li>" + ind + "</li>");
		}
	});
});
