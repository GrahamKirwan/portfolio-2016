var vids=[];var auds=[];function addPage(page,book){var id,pages=book.turn('pages');var element=$('<div />',{});if(book.turn('addPage',element,page)){element.html('<div class="gradient"></div><div class="loader"></div>');loadPage(page,element);}}
function loadPage(page,pageElement){var img=$('<img id="load_img" />');img.mousedown(function(e){e.preventDefault();});img.load(function(){$(this).css({width:'100%',height:'100%'});$(this).appendTo(pageElement);pageElement.find('.loader').remove();});img.attr('src',"../../"+documentID+'/XPage_'+page+'.jpg');loadRegions(page,pageElement);if(IsDemo)
{var demopage=$('<div id="demomode'+page+'" class="demo-mode"><span class="demo-mode-text">Demo Page</span></div>');$(demopage).appendTo(pageElement);}}
function zoomTo(event){if($(".container").css("opacity")==1)
{var wh=$(window).height();setTimeout(function(){if($('.magazine-viewport').data().regionClicked){$('.magazine-viewport').data().regionClicked=false;}else{if($('.magazine-viewport').zoom('value')==1)
{try
{if($('.magazine').turn('display')=='single')
{for(var i=0;i<vids.length;i++)
{var currentpage=parseInt($('.magazine').turn('page'));if(currentpage=vids[i].pgn);{if(isIE)
{var videoID='my_'+vids[i].vid;if(document[videoID]&&vids[i].type=="youtube")
{var videoWrapper='my_'+vids[i].vid+'_wrapper';var videoWrapperHtmlStr=$('#'+videoWrapper).html();$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);$('title').text(pagetitle);}
else if(document.getElementById(videoID)&&vids[i].type=="video")
{var videoDiv=vids[i].vid;if($('#'+videoDiv).children()[1].firstChild.firstChild.localName=="video")
$('#'+videoDiv).children()[1].firstChild.firstChild.pause();}}
else
{jwplayer(vids[i].vid).stop();}}}}
else
{for(var i=0;i<vids.length;i++)
{var currentpage=parseInt($('.magazine').turn('page'));if(currentpage==vids[i].pgn)
{if(isIE)
{var ytVideoID='my_'+vids[i].vid;var videoID=vids[i].vid;if(document[ytVideoID]&&vids[i].type=="youtube")
{var videoWrapper='my_'+vids[i].vid+'_wrapper';var videoWrapperHtmlStr=$('#'+videoWrapper).html();$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);$('title').text(pagetitle);}
else if(document.getElementById(videoID)&&vids[i].type=="video")
{var videoDiv=vids[i].vid;if($('#'+videoDiv).children()[1].firstChild.firstChild.localName=="video")
$('#'+videoDiv).children()[1].firstChild.firstChild.pause();}}
else
{jwplayer(vids[i].vid).stop();}}}}}
catch(e)
{console.log('jwplayer stop error'+e);$('.region  youtube').css('display','none');}
$('.magazine-viewport').zoom('zoomIn',event);$(".container-bg").css('margin-top','0px');$(".container-bg").css('height',(wh)+'px');$('.toolbar-header').css('display','none');$('.toolbar-footer').css('display','none');$('.previous-button').css("visibility","hidden");$('.next-button').css("visibility","hidden");$('.container-navigation').css("visibility","hidden");$('.container-navigation').css("display","none");$(".gradient").css('display','none');$(".gradient").css('visibility','hidden');$(".magazine-viewport .zoom-in .even .gradient, .magazine-viewport .zoom-in .odd .gradient").css('display','none');$(".magazine-viewport .zoom-in .even .gradient, .magazine-viewport .zoom-in .odd .gradient").css('visibility','hidden');$('.region  youtube').css('display','none');if($('.magazine').turn('page')<2)
{$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');}
if(IsDemo)
{setTimeout(function(){$('.demo-mode').css('padding-top',($('.magazine').height()/2-12)+'px');if($('.magazine').turn('display')=='double')
{$('.demo-mode').css('padding-left',($('.magazine').width()/4-(75*2))+'px');$('.demo-mode').css('font-size','48px');}
else
{$('.demo-mode').css('padding-left',($('.magazine').width()/2-(75*4))+'px');$('.demo-mode').css('font-size','96px');}},1000);}}
else
{$('.magazine-viewport').zoom('zoomOut');$(".container-bg").css('margin-top','44px');$(".container-bg").css('height',(wh-44)+'px');$('.toolbar-header').css('display','block');$('.toolbar-footer').css('display','block');if($('.magazine').turn('display')=="double")
{$('.previous-button').css("visibility","visible");$('.next-button').css("visibility","visible");$(".magazine-viewport .zoom-in .even .gradient, .magazine-viewport .zoom-in .odd .gradient").css('display','block');$(".magazine-viewport .zoom-in .even .gradient, .magazine-viewport .zoom-in .odd .gradient").css('visibility','visible');}
else
{$('.previous-button').css("visibility","hidden");$('.next-button').css("visibility","hidden");$('.container-navigation').css("visibility","visible");$('.container-navigation').css("display","block");}
$('.region  youtube').css('display','block');ChangePageShadow();if($('.magazine').turn('page')<2)
{if($('.magazine').turn('display')=='single')
{$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');}
else
{$('#containerintro').css('display','block');$('#containerintro').css('visibility','visible');}}
if(IsDemo)
{$('.demo-mode').css('padding-top',($('.magazine').height()/2-12)+'px');if($('.magazine').turn('display')=='double')
{$('.demo-mode').css('padding-left',($('.magazine').width()/4-75)+'px');}
else
$('.demo-mode').css('padding-left',($('.magazine').width()/2-75)+'px');$('.demo-mode').css('font-size','24px');}}}},1);}}
function loadRegions(page,element){loadRegionsfromPageXmls(page,element);}
function loadRegionsfromPageXmls(page,element)
{$.ajax({'dataType':'xml','success':function(xml)
{var obj=[];$(xml).find('page').each(function()
{if($(xml).find('links').length>0)
{$(xml).find('link').each(function()
{var classtype="";var obj1;var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var playonhover=$(this).attr('playonhover');var openaspopup=$(this).attr('openaspopup');var popupwidth=$(this).attr('popupwidth');var popupheight=$(this).attr('popupheight');var linkcolor=$(this).attr('color');var linkopacity=$(this).attr('opacity');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];if(linktype==0||linktype==1)
{if(linktype==0)
{if(url.indexOf('http://')==-1 && url.indexOf('https://')==-1)
url="http://"+url.replace("[[moniker]]",((window.location.host).split('.'))[0]);
else
url=url.replace("[[moniker]]",((window.location.host).split('.'))[0]);}
if(linktype==1)
{if(url.indexOf('@')>-1)
{if(url.indexOf('mailto:')==-1)
{url="mailto:"+url; }}}
classtype="link";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"url":url}};}
else if(linktype==2)
{if(target==0)
{classtype="to-page";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"page":url}};}
else if(target==1)
{classtype="to-page";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"page":url}};}}
else if(linktype==3)
{typedata="page";if(target==0||target==3)
{openaspopup="true";classtype="video";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"url":url,"linkcolor":linkcolor,"linkopacity":linkopacity,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"id":id,"data":{"url":url}};}
else
{classtype="to-page";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"page":url}};}}
obj.push(obj1);});}
if($(xml).find('videos').length>0)
{$(xml).find('video').each(function()
{var str="";var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var type=$(this).attr('type');var autoplay=$(this).attr('autoplay');var playloop=$(this).attr('playloop');var showcontrols=$(this).attr('showcontrols');var openaspopup=$(this).attr('openaspopup');var popupwidth=$(this).attr('popupwidth');var popupheight=$(this).attr('popupheight');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];var obj1;if(url.indexOf("www.youtube.com")>-1||url.indexOf("youtu.be")>-1)
{var videoID=(url.split('/')[url.split('/').length-1].toString());var yturl=url;obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"youtube","type":type,"url":yturl,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"id":id,"data":{"url":yturl}};}
else
{obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"video","type":type,"url":url,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"id":id,"data":{"url":url}};}
obj.push(obj1);});}
if($(xml).find('images').length>0)
{$(xml).find('image').each(function()
{var str="";var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var linkurl=$(this).attr('linkurl');var playonhover=$(this).attr('playonhover');var openaspopup=$(this).attr('openaspopup');var popupwidth=$(this).attr('popupwidth');var popupheight=$(this).attr('popupheight');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];if(linktype==0)
{classtype="image";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"url":linkurl,"id":id,"data":{"url":linkurl}};}
else if(linktype==1)
{typedata="page";classtype="image";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"url":linkurl,"id":id,"data":{"url":linkurl}};}
else if(linktype==2)
{typedata="page";classtype="image";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"class":"image","imgsrc":url,"linktype":linktype,"url":linkurl,"id":id,"data":{"page":linkurl}};}
else if(linktype==3)
{typedata="page";classtype="image";playonhover=$(this).attr('playonhover');openaspopup=$(this).attr('openaspopup');popupwidth=$(this).attr('popupwidth');popupheight=$(this).attr('popupheight');obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"playonhover":playonhover,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"url":linkurl,"id":id,"data":{"url":url}};}
else if(linktype==4)
{typedata="page";classtype="image";playonhover=$(this).attr('playonhover');openaspopup=$(this).attr('openaspopup');popupwidth=$(this).attr('popupwidth');popupheight=$(this).attr('popupheight');obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"playonhover":playonhover,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"url":linkurl,"id":id,"data":{"url":url}};}
obj.push(obj1);});}
if($(xml).find('audios').length>0)
{$(xml).find('audio').each(function()
{var str="";var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var url=$(this).attr('name');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];var obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"audio","id":id,"url":url,"data":{"src":url}};obj.push(obj1);});}
if($(xml).find('products').length>0)
{$(xml).find('product').each(function()
{var classtype="";var obj1;var loc=$(this).attr('loc');var id=$(this).attr('id');var productid=$(this).attr('productid');var text=$(this).attr('text');var url=$(this).attr('url');var linkcolor=$(this).attr('color');var linkopacity=$(this).attr('opacity');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];classtype="products";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"productid":productid,"data":{"productid":productid}};obj.push(obj1);});}});var data=obj;$.each(data,function(key,region){addRegion(page,region,element);});},'type':'get','url':"../../"+documentID+'/Page_'+page+'.xml'});}
function addRegion(page,region,pageElement){var width=$(window).width(),height=$(window).height()-76,options=$('.magazine').turn('options');var bWidth;var bHeight;var ar=pagewidth/pageheight;var nw=width;var nh=height;if(pagewidth>pageheight)
{if(nw>nh*2)
{if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{bWidth=nh*ar*2;bHeight=nh;}}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
else
{if($('.magazine').turn('display')=='double')
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}}
else
{if(nw>nh*2)
{if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar*2;}
else
{bHeight=(nh-100);bWidth=bHeight*ar*2;}}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
else
{if($('.magazine').turn('display')=='double')
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar*2;}
else
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar;}}}
var bound=calculateBound({width:options.width,height:options.height,boundWidth:bWidth,boundHeight:bHeight});if(region!=undefined&&region.classname=="link")
{if(region.linkcolor!=undefined)
{var _linkcolor=region.linkcolor.toString().replace("0x","#");var _linkopacity=region.linkopacity;}
else
{var _linkcolor="#666";var _linkopacity=0.1;}
var reg=$('<div />',{'class':'region  '+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height);reg.css('background','none repeat scroll 0 0 '+_linkcolor);reg.css('opacity',_linkopacity);if(page==0)
reg.css('position','absolute');var linkTooltipText=$.param(region.data||'').replace('url=','');reg.attr('title',decodeURIComponent(linkTooltipText));reg.appendTo(pageElement);}
else if(region!=undefined&&region.classname=="image")
{var reg=$('<div />',{'class':'region-'+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height);var w=(region.width*ar)+"px";var h=(region.height*ar)+"px";var img;var indx=region.id;if(region.linktype==0)
{var func='NavigateToUrl("'+region.url+'");';img=$('<div onclick='+func+' class="" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');}
else if(region.linktype==1)
{img=$('<a href="mailto:'+region.url+'"><div class="email-image" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div></a>');}
else if(region.linktype==2)
{img=$('<div class="image to-page" region-data="'+$.param(region.data||'')+'" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');}
else if(region.linktype==3)
{var func;var encodeedurl;if(region.url.indexOf("www.youtube.com")>-1||region.url.indexOf("youtu.be")>-1)
encodeedurl=encodeURIComponent(region.url);else
encodeedurl='../../'+documentID+'/res/'+encodeURIComponent(region.url)
if(region.playonhover=="true")
{func='ShowPopup("'+encodeedurl+'","'+region.linktype+'","'+region.popupwidth+'","'+region.popupheight+'","my_video_'+indx+'");';img=$('<div onmouseover='+func+' class="link-image" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');}
else
{func='ShowPopup("'+encodeedurl+'","'+region.linktype+'","'+region.popupwidth+'","'+region.popupheight+'","my_video_'+indx+'");';img=$('<div onclick='+func+' class="link-image" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');}}
else if(region.linktype==4)
{var func;var encodeedurl=encodeURIComponent(region.url);if(region.playonhover=="true")
{func='ShowPopup("'+encodeedurl+'","'+region.linktype+'","'+region.popupwidth+'","'+region.popupheight+'","my_image_'+indx+'");';img=$('<div onmouseover='+func+' class="link-image" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');}
else
{func='ShowPopup("'+encodeedurl+'","'+region.linktype+'","'+region.popupwidth+'","'+region.popupheight+'","my_image_'+indx+'");';img=$('<div  onclick='+func+' class="link-image" style="background :url('+'../../'+documentID+'/res/'+encodeURIComponent(region.imgsrc)+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');}}
else
img=$('<div id="'+page+'" style="background :url('+'../../'+documentID+'/res/'+region.imgsrc+') no-repeat center; background-size: 100%; width: '+w+'; height: '+h+';" ></div>');indx++;img.appendTo(reg);reg.appendTo(pageElement);}
else if(region!=undefined&&region.classname=="to-page")
{var reg=$('<div />',{'class':'region  '+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height);reg.appendTo(pageElement);}
else if(region!=undefined&&region.classname=="video")
{GetDocumentUrl();var reg=$('<div />',{'class':'region-image  '+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;var indx=region.id;var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));if(/(http|https|www|com|org|co.il)/.test(region.url))
{var filename1=region.url;}
else
{var filename1=documentUrl+documentID+'/res/'+encodeURIComponent(region.url);}
reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height+' '+filename1+' '+region.openaspopup);var w=(region.width*ar);var h=(region.height*ar);if(region.linkcolor!=undefined)
{var _linkcolor=region.linkcolor.toString().replace("0x","#");var _linkopacity=region.linkopacity;}
else
{var _linkcolor="#000";var _linkopacity=1;}
var string="<script type=\"text\/javascript\"> ";if(region!=undefined&&region.openaspopup=="true")
{if(/(http|https|www|com|org|co.il)/.test(region.url))
{var filename=region.url;}
else
{var filename='../../'+documentID+'/res/'+encodeURIComponent(region.url);}
var nH=Math.min(w,h);if(nH>=46)
nH=46
var nT=(h-nH)/2;func='ShowPopup("'+filename+'","3","'+region.popupwidth+'","'+region.popupheight+'","my_video_'+region.id+'");';img=$('<div onclick='+func+' id="video_'+region.id+'" class="video video-js vjs-default-skin video_'+region.id+'" style=" width: '+w+'px; height: '+h+'px; opacity:'+_linkopacity+'; background: none repeat scroll 0 0 '+_linkcolor+';" ><img src="pics/playbutton46.png" style="width:'+nH+'px; height:'+nH+'px; margin-top: 10%; margin-left: 35%; "></img></div>');img.appendTo(reg);reg.appendTo(pageElement);}
else
{if(/(http|https|www|com|org|co.il)/.test(region.url))
{var filename=region.url;}
else
{var filename=documentUrl+documentID+'/res/'+encodeURIComponent(region.url);}
if(region.url.indexOf("vimeo.com")>-1)
{reg.attr('id','video_'+region.id);var vidID=region.url.split("/")[region.url.split("/").length-1];var filename='http://player.vimeo.com/video/'+vidID;img=$('<iframe src="'+filename+'" width="'+w+'" height="'+h+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');img.appendTo(reg);reg.appendTo(pageElement);}
else
{reg.attr('id','video_'+region.id);img=$('<video width="'+w+'" height="'+h+'" controls><source src="'+filename+'" type="video/mp4"></video>');img.appendTo(reg);reg.appendTo(pageElement);}}
if(region.url.indexOf("vimeo.com")>-1)
vids.push({"pgn":page,"vid":("video_"+region.id),"type":"vimeo"});else
{string+="<\/script>";string=string.replace(/<(script|\/script).*?>/g,'');var elem=document.getElementById("video_"+region.id);var script=document.createElement('script');script.innerHTML=string;elem.appendChild(script);vids.push({"pgn":page,"vid":("video_"+region.id),"type":"video"});}}
else if(region!=undefined&&region.classname=="youtube")
{var reg=$('<div />',{'class':'region  '+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height+' '+region.openaspopup);var w=(region.width*ar);var h=(region.height*ar);var nH=Math.min(w,h);if(nH>=46)
nH=46
var nT=(h-nH)/2;var string="<script type=\"text\/javascript\"> ";if(region.openaspopup=="true")
{func='ShowPopup("'+region.url+'","3","'+region.popupwidth+'","'+region.popupheight+'","my_video_'+region.id+'");';img=$('<div onclick='+func+' id="my_video_'+region.id+'" class="video video-js vjs-default-skin my_video_'+region.id+'" style=" width: '+w+'px; height: '+h+'px; background: none repeat scroll 0 0 #000;" ><img src="pics/playbutton46.png" style="width:'+nH+'px; height:'+nH+'px; margin-top: 10%; margin-left: 35%; "></img></div>');}
else
{img=$('<div id="my_video_'+region.id+'" class="video my_video_'+region.id+'" style=" width: '+w+'px; height: '+h+'px; background: none repeat scroll 0 0 #000;" ></div>');string+='jwplayer("my_video_'+region.id+'").setup({file: "'+region.url+'", width: '+w+', height: '+h+'});'}
img.appendTo(reg);reg.appendTo(pageElement);string+="<\/script>";string=string.replace(/<(script|\/script).*?>/g,'');var elem=document.getElementById("my_video_"+region.id);var script=document.createElement('script');script.innerHTML=string;elem.appendChild(script);vids.push({"pgn":page,"vid":("video_"+region.id),"type":"youtube"})}
else if(region!=undefined&&region.classname=="audio")
{GetDocumentUrl();var reg=$('<div />',{'class':'region-image  '+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;if(region.url.indexOf("www")>-1)
encodeedurl=encodeURIComponent(region.url);else
encodeedurl=documentUrl+documentID+'/res/'+encodeURIComponent(region.url);var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height+' '+encodeedurl);reg.attr('id','audio_'+region.id);var w=(region.width*ar);var h=(region.height*ar);var img=$('<audio controls="controls" width="'+(region.width*ar)+'" height="'+(region.height*ar)+'" > <source src="'+(encodeedurl)+'" type="audio/mpeg"></audio>');img.appendTo(reg);reg.appendTo(pageElement);auds.push({"pgn":page,"aud":("audio_"+region.id),"type":"audio"})}
if(region!=undefined&&region.classname=="products")
{if(region.linkcolor!=undefined)
{var _linkcolor=region.linkcolor.toString().replace("0x","#");var _linkopacity=region.linkopacity;}
else
{var _linkcolor="#666";var _linkopacity=0.1;}
var reg=$('<div />',{'class':'region  '+region['classname']}),options=$('.magazine').turn('options'),pageWidth=bound.width/2,pageHeight=bound.height;var ar=pageWidth/pagewidth;reg.css({top:(region.y*ar)+"px",left:(region.x*ar)+"px",width:(region.width*ar)+"px",height:(region.height*ar)+"px",}).attr('region-data',$.param(region.data||''));reg.attr('region-raw-data',region.x+' '+region.y+' '+region.width+' '+region.height);reg.css('background','none repeat scroll 0 0 '+_linkcolor);reg.css('opacity',_linkopacity);if(page==0)
reg.css('position','absolute');var linkTooltipText=$.param(region.data||'').replace('url=','');reg.attr('title',decodeURIComponent(linkTooltipText));reg.appendTo(pageElement);}
resizeregion(bound);}
function NavigateToUrl(url){var navigateurl=url;window.open(navigateurl,"_blank")}
function ShowPopup(url,linktype,popupw,popuph,id){var imagepopup;$('.container-overlay').css('top','0px');$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$('.magazine-viewport').data().regionClicked=true;$('#containerimagepopup').fadeIn("slow");$('#containerimagepopup').show();$("#containerimagepopup").css('display','block');$("#containerimagepopup").css('visibility','visible');$("#containerimagepopup").css('width',popupw+'px');$("#containerimagepopup").css('height',popuph+'px');url=decodeURIComponent(url);if(linktype==3)
{if(url.indexOf("www.youtube.com")>-1)
{imagepopup=$('<iframe src='+url+' width= "'+popupw+'" height="'+popuph+'" frameborder="0" allowfullscreen/>');$('#containerimagepopup').append(imagepopup);}
else if(url.indexOf("vimeo.com")>-1)
{var vidID=url.split("/")[url.split("/").length-1];url='http://player.vimeo.com/video/'+vidID;imagepopup=$('<iframe src='+url+' width= "'+popupw+'" height="'+popuph+'" frameborder="0" allowfullscreen/>');$('#containerimagepopup').append(imagepopup);}
else
{imagepopup=$('<div id="'+id+'_1" class="video video-js vjs-default-skin my_video_'+id+'" style=" width: '+popupw+'px; height: '+popuph+'px;" ></div>');$('#containerimagepopup').append(imagepopup);var string="<script type=\"text\/javascript\"> ";string+='jwplayer('+id+'_1).setup({file: "'+url+'", width: '+popupw+', height: '+popuph+'});'
string+="<\/script>";string=string.replace(/<(script|\/script).*?>/g,'');var elem=document.getElementById(id+"_1");var script=document.createElement('script');script.innerHTML=string;elem.appendChild(script);}}
else if(linktype==4)
{var imagepopup='<img id="imagepopup" src="'+'../../'+documentID+'/res/'+url+'" style="width:100%; height:100%; " />';$('#containerimagepopup').append(imagepopup);}}
function regionClick(event){var region=$(event.target);if(region.hasClass('region')){event.preventDefault();event.stopImmediatePropagation();$('.magazine-viewport').data().regionClicked=true;setTimeout(function(){$('.magazine-viewport').data().regionClicked=false;},100);var regionType=$.trim(region.attr('class').replace('region',''));return processRegion(region,regionType);}
else if(region.hasClass('link-image'))
{event.preventDefault();event.stopImmediatePropagation();$("#containerimagepopup").css({"opacity":"1"});}
else if(region.hasClass('email-image'))
{event.stopImmediatePropagation();}
else if(region.hasClass('image to-page')){event.preventDefault();event.stopImmediatePropagation();$('.magazine-viewport').data().regionClicked=true;setTimeout(function(){$('.magazine-viewport').data().regionClicked=false;},100);var regionType=$.trim(region.attr('class').replace('image',''));return processRegion(region,regionType);}
else if(region.hasClass('video-js')){event.stopImmediatePropagation();}
else if(region.hasClass('audio')){event.stopImmediatePropagation();}
else if(region.parents().hasClass('region-image')){event.stopImmediatePropagation();}
else if(event.target.parentElement.id.indexOf("video_")>-1){event.preventDefault();event.stopImmediatePropagation();}}
function regionClickIntro(event){var region=$(event.target);if(region.hasClass('region')){event.preventDefault();event.stopImmediatePropagation();$('.magazine-viewport').data().regionClicked=true;setTimeout(function(){$('.magazine-viewport').data().regionClicked=false;},100);var regionType=$.trim(region.attr('class').replace('region',''));return processRegion(region,regionType);}
else if(region.hasClass('link-image'))
{event.preventDefault();event.stopImmediatePropagation();$("#containerimagepopup").css({"opacity":"1"});}
else if(region.hasClass('email-image'))
{event.stopImmediatePropagation();}
else if(region.hasClass('image to-page')){event.preventDefault();event.stopImmediatePropagation();$('.magazine-viewport').data().regionClicked=true;setTimeout(function(){$('.magazine-viewport').data().regionClicked=false;},100);var regionType=$.trim(region.attr('class').replace('image',''));return processRegion(region,regionType);}
else if(region.hasClass('video-js')){event.stopImmediatePropagation();}
else if(region.hasClass('audio')){event.stopImmediatePropagation();}
else if(region.parents().hasClass('region-image')){event.preventDefault();event.stopImmediatePropagation();}
else if(event.target.parentElement.id.indexOf("video_")>-1){event.preventDefault();event.stopImmediatePropagation();}}
function processRegion(region,regionType){data=decodeParams(region.attr('region-data'));switch(regionType){case'link':AnalyticsPageLinkURL=data.url;AnalyticsPageLinkURL=AnalyticsPageLinkURL.replace(/http:\/\/|https:\/\/|ftp:\/\//,"");reportActivityData(ANALYTICS_LINK_CLICK,parseInt(GetCurrentPageNumber()));setTimeout(function openlinkurl()
{window.open(data.url);},100);break;case'zoom':var regionOffset=region.offset(),viewportOffset=$('.magazine-viewport').offset(),pos={x:regionOffset.left-viewportOffset.left,y:regionOffset.top-viewportOffset.top};$('.magazine-viewport').zoom('zoomIn',pos);break;case'to-page':$('.magazine').turn('page',data.page);break;case'products':$(document).bind('touchmove',false);$(document).unbind('touchmove',true);var newProductUrl=producturl.replace("$ProductID",data.productid);_popupwidth=558;_popupheight=325;openHtmlPopup(newProductUrl,558,325);break;default:break;}}
function loadLargePage(page,pageElement){var img=$('<img />');img.load(function(){var prevImg=pageElement.find('img');$(this).css({width:'100%',height:'100%'});$(this).appendTo(pageElement);prevImg.remove();});img.attr('src',"../../"+documentID+'/YPage_'+page+'.jpg');}
function loadSmallPage(page,pageElement){var img=pageElement.find('img');img.css({width:'100%',height:'100%'});img.unbind('load');img.attr('src',"../../"+documentID+'/XPage_'+page+'.jpg');}
function isChrome(){return navigator.userAgent.indexOf('Chrome')!=-1;}
function disableControls(page){if(page==1)
$('.previous-button').hide();else
$('.previous-button').show();if(page==$('.magazine').turn('pages'))
$('.next-button').hide();else
$('.next-button').show();}
var isfirst=true;function resizeViewport(){var width=$(window).width(),height=$(window).height()-76,options=$('.magazine').turn('options');$('.magazine').removeClass('animated');if(isfirst==true)
{isfirst=false;$('.magazine-viewport').css({width:width,height:height}).zoom('resize');}
else
{$('.magazine-viewport').css({width:width,height:height}).zoom('resize');}
var bWidth;var bHeight;var ar=pagewidth/pageheight;var nw=width;var nh=height;if(pagewidth>pageheight)
{if(nw>nh*2)
{if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{bWidth=nh*ar*2;bHeight=nh;}}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
else
{if($('.magazine').turn('display')=='double')
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}}
else
{if(nw>nh*2)
{if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar*2;}
else
{bHeight=(nh-100);bWidth=bHeight*ar*2;}}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
else
{if($('.magazine').turn('display')=='double')
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar*2;}
else
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar;}}}
if($('.magazine').turn('zoom')==1){var bound=calculateBound({width:options.width,height:options.height,boundWidth:bWidth,boundHeight:bHeight});if(bound.width%2!==0)
bound.width-=1;if(bound.width!=$('.magazine').width()||bound.height!=$('.magazine').height()){$('.magazine').turn('size',bound.width,bound.height);if($('.magazine').turn('page')==1)
$('.magazine').turn('peel','br');$('.next-button').css({height:'48px ',backgroundPosition:'0px 0px',top:(bound.height/2-32/2)+'px'});$('.previous-button').css({height:'48px ',backgroundPosition:'0px 0px',top:(bound.height/2-32/2)+'px'});}
$('.magazine').css({top:-bound.height/2,left:-bound.width/2});}
var magazineOffset=$('.magazine').offset(),boundH=height-magazineOffset.top-$('.magazine').height(),marginTop=(boundH-$('.thumbnails > div').height())/2;if(marginTop<0){$('.thumbnails').css({height:100});}else{$('.thumbnails').css({height:boundH});$('.thumbnails > div').css({marginTop:marginTop});}
if(magazineOffset.top<$('.made').height())
$('.made').hide();else
$('.made').show();$('.magazine').addClass('animated');}
function resizeViewportWindow(){var width=$(window).width(),height=$(window).height(),options=$('.magazine').turn('options');$('.magazine').removeClass('animated');if(isfirst==true)
{isfirst=false;$('.magazine-viewport').css({width:width,height:height}).zoom('resize');}
else
{$('.magazine-viewport').css({width:width,height:height}).zoom('resize');}
var bWidth;var bHeight;var ar=pagewidth/pageheight;var nw=width;var nh=height;if(pagewidth>pageheight)
{if(nw>nh*2)
{console.log(nw+" , "+nh+" , "+pagewidth+" , "+pageheight);if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;console.log(" nh*ar*2 > nw "+bWidth+" , "+bHeight);}
else
{bWidth=nh*ar*2;bHeight=nh;console.log(" nh*ar*2 < nw "+bWidth+" , "+bHeight);}}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
else
{if($('.magazine').turn('display')=='double')
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}}
else
{if(nw>nh*2)
{if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newHeight=(nh-100);bHeight=newHeight;bWidth=newHeight*ar*2;}
else
{bHeight=(nh-100);bWidth=bHeight*ar*2;}}
else
{if(nh*ar*2>nw)
{var newHeight=(nh-100);bHeight=newHeight;bWidth=(nw-100);}
else
{bHeight=(nh-100);bWidth=(nw-100);}}}
else
{if($('.magazine').turn('display')=='double')
{var newHeight=(nh-140);bHeight=newHeight;bWidth=newHeight*ar*2;}
else
{var newHeight=(nh-140);bHeight=newHeight;bWidth=newHeight*ar;}}}
if($('.magazine').turn('zoom')==1){var bound=calculateBound({width:options.width,height:options.height,boundWidth:bWidth,boundHeight:bHeight});if(bound.width%2!==0)
bound.width-=1;if(bound.width!=$('.magazine').width()||bound.height!=$('.magazine').height()){$('.magazine').turn('size',bound.width,bound.height);if($('.magazine').turn('page')==1)
$('.magazine').turn('peel','br');$('.next-button').css({height:'48px ',backgroundPosition:'0px 0px',top:(bound.height/2-32/2)+'px'});$('.previous-button').css({height:'48px ',backgroundPosition:'0px 0px',top:(bound.height/2-32/2)+'px'});}
$('.magazine').css({top:-bound.height/2,left:-bound.width/2});}
var magazineOffset=$('.magazine').offset(),boundH=height-magazineOffset.top-$('.magazine').height(),marginTop=(boundH-$('.thumbnails > div').height())/2;if(marginTop<0){$('.thumbnails').css({height:100});}else{$('.thumbnails').css({height:boundH});$('.thumbnails > div').css({marginTop:marginTop});}
if(magazineOffset.top<$('.made').height())
$('.made').hide();else
$('.made').show();$('.magazine').addClass('animated');$('.container-bg').css('height',($(window).height()-44)+'px');if($('.magazine').turn('display')!='double')
{$('#containersinglenavigation').css('width',((bWidth)+20+64)+'px');$('#containersinglenavigation').css('margin-left',(width/2-((bWidth))/2-32)+'px');$('#divpagearea').css('width',(bWidth)+'px');$('#divpagearea').css('height','1px');$('#divthumbnailsprev1').css({'margin-top':((height-84)/2-24)+'px'});$('#divthumbnailsnext1').css({'margin-top':((height-84)/2-24)+'px'});}
var containerTop=(($(document).height()/2)-((44)/2))+"px";$('.container').css('top',containerTop);try
{if($('.magazine').turn('display')=='single')
{for(var i=0;i<vids.length;i++)
{var currentpage=parseInt($('.magazine').turn('page'));if(currentpage-1==vids[i].pgn||currentpage+1==vids[i].pgn)
{if(isIE)
{var videoID='my_'+vids[i].vid;if(document[videoID]&&vids[i].type=="youtube")
{var videoWrapper='my_'+vids[i].vid+'_wrapper';var videoWrapperHtmlStr=$('#'+videoWrapper).html();$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);$('title').text(pagetitle);}
else if(document.getElementById(videoID)&&vids[i].type=="video")
{var videoDiv=vids[i].vid;if($('#'+videoDiv).children()[1].firstChild.firstChild.localName=="video")
$('#'+videoDiv).children()[1].firstChild.firstChild.pause();}}
else
{var videoID=vids[i].vid;if(document.getElementById(videoID)&&vids[i].type=="vimeo")
{var videoWrapper=videoID;var videoWrapperHtmlStr=document.getElementById(videoID).innerHTML;$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);$('title').text(pagetitle);}
else
{}}}
if(currentpage-1==vids[i].pgn||currentpage+1==vids[i].pgn)
{var videoWrapper=vids[i].vid;var videoWrapperHtmlStr=$('#'+videoWrapper).html();$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);}}
for(var i=0;i<auds.length;i++)
{if(currentpage-1==auds[i].pgn||currentpage+1==auds[i].pgn)
{var audioWrapper=auds[i].aud;var audioWrapperHtmlStr=$('#'+audioWrapper).html();$('#'+audioWrapper).html("");$('#'+audioWrapper).html(audioWrapperHtmlStr);}}}
else
{for(var i=0;i<vids.length;i++)
{var currentpage=parseInt($('.magazine').turn('page'));if(currentpage-2==vids[i].pgn)
{if(isIE)
{var ytVideoID='my_'+vids[i].vid;var videoID=vids[i].vid;if(document[ytVideoID]&&vids[i].type=="youtube")
{var videoWrapper='my_'+vids[i].vid+'_wrapper';var videoWrapperHtmlStr=$('#'+videoWrapper).html();$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);$('title').text(pagetitle);}
else if(document.getElementById(videoID)&&vids[i].type=="video")
{var videoDiv=vids[i].vid;if($('#'+videoDiv).children()[1].firstChild.firstChild.localName=="video")
$('#'+videoDiv).children()[1].firstChild.firstChild.pause();}}
else
{var videoID=vids[i].vid;if(document.getElementById(videoID)&&vids[i].type=="vimeo")
{var videoWrapper=videoID;var videoWrapperHtmlStr=document.getElementById(videoID).innerHTML;$('#'+videoWrapper).html("");$('#'+videoWrapper).html(videoWrapperHtmlStr);$('title').text(pagetitle);}
else
{}}}}
for(var i=0;i<auds.length;i++)
{if(currentpage-2==auds[i].pgn)
{var audioWrapper=auds[i].aud;var audioWrapperWrapperHtmlStr=$('#'+audioWrapper).html();$('#'+audioWrapper).html("");$('#'+audioWrapper).html(audioWrapperHtmlStr);}}}}
catch(e)
{console.log('jwplayer stop error'+e);}
resizeElements();resizeregion(bound);isfirstresize=true;if($('.magazine').turn('display')=='double')
{$('.magazine').turn('peel','br');setTimeout(removepeel,20);}
else
{}
if(isIntro)
resizeintropage(bound);if(IsDemo)
{$('.demo-mode').css('padding-top',($('.magazine').height()/2-12)+'px');if($('.magazine').turn('display')=='double')
$('.demo-mode').css('padding-left',($('.magazine').width()/4-75)+'px');else
$('.demo-mode').css('padding-left',($('.magazine').width()/2-75)+'px');}}
function loadRegionsfromPageXmlsIntroPage(page,element)
{$.ajax({'dataType':'xml','success':function(xml)
{var obj=[];$(xml).find('page').each(function()
{if($(xml).find('links').length>0)
{$(xml).find('link').each(function()
{var classtype="";var obj1;var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var playonhover=$(this).attr('playonhover');var openaspopup=$(this).attr('openaspopup');var popupwidth=$(this).attr('popupwidth');var popupheight=$(this).attr('popupheight');var linkcolor=$(this).attr('color');var linkopacity=$(this).attr('opacity');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];if(linktype==0||linktype==1)
{if(linktype==0)
{if(url.indexOf('http://')==-1 && url.indexOf('https://')==-1)
url="http://"+Linkurl.replace("[[moniker]]",((window.location.host).split('.'))[0]);
else
url=url.replace("[[moniker]]",((window.location.host).split('.'))[0]); }
if(linktype==1)
{if(url.indexOf('@')>-1)
{if(url.indexOf('mailto:')==-1)
{url="mailto:"+url; }}}
classtype="link";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"url":url}};}
else if(linktype==2)
{if(target==0)
{classtype="to-page";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"page":url}};}
else if(target==1)
{classtype="to-page";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"page":url}};}}
else if(linktype==3)
{typedata="page";if(target==3)
{openaspopup="true";classtype="video";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"url":url,"linkcolor":linkcolor,"linkopacity":linkopacity,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"id":id,"data":{"url":url}};}
else
{classtype="to-page";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"data":{"page":url}};}}
obj.push(obj1);});}
if($(xml).find('videos').length>0)
{$(xml).find('video').each(function()
{var str="";var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var type=$(this).attr('type');var autoplay=$(this).attr('autoplay');var playloop=$(this).attr('playloop');var showcontrols=$(this).attr('showcontrols');var openaspopup=$(this).attr('openaspopup');var popupwidth=$(this).attr('popupwidth');var popupheight=$(this).attr('popupheight');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];var obj1;if(url.indexOf("www.youtube.com")>-1||url.indexOf("youtu.be")>-1)
{var videoID=(url.split('/')[url.split('/').length-1].toString());var yturl=url;obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"youtube","type":type,"url":yturl,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"id":id,"data":{"url":yturl}};}
else
{obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"video","type":type,"url":url,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"id":id,"data":{"url":url}};}
obj.push(obj1);});}
if($(xml).find('images').length>0)
{$(xml).find('image').each(function()
{var str="";var loc=$(this).attr('loc');var id=$(this).attr('id');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var linkurl=$(this).attr('linkurl');var playonhover=$(this).attr('playonhover');var openaspopup=$(this).attr('openaspopup');var popupwidth=$(this).attr('popupwidth');var popupheight=$(this).attr('popupheight');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];if(linktype==0)
{classtype="image";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"url":linkurl,"id":id,"data":{"url":linkurl}};}
else if(linktype==1)
{typedata="page";classtype="image";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"url":linkurl,"id":id,"data":{"url":linkurl}};}
else if(linktype==2)
{typedata="page";classtype="image";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"class":"image","imgsrc":url,"linktype":linktype,"url":linkurl,"id":id,"data":{"page":linkurl}};}
else if(linktype==3)
{typedata="page";classtype="image";playonhover=$(this).attr('playonhover');openaspopup=$(this).attr('openaspopup');popupwidth=$(this).attr('popupwidth');popupheight=$(this).attr('popupheight');obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"playonhover":playonhover,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"url":linkurl,"id":id,"data":{"url":url}};}
else if(linktype==4)
{typedata="page";classtype="image";playonhover=$(this).attr('playonhover');openaspopup=$(this).attr('openaspopup');popupwidth=$(this).attr('popupwidth');popupheight=$(this).attr('popupheight');obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"image","imgsrc":url,"linktype":linktype,"playonhover":playonhover,"openaspopup":openaspopup,"popupwidth":popupwidth,"popupheight":popupheight,"url":linkurl,"id":id,"data":{"url":url}};}
obj.push(obj1);});}
if($(xml).find('audios').length>0)
{$(xml).find('audio').each(function()
{var str="";var loc=$(this).attr('loc');var target=$(this).attr('target');var text=$(this).attr('text');var linktype=$(this).attr('linktype');var url=$(this).attr('url');var url=$(this).attr('name');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];var obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":"audio","url":url,"data":{"src":url}};obj.push(obj1);});}
if($(xml).find('products').length>0)
{$(xml).find('product').each(function()
{var classtype="";var obj1;var loc=$(this).attr('loc');var id=$(this).attr('id');var productid=$(this).attr('productid');var text=$(this).attr('text');var url=$(this).attr('url');var linkcolor=$(this).attr('color');var linkopacity=$(this).attr('opacity');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];classtype="products";obj1={"x":x1,"y":y1,"width":w1,"height":h1,"classname":classtype,"linkcolor":linkcolor,"linkopacity":linkopacity,"productid":productid,"data":{"productid":productid}};obj.push(obj1);});}});var data=obj;$.each(data,function(key,region){addRegion(page,region,element);});},'type':'get','url':"../../"+documentID+'/Page_'+page+'.xml'});}
var isfirstIntro=true;function resizeintropage(bound)
{var element=$('#containerintro');if(isfirstIntro==true)
{isfirstIntro=false;loadRegionsfromPageXmlsIntroPage(0,element);}
var width=$(window).width();$('#containerintro').css('width',(bound.width/2)+'px');$('#containerintro').css('margin-top',(-bound.height-(44+37+10))+'px');$('#containerintro').css('height',bound.height+'px');$('#containerintro').css('margin-left',((width-bound.width)/2)+'px');if(intropageheight>intropagewidth)
{if(intropageheight>bound.height)
$('#intropage').css('height',bound.height+'px');else
$('#intropage').css('height',intropageheight+'px');}
else
{if(intropageheight>bound.height)
$('#intropage').css('height',bound.height+'px');else
{if(intropagewidth<(bound.width/2))
{$('#intropage').css('width',intropagewidth+'px');if((bound.width/2)*(intropageheight/intropagewidth)<intropageheight)
$('#intropage').css('height',(bound.width/2)*(intropageheight/intropagewidth)+'px');else
$('#intropage').css('height',intropageheight+'px');}
else
{$('#intropage').css('width',(bound.width/2)+'px');$('#intropage').css('height',(bound.width/2)*(intropageheight/intropagewidth)+'px');}}}
var iph=parseInt($('#intropage').css('height'));$('#intropage').css('padding-top',((bound.height-iph)/2)+'px');var pageElem=getElementsByClass(document,'container-intro','div');resizingmediaregion1(pageElem,bound);}
function removepeel()
{$('.magazine').turn('peel',false);}
function CloseJwplayer()
{$('.region-image  video').css('display','none');$('.region  youtube').css('display','none');}
function resizeregion(bound)
{var pagenumber=$('.magazine').turn('page');var currentpage=pagenumber;if($('.magazine').turn('display')=='double')
{if(pagenumber==1)
{var pageElem=getElementsByClass(document,'page p'+currentpage+' odd','div');resizingmediaregion(pageElem,bound);}
else if(pagenumber>1&&pagenumber<$('.magazine').turn('pages'))
{if(currentpage%2==1)
currentpage=currentpage-1;var pageElem=getElementsByClass(document,'page p'+currentpage+' even','div');resizingmediaregion(pageElem,bound);pageElem=getElementsByClass(document,'page p'+(currentpage+1)+' odd','div');resizingmediaregion(pageElem,bound);}
else
{currentpage=$('.magazine').turn('pages');if(currentpage%2==0)
{var pageElem=getElementsByClass(document,'page p'+currentpage+' even','div');resizingmediaregion(pageElem,bound);}
else
{pageElem=getElementsByClass(document,'page p'+(currentpage)+' odd','div');resizingmediaregion(pageElem,bound);}}}
else
{if(currentpage%2==0)
{var pageElem=getElementsByClass(document,'page p'+currentpage,'div');resizingmediaregion(pageElem,bound);}
else
{var pageElem=getElementsByClass(document,'page p'+(currentpage),'div');resizingmediaregion(pageElem,bound);}}}
function resizingmediaregion(pageElem,bound)
{if($('.magazine').turn('display')=='double')
{pageWidth=bound.width/2;}
else
{pageWidth=bound.width;}
var ar=pageWidth/pagewidth;var len=$(pageElem).children().length;for(i=0;i<len;i++)
{if(($(pageElem).children()[i].className).indexOf("region")>-1)
{var regresize=$($(pageElem).children()[i]);var loc=$($(pageElem).children()[i]).attr('region-raw-data');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];if(regresize.hasClass("region-image  audio")==true)
{$('.region-image  audio').css('display','block');regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});var encodeedurl=stringParts[4];$(regresize).html("");var img=$('<audio controls="controls" width="'+(w1*ar)+'" height="'+(h1*ar)+'" > <source src="'+(encodeedurl)+'" type="audio/mpeg"></audio>');img.appendTo($(regresize));$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  link")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  to-page")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region-image  video")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});var encodeedurl=stringParts[4];var openaspopup=stringParts[5];if(openaspopup=='false')
{$(regresize).html("");if(encodeedurl.indexOf("vimeo.com")>-1)
{var vidID=encodeedurl.split("/")[encodeedurl.split("/").length-1];var encodeedurl='http://player.vimeo.com/video/'+vidID;var img=$('<iframe  src="'+(encodeedurl)+'" width="'+(w1*ar)+'" height="'+(h1*ar)+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');}
else
{var img=$('<video controls="controls" width="'+(w1*ar)+'" height="'+(h1*ar)+'" ><source src="'+(encodeedurl)+'" type="video/mp4"></video>');}
img.appendTo($(regresize));}
else
{var nH=Math.min(w1*ar,h1*ar);if(nH>46)
nH=46;var nT=(h1*ar-nH)/2;var nL=(w1*ar-nH)/2;$($(regresize).children().children()[0]).css({'margin-top':(nT)+"px",'margin-left':(nL)+"px",width:(nH)+"px",height:(nH)+"px",});if($(regresize).children().children().length>0&&($(regresize).children().children()[0]).localName=="iframe")
{$($(regresize).children().children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else
{$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}}}
else if(regresize.hasClass("region  youtube")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});var openaspopup=stringParts[4];if(openaspopup=='true')
{var nH=Math.min(w1*ar,h1*ar);if(nH>46)
nH=46;var nT=(h1*ar-nH)/2;var nL=(w1*ar-nH)/2;$($(regresize).children().children()[0]).css({'margin-top':(nT)+"px",'margin-left':(nL)+"px",width:(nH)+"px",height:(nH)+"px",});$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else
{$($(regresize).children().children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  products")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region-image")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}}}}
function resizingmediaregion1(pageElem,bound)
{if($('.magazine').turn('display')=='double')
{pageWidth=bound.width/2;}
else
{pageWidth=bound.width;}
var ar=pageWidth/pagewidth;var len=$(pageElem).children().length;for(i=0;i<len;i++)
{if(($(pageElem).children()[i].className).indexOf("region")>-1)
{var regresize=$($(pageElem).children()[i]);var loc=$($(pageElem).children()[i]).attr('region-raw-data');var stringParts=loc.split(' ');var x1=stringParts[0];var y1=stringParts[1];var w1=stringParts[2];var h1=stringParts[3];if(regresize.hasClass("region audio")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  link")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  to-page")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region-image  video")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});var openaspopup=stringParts[4];if(openaspopup=='true')
{var nH=Math.min(w1*ar,h1*ar);if(nH>46)
nH=46;var nT=(h1*ar-nH)/2;var nL=(w1*ar-nH)/2;$($(regresize).children().children()[0]).css({'margin-top':(nT)+"px",'margin-left':(nL)+"px",width:(nH)+"px",height:(nH)+"px",});}
else
{if($(regresize).children().children().length>0&&($(regresize).children().children()[0]).localName=="iframe")
{$($(regresize).children().children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}}
$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  youtube")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});var openaspopup=stringParts[4];if(openaspopup=='true')
{var nH=Math.min(w1*ar,h1*ar);if(nH>46)
nH=46;var nT=(h1*ar-nH)/2;var nL=(w1*ar-nH)/2;$($(regresize).children().children()[0]).css({'margin-top':(nT)+"px",'margin-left':(nL)+"px",width:(nH)+"px",height:(nH)+"px",});}
else
{$($(regresize).children().children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region  products")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});}
else if(regresize.hasClass("region-image")==true)
{regresize.css({top:(y1*ar)+"px",left:(x1*ar)+"px",width:(w1*ar)+"px",height:(h1*ar)+"px",});$($(regresize).children()[0]).css({width:(w1*ar)+"px",height:(h1*ar)+"px",});}}}}
function getElementsByClass(node,searchClass,tag){var classElements=new Array();var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp(searchClass);for(i=0,j=0;i<elsLen;i++){if(pattern.test(els[i].className)){classElements[j]=els[i];j++;}}
return classElements;}
function resizeViewportFullscreenWindow(){var width=screen.width;height=screen.height;options=$('.magazine').turn('options');$('.magazine').removeClass('animated');if(isfirst==true)
{isfirst=false;$('.magazine-viewport').css({width:width+17,height:height-1}).zoom('resize');}
else
{$('.magazine-viewport').css({width:width,height:height+1}).zoom('resize');}
var bWidth;var bHeight;var ar=pagewidth/pageheight;var nw=width;var nh=height;if(nw>nh*2)
{if($('.magazine').turn('display')=='double')
{if(nh*ar*2>nw)
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{bWidth=nh*ar*2;bHeight=nh;}}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
else
{if($('.magazine').turn('display')=='double')
{var newWidth=(nw-100)/2;bWidth=newWidth*2;bHeight=newWidth/ar;}
else
{var newWidth=(nw-100)/2;bWidth=newWidth;bHeight=newWidth/ar;}}
if($('.magazine').turn('zoom')==1){var bound=calculateBound({width:options.width,height:options.height,boundWidth:bWidth,boundHeight:bHeight});if(bound.width%2!==0)
bound.width-=1;if(bound.width!=$('.magazine').width()||bound.height!=$('.magazine').height()){$('.magazine').turn('size',bound.width,bound.height);if($('.magazine').turn('page')==1)
$('.magazine').turn('peel','br');$('.next-button').css({height:'48px ',backgroundPosition:'0px 0px',top:(bound.height/2-32/2)+'px'});$('.previous-button').css({height:'48px ',backgroundPosition:'0px 0px',top:(bound.height/2-32/2)+'px'});}
$('.magazine').css({top:(-bound.height/2+(screen.height-bound.height-94)/2),left:-bound.width/2});}
var magazineOffset=$('.magazine').offset(),boundH=height-magazineOffset.top-$('.magazine').height(),marginTop=(boundH-$('.thumbnails > div').height())/2;if(marginTop<0){$('.thumbnails').css({height:100});}else{$('.thumbnails').css({height:boundH});$('.thumbnails > div').css({marginTop:marginTop});}
if(magazineOffset.top<$('.made').height())
$('.made').hide();else
$('.made').show();$('.magazine').addClass('animated');$('.container-bg').css('height',($(window).height()-44)+'px');if($('.magazine').turn('display')!='double')
{$('#containersinglenavigation').css('width',((bound.width)+20+64)+'px');$('#containersinglenavigation').css('margin-left',(width/2-((bound.width))/2-32)+'px');$('#divpagearea').css('width',(bound.width)+'px');$('#divpagearea').css('height','1px');$('#divthumbnailsprev1').css({'margin-top':((height-84)/2-24)+'px'});$('#divthumbnailsnext1').css({'margin-top':((height-84)/2-24)+'px'});}}
function numberOfViews(book){return book.turn('pages')/2+1;}
function getViewNumber(book,page){return parseInt((page||book.turn('page'))/2+1,10);}
function moveBar(yes){if(Modernizr&&Modernizr.csstransforms){$('#slider .ui-slider-handle').css({zIndex:yes?-1:10000});}}
function setPreview(view){var previewWidth=112,previewHeight=73,previewSrc='pages/preview.jpg',preview=$(_thumbPreview.children(':first')),numPages=(view==1||view==$('#slider').slider('option','max'))?1:2,width=(numPages==1)?previewWidth/2:previewWidth;_thumbPreview.addClass('no-transition').css({width:width+15,height:previewHeight+15,top:-previewHeight-30,left:($($('#slider').children(':first')).width()-width-15)/2});preview.css({width:width,height:previewHeight});if(preview.css('background-image')===''||preview.css('background-image')=='none'){preview.css({backgroundImage:'url('+previewSrc+')'});setTimeout(function(){_thumbPreview.removeClass('no-transition');},0);}
preview.css({backgroundPosition:'0px -'+((view-1)*previewHeight)+'px'});}
function largeMagazineWidth(){return 2214;}
function decodeParams(data){var parts=data.split('&'),d,obj={};for(var i=0;i<parts.length;i++){d=parts[i].split('=');obj[decodeURIComponent(d[0])]=decodeURIComponent(d[1]);}
return obj;}
function calculateBound(d){var bound={width:d.width,height:d.height};if(bound.width>d.boundWidth||bound.height>d.boundHeight){var rel=bound.width/bound.height;if(d.boundWidth/rel>d.boundHeight&&d.boundHeight*rel<=d.boundWidth){bound.width=d.boundWidth;bound.height=d.boundHeight;}else{bound.width=d.boundWidth;bound.height=d.boundHeight;}}
else
{var rel=bound.width/bound.height;if(d.boundWidth/rel>d.boundHeight&&d.boundHeight*rel<=d.boundWidth){bound.width=d.boundWidth;bound.height=d.boundHeight;}else{bound.width=d.boundWidth;bound.height=d.boundHeight;}}
return bound;}
function SetSingleDisplay()
{$('.magazine').turn('display','single');}