(function(window, undefined){

    let txt = "";
    window.Asc.plugin.init = function(text)	{   
		txt = text;
        }
    window.Asc.plugin.button = function(id)
    {
        this.executeCommand("close", "");
    };
})(window, undefined);
