var FlexIFrame = {
    get: function(id)
    {
        var iframe = document.getElementById(id);
        if(!iframe)
            return FlexIFrame.create(id);
        return iframe;
    },
 
    create: function(id)
    {
        var iframe = document.createElement('iframe');
        iframe.id = id;
        iframe.frameborder = 0;
        iframe.style.position = "absolute";
		
        iframe.style.zIndex = 10000;
        iframe.style.border = "none";
        document.body.insertBefore(iframe, document.body.firstChild );
        return iframe;
    },
 
    resize: function(id, width, height)
    {
        var iframe = FlexIFrame.get(id);
        iframe.style.width = width + "px";
        iframe.style.height = height + "px";
    },
 
    move: function(id, x, y)
    {
        var iframe = FlexIFrame.get(id);
        iframe.style.left = x + "px";
        iframe.style.top = y + "px";
    },
 
    navigate: function(id, url)
    {
        var iframe = FlexIFrame.get(id);
        iframe.src = url;
    },
 
    visibility: function(id, visible)
    {
        var iframe = FlexIFrame.get(id);
        iframe.style.display = visible ? "block" : "none";
    },
	
	remove: function (id)
	{
		var iframe = document.getElementById(id);
        var old = (iframe.parentNode).removeChild(iframe);
	},
	
	scalecontent: function (id, z)
	{
		var iframe = document.getElementById(id);
		var y=(iframe.contentWindow || iframe.contentDocument);
		if (y.document)
			y=y.document;
		b=y.getElementsByTagName('body')[0];
		s="zoom:"+z+"; -moz-transform: scale("+z+"); -moz-transform-origin: 0 0;";
        if (typeof b.setAttribute === "function") 
		{
			b.setAttribute('style', s);
		}
		else if(typeof b.style.setAttribute === "object")
		{	
			b.style.setAttribute('cssText', s);
		}
	}
}