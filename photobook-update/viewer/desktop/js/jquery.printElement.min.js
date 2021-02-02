/*
 Print Element Plugin 1.1		(minified using Google closure compiler)
 Copyright (c) 2010 Erik Zaadi
 jQuery plugin page : http://plugins.jquery.com/project/printElement 
 Wiki : http://wiki.github.com/erikzaadi/jQueryPlugins/jqueryprintelement 
 Home Page : http://erikzaadi.github.com/jQueryPlugins/jQuery.printElement 
 Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
*/
var w=$(window).width()-5;
var h1=$(window).height();
(function(a){
	function h(a){
		a&&a.printPage?a.printPage():setTimeout(function(){h(a)},50)}
	function i(d){d=a(d);
	a(":checked",d).each(function(){this.setAttribute("checked","checked")});
	a("input[type='text']",d).each(function(){this.setAttribute("value",a(this).val())});
	a("select",d).each(function(){var b=a(this);
	a("option",b).each(function(){b.val()==a(this).val()&&this.setAttribute("selected","selected")})});
	a("textarea",d).each(function(){var b=a(this).attr("value");
	a.browser.mozilla?this.firstChild.textContent=b:this.innerHTML=b});
	return a("<div></div>").append(d.clone()).html()}
	function j(d,b){
		var k=a(d),g=i(d),g=g.replace("display: none;",""),g=g.replace("display:none;",""),c=[];
		c.push("<html><head><title>"+b.pageTitle+"</title>");
		if(b.overrideElementCSS){
			if(b.overrideElementCSS.length>0)
				for(var e=0;e<b.overrideElementCSS.length;e++){
					var f=b.overrideElementCSS[e];
					typeof f=="string"?c.push('<link type="text/css" rel="stylesheet" href="'+f+'" >'):c.push('<link type="text/css" rel="stylesheet" href="'+f.href+'" media="'+f.media+'" >')
				}
		}
		else
			a(document).find("link").filter(function(){return a(this).attr("rel").toLowerCase()=="stylesheet"}).each(function(){c.push('<link type="text/css" rel="stylesheet" href="'+a(this).attr("href")+'" media="'+a(this).attr("media")+'" >')});
			c.push('<base href="'+(window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+window.location.pathname)+'" />');
			c.push('</head><body style="'+b.printBodyOptions.styleToAdd+'" class="'+b.printBodyOptions.classNameToAdd+'">');
			var items = b.printBodyOptions.items;
			for(var num=0; num<items.length; num++)
			{			
			var img1 = '<img height="100%" width="100%" style="height: 792px; width: 612px" src="'+items[num]+'">';
			c.push('<div class="'+k.attr("class")+'">'+img1+"</div>");
			}
			c.push('<script type="text/javascript">function printPage(){focus();print();'+(!a.browser.opera&&!b.leaveOpen&&b.printMode.toLowerCase()=="popup"?"close();":"")+"}<\/script>");c.push("</body></html>");return c.join("")
	}
	a.fn.printElement=function(d){
		var b=a.extend({},a.fn.printElement.defaults,d);
		if(b.printMode=="iframe"&&(a.browser.opera||/chrome/.test(navigator.userAgent.toLowerCase())))b.printMode="popup";
		a("[id^='printElement_']").remove();
		return this.each(function(){
			var d=a.meta?a.extend({},b,$this.data()):b,g=a(this),g=j(g,d),c=null,e=null;
			if(d.printMode.toLowerCase()=="popup")
				c=window.open("about:blank","printElementWindow","location=0, scrollbars=0, height="+h1+",width="+w+",left="+0+""),e=c.document;
			else{
				var c="printElement_"+Math.round(Math.random()*99999).toString(),f=document.createElement("IFRAME");
				a(f).attr({style:d.iframeElementOptions.styleToAdd,id:c,className:d.iframeElementOptions.classNameToAdd,frameBorder:0,scrolling:"no",src:"about:blank"});
				document.body.appendChild(f);
				e=f.contentWindow||f.contentDocument;if(e.document)e=e.document;f=document.frames?document.frames[c]:document.getElementById(c);c=f.contentWindow||f
			}
			focus();
			e.open();
			e.write(g);
			e.close();
			h(c)
		})
	};
	a.fn.printElement.defaults={printMode:"iframe",pageTitle:"",overrideElementCSS:null,printBodyOptions:{styleToAdd:"padding:10px;margin:10px;",classNameToAdd:""},leaveOpen:!1,iframeElementOptions:{styleToAdd:"border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;",classNameToAdd:""}};
	a.fn.printElement.cssElement={href:"",media:""}})(jQuery);
