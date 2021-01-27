function log(txt){$('#log').append('<li>'+txt+'</li>');};(function($){var hasTouch=/android|iphone|ipad/i.test(navigator.userAgent.toLowerCase());if($.touchPanView&&$.touchPanView.version<1)return;$.touchPanView={version:1,releaseDate:'20111213',author:'Marco Pegoraro',credits:'http://consulenza-web.com'};$.fn.touchPanView=function(cfg){var cfg=$.extend({},{width:100,height:100,easing:true,easingTime:10,easingShift:90,easingRepeat:30,easingReduceSpeed:.15,startCentered:true,zoom:true,startZoomedOut:false,protectZoom:true,zoomStep:5,zoomIn:false,zoomOut:false,zoomFit:false,zoomFull:false,pins:[],pinDefaults:{},t:'e'},cfg);cfg.pinDefaults=$.extend({},{x:0,y:0,w:36,h:36,point:'center',startZoom:0,endZoom:100,id:'',href:'#',show:'',title:'',cls:'',style:'',click:function(){},touch:function(){},mouseover:function(){},mouseout:function(){},t:'e'},cfg.pinDefaults);$(this).each(function(){if($(this).data('touchPanView'))return;var desktopMousePos=function(e){var pos={x:e.pageX,y:e.pageY}
return pos;}
var touchMousePos=function(e){var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];var pos={x:touch.pageX,y:touch.pageY}
return pos;}
var dragStart=function(pos){isMoving=true;startOffset=$.extend({},pos,{});stepOffset={x:0,y:0};startPos=$pan.position();startTime=new Date();startTime=startTime.getTime();stepTime=new Date();stepTime=stepTime.getTime();}
var dragEnd=function(pos){isMoving=false;stepTime=new Date();stepTime=stepTime.getTime();delay=stepTime-startTime;speedX=stepOffset.x/delay;speedY=stepOffset.y/delay;if(!cfg.easing)return;var safe_repeater=cfg.easingRepeat;var easing=function(){css=$pan.position();if(Math.abs(speedX)>=0.01){if(speedX<0){css.left-=Math.abs(speedX)*cfg.easingShift;}else{css.left+=Math.abs(speedX)*cfg.easingShift;}
if(css.left>0){css.left=0;}
if((Math.abs(css.left)+cfg.width)>=$pan.width()){css.left=0-($pan.width()-cfg.width);}}
if(Math.abs(speedY)>0.01){if(speedY<0){css.top-=Math.abs(speedY)*cfg.easingShift;}else{css.top+=Math.abs(speedY)*cfg.easingShift;}
if(css.top>0){css.top=0;}
if((Math.abs(css.top)+cfg.height)>=$pan.height()){css.top=0-($pan.height()-cfg.height);}}
$pan.css(css);speedX=speedX-speedX*cfg.easingReduceSpeed;speedY=speedY-speedY*cfg.easingReduceSpeed;if(safe_repeater<=0)return;safe_repeater-=1;setTimeout(function(){easing()},cfg.easingTime);};easing();}
var dragMove=function(pos){stepOffset.x=pos.x-startOffset.x;stepOffset.y=pos.y-startOffset.y;var css={left:startPos.left+stepOffset.x,top:startPos.top+stepOffset.y};if(css.left>0){css.left=0;startOffset.x=pos.x;}
if(css.top>0){css.top=0;startOffset.y=pos.y;}
if((Math.abs(css.left)+cfg.width)>=$pan.width()){css.left=0-($pan.width()-cfg.width);}
if((Math.abs(css.top)+cfg.height)>=$pan.height()){css.top=0-($pan.height()-cfg.height);}
$pan.css(css);}
var dblTap=function(pos){}
var dropPins=function(){for(var i=0;i<cfg.pins.length;i++){cfg.pins[i]=$.extend({},cfg.pinDefaults,cfg.pins[i]);cfg.pins[i].dom=$('<a class="touchpanview-pin"></a>');if(cfg.pins[i].id!='')cfg.pins[i].dom.attr('id',cfg.pins[i].id);if(cfg.pins[i].title!='')cfg.pins[i].dom.attr('title',cfg.pins[i].title);if(cfg.pins[i].style!='')cfg.pins[i].dom.attr('style',cfg.pins[i].style);if(cfg.pins[i].href!='')cfg.pins[i].dom.attr('href',cfg.pins[i].href);cfg.pins[i].dom.addClass('touchpanview-pin-'+cfg.pins[i].point);if(cfg.pins[i].cls!='')cfg.pins[i].dom.addClass(cfg.pins[i].cls);if(cfg.pins[i].show!='')cfg.pins[i].dom.html(cfg.pins[i].show);cfg.pins[i].dom.bind('click',$.proxy(function(e){this.click.call(this,e);},cfg.pins[i]));cfg.pins[i].dom.bind('touchend',$.proxy(function(e){this.touch.call(this,e);},cfg.pins[i]));cfg.pins[i].dom.bind('mouseover',$.proxy(function(e){this.mouseover.call(this,e);},cfg.pins[i]));cfg.pins[i].dom.bind('mouseout',$.proxy(function(e){this.mouseout.call(this,e);},cfg.pins[i]));$pan.append(cfg.pins[i].dom);}}
var init=function(){$wrap.css({width:cfg.width,height:cfg.height});css={width:$img.width(),height:$img.height()};if(cfg.startCentered){css.left=0-(css.width/2-cfg.width/2),css.top=0-(css.height/2-cfg.height/2)}
var zoom={ratio:100,x:Math.abs(css.width-cfg.width),y:Math.abs(css.height-cfg.height)};$pan.css(css);dropPins();$img.data('touchPanView',{cfg:cfg,wrap:$wrap,pan:$pan,zoom:zoom,img:{width:$img.width(),height:$img.height()}});if(cfg.zoom&&cfg.startZoomedOut){$img.touchPanZoom(0,false);}else{$img.touchPanZoom(100,false);}
$wrap.bind('touchstart',function(e){e.preventDefault();device='mobile';dragStart(touchMousePos(e));});$wrap.bind('touchend',function(e){e.preventDefault();dragEnd(touchMousePos(e));});$wrap.bind('touchmove',function(e){e.preventDefault();if(!isMoving)return;dragMove(touchMousePos(e));});if($.fn.doubletap)$wrap.doubletap(function(e){dblTap(desktopMousePos(e));});var prevtouchPanViewZoom=1;var inittouchPanViewZoom=$img.touchPanZoom();$wrap.bind('pinch',function(e,e1){isMoving=false;z=$img.touchPanZoom();var wdg=$img.data('touchPanView');if(e1.scale>1){z1=z+3;prevtouchPanViewZoom=z1;window.firstPinchZoomOut=0;window.IsPinchOutCounter=false;}else{z1=z-3;prevtouchPanViewZoom=z1;if(prevtouchPanViewZoom+3==inittouchPanViewZoom)
{if(firstPinchZoomOut==2)
{window.IsPinchOutCounter=true;}
else
{window.IsPinchOutCounter=false;window.firstPinchZoomOut=window.firstPinchZoomOut+1;e.preventDefault();e.stopImmediatePropagation();}}
else
window.IsPinchOutCounter=false;}
$img.touchPanZoom(z1,false);});$wrap.bind('mousedown',function(e){e.preventDefault();device='desktop';dragStart(desktopMousePos(e));});$wrap.bind('mouseup',function(e){e.preventDefault();dragEnd(desktopMousePos(e));});$wrap.bind('mousemove',function(e){e.preventDefault();if(!isMoving)return;dragMove(desktopMousePos(e));});if(!$.fn.doubletap)$wrap.bind('dblclick',function(e){e.preventDefault();dblTap(desktopMousePos(e));});if(cfg.zoomIn!==false)$(cfg.zoomIn).bind('click',function(e){e.preventDefault();});if(cfg.zoomOut!==false)$(cfg.zoomOut).bind('click',function(e){e.preventDefault();});if(cfg.zoomFit!==false)$(cfg.zoomFit).bind('click',function(e){e.preventDefault();});if(cfg.zoomFull!==false)$(cfg.zoomFull).bind('click',function(e){e.preventDefault();});}
var device='desktop';var isMoving=false;var startPos={};var startOffset={};var stepOffset={};var startTime=0;var stepTime=0;var speedX=0;var speedY=0;var _this=this;var $img=$(this);$img.wrap('<div class="touchpanview-wrap"></div>');var $wrap=$img.parent();$wrap.append('<div class="touchpanview-pan"></div>');var $pan=$img.next();$pan.append($img);if($.imagesLoaded){$img.imagesLoaded(function(){init();});}else{init();}});};$.fn.touchPanZoom=function(zoom,animate){var updatePins=function(animate){for(var i=0;i<wdg.cfg.pins.length;i++){var pinCss={left:css.width/100*wdg.cfg.pins[i].x,top:css.height/100*wdg.cfg.pins[i].y,width:wdg.cfg.pins[i].w,height:wdg.cfg.pins[i].h};if(wdg.cfg.pins[i].point=='center'){pinCss.left-=wdg.cfg.pins[i].w/2;pinCss.top-=wdg.cfg.pins[i].h/2;}else if(wdg.cfg.pins[i].point=='topRight'){pinCss.left-=wdg.cfg.pins[i].w;}else if(wdg.cfg.pins[i].point=='bottomLeft'){pinCss.top-=wdg.cfg.pins[i].h;}else if(wdg.cfg.pins[i].point=='bottomRight'){pinCss.top-=wdg.cfg.pins[i].h;pinCss.left-=wdg.cfg.pins[i].w;}
if(animate){wdg.cfg.pins[i].dom.animate(pinCss,300);}else{wdg.cfg.pins[i].dom.css(pinCss);}}}
var _this=this;var $img=$(this);var wdg=$img.data('touchPanView');if(!wdg)return false;if(zoom=='in')zoom=wdg.zoom.ratio+wdg.cfg.zoomStep;if(zoom=='out')zoom=wdg.zoom.ratio-wdg.cfg.zoomStep;if(!wdg.cfg.zoom)zoom=100;if(!zoom&&zoom!==0)return wdg.zoom.ratio;if(wdg.cfg.protectZoom){if(zoom<0)zoom=0;if(zoom>100)zoom=100;}
var css={width:wdg.img.width*(zoom/100),height:wdg.img.height*(zoom/100),top:0,left:0};if((css.width<wdg.cfg.width||css.height<wdg.cfg.height)){var viewportRatio=wdg.cfg.width/wdg.cfg.height;var imageRatio=wdg.img.width/wdg.img.height;if(viewportRatio>1){css.width=wdg.cfg.width;css.height=css.width/imageRatio;zoom=css.width/wdg.img.width*100;}else if(viewportRatio<1){if(wdg.img.width<wdg.img.height)
{css.width=wdg.cfg.width;css.height=css.width/imageRatio;zoom=css.width/wdg.img.width*100;}
else
{css.height=wdg.cfg.height;css.width=css.height*imageRatio;zoom=css.height/wdg.img.height*100;}}else{if(imageRatio>1){css.height=wdg.cfg.height;css.width=css.height*imageRatio;zoom=css.height/wdg.img.height*100;}else if(imageRatio<1){css.width=wdg.cfg.width;css.height=css.width/imageRatio;zoom=css.width/wdg.img.width*100;}else{css.height=100;css.width=100;}}}
if(zoom>0){pos=wdg.pan.position();css.left=pos.left-(css.width-wdg.pan.width())/2;css.top=pos.top-(css.height-wdg.pan.height())/2;}
if(css.left>0)css.left=0;if(css.top>0)css.top=0;if((Math.abs(css.left)+wdg.cfg.width)>=css.width){css.left=0-(css.width-wdg.cfg.width);}
if((Math.abs(css.top)+wdg.cfg.height)>=css.height){css.top=0-(css.height-wdg.cfg.height);}
if(animate===false){wdg.pan.css(css);$img.css({width:css.width,height:css.height});updatePins(false);}else{wdg.pan.animate(css,300);$img.animate({width:css.width,height:css.height},300);updatePins(true);}
wdg.zoom.ratio=zoom;return wdg.zoom.ratio;};})(jQuery);