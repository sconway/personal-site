(function() {

    var colorBlocks = function() {

		var colors = [ "#DD0000", "#FF9700", "#0C5AA6", "#00CC00" ];

		var colorBlock = function(el) {

			var bgColor = colors[ Math.floor(Math.random() * colors.length) ],
				index   = colors.indexOf(bgColor);

			colors.splice(index, 1);
			$(el).css("box-shadow", "0 0 10px" + bgColor);
		};

		colorBlock('#cube1 div');
		colorBlock('#cube2 div');
		colorBlock('#cube3 div');
		colorBlock('#cube4 div');
	};

	colorBlocks();

}());