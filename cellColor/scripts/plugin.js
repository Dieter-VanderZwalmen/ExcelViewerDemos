(function(window, undefined) {

	window.Asc.plugin.init = function() {
		var comment = "error"
		document.getElementById("buttonIDAddComment").onclick = function() {
			Asc.scope.textComment = comment; // export variable to plugin scope
			window.Asc.plugin.callCommand(function() {
				var oWorksheet = Api.GetActiveSheet();
				var ActiveCell = oWorksheet.ActiveCell;
				ActiveCell.AddComment(Asc.scope.textComment); // past comment in active cell
				ActiveCell.SetFillColor(Api.CreateColorFromRGB(0, 0, 250));
			}, true);
		};
	};
		
	window.Asc.plugin.button = function() {
		this.executeCommand("close", "");
	};

})(window, undefined);
