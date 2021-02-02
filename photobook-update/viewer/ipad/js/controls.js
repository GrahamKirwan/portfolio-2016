var currentPageNumber=1;var totalpage=14;var devicewidth;var deviceheight1,deviceheight;var displaypagemode='double';var documentID,pagetitle,pdfName,pdfFileSize,intropagewidth,intropageheight,pagewidth,pageheight,thumbnailwidth,thumbnailheight;var toctype=0;var targetpage=1;var isIntro=false;var documentUrl;var $slider;var fullscreenMode=false;var autoPlayTimer;var IsFlippingSoundEnable=false;var isfirstresize=false;var cssName="css/magazine.css";var isIE=false;var isPageShadow=true;var ItemAdded=false;var publicationName="";var ANALYTICS_PAGEVIEW="ANALYTICS_PAGEVIEW";var ANALYTICS_ZOOM="ANALYTICS_ZOOM";var ANALYTICS_PRINT="ANALYTICS_PRINT";var ANALYTICS_SEARCH="ANALYTICS_SEARCH";var ANALYTICS_EMAIL="ANALYTICS_EMAIL";var ANALYTICS_BOOKMARK="ANALYTICS_BOOKMARK";var ANALYTICS_LINK_CLICK="ANALYTICS_LINK_CLICK";var ANALYTICS_DOWNLOAD_PDF="ANALYTICS_DOWNLOAD_PDF";var ANALYTICS_TRANSLATE="ANALYTICS_TRANSLATE";var ANALYTICS_THUMBNAILS_CLICKED="ANALYTICS_THUMBNAILS_CLICKED";var isGoogleAnayticsEnabled=true;var GoogleAnalyticsAccount="";var _reportstring;var AnalyticsPageLinkURL="";var _SearchTerm="";var searchItemsHeight=320;var IsDemo=false;var IsMusicEnabled=false;var producturl,checkouturl;var _popupwidth,_popupheight,IsBgMugicPlaying;function DetectBrowser()
{devicewidth=$(window).width();deviceheight1=$(window).height();deviceheight=deviceheight1-44;}
$(document).bind("orientationchange",function(c){window.scrollTo(0,1);var ori=window.orientation;windowScreenHeight=window.screen.availHeight;windowScreenWidth=window.screen.availWidth;$(".container-thumbnails-popup").css('visibility','hidden');$(".container-thumbnails-popup").css('display','none');$('.container-overlay').css('display','none');$('.container-overlay').css('visibility','hidden');$(".container-thumbnails-popup").css('visibility','hidden');$(".container-thumbnails-popup").css('display','none');$(".container-print").css('visibility','hidden');$(".container-print").css('display','none');$(".container-downloadpdf-popup").css('visibility','hidden');$(".container-downloadpdf-popup").css('display','none');$(".container-share-popup").css('visibility','hidden');$(".container-share-popup").css('display','none');$('.container-navigation').css("visibility","hidden");$('.container-navigation').css("display","none");$("#containersearch").css('display','none');$("#containersearch").css('visibility','hidden');$("#containerzoom").css("visibility","hidden");$("#containerzoom").css("display","none");$("#containerzoom2").css("visibility","hidden");$("#containerzoom2").css("display","none");$(".toolbar-header").css("visibility","visible");$(".toolbar-header").css("display","block");$(".container").css("visibility","visible");$(".container").css("display","block");$("#containerbg").css("visibility","visible");$("#containerbg").css("display","block");$('magazine-viewport').css('top','0px');$("#searchinputheader").val('');$("#searchinputpopup").val('');_SearchTerm="";if(document.getElementById("zoomPage2"))
{$(".touchpanview-wrap").remove();var zoomPage2=$('<img id="zoomPage2" class="defferred" width="0" height="0" src="" data-src="" style="visibility:hidden; border:0px solid black;" />');}
if(ori==0||ori==180)
{var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');var valuem='width=768,height=1004,user-scalable=yes,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0';mt.attr('content',valuem);$(document).bind('touchmove',false);$(document).unbind('touchmove',true);$('.magazine').turn('display','single');$("#containerdownloadpdf").css("top","40%");$("#containerdownloadpdf").css("left","25%");$("#containershare").css("top","30%");$("#containershare").css("left","25%");$("#containerprint").css("top","40%");$("#containerprint").css("left","25%");$('.container-navigation').css("visibility","visible");$('.container-navigation').css("display","block");$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');var wh=$(window).height();$("#containersinglenavigation").css('margin-top',(-(wh-44))+'px');UpdateSinglePageNavigationIcons();}
else
{var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');var valuem='width=1024,height=748,user-scalable=yes,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0';mt.attr('content',valuem);$(document).bind('touchmove',false);$(document).unbind('touchmove',true);$('.magazine').turn('display','double');$("#containerdownloadpdf").css("top","30%");$("#containerdownloadpdf").css("left","30%");$("#containershare").css("top","20%");$("#containershare").css("left","30%");$("#containerprint").css("top","30%");$("#containerprint").css("left","30%");$('.container-navigation').css("visibility","hidden");$('.container-navigation').css("display","none");var pagenumber=$('.magazine').turn('page');if(pagenumber<2)
{$('#containerintro').css('display','block');$('#containerintro').css('visibility','visible');resizeViewportWindow();}
else
{$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');}}
setTimeout(resizeViewportWindow,400);});$(document).ready(function(){var ori=window.orientation;if(ori==90||ori==-90)
{displaypagemode='double';var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');var valuem='width=1024,height=748,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0';mt.attr('content',valuem);$('.container-navigation').css("visibility","hidden");$('.container-navigation').css("display","none");}
else
{displaypagemode='single';var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');var valuem='width=768,height=1004,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0';mt.attr('content',valuem);$('.container-navigation').css("visibility","visible");$('.container-navigation').css("display","block");$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');}
$(document).bind('touchmove',false);$(document).unbind('touchmove',true);cssName="css/magazine.css";totalpage=number_of_pages;var tmp=base_url.replace("../","");documentID=tmp.replace("/","");devicewidth=$(window).width()-64;deviceheight1=$(window).height();deviceheight=deviceheight1-44;ShowProgressBar();LoadDocumentXML();SetDefaultSize();LoadSettingsXML();CreateLanguageListTranslate();CreateSettingsOptions();loadBook();$('input').bind('focus',function(){$(window).scrollTop(10);var keyboard_shown=$(window).scrollTop()>0;$(window).scrollTop(0);});$('input, textarea').bind('blur',function(e){window.scrollTo(0,1);});$("#firstPage").click(function(event){GoToPage(1);var pagenumberval=(((currentPageNumber).toString())+"/"+(totalpage.toString()));$('input[name=inputPageNumber]').val(pagenumberval.toString());UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,1000);});$("#prevPage").click(function(event){$('.magazine').turn('previous');SetSinglePageNumberNavigationBar();currentPageNumber=parseInt(GetCurrentPageNumber());var pagenumberval;if(currentPageNumber==1)
pagenumberval=(((currentPageNumber).toString())+"/"+(totalpage.toString()));else
pagenumberval=((currentPageNumber).toString())+"-"+((currentPageNumber+1).toString())+"/"+(totalpage.toString());$('input[name=inputPageNumber]').val(pagenumberval.toString());UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,1000);});$("#nextPage").click(function(event){$('.magazine').turn('next');SetSinglePageNumberNavigationBar();currentPageNumber=parseInt(GetCurrentPageNumber());var pagenumberval;if(currentPageNumber==totalpage)
pagenumberval=((totalpage.toString())+"/"+(totalpage.toString()));else
pagenumberval=((currentPageNumber).toString())+"-"+((currentPageNumber+1).toString())+"/"+(totalpage.toString());$('input[name=inputPageNumber]').val(pagenumberval.toString());UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,1000);});$("#lastPage").click(function(event){GoToPage(totalpage);var pagenumberval=((totalpage.toString())+"/"+(totalpage.toString()));$('input[name=inputPageNumber]').val(pagenumberval.toString());UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,1000);});$("#inputPageNumber").keypress(function(event){if(event.which==13)
{GoToPage($("#inputPageNumber").val());UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,1000);}});$("#imgCloseThumbnailsContainer").click(function(event){$(".container").show();$(".container").css({"opacity":"1"});$(".container-intro").css({"opacity":"1"});$(".container-thumbnails-popup").hide();$(".container-toc").css('display','none');$(".container-print").css('display','none');$(".container-thumbnails-popup").css('display','none');$(".container-toc").css('visibility','hidden');$(".container-print").css('visibility','hidden');$(".container-thumbnails-popup").css('visibility','hidden');});$("#imgCloseTOCContainer").click(function(event){$(".container").show();$(".container").css({"opacity":"1"});$(".container-toc").hide();$(".container-toc").css('display','none');$(".container-print").css('display','none');$(".container-thumbnails-popup").css('display','none');$(".container-toc").css('visibility','hidden');$(".container-print").css('visibility','hidden');$(".container-thumbnails-popup").css('visibility','hidden');});$("#imgClosePrintContainer").click(function(event){ClosePrintDialog();});$("#btnPrint").on('click',function(){PrintClicked();});$("#btnCancelPrint").on('click',function(){ClosePrintDialog();});$("#btnDownload").click(function(event){DownloadClicked();});$("#btnCancelDownload").click(function(event){CloseDownloadDialog();});$("#imgCloseTranslateContainer").click(function(event){CloseTranslateDialog();});$("#btnTranslate").click(function(event){TranslateClicked();});$("#btnCancelTranslate").click(function(event){CloseTranslateDialog();});$("#imgCloseShareContainer").click(function(event){CloseShareDialog();});$("#imgCloseSearchContainer").click(function(event){CloseSearchDialog();});$("#imgCloseDownloadpdfContainer").click(function(event){CloseDownloadDialog();});$("#imgCloseSettingsContainer").click(function(event){CloseSettingsDialog();});$("#btnSettingsOk").click(function(event){SettingsOkClicked();});$("#btnCancelSettings").click(function(event){CloseSettingsDialog();});$("#imgSlideshowFirst").click(function(event){clearInterval(autoPlayTimer);$("#imgSlideshowPlay").attr('src','pics/slideshow_play.png');$(".magazine").turn("page",1);});$("#imgSlideshowPrevious").click(function(event){clearInterval(autoPlayTimer);$("#imgSlideshowPlay").attr('src','pics/slideshow_play.png');$('.magazine').turn('previous');});$("#imgSlideshowPlay").click(function(event){if($("#imgSlideshowPlay").attr('src')=='pics/slideshow_play.png')
{AutoPlay();$("#tooltip_playmode").attr("data-tooltip","Play");}
else
{$("#tooltip_playmode").attr("data-tooltip","Pause");clearInterval(autoPlayTimer);$("#imgSlideshowPlay").attr('src','pics/slideshow_play.png');clearInterval(autoPlayTimer);}});$("#imgSlideshowNext").click(function(event){clearInterval(autoPlayTimer);$("#imgSlideshowPlay").attr('src','pics/slideshow_play.png');$('.magazine').turn('next');});$("#imgSlideshowLast").click(function(event){clearInterval(autoPlayTimer);$("#imgSlideshowPlay").attr('src','pics/slideshow_play.png');$('.magazine').turn('page',totalpage);});$("#imgCloseSlideshowContainer").click(function(event){CloseSlideshowBar();});$(".container-overlay").click(function(event){if($(".container-image-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();CloseImagePopup(event);}
else if($(".container-thumbnails-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();}
else if($(".container-downloadpdf-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();}
else if($(".container-print").css("visibility")=="visible")
{event.stopImmediatePropagation();}
else if($(".container-translate-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();}
else if($(".container-share-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();}
else if($(".container-search-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();CloseSearchDialog();}
else
{event.stopImmediatePropagation();CloseImagePopup(event);}
$('.container-overlay').css('display','none');$('.container-overlay').css('visibility','hidden');$(".container-thumbnails-popup").css('display','none');$(".container-thumbnails-popup").css('visibility','hidden');$(".container-print").css('display','none');$(".container-print").css('visibility','hidden');$(".container-downloadpdf-popup").css('display','none');$(".container-downloadpdf-popup").css('visibility','hidden');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-translate-popup").css('display','none');$(".container-translate-popup").css('visibility','hidden');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-search-popup").css('display','none');$(".container-search-popup").css('visibility','hidden');});$("#canvas").on('click',function(event){if($(".container").css("opacity")!=1)
{if(event.target.attributes[0].nodeValue=="magazine-viewport"||event.target.attributes[0].nodeValue=="container"||event.target.attributes[0].nodeValue=="gradient"||event.target.attributes[0].nodeValue=="magazine animated")
{if(event.target.attributes[0].nodeValue=="gradient")
event.preventDefault();event.stopImmediatePropagation();if($(".container-thumbnails-popup").css("visibility")=="visible")
{$(".container-thumbnails-popup").css("visibility","hidden")
$(".container-thumbnails-popup").css('display','none');$(".container").css({"opacity":"1"});$(".container-intro").css({"opacity":"1"});return false;}
else if($(".container-settings-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-downloadpdf-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-print").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-translate-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-share-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else
{event.stopImmediatePropagation();CloseImagePopup(event);}}
else if(event.target.parentNode.className=="page-wrapper")
{if($(".container-thumbnails-popup").css("visibility")=="visible")
{$(".container-thumbnails-popup").css("visibility","hidden")
$(".container-thumbnails-popup").css('display','none');$(".container").css({"opacity":"1"});$(".container-intro").css({"opacity":"1"});return false;}
else if($(".container-settings-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-downloadpdf-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-print").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else if($(".container-share-popup").css("visibility")=="visible")
{event.preventDefault();event.stopImmediatePropagation();return false;}
else
{event.stopImmediatePropagation();CloseImagePopup(event);}}
else if(event.target.attributes[0].nodeValue=="load_img")
{if($(".container-image-popup").css("visibility")=="visible")
{event.stopImmediatePropagation();CloseImagePopup(event);}}}});$('#divthumbnailsnext').click(function(){var divthumbnailslistleft=parseInt($(".thumbnails").css('left'),10);var divthumbnailswidth=parseInt($("#divthumbnails").css('width'),10);var divthumbnailslistwidth=parseInt($("#thumbnails-ul").css('width'),10);if(divthumbnailslistleft==0)
{$(".thumbnails").animate({left:divthumbnailslistleft-85},"fast");$('#divthumbnailsprev').css("visibility","visible");}
else if(divthumbnailswidth<=(divthumbnailslistwidth+divthumbnailslistleft))
{$(".thumbnails").animate({left:divthumbnailslistleft-85},"fast");var divthumbnailslistleft1=parseInt($(".thumbnails").css('left'),10);if(divthumbnailswidth<=(divthumbnailslistwidth+divthumbnailslistleft-85))
$('#divthumbnailsnext').css("visibility","visible");else
$('#divthumbnailsnext').css("visibility","hidden");$('#divthumbnailsprev').css("visibility","visible");}
else
{$('#divthumbnailsnext').css("visibility","hidden");}});$('#divthumbnailsprev').click(function(){var divthumbnailslistleft=parseInt($(".thumbnails").css('left'),10);var divthumbnailswidth=parseInt($("#divthumbnails").css('width'),10);var divthumbnailslistwidth=parseInt($("#thumbnails-ul").css('width'),10);if(divthumbnailslistleft<0)
{$(".thumbnails").animate({left:divthumbnailslistleft+85},"fast");var divthumbnailslistleft1=parseInt($(".thumbnails").css('left'),10);if(divthumbnailslistleft+85<0)
$('#divthumbnailsprev').css("visibility","visible");else
$('#divthumbnailsprev').css("visibility","hidden");$('#divthumbnailsnext').css("visibility","visible");}
else
{$('#divthumbnailsnext').css("visibility","hidden");$('#divthumbnailsprev').css("visibility","visible");}});$('#divthumbnailsprev1').click(function(){if($('.magazine').turn('page')==2)
{$('#divthumbnailsprev1').css("visibility","hidden");$('#divthumbnailsnext1').css("visibility","visible");}
else if($('.magazine').turn('page')!=1&&$('.magazine').turn('page')<totalpage)
{$('#divthumbnailsprev1').css("visibility","visible");$('#divthumbnailsnext1').css("visibility","visible");}
else if($('.magazine').turn('page')!=1&&$('.magazine').turn('page')==totalpage)
{$('#divthumbnailsprev1').css("visibility","visible");$('#divthumbnailsnext1').css("visibility","hidden");}
$('.magazine').turn('previous');SetSinglePageNumberNavigationBar();ChangePageShadow();setTimeout(resizeViewportWindow,1000);});$('#divthumbnailsnext1').click(function(){if($('.magazine').turn('page')==totalpage-1)
{$('#divthumbnailsprev1').css("visibility","visible");$('#divthumbnailsnext1').css("visibility","hidden");}
else if($('.magazine').turn('page')!=totalpage&&$('.magazine').turn('page')>=1)
{$('#divthumbnailsprev1').css("visibility","visible");$('#divthumbnailsnext1').css("visibility","visible");}
$('.magazine').turn('next');SetSinglePageNumberNavigationBar();ChangePageShadow();setTimeout(resizeViewportWindow,1000);});document.addEventListener('touchmove',function(event){if($(".container-search-popup").css("visibility")=="visible")
{if(searchItemsHeight>320)
{$(document).bind('touchmove',true);$(document).unbind('touchmove',false);}
else
{$(document).bind('touchmove',false);$(document).unbind('touchmove',true);event.preventDefault();}
if(event.target.className.indexOf('container-overlay')!=-1)
{event.preventDefault();}
if(event.target.parentNode.className.indexOf('scrollable')!=-1||event.target.className.indexOf('scrollable')!=-1){event.preventDefault();}
else
{}}
else
{$(document).bind('touchmove',false);$(document).unbind('touchmove',true);}},false);$slider=$('#slider'),startPercent=0,movePercent=0,preventSlide=false,$$pages=$('#slider div img');handleTouchyDrag=function(event,phase,$target,data){if(!preventSlide){var bodyWidth=$('body').width(),xDelta=data.movePoint.x-data.lastMovePoint.x,newMovePercent=movePercent+(xDelta/bodyWidth);if(phase==='move'){if(newMovePercent<0&&newMovePercent>(1-$$pages.length)){movePercent=newMovePercent;$slider.css({'WebkitTransition':'none','WebkitTransform':'translate3d('+(movePercent*100)+'%,0,0)'});}}
else if(phase==='end'&&movePercent!==startPercent){if(data.velocity>1.7){movePercent=movePercent>startPercent?startPercent+1:startPercent-1
slide();}
else{movePercent=Math.round(movePercent);slide();}}}},slide=function(){preventSlide=true;setTimeout(function(){preventSlide=false},400);$slider.css({'WebkitTransition':'-webkit-transform 0.4s linear','WebkitTransform':'translate3d('+(movePercent*100)+'%,0,0)'});startPercent=movePercent;swipePageNumber=(startPercent*-1)+1;if(movePercent*-1==0)
{$('#divpageswipeprev').css("visibility","hidden");$('#divpageswipenext').css("visibility","visible");}
else if(movePercent*-1>=0&&movePercent*-1!=totalpage-1)
{$('#divpageswipeprev').css("visibility","visible");$('#divpageswipenext').css("visibility","visible");}
else if(movePercent*-1==totalpage-1)
{$('#divpageswipeprev').css("visibility","visible");$('#divpageswipenext').css("visibility","hidden");}
ChangePageShadow();};$$pages.bind('touchy-drag',handleTouchyDrag);$('div').tooltip({tooltipClass:'linkTooltipColor',});$('#hiddenclicker2').click(function(){});});function GetDocumentUrl()
{if(window.location.href.indexOf('#')>-1)
{var tmp=window.location.href.split("#")[0];var tmp1=tmp.split("/")[tmp.split("/").length-1];var tmp2="";if(tmp1=="index.html")
tmp2=tmp.replace(tmp1,"");else
tmp2=tmp.replace("viewer/ipad/","");documentUrl=tmp2.replace("viewer/ipad/","");}
else
{var tmp=window.location.href.split("/")[window.location.href.split("/").length-1];var tmp2=window.location.href.replace(tmp,"");documentUrl=tmp2.replace("viewer/ipad/","");}}
function GetWidthInNumber(pxval)
{return parseInt(pxval.toString().replace("px",""));}
function FixMargin(left){$('.thumbnails').css("left",left);}
function ShowProgressBar()
{$('#imgTumbnailPreloader').attr('src',"../../"+documentID+"/Thumbnail_1.jpg");$("#all").css('display','block');$("#all").css("visibility","visible");$(".toolbar-header").css('display','none');$(".toolbar-footer").css('display','none');var pbarleft=$(window).width();var pbartop=$(window).height();var imgH=parseInt($('#imgTumbnailPreloader').css('height'),10)/2;$(".progress-bar-wrap").css('margin-top',(pbartop/2-70));var count=0;var myCounter=setInterval(function(){count+=1;if(count>10)
{if(IsMusicEnabled)
{try
{if($('#musicfile')!='undefined')
{$('#hiddenclicker2').trigger('click');}}
catch(e)
{alert(e);}}
HideProgressBar();clearInterval(myCounter);setTimeout(resizeViewportWindow,20);}
else
{$('#imgTumbnailPreloader').css({"opacity":((count/10))});$('#textLoadingTumbnailPreloader').text((count*10)+"% Loaded");}},1000);}
function HideProgressBar()
{$(".container").show();$(".container").css({"opacity":"1"});$(".container-toc").hide();$(".container-toc").css('display','none');$(".toolbar-header").css('display','block');$(".toolbar-footer").css('display','block');}
function Calculate()
{var ww=$(window).width();var dw=$(document).width();var wh=$(window).height();var dh=$(document).height();var viewportheight=dh;var dh0=0;var ar=viewportheight/pageheight;var newHeight=(pageheight*ar)+"px";var newWidth=((pagewidth*ar)*2)+"px";var newLeft=-(pagewidth*ar)+"px";var newTop=-((pageheight*ar/2))+"px";var containerTop=((dh/2)-((44)/2))+"px";$('.container').css('height',newHeight);$('.container').css('width',newWidth);$('.container').css('top',containerTop);$('.magazine').css('height',newHeight);$('.magazine').css('width',newWidth);$('.magazine').css('left',newLeft);$('.magazine').css('top',newTop);var l1=((ww-300)/2)+"px";var t1=((wh-200)/2)+"px";$("#containerprint").css("left",l1);$("#containerprint").css("top",t1);$("#containertranslate").css("left",((ww-350)/2)+"px");$("#containertranslate").css("top",t1);$("#containersettings").css("left",l1);$("#containersettings").css("top",t1);$("#containerdownloadpdf").css("left",l1);$("#containerdownloadpdf").css("top",t1);$("#containershare").css("left",((ww-430)/2)+"px");$("#containershare").css("top",((wh-450)/2)+"px");var containerslideshowheight=30;$("#containerslideshow").css("top",((wh-containerslideshowheight-5))+"px");$("#containerslideshow").css("left",((5))+"px");$("#containerimagepopup").css("left",((ww-400)/2)+"px");$("#containerimagepopup").css("top",((wh-300)/2)+"px");$("#containerproductpopup").css("left",((ww-400)/2)+"px");$("#containerproductpopup").css("top",((wh-300)/2)+"px");var thumbnail_width=80;var thumbnail_height=130;var thumbnaillistwidth=(90*totalpage);var magWidth=parseInt(($(".magazine").css("width")),10);var magHeight=parseInt(($(".magazine").css("height")),10);var pageWidth=parseInt(parseInt((magWidth)-thumbnail_width),10);$(".container-thumbnails-popup").css("top",((wh-(130+80)))+"px");$(".container-thumbnails-popup").css("width",magWidth+"px");$(".container-thumbnails-popup").css("height",thumbnail_height+"px");$(".container-thumbnails-popup").css("left",((ww-magWidth)/2)+"px");$(".div-thumbnails").css("width",(pageWidth)+"px");var thumbnaillistwidth=((thumbnail_width)*(totalpage+1));var thumbnaillistheight=(parseInt(thumbnail_height,10));$("#thumbnails-ul").css("height",thumbnaillistheight+"px");$(".thumbnails").css("height","130px");$(".thumbnails").css("left",(0)+"px");$('#divthumbnailsprev').css("visibility","hidden");var ori=window.orientation;if(ori==0||ori==180)
{}}
function resizeElements()
{var ww=$(window).width();var wh=$(window).height();var l1=((ww-300)/2)+"px";var t1=((wh-200)/2)+"px";$("#containerprint").css("left",l1);$("#containerprint").css("top",t1);$("#containertranslate").css("left",((ww-350)/2)+"px");$("#containertranslate").css("top",t1);$("#containersettings").css("left",l1);$("#containersettings").css("top",t1);$("#containerdownloadpdf").css("left",l1);$("#containerdownloadpdf").css("top",t1);$("#containershare").css("left",((ww-430)/2)+"px");$("#containershare").css("top",((wh-450)/2)+"px");var containerslideshowheight=30;$("#containerslideshow").css("top",((wh-containerslideshowheight-5))+"px");$("#containerslideshow").css("left",((5))+"px");$("#containerimagepopup").css("left",((ww-400)/2)+"px");$("#containerimagepopup").css("top",((wh-300)/2)+"px");$("#containerproductpopup").css("left",((ww-400)/2)+"px");$("#containerproductpopup").css("top",((wh-300)/2)+"px");var thumbnail_width=80;var magWidth=parseInt(($(".magazine").css("width")),10);var pageWidth=parseInt(parseInt((magWidth)-thumbnail_width),10);$(".container-thumbnails-popup").css("top",((wh-(130+80)))+"px");$(".container-thumbnails-popup").css("left",((ww-magWidth)/2)+"px");$(".container-thumbnails-popup").css("width",magWidth+"px");$(".container-thumbnails-popup").css("left",((ww-magWidth)/2)+"px");$(".div-thumbnails").css("width",(pageWidth)+"px");}
function PrintAll()
{var selectedAll=[];$(':checkbox:checked').each(function(i){selectedAll[i]=$(this).val();});$("#btnPrintAll").printElement({pageTitle:document.title,leaveOpen:!1,printMode:"popup",printBodyOptions:{styleToAdd:"padding:0px;margin:0px;color:#FFFFFF !important;border:none;padding:0;margin:0;",items:selectedAll},iframeElementOptions:{styleToAdd:"position:absolute;width:0px;height:0px;bottom:0px;border:none;padding:0;margin:0;"}});}
var normalFile='';function LoadDocumentXML()
{$.ajax({'dataType':'xml','success':function(xml)
{$(xml).find('doc').each(function(index)
{pdfName=$(xml).find('doc').attr('filename');$('#pdfnametext').text(decodeURIComponent(pdfName));pdfFileSize=$(xml).find('doc').attr('filesize');$('#pdffilesize').text((pdfFileSize/(1024*1024)).toFixed(1)+" MB");$('#pdfsystemrequirement').text("Adobe Reader");pagetitle=$(xml).find('doc').attr('title');document.title=pagetitle;if($(xml).find('page').attr('num')=="0")
{var $normalxml=($(xml).find('page').find('normal')[0]);for(var i=0;i<$normalxml.attributes.length;i++)
{if($normalxml.attributes[i].nodeName=="width")
intropagewidth=$normalxml.attributes[i].nodeValue;if($normalxml.attributes[i].nodeName=="height")
intropageheight=$normalxml.attributes[i].nodeValue;if($normalxml.attributes[i].nodeName=="file")
normalFile=$normalxml.attributes[i].nodeValue;}
totalpage=$(xml).find('page').length-1;isIntro=true;var $pagexml=$(xml).find('page')[1];for(var v=0;v<$pagexml.childElementCount;v++)
{if($pagexml.childNodes[v+1].nodeName=="normal")
{var $normalxml=$pagexml.childNodes[v+1];for(var i=0;i<$normalxml.attributes.length;i++)
{if($normalxml.attributes[i].nodeName=="width")
pagewidth=$normalxml.attributes[i].nodeValue;if($normalxml.attributes[i].nodeName=="height")
pageheight=$normalxml.attributes[i].nodeValue;}}
if($pagexml.childNodes[v+1].nodeName=="thumbnail")
{var $thumbnailxml=$pagexml.childNodes[v+1];for(var i=0;i<$thumbnailxml.attributes.length;i++)
{if($thumbnailxml.attributes[i].nodeName=="width")
thumbnailwidth=$thumbnailxml.attributes[i].nodeValue;if($thumbnailxml.attributes[i].nodeName=="height")
thumbnailheight=$thumbnailxml.attributes[i].nodeValue}}}
Calculate();if(isIntro)
AddIntroPage(normalFile);CreateThumbnails();CreatePageDDForPrint();SetDefaultPageNumber();}
else if($(xml).find('page').attr('num')=="1")
{var $normalxml=($(xml).find('page').find('normal')[0]);for(var i=0;i<$normalxml.attributes.length;i++)
{if($normalxml.attributes[i].nodeName=="width")
pagewidth=$normalxml.attributes[i].nodeValue;if($normalxml.attributes[i].nodeName=="height")
pageheight=$normalxml.attributes[i].nodeValue;}
var $thumbnailxml=($(xml).find('page').find('thumbnail')[0]);for(var i=0;i<$thumbnailxml.attributes.length;i++)
{if($thumbnailxml.attributes[i].nodeName=="width")
thumbnailwidth=$thumbnailxml.attributes[i].nodeValue;if($thumbnailxml.attributes[i].nodeName=="height")
thumbnailheight=$thumbnailxml.attributes[i].nodeValue}
Calculate();if(isIntro)
AddIntroPage(normalFile);CreateThumbnails();CreatePageDDForPrint();SetDefaultPageNumber();}});$(xml).find('toc').each(function()
{toctype=parseInt($(this).attr('type'));if($(this).attr('type')!=0)
{if($(this).attr('type')==1)
targetpage=$(this).attr('targetpage');}});},'type':'get','url':"../../"+documentID+'/document.xml'});}
function LoadSettingsXML()
{$.ajax({'dataType':'xml','success':function(xml)
{$(xml).find('appsettings').each(function()
{var btnthemespath=$(this).find('skin').attr('buttonstheme');var btnthemes=(btnthemespath.substr(0,btnthemespath.lastIndexOf('.'))||btnthemespath).toLowerCase();var btncolor1=$(this).find('skin').attr('buttonscolor');var btncolor=(+btncolor1).toString(16).toUpperCase();if(btncolor.length==4)
btncolor="00"+btncolor;var headerHeight=$(this).find('header').attr('height');if(headerHeight<50)
headerHeight=44;else
headerHeight=44;$('.toolbar-header').css("height",headerHeight+"px");var imagedisplaymode=$(this).find('backgroundimage').attr('imagedisplaymode');var horzoffset=$(this).find('backgroundimage').attr('horzoffset');var verticaloffset=$(this).find('backgroundimage').attr('verticaloffset');var file=$(this).find('backgroundimage').attr('file');var startcolor=$(this).find('background').attr('startcolor');var endcolor=$(this).find('background').attr('endcolor');var gradienttype=$(this).find('background').attr('gradienttype');var isgradientBG=$(this).find('background').attr('isgradient');if(file!=""){SetBackgroundImage(imagedisplaymode,horzoffset,verticaloffset,file);}
else
{if(startcolor.length==4)
startcolor="00"+startcolor;else if(startcolor.length==2)
startcolor="0000"+startcolor;else if(startcolor.length==1)
startcolor="00000"+startcolor;if(endcolor.length==4)
endcolor="00"+endcolor;else if(endcolor.length==2)
endcolor="0000"+endcolor;else if(endcolor.length==1)
endcolor="00000"+endcolor;if(isgradientBG==1)
SetBackgroundGradient(startcolor,endcolor);else
SetBackgroundGradient(startcolor,startcolor);}
var logoSrc=$(this).find('logo').attr('file');var logoSrcLink=$(this).find('logo').attr('url');if(logoSrc!="")
{if(logoSrcLink.indexOf('http://')==-1)
logoSrcLink="http://"+logoSrcLink;SetLogoImage(logoSrc,logoSrcLink);}
var enablesound=$(this).find('enablesound').text();if(enablesound)
{IsFlippingSoundEnable=true;}
IsMusicEnabled=$(this).find('musicfile').text();if(IsMusicEnabled)
{addMusicIcon(btnthemes,btncolor);GetDocumentUrl();var musicfile=$(this).find('musicfile').text();var musicfilenode='<audio id="musicfile" controls autoplay>'
musicfilenode+='<source src="'+documentUrl+documentID+"/res/"+musicfile+'" type="audio/mpeg"/>'
musicfilenode+='<source src="'+documentUrl+documentID+"/res/"+musicfile+'" type="audio/mp4"/>'
musicfilenode+='</audio>';$('#audio-container').append(musicfilenode);}
var enabledownload=$(this).find('enabledownload').text();if(enabledownload=="1")
{addDownlaoadPdfIcon(btnthemes,btncolor);$("#divDownloadPdf").css('visibility','visible');}
var enablesend=$(this).find('enablesend').text();if(enablesend=="1")
{addShareIcon(btnthemes,btncolor);$("#divShare").css('visibility','visible');}
var enableprint=$(this).find('enableprint').text();if(enableprint=="1")
{addPrintIcon(btnthemes,btncolor);$("#divPrint").css('visibility','visible');}
var enabletranslate=$(this).find('enabletranslate').text();if(enabletranslate=="1")
{addTranslateIcon(btnthemes,btncolor);$("#divTranslate").css('visibility','visible');}
var enablethumnails=$(this).find('enablethumnails').text();if(enablethumnails=="1")
{addThumbnailViewIcon(btnthemes,btncolor);addTocIcon(btnthemes,btncolor);$("#divThumbnailView").css('visibility','visible');}
var hardcovers=$(this).find('hardcovers').text();var enablesearch=$(this).find('enablesearch').text();if(enablesearch=="1")
{addSearchControl();$("#divsearch").css('visibility','visible');}
var enablebookmarks=$(this).find('enablebookmarks').text();var enablenotes=$(this).find('enablenotes').text();var enablehelp=$(this).find('enablehelp').text();var enablearchive=$(this).find('enablearchive').text();var enablecrop=$(this).find('enablecrop').text();var enbalefullscreen=$(this).find('enbalefullscreen').text();if(enbalefullscreen=="1")
{if(isIE==false)
{addFullscreenIcon(btnthemes,btncolor);$(".toolbar-fullscreen-div").css('display','block');$(".toolbar-fullscreen-div").css('visibility','visible');}}
var showpagesshadow=$(this).find('showpagesshadow').text();var helpurl=$(this).find('helpurl').text();var Showtooltips=$(this).find('Showtooltips').text();var thumbwidth=$(this).find('thumbnails').attr('thumbwidth');var thumbheight=$(this).find('thumbnails').attr('thumbheight');var boarderwidth=$(this).find('thumbnails').attr('boarderwidth');var boardercolor=$(this).find('thumbnails').attr('boardercolor');var footertext=$(this).find('footer').attr('text');var footerurl=$(this).find('footer').attr('url');var footercolor=$(this).find('footer').attr('color');var aTag=document.createElement('a');$("#toolbarText").css('color',"#"+footercolor);$("#toolbarText").css('font-weight','bold');$("#toolbarText").css('font-size','11px');var visited_link_styling="<style> a:visited{ color:"+"#"+footercolor+"; } </style>";$('#toolbarText').append(visited_link_styling);$("#toolbarText").append('<a class="footer-anchor" style="color:#'+footercolor+';" href="'+footerurl+'" target="_blank">'+footertext+'</a>');var toolbarstartcolor=$(this).find('toolbar').attr('startcolor');var toolbarendcolor=$(this).find('toolbar').attr('endcolor');var isgradient=$(this).find('toolbar').attr('isgradient');if(isgradient=="1")
{if(toolbarstartcolor==0)
toolbarstartcolor="000000";if(toolbarendcolor==0)
toolbarendcolor="000000";$('#toolbarHeader').css({background:"-webkit-gradient(linear, left top, left bottom, from(#"+toolbarstartcolor+"), to(#"+toolbarendcolor+"))"});$('#toolbarHeader').css({background:"-moz-linear-gradient(top,  #"+toolbarstartcolor+",  #"+toolbarendcolor+")"});$('#toolbarHeader').css({filter:'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarstartcolor.toString()+'",  EndColorStr= "#'+toolbarendcolor.toString()+'")'});$('#toolbarHeader').css({"-ms-filter":'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarstartcolor.toString()+'",  EndColorStr= "#'+toolbarendcolor.toString()+'")'});$('#toolbarHeader').css({background:'-ms-linear-gradient(top, "#'+toolbarstartcolor.toString()+'" 100%, "#'+toolbarendcolor.toString()+'" 100%, GradientType=0 )'});$('#toolbarFooter').css({background:"-webkit-gradient( linear, left top, left bottom, from(#"+toolbarendcolor+"), to(#"+toolbarstartcolor+"))"});$('#toolbarFooter').css({background:"-moz-linear-gradient(bottom,  #"+toolbarstartcolor+",  #"+toolbarendcolor+")"});$('#toolbarFooter').css({filter:'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarendcolor.toString()+'",  EndColorStr= "#'+toolbarstartcolor.toString()+'")'});$('#toolbarFooter').css({"-ms-filter":'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarendcolor.toString()+'",  EndColorStr= "#'+toolbarstartcolor.toString()+'")'});$('#toolbarFooter').css({background:'-ms-linear-gradient(bottom, "#'+toolbarstartcolor.toString()+'" 100%, "#'+toolbarendcolor.toString()+'" 100%, GradientType=0 )'});$('#toolbarHeader').css({"background-image":"-ms-linear-gradient(bottom, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarendcolor.toString()+" 100%)"});$('#toolbarHeader').css({"background-image":"linear-gradient(to bottom, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarendcolor.toString()+" 100%)"});$('#toolbarFooter').css({"background-image":"-ms-linear-gradient(top, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarendcolor.toString()+" 100%)"});$('#toolbarFooter').css({"background-image":"linear-gradient(to top, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarendcolor.toString()+" 100%)"});}
else
{if(toolbarstartcolor==0)
toolbarstartcolor="000000";if(toolbarendcolor==0)
toolbarendcolor="000000";$('#toolbarHeader').css({background:"-webkit-gradient(linear, left top, left bottom, from(#"+toolbarstartcolor+"), to(#"+toolbarstartcolor+"))"});$('#toolbarHeader').css({background:"-moz-linear-gradient(top,  #"+toolbarstartcolor+",  #"+toolbarstartcolor+")"});$('#toolbarHeader').css({filter:'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarstartcolor.toString()+'",  EndColorStr= "#'+toolbarstartcolor.toString()+'")'});$('#toolbarHeader').css({"-ms-filter":'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarstartcolor.toString()+'",  EndColorStr= "#'+toolbarstartcolor.toString()+'")'});$('#toolbarHeader').css({background:'-ms-linear-gradient(top, "#'+toolbarstartcolor.toString()+'" 100%, "#'+toolbarstartcolor.toString()+'" 100%, GradientType=0 )'});$('#toolbarFooter').css({background:"-webkit-gradient( linear, left top, left bottom, from(#"+toolbarstartcolor+"), to(#"+toolbarstartcolor+"))"});$('#toolbarFooter').css({background:"-moz-linear-gradient(bottom,  #"+toolbarstartcolor+",  #"+toolbarstartcolor+")"});$('#toolbarFooter').css({filter:'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarstartcolor.toString()+'",  EndColorStr= "#'+toolbarstartcolor.toString()+'")'});$('#toolbarFooter').css({"-ms-filter":'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+toolbarstartcolor.toString()+'",  EndColorStr= "#'+toolbarstartcolor.toString()+'")'});$('#toolbarFooter').css({background:'-ms-linear-gradient(bottom, "#'+toolbarstartcolor.toString()+'" 100%, "#'+toolbarstartcolor.toString()+'" 100%, GradientType=0 )'});$('#toolbarHeader').css({"background-image":"-ms-linear-gradient(bottom, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarstartcolor.toString()+" 100%)"});$('#toolbarHeader').css({"background-image":"linear-gradient(to bottom, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarstartcolor.toString()+" 100%)"});$('#toolbarFooter').css({"background-image":"-ms-linear-gradient(top, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarstartcolor.toString()+" 100%)"});$('#toolbarFooter').css({"background-image":"linear-gradient(to top, #"+toolbarstartcolor.toString()+" 0%, #"+toolbarstartcolor.toString()+" 100%)"});}
var enablegaaccount=$(this).find('gaaccount').attr('enable');var gaaccount=$(this).find('gaaccount').text();if(enablegaaccount)
{isGoogleAnayticsEnabled=true;GoogleAnalyticsAccount=gaaccount;}
var license=$(this).find('license').length;if(license==0)
IsDemo=true;else
IsDemo=false;type="2"
var producturltype=$(this).find('ecommerce').attr('type');if(producturltype=="2")
{producturl=$(this).find('producturl').text();checkouturl=$(this).find('checkouturl').text();addCartIcon(btnthemes,btncolor);$("#divCart").css('visibility','visible');}
isPageShadow=showpagesshadow=="0"?false:true;});},'type':'get','url':"../../"+documentID+'/appsettings.xml'});}
function FullScreenHandler()
{screenfull.request();}
function getpadding(divsize,imgsize)
{return parseInt((divsize-imgsize)/2);}
function addDownlaoadPdfIcon(btnthemes,btncolor)
{var divDownloadPdf='<div id="divDownloadPdf" class="controls" style="">';divDownloadPdf+='<span class="tooltip" data-tooltip="Download Pdf">';divDownloadPdf+='<img id="imgDownloadPdf" class="control-img" border="0" src="pics/'+btnthemes+'/pdf.png" ></img>';divDownloadPdf+='</span>';divDownloadPdf+='</div>';$('.box-1').append(divDownloadPdf);if(btnthemes=="square")
{$("#divDownloadPdf").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divDownloadPdf").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
$("#imgDownloadPdf").click(function(event)
{$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-toc").hide();$(".container-toc").css('display','none');$(".container-print").hide();$(".container-print").css('display','none');$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-downloadpdf-popup").fadeIn("slow");$(".container-downloadpdf-popup").show();$(".container-downloadpdf-popup").css('visibility','visible');$(".container-downloadpdf-popup").css('display','block');currentPageNumber=GetCurrentPageNumber();if(currentPageNumber!=1)
$(".container-intro").css('visibility','hidden');else
$(".container-intro").css('visibility','visible');return false;});}
function addShareIcon(btnthemes,btncolor)
{var divShare='<div id="divShare" class="controls" style="">';divShare+='<span class="tooltip" data-tooltip="Share">';divShare+='<img src="pics/'+btnthemes+'/share.png" id="imgShare" class="control-img" border="0" alt="Share" /></a> </div>';divShare+='</span>';divShare+='</div>';$('.box-1').append(divShare);if(btnthemes=="square")
{$("#divShare").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divShare").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
$("#imgShare").click(function(event)
{if(isNaN(currentPageNumber))
currentPageNumber=GetCurrentPageNumber();if($('.magazine').turn('display')=="single")
{$("#select_page_share_div").css('display','none');$("#select_page_share_div").css('visibility','hidden');}
else
{if(currentPageNumber==1||currentPageNumber==totalpage)
{$("#select_page_share_div").css('display','none');$("#select_page_share_div").css('visibility','hidden');}
else
{$("#select_page_share_div").css('display','block');$("#select_page_share_div").css('visibility','visible');}}
$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-toc").hide();$(".container-toc").css('display','none');$(".container-downloadpdf-popup").hide();$(".container-downloadpdf-popup").css('display','none');$(".container-print").css('display','none');$(".container-print").hide();$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-share-popup").fadeIn("slow");$(".container-share-popup").show();$(".container-share-popup").css('visibility','visible');$(".container-share-popup").css('display','block');$("#containershare").css("top","0px");$(".container-share-popup").css("height","430px");$(".container_div").css("height","430px");$("#container").css("height","350px");$(".content-container").css("height","355px");$("#email_div").css("height","345px");$("#share_div").css("height","0px");var wh=$(window).height();$("#containershare").css("top",((wh-430)/2)+"px");$("#share_div").hide('fast');$("#email_div").show('slow');$("#share_div").css("display","none");$("#email_div").css("display","block");});CreatShareWindow();}
function addPrintIcon(btnthemes,btncolor)
{var divPrint='<div id="divPrint" class="controls" style="">';divPrint+='<span class="tooltip" style="z-index: 10000" data-tooltip="Print">';divPrint+='<img id="imgPrint" class="control-img" border="0" src="pics/'+btnthemes+'/print.png" ></img>';divPrint+='</span>';divPrint+='</div>';$('.box-1').append(divPrint);if(btnthemes=="square")
{$("#divPrint").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divPrint").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
$("#imgPrint").click(function(event)
{if(isNaN(currentPageNumber))
currentPageNumber=GetCurrentPageNumber();if($('.magazine').turn('display')=="single")
{$("#doublepageselectiondiv").css('height','20px');$("#doublepageselectiondiv2").css('display','none');$("#doublepageselectiondiv2").css('visibility','hidden');$("#doublepageselectiondiv2").css('height','0px');$("#doublepageselectiondiv").css('padding-bottom','15px');$('#LeftPrintPageText').text("Print Current Page");}
else
{if(currentPageNumber==1||currentPageNumber==totalpage)
{$("#doublepageselectiondiv").css('height','20px');$("#doublepageselectiondiv2").css('display','none');$("#doublepageselectiondiv2").css('visibility','hidden');$("#doublepageselectiondiv2").css('height','0px');$("#doublepageselectiondiv").css('padding-bottom','15px');$('#LeftPrintPageText').text("Print Current Page");$('#dropdownListPageRange1')[0].selectedIndex=parseInt(currentPageNumber)-1;$('#dropdownListPageRange2')[0].selectedIndex=parseInt(currentPageNumber)-1;}
else
{$("#doublepageselectiondiv").css('height','20px');$("#doublepageselectiondiv").css('padding-bottom','0px');$("#doublepageselectiondiv2").css('display','block');$("#doublepageselectiondiv2").css('visibility','visible');$("#doublepageselectiondiv2").css('height','35px');$('#LeftPrintPageText').text("Print Left Page");$('#dropdownListPageRange1')[0].selectedIndex=parseInt(currentPageNumber)-1;$('#dropdownListPageRange2')[0].selectedIndex=parseInt(currentPageNumber);}}
$('#LeftPrintPage').attr('checked',true);$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-toc").hide();$(".container-toc").css('display','none');$(".container-downloadpdf-popup").hide();$(".container-downloadpdf-popup").css('display','none');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');$(".container-print").fadeIn("slow");$(".container-print").show();$(".container-print").css('visibility','visible');$(".container-print").css('display','block');if(currentPageNumber!=1)
$(".container-intro").css('visibility','hidden');else
$(".container-intro").css('visibility','visible');return false;});}
function addTranslateIcon(btnthemes,btncolor)
{var divTranslate='<div id="divTranslate" class="controls" style="">';divTranslate+='<span class="tooltip" data-tooltip="Translate">';divTranslate+='<img id="imgTranslate" class="control-img" border="0" src="pics/'+btnthemes+'/translate.png" ></img>';divTranslate+='</span>';divTranslate+='</div>';$('.box-1').append(divTranslate);if(btnthemes=="square")
{$("#divTranslate").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divTranslate").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
$("#imgTranslate").click(function(event){OpenTranslateDialog();});}
function addThumbnailViewIcon(btnthemes,btncolor)
{var divThumbnailView='<div id="divThumbnailView" class="controls"style="">';divThumbnailView+='<span class="tooltip" data-tooltip="Thumbnail View">';divThumbnailView+='<img id="imgThumbnailView" class="control-img" border="0" src="pics/'+btnthemes+'/thumbnails.png" ></img>';divThumbnailView+='</span>';divThumbnailView+='</div>';$('.box-1').append(divThumbnailView);if(btnthemes=="square")
{$("#divThumbnailView").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divThumbnailView").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
$("#imgThumbnailView").click(function(event){if($(".container-thumbnails-popup").css("visibility")=="visible")
{$('.container-overlay').css('display','none');$('.container-overlay').css('visibility','hidden');$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-thumbnails-popup").css('visibility','hidden');$(".container-print").css('display','none');$(".container-print").css('visibility','hidden');$(".container-downloadpdf-popup").css('display','none');$(".container-downloadpdf-popup").css('visibility','hidden');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');return false;}
else
{$('.container-overlay').css('top','44px');$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$(".container-print").hide();$(".container-print").css('display','none');$(".container-downloadpdf-popup").hide();$(".container-downloadpdf-popup").css('display','none');$(".container-thumbnails-popup").fadeIn("slow");$(".container-thumbnails-popup").show();$(".container-thumbnails-popup").css('visibility','visible');$(".container-thumbnails-popup").css('display','block');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');currentPageNumber=GetCurrentPageNumber();if(currentPageNumber!=1)
$(".container-intro").css('visibility','hidden');else
$(".container-intro").css('visibility','visible');return false;}});}
function addSettingsIcon(btnthemes,btncolor)
{var divSettings='<div id="divSettings" class="controls" style="">';divSettings+='<span class="tooltip" data-tooltip="Settings">';divSettings+='<img id="imgSettings" class="control-img" border="0" src="pics/'+btnthemes+'/settings.png" ></img>';divSettings+='</span>';divSettings+='</div>';$('.box-1').append(divSettings);if(btnthemes=="square")
{$("#divSettings").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divSettings").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
$("#imgSettings").click(function(event){OpenSettingsDialog();});}
function addCartIcon(btnthemes,btncolor)
{var divCart='<div id="divCart" class="controls" style="">';divCart+='<span class="tooltip" data-tooltip="Shopping Cart">';divCart+='<a href="'+checkouturl+'" target="_blank"><img id="imgCart" class="control-img" border="0" src="pics/'+btnthemes+'/cart.png" ></img></a>';divCart+='</span>';divCart+='</div>';$('.box-1').append(divCart);if(btnthemes=="square")
{$("#divCart").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divCart").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}}
function addTocIcon(btnthemes,btncolor)
{if(toctype==1)
{var divToc='<div id="divToc" class="controls" style="" >';divToc+='<span class="tooltip" data-tooltip="Table of contents">';divToc+='<img onclick="TOCClicked();" id="imgToc" class="control-img" border="0" src="pics/'+btnthemes+'/toc.png" ></img>';divToc+='</span>';divToc+='</div>';$('.box-1').append(divToc);if(btnthemes=="square")
{$("#divToc").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divToc").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}}}
function addPageModeIcon(btnthemes,btncolor)
{var divPageMode='<div id="divPageMode" class="controls" style="">';divPageMode+='<span id="tooltip_pagemode" class="tooltip" data-tooltip="Switch to Single Page Mode">';divPageMode+='<img id="imgPageMode" class="control-img" border="0" src="pics/'+btnthemes+'/singlepreview.png" ></img>';divPageMode+='</span>';divPageMode+='</div>';$('.box-1').append(divPageMode);if(btnthemes=="square")
{$("#divPageMode").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divPageMode").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$(".control-img").css("height","21px");$(".controls").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$(".control-img").css("height","30px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$(".control-img").css("height","26px");$(".controls").css('padding-top',(getpadding(34,30)+2)+'px');}
$("#imgPageMode").click(function(event){if($("#imgPageMode").attr("src")=="pics/"+btnthemes+"/dubblepreview.png")
{$("#imgPageMode").attr("src","pics/"+btnthemes+"/singlepreview.png");$("#tooltip_pagemode").attr("data-tooltip","Switch to Single Page Mode");ChangePageMode(2);}
else
{$("#tooltip_pagemode").attr("data-tooltip","Switch to Double Page Mode");$("#imgPageMode").attr("src","pics/"+btnthemes+"/dubblepreview.png");ChangePageMode(1);}});}
function addFullscreenIcon(btnthemes,btncolor)
{var divFullscreenIcon='<div id="divFullscreenIcon" class="controls" style="margin-top:1px;">';divFullscreenIcon+='<span id="tooltip_Fullscreen" class="tooltip_bottom_right" data-tooltip="Fullscreen">';divFullscreenIcon+='<img id="imgFullscreen" border="0" src="pics/'+btnthemes+'/fullscreen.png" style="float:left; cursor: pointer;"></img>';divFullscreenIcon+='</span>';divFullscreenIcon+='</div>'
$("#fullscreendiv").append(divFullscreenIcon);if(btnthemes=="square")
{$("#divFullscreenIcon").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divFullscreenIcon").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$("#divFullscreenIcon").css("height","21px");$("#divFullscreenIcon").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$("#divFullscreenIcon").css("height","30px");$("#divFullscreenIcon").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$("#divFullscreenIcon").css("height","26px");$("#divFullscreenIcon").css('padding-top',(getpadding(34,30)+2)+'px');}
$('#imgFullscreen').click(function(){if(fullscreenMode==false)
{$("#imgFullscreen").attr('src','pics/'+btnthemes+'/normal.png');FullScreenHandler();fullscreenMode=true;setTimeout(resizeViewportFullscreenWindow,100);}
else
{$("#imgFullscreen").attr('src','pics/'+btnthemes+'/fullscreen.png');screenfull.exit();fullscreenMode=false;resizeViewportWindow();}});}
function addSearchControl()
{var wh=$(window).height();var toolbarheight=$("#toolbarHeader").height();var divSearching='<div class="div-search-outer">';divSearching+='<div class="div-search-input" id="divsearchinput" align="">';divSearching+='<input type="text" id="searchinputheader" class="search-input-rounded" value="" style=""/>';divSearching+='</div>';divSearching+='<div class="div-search-button" id="divsearchbutton" align="">';divSearching+='<span class="tooltip_right" data-tooltip="Search"><img id="imgSearch" SRC="pics/search_button.png" style=" margin: 0 0 0px 0px; cursor: pointer; "  border="0" alt="search" /></span>';divSearching+='</div>';divSearching+='</div>';$('#divsearch').append(divSearching);$('#imgSearch').click(function(event)
{var ww=$(window).width();var wh=$(window).height();if($('#searchinputheader').val().length>0)
{$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');SearchText();if($(".container-search-popup").css("visibility")=="hidden")
{$(".container-search-popup").css('visibility','visible');$(".container-search-popup").css('display','block');$("#containersearch").css("top",(((wh-430)/2)-44)+"px");$("#containersearch").css("left",((ww-400)/2)+"px");$('#searchinputpopup').val($('#searchinputheader').val());}}});$('#searchinputheader').keyup(function(e)
{$('#searchinputpopup').val($('#searchinputheader').val());});$('#searchinputpopup').keyup(function(e)
{$('#searchinputheader').val($('#searchinputpopup').val());});$("#searchinputheader").keypress(function(e)
{if(!e)e=window.event;if(e.keyCode=='13'){if($('#searchinputheader').val().length>0)
{var ww=$(window).width();var wh=$(window).height();$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$('.container-overlay').css('top','44px');$('magazine-viewport').css('top','0px');SearchText();$(".container-search-popup").css('visibility','visible');$(".container-search-popup").css('display','block');if($('.magazine').turn('display')=='double')
$("#containersearch").css("top",(((wh-430)/2)-88)+"px");else
$("#containersearch").css("top",(((wh-430)/2)-44)+"px");$("#containersearch").css("left",((ww-400)/2)+"px");}}});$("#searchinputpopup").keypress(function(e)
{if(!e)e=window.event;if(e.keyCode=='13')
{if($('#searchinputheader').val().length>0)
{$('magazine-viewport').css('top','0px');$(".container-search-popup").css('visibility','hidden');$(".container-search-popup").css('display','none');$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$('.container-overlay').css('top','44px');$('magazine-viewport').css('top','0px');$('.container-search-popup').css('display','block');$('.container-search-popup').css('visibility','visible');SearchText();}}});}
function addMusicIcon(btnthemes,btncolor)
{var divMusicIcon='<div id="divMusicIcon" class="controls" style="margin-top:1px;">';divMusicIcon+='<span id="tooltip_music" class="tooltip" data-tooltip="Music Off">';divMusicIcon+='<img id="imgMusic" border="0" src="pics/'+btnthemes+'/musicon.png" style="float:left; cursor: pointer;"></img>';divMusicIcon+='</span>';divMusicIcon+='</div>'
$('.box-1').append(divMusicIcon);if(btnthemes=="square")
{$("#divFullscreenIcon").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(6);}
if(btnthemes=="circle")
{$("#divFullscreenIcon").css('background','none repeat scroll 0 0 #'+btncolor);BorderRadiusIcon(15);}
if(btnthemes=="buttons_text"||btnthemes=="buttons_text_black")
{$("#divFullscreenIcon").css("height","21px");$("#divFullscreenIcon").css('padding-top','6px');}
if(btnthemes=="3dicons_blue")
{$("#divFullscreenIcon").css("height","30px");$("#divFullscreenIcon").css('padding-top',(getpadding(34,30)+2)+'px');}
if(btnthemes=="3dicons_black")
{$("#divFullscreenIcon").css("height","26px");$("#divFullscreenIcon").css('padding-top',(getpadding(34,30)+2)+'px');}
IsBgMugicPlaying=false;$("#imgMusic").click(function(event){if($("#imgMusic").attr("src")=="pics/"+btnthemes+"/musicon.png")
{$("#imgMusic").attr("src","pics/"+btnthemes+"/musicoff.png");$("#tooltip_music").attr("data-tooltip","Music On");}
else
{$("#imgMusic").attr("src","pics/"+btnthemes+"/musicon.png");$("#tooltip_music").attr("data-tooltip","Music Off");}
if(IsBgMugicPlaying==false){document.getElementById('musicfile').play();IsBgMugicPlaying=true;}else{document.getElementById('musicfile').pause();IsBgMugicPlaying=false;}});}
function TOCClicked()
{GoToPage(parseInt(targetpage));var pagenumberval=(((currentPageNumber).toString())+"/"+(totalpage.toString()));$('input[name=inputPageNumber]').val(pagenumberval.toString());}
function SetDefaultSize()
{}
function ChangePageMode(pagemode)
{var ww=$(window).width();var dw=$(document).width();var wh=$(window).height();var dh=$(document).height();var viewportheight=dh;var dh0=0;if(pagemode==1)
{$(".magazine-viewport .page").css("background","rgba(255, 255, 255, 0) ");$(".gradient").css('display','none');$(".gradient").css('visibility','hidden');var newWidthSingle=($(".magazine").width())/2;var newHeightSingle=($(".magazine").height());newLeftSingle=-newWidthSingle/2;$(".magazine").turn('display','single');$(".magazine").css("width",newWidthSingle+"px");$(".magazine").css("left",newLeftSingle+"px");$(".magazine").turn('size',newWidthSingle,newHeightSingle);$('.next-button').css('right',"0px");$('.previous-button').css('left',"0px");$('.next-button').css('visibility','hidden');$('.previous-button').css('visibility','hidden');$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');$('#containersinglenavigation').css('display','block');$('#containersinglenavigation').css('visibility','visible');ShowPageNavigation();SetSinglePageNumberNavigationBar();}else
{$(".magazine-viewport .page").css("background","rgba(255, 255, 255, 1) transparent");$(".gradient").css('display','block');$(".gradient").css('visibility','visible');var newWidthDouble=($(".magazine").width())*2;var newHeightSingle=($(".magazine").height());newLeftSingle=-newWidthDouble/2;$(".magazine").turn('display','double');$(".magazine").css("width",newWidthDouble+"px");$(".magazine").css("left",newLeftSingle+"px");$(".magazine").turn('size',newWidthDouble,newHeightSingle);$('.next-button').css('right',"-32px");$('.previous-button').css('left',"-32px");$('.next-button').css('visibility','visible');$('.previous-button').css('visibility','visible');$('#containerintro').css('display','block');$('#containerintro').css('visibility','visible');$('#containersinglenavigation').css('display','none');$('#containersinglenavigation').css('visibility','hidden');HidePageNavigation();SetDefaultPageNumber();}
$('.magazine').turn('peel','br');}
function GetCurrentPageNumber()
{if(window.location.href.indexOf('#')>-1)
{var pageNumberStr=window.location.href.split('#');return pageNumberStr[pageNumberStr.length-1].replace("page/","");}
else
{return pageNumberStr=(1).toString();}}
function SetDefaultPageNumber()
{currentPageNumber=parseInt(GetCurrentPageNumber());var pagenumberval;if(!isNaN(currentPageNumber))
{if(currentPageNumber==totalpage)
pagenumberval=((totalpage.toString())+"/"+(totalpage.toString()));else if(currentPageNumber==1)
pagenumberval=(((currentPageNumber).toString())+"/"+(totalpage.toString()));else
pagenumberval=((currentPageNumber).toString())+"-"+((currentPageNumber+1).toString())+"/"+(totalpage.toString());}
else
{pagenumberval=(((1).toString())+"/"+(totalpage.toString()));}
$('input[name=inputPageNumber]').val(pagenumberval.toString());$("#tooltip_pagenumber").attr("data-tooltip","You are at: "+pagenumberval+" Pages");reportActivityData(ANALYTICS_PAGEVIEW,currentPageNumber);}
function SetSinglePageNumberNavigationBar()
{currentPageNumber=parseInt(GetCurrentPageNumber());if(!isNaN(currentPageNumber))
pagenumberval=(((currentPageNumber).toString())+"/"+(totalpage.toString()));else
pagenumberval=(((1).toString())+"/"+(totalpage.toString()));$('input[name=inputPageNumber]').val(pagenumberval.toString());$("#tooltip_pagenumber").attr("data-tooltip","You are at: "+pagenumberval+" Pages");}
function GoToPage(pageNumber)
{$(".magazine").turn("page",pageNumber);if($('.magazine').turn('display')=="single")
{SetSinglePageNumberNavigationBar();}}
function Open_in_new_tab(url)
{var win=window.open(url,'_blank');win.focus();}
function SetLogoImage(logoImg,targeturl)
{var logoImgPath="";if(/(http|https|www|com|org|co.il)/.test(logoImg))
{logoImgPath=logoImg;}
else
{logoImgPath='../../'+documentID+'/res/'+logoImg;}
var logocontent='<a href="'+targeturl+'" target="_blank" ><img id="imgLogo" src="'+logoImgPath+'" style="float:left; height:44px; border: 0;" /></a>';$('#divlogo').append(logocontent);}
function SetBackgroundImage(imagedisplaymode,horzoffset,verticaloffset,url)
{var bgImg=url;var wh=$(window).height();$(".container-bg").css('width','100%');$(".container-bg").css('margin-top','44px');$(".container-bg").css('height',(wh-44)+'px');if(imagedisplaymode==0)
{var bgStyle='url("../../'+documentID+'/res/'+bgImg+'") no-repeat scroll 0 0 transparent';$('.container-bg').css('background',bgStyle);}
else if(imagedisplaymode==1)
{var bgStyle='url("../../'+documentID+'/res/'+bgImg+'") no-repeat scroll 0 0 transparent';$('.container-bg').css('background',bgStyle);$(".container-bg").css('background-size','100% 100%');}
else
{var bgStyle='url("../../'+documentID+'/res/'+bgImg+'") repeat scroll 0 0 transparent';$('.container-bg').css('background',bgStyle);}
$("#containersinglenavigation").css('margin-top',(-(wh-44))+'px');}
function SetBackgroundGradient(startcolor,endcolor)
{var wh=$(window).height();$(".container-bg").css('width','100%');$(".container-bg").css('margin-top','44px');$(".container-bg").css('height',(wh-44)+'px');$('.container-bg').css({background:"-webkit-gradient(linear, left top, left bottom, from(#"+startcolor+"), to(#"+endcolor+"))"});$('.container-bg').css({background:"-moz-linear-gradient(top,  #"+startcolor+",  #"+endcolor+")"});$('.container-bg').css({background:"-ms-linear-gradient(top,  #"+startcolor+",  #"+endcolor+")"});$('.container-bg').css({filter:'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+startcolor.toString()+'",  EndColorStr= "#'+endcolor.toString()+'")'});$('.container-bg').css({"-ms-filter":'progid:DXImageTransform.Microsoft.gradient(startColorStr= "#'+startcolor.toString()+'",  EndColorStr= "#'+endcolor.toString()+'")'});$('.container-bg').css({background:'-ms-linear-gradient(top, "#'+startcolor.toString()+'" 100%, "#'+endcolor.toString()+'" 100%, GradientType=0 )'});$("#containersinglenavigation").css('margin-top',(-(wh-44))+'px');}
function CreatePageDDForPrint()
{var pageRange1=$('<select id="dropdownListPageRange1"/>');for(var i=1;i<=totalpage;i++)
{$('<option />',{value:i,text:"Page "+i}).appendTo(pageRange1);}
pageRange1.appendTo($('#dropdownListRange1'));var pageRange2=$('<select id="dropdownListPageRange2"/>');for(var j=1;j<=totalpage;j++)
{$('<option />',{value:j,text:"Page "+j}).appendTo(pageRange2);}
pageRange2.appendTo($('#dropdownListRange2'));}
function CreatShareWindow()
{var wh=$(window).height();var content='<div class="addthis_toolbox addthis_default_style addthis_32x32_style" addthis:url="'+window.location.href+'" addthis:title="'+document.title+'" style="padding-left:10px;padding-top:20px;">';content+='<a class="addthis_button_facebook"></a>';content+='<a class="addthis_button_twitter"></a>';content+='<a class="addthis_button_delicious"></a>';content+='<a class="addthis_button_digg"></a>';content+='<a class="addthis_button_tumblr"></a>';content+='<a class="addthis_button_live"></a>';content+='<a class="addthis_button_myspace"></a>';content+='<a class="addthis_button_reddit"></a>';content+='<a class="addthis_button_stumbleupon"></a>';content+='<a class="addthis_button_linkedin"></a>';content+='<a class="addthis_button_More" style="height:32px; width:32px;"><img src="pics/add_this_icon.png" style="height:32px; width:32px; padding-top:0px;" ></img></a>';$('#share_div').append(content);var shareScript=document.createElement("script");shareScript.type="text/javascript";shareScript.src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5167cd8b2c9d5656";$("#share_div").append(shareScript);$("#emailtab").click(function(event)
{event.preventDefault();event.stopImmediatePropagation();$(".container-share-popup").css("height","430px");$(".container_div").css("height","430px");$("#container").css("height","350px");$(".content-container").css("height","355px");$("#email_div").css("height","345px");$("#share_div").css("height","0px");$("#share_div").hide('fast');$("#email_div").show('slow');$("#share_div").css("display","none");$("#email_div").css("display","block");$("#containershare").css("top",((wh-430)/2)+"px");$("#containertab").css("height","350px");});$("#sharetab").click(function(event)
{event.preventDefault();event.stopImmediatePropagation();$(".container-share-popup").css("height","180px");$(".container_div").css("height","180px");$("#container").css("height","100px");$(".content-container").css("height","75px");$("#email_div").css("height","0px");$("#share_div").css("height","75px");$("#email_div").hide('fast');$("#share_div").show('slow');$("#email_div").css("display","none");$("#share_div").css("display","block");$("#containershare").css("top",((wh-180)/2)+"px");$("#containertab").css("height","110px");});}
function CloseWindow()
{$(".container").css({"opacity":"1"});$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-print").hide();$(".container-print").css('display','none');$(".container-downloadpdf-popup").hide();$(".container-downloadpdf-popup").css('display','none');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');}
function loadBook()
{$('.zoom-icon').bind('mouseover',function(){if($(this).hasClass('zoom-icon-in'))
$(this).addClass('zoom-icon-in-hover');if($(this).hasClass('zoom-icon-out'))
$(this).addClass('zoom-icon-out-hover');}).bind('mouseout',function(){if($(this).hasClass('zoom-icon-in'))
$(this).removeClass('zoom-icon-in-hover');if($(this).hasClass('zoom-icon-out'))
$(this).removeClass('zoom-icon-out-hover');}).bind('click',function(){if($(this).hasClass('zoom-icon-in'))
$('.magazine-viewport').zoom('zoomIn');else if($(this).hasClass('zoom-icon-out'))
$('.magazine-viewport').zoom('zoomOut');});$('#canvas').hide();yepnope({test:Modernizr.csstransforms,yep:['lib/turn.js'],nope:['lib/turn.html4.min.js'],both:['lib/zoom.min.js','js/magazine.js',cssName],complete:loadApp});}
function loadApp(){$('#canvas').fadeIn(1000);var flipbook=$('.magazine');if(flipbook.width()==0||flipbook.height()==0){setTimeout(loadApp,10);return;}
var totalpages=totalpage;flipbook.turn({display:displaypagemode,width:devicewidth,height:deviceheight,duration:1000,acceleration:!isChrome(),gradients:true,autoCenter:true,elevation:50,pages:totalpages,when:{turning:function(event,page,view){var book=$(this),currentPage=book.turn('page'),pages=book.turn('pages');if(book.turn('display')=="double")
{if(page==1||page==pages)
{Hash.go('page/'+page).update();ShowIntroPage();}
else
{if(page%2==0)
{Hash.go('page/'+page).update();HideIntroPage();}
else
{Hash.go('page/'+(page-1)).update();HideIntroPage();}}}
else
Hash.go('page/'+page).update();disableControls(page);$('.thumbnails .page-'+currentPage).parent().removeClass('current');$('.thumbnails .page-'+page).parent().addClass('current');SetDefaultPageNumber();},turned:function(event,page,view){disableControls(page);$(this).turn('center');if(page==1){}
if(isfirstresize==true)
{resizeViewportWindow();}
ChangePageShadow();UpdateSinglePageNavigationIcons();},missing:function(event,pages){for(var i=0;i<pages.length;i++)
addPage(pages[i],$(this));}}});$('.magazine-viewport').zoom({flipbook:$('.magazine'),max:function(){return largeMagazineWidth()/$('.magazine').width();},when:{swipeLeft:function(){$(this).zoom('flipbook').turn('next');ChangePageShadow();UpdateSinglePageNavigationIcons();setTimeout(resizeViewportWindow,400);},swipeRight:function(){$(this).zoom('flipbook').turn('previous');ChangePageShadow();UpdateSinglePageNavigationIcons();setTimeout(resizeViewportWindow,400);},resize:function(event,scale,page,pageElement){if(scale==1)
loadSmallPage(page,pageElement);else
loadLargePage(page,pageElement);},zoomIn:function(){$('.thumbnails').hide();$('.made').hide();$('.magazine').removeClass('animated').addClass('zoom-in');$('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out');if(!window.escTip&&!$.isTouch){escTip=true;$('<div />',{'class':'exit-message'}).html('<div>Press ESC to exit</div>').appendTo($('body')).delay(2000).animate({opacity:0},500,function(){$(this).remove();});}},zoomOut:function(){$('.exit-message').hide();$('.thumbnails').fadeIn();$('.made').fadeIn();$('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');setTimeout(function(){$('.magazine').addClass('animated').removeClass('zoom-in');resizeViewportWindow();},0);}}});if($.isTouch)
$('.magazine-viewport').bind('zoom.doubleTap',function(event)
{var diff=0;var imgsrc="";var Zoomimgsrc="";if(event.target.id=="load_img")
{imgsrc=event.target.src;Zoomimgsrc=imgsrc.replace("XPage_","YPage_");}
if(event.target.className=="demo-mode-text")
{imgsrc=event.target.parentNode.parentNode.lastChild.src;Zoomimgsrc=imgsrc.replace("XPage_","YPage_");}
$('.container').css('display','none');$('.container').css('visibility','hidden');$(".toolbar-header").css("visibility","hidden");$(".toolbar-header").css("display","none");$("#containersinglenavigation").css("visibility","hidden");$("#containersinglenavigation").css("display","none");$("#containerbg").css("visibility","hidden");$("#containerbg").css("display","none");$('magazine-viewport').css('top','0px');$("#containerzoom2").css("top","0px");var ori=window.orientation;if(ori==90||ori==-90)
{var zoomw=1024;var zoomh=1024;$("#zoomPage2").attr('src',imgsrc);$("#containerzoom2").css("visibility","visible");$("#containerzoom2").css("display","block");$("#containerzoom2").css("width",'400px');$("#containerzoom2").css("height",'300px');$("#containerzoom2").css("margin-top",((window.screen.availWidth-300)/2)+"px");$("#containerzoom2").css("margin-left",((window.screen.availHeight-400)/2)+"px");$("#containerzoom2").animate({width:window.screen.availHeight+20,height:window.screen.availWidth+44,"margin-top":0,"margin-left":0},500);$("#containerzoom2").css("top","0px");zoomw=window.screen.availHeight+20;zoomh=window.screen.availWidth-20;var selectedVal=[];var container=demo2.querySelector('#image-container2');statusElem=demo2.querySelector('#status2');while(container.firstChild){container.removeChild(container.firstChild);}
$('#status2').css('top',"40%");$('#status2').css('left',"40%");statusElem.style.opacity=1;selectedVal[0]=Zoomimgsrc;var fragment=getItemsFragment(selectedVal);container.insertBefore(fragment,container.firstChild);var imgLoad=imagesLoaded(container);imgLoad.on('always',function onAlways(){setTimeout(function(){statusElem.style.opacity=0;$(document).bind('touchmove',false);$(document).unbind('touchmove',true);$("#containerzoom2").css("top","0px");$('magazine-viewport').css('top','0px');$("#zoomPage2").css('visibility','visible');$('.container').css('display','none');$('.container').css('visibility','hidden');$("#zoomPage2").attr('src',selectedVal[0]);$("#zoomPage2").attr('width',pagewidth*2);$("#zoomPage2").attr('height',pageheight*2);$('#zoomPage2').touchPanView({width:zoomw,height:zoomh-76,startZoomedOut:true});},2000);});}
else
{var zoomw=768;var zoomh=1024;var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');var valuem='width=768,height=1004,user-scalable=yes,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0';mt.attr('content',valuem);$(document).bind('touchmove',false);$(document).unbind('touchmove',true);$("#zoomPage2").attr('src',imgsrc);$("#containerzoom2").css("visibility","visible");$("#containerzoom2").css("display","block");$("#containerzoom2").css("width",'400px');$("#containerzoom2").css("height",'300px');$("#containerzoom2").css("margin-top",((window.screen.availWidth-300)/2)+"px");$("#containerzoom2").css("margin-left",((window.screen.availHeight-400)/2)+"px");$("#containerzoom2").animate({height:window.screen.availHeight,width:window.screen.availWidth,"margin-top":0,"margin-left":0},500);$("#zoomPage2").attr('height',window.screen.availHeight);$("#zoomPage2").attr('width',window.screen.availWidth+20);$("#containerzoom2").css("top","0px");zoomw=window.screen.availWidth;zoomh=window.screen.availHeight+20;var selectedVal=[];var container=demo2.querySelector('#image-container2');statusElem=demo2.querySelector('#status2');while(container.firstChild){container.removeChild(container.firstChild);}
$('#status2').css('top',"40%");$('#status2').css('left',"40%");statusElem.style.opacity=1;selectedVal[0]=Zoomimgsrc;var fragment=getItemsFragment(selectedVal);container.insertBefore(fragment,container.firstChild);var imgLoad=imagesLoaded(container);imgLoad.on('always',function onAlways(){setTimeout(function(){statusElem.style.opacity=0;$(document).bind('touchmove',false);$(document).unbind('touchmove',true);var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');mt.attr('content','width='+(window.screen.availWidth)+',height='+(window.screen.availHeight)+', user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0');$("#containerzoom2").css("left","0px");$("#zoomPage2").css('visibility','visible');$('.container').css('display','none');$('.container').css('visibility','hidden');$("#zoomPage2").attr('src',selectedVal[0]);$("#zoomPage2").attr('width',pagewidth*2);$("#zoomPage2").attr('height',pageheight*2);$('#zoomPage2').touchPanView({width:window.screen.availWidth,height:928,startZoomedOut:true});},2000);});imageCount=imgLoad2.images.length;}});else
$('.magazine-viewport').bind('zoom.tap',function(event)
{var diff=0;var imgsrc="";var Zoomimgsrc="";$(document).bind('touchmove',false);$(document).unbind('touchmove',true);if(event.target.id=="load_img")
{imgsrc=event.target.src;Zoomimgsrc=imgsrc.replace("XPage_","YPage_");}
if(event.target.className=="demo-mode-text")
{imgsrc=event.target.parentNode.parentNode.lastChild.src;Zoomimgsrc=imgsrc.replace("XPage_","YPage_");}
$('.container').css('display','none');$('.container').css('visibility','hidden');$(".toolbar-header").css("visibility","hidden");$(".toolbar-header").css("display","none");$("#containersinglenavigation").css("visibility","hidden");$("#containersinglenavigation").css("display","none");$("#containerbg").css("visibility","hidden");$("#containerbg").css("display","none");var ori=window.orientation;if(ori==90||ori==-90)
{var zoomw=1024;var zoomh=1024;$("#containerzoom2").css("visibility","visible");$("#containerzoom2").css("display","block");$("#containerzoom2").css("width",'400px');$("#containerzoom2").css("height",'300px');$("#containerzoom2").css("margin-top",((window.screen.availWidth-300)/2)+"px");$("#containerzoom2").css("margin-left",((window.screen.availHeight-400)/2)+"px");$("#containerzoom2").animate({width:window.screen.availHeight,height:window.screen.availWidth-76,"margin-top":0,"margin-left":0},500);zoomw=window.screen.availHeight+20;zoomh=window.screen.availHeight*(pagewidth/pageheight)-76;var selectedVal=[];var container=demo2.querySelector('#image-container2');statusElem=demo2.querySelector('#status2');while(container.firstChild){container.removeChild(container.firstChild);}
$('#status2').css('top',"40%");$('#status2').css('left',"40%");statusElem.style.opacity=1;selectedVal[0]=Zoomimgsrc;var fragment=getItemsFragment(selectedVal);container.insertBefore(fragment,container.firstChild);var imgLoad=imagesLoaded(container);imgLoad.on('always',function onAlways(){setTimeout(function(){statusElem.style.opacity=0;$("#zoomPage2").css('visibility','visible');$('.container').css('display','none');$('.container').css('visibility','hidden');$("#zoomPage2").attr('src',selectedVal[0]);$("#zoomPage2").attr('width',pagewidth*2);$("#zoomPage2").attr('height',pageheight*2);$('#zoomPage2').touchPanView({width:zoomw,height:zoomh,startZoomedOut:true});},2000);});}
else
{var zoomw=768;var zoomh=1024;$("#containerzoom").css("visibility","visible");$("#containerzoom").css("display","block");$("#containerzoom").css("width",'400px');$("#containerzoom").css("height",'300px');$("#containerzoom").css("margin-top",((window.screen.availWidth-300)/2)+"px");$("#containerzoom").css("margin-left",((window.screen.availHeight-400)/2)+"px");$("#containerzoom").animate({width:window.screen.availWidth,height:window.screen.availHeight,"margin-top":0,"margin-left":0},500);zoomw=window.screen.width-76;zoomh=window.screen.height-76;var selectedVal=[];var container1=demo1.querySelector('#image-container1');var statusElem1=demo1.querySelector('#status');while(container1.firstChild){container1.removeChild(container1.firstChild);}
$('#status').css('top',"40%");$('#status').css('left',"40%");statusElem1.style.opacity=1;selectedVal[0]=Zoomimgsrc;var fragment=getItemsFragment(selectedVal);container1.insertBefore(fragment,container1.firstChild);var imgLoad=imagesLoaded(container1);imgLoad.on('always',function onAlways(){setTimeout(function(){statusElem1.style.opacity=0;$("#zoomPage").css('visibility','visible');$('.container').css('display','none');$('.container').css('visibility','hidden');$("#zoomPage").attr('src',selectedVal[0]);$("#zoomPage").attr('width',pagewidth*2);$("#zoomPage").attr('height',pageheight*2);$('#zoomPage').touchPanView({width:zoomw,height:zoomh,startZoomedOut:true});},2000);});imageCount=imgLoad.images.length;}});$(document).keydown(function(e){var previous=37,next=39,esc=27;switch(e.keyCode){case previous:$('.magazine').turn('previous');e.preventDefault();UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,400);break;case next:$('.magazine').turn('next');e.preventDefault();UpdateSinglePageNavigationIcons();ChangePageShadow();setTimeout(resizeViewportWindow,400);break;case esc:$('.magazine-viewport').zoom('zoomOut');e.preventDefault();break;}});Hash.on('^page\/([0-9]*)$',{yep:function(path,parts){var page=parts[1];if(page!==undefined){if($('.magazine').turn('is'))
$('.magazine').turn('page',page);}},nop:function(path){if($('.magazine').turn('is'))
$('.magazine').turn('page',1);}});$(window).resize(function(){setTimeout(resizeViewportWindow,400);}).bind('orientationchange',function(){resizeViewport();});$('.thumbnails').click(function(event){var page;if(event.target&&(page=/page-([0-9]+)/.exec($(event.target).attr('class')))){$('.magazine').turn('page',page[1]);}});$('.thumbnails li').bind($.mouseEvents.over,function(){$(this).addClass('thumb-hover');}).bind($.mouseEvents.out,function(){$(this).removeClass('thumb-hover');});if($.isTouch){$('.thumbnails').addClass('thumbanils-touch').bind($.mouseEvents.move,function(event){event.preventDefault();});}else{$('.thumbnails ul').mouseover(function(){$('.thumbnails').addClass('thumbnails-hover');}).mousedown(function(){return false;}).mouseout(function(){$('.thumbnails').removeClass('thumbnails-hover');});}
if($.isTouch){$('.magazine').bind('touchstart',regionClick);}else{$('.magazine').click(regionClick);}
$('.container-intro').click(regionClickIntro);$('.next-button').bind($.mouseEvents.over,function(){$(this).addClass('next-button-hover');}).bind($.mouseEvents.out,function(){$(this).removeClass('next-button-hover');}).bind($.mouseEvents.down,function(){$(this).addClass('next-button-down');}).bind($.mouseEvents.up,function(){$(this).removeClass('next-button-down');}).click(function(){$('.magazine').turn('next');$('.magazine').addClass('animated');ChangePageShadow();setTimeout(resizeViewportWindow,1000);setTimeout(UpdateSinglePageNavigationIcons,400);setTimeout(UpdateDoublePageNavigationIcons,400);});$('.previous-button').bind($.mouseEvents.over,function(){$(this).addClass('previous-button-hover');}).bind($.mouseEvents.out,function(){$(this).removeClass('previous-button-hover');}).bind($.mouseEvents.down,function(){$(this).addClass('previous-button-down');}).bind($.mouseEvents.up,function(){$(this).removeClass('previous-button-down');}).click(function(){$('.magazine').turn('previous');ChangePageShadow();setTimeout(resizeViewportWindow,1000);setTimeout(UpdateSinglePageNavigationIcons,400);setTimeout(UpdateDoublePageNavigationIcons,400);});resizeViewport();$('.magazine').addClass('animated');}
function OpenTranslateDialog(){$('#LeftPage').attr('checked',true);$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-print").hide();$(".container-print").css('display','none');$(".container-downloadpdf-popup").hide();$(".container-downloadpdf-popup").css('display','none');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-settings-popup").hide();$(".container-settings-popup").css('display','none');$(".container-translate-popup").fadeIn("slow");$(".container-translate-popup").show();$(".container-translate-popup").css('display','block');$(".container-translate-popup").css('visibility','visible');if(isNaN(currentPageNumber))
currentPageNumber=GetCurrentPageNumber();if($('.magazine').turn('display')=="single")
{$("#rightPageTranslateDiv").css('visibility','hidden');$("#rightPageTranslateDiv").css('height','0px');$("#LeftTranslatePageText").html("Current Page");}
else
{if(currentPageNumber==1||currentPageNumber==totalpage)
{$("#rightPageTranslateDiv").css('visibility','hidden');$("#rightPageTranslateDiv").css('height','0px');$("#LeftTranslatePageText").html("Current Page");}
else
{$("#rightPageTranslateDiv").css('visibility','visible');$("#rightPageTranslateDiv").css('height','40px');$("#LeftTranslatePageText").html("Left Page");}}}
function CreateLanguageListTranslate()
{var data={'af':'Afrikaans','sq':'Albanian','am':'Amharic','ar':'Arabic','hy':'Armenian','az':'Azerbaijani','eu':'Basque','be':'Belarusian','bn':'Bengali','bh':'Bihari','br':'Breton','bg':'Bulgarian','my':'Burmese','ca':'Catalan','chr':'Cherokee','zh':'Chinese','zh-CN':'Chinese Simplified','zh-TW':'Chinese Traditional','co':'Corsican','hr':'Croatian','cs':'Czech','da':'Danish','dv':'Dhivehi','nl':'Dutch','en':'English','eo':'Esperanto','et':'Estonian','fo':'Faroese','tl':'Filipino','fi':'Finnish','fr':'French','fy':'Frisian','gl':'Galician','ka':'Georgian','de':'German','el':'Greek','gu':'Gujarati','ht':'Haitian_creole','iw':'Hebrew','hi':'Hindi','hu':'Hungarian','is':'Icelandic','id':'Indonesian','iu':'Inuktitut','ga':'Irish','it':'Italian','ja':'Japanese','jw':'Javanese','kn':'Kannada','kk':'Kazakh','km':'Khmer','ko':'Korean','ku':'Kurdish','ky':'Kyrgyz','lo':'Lao','la':'Latin','lv':'Latvian','lt':'Lithuanian','lb':'Luxembourgish','mk':'Macedonian','ms':'Malay','ml':'Malayalam','mt':'Maltese','mi':'Maori','mr':'Marathi','mn':'Mongolian','ne':'Nepali','no':'Norwegian','oc':'Occitan','or':'Oriya','ps':'Pashto','fa':'Persian','pl':'Polish','pt':'Portuguese','pt-PT':'Portuguese Portugal','pa':'Punjabi','qu':'Quechua','ro':'Romanian','ru':'Russian','sa':'Sanskrit','gd':'Scots Gaelic','sr':'Serbian','sd':'Sindhi','si':'Sinhalese','sk':'Slovak','sl':'Slovenian','es':'Spanish','su':'Sundanese','sw':'Swahili','sv':'Swedish','syr':'Syriac','tg':'Tajik','ta':'Tamil','tt':'Tatar','te':'Telugu','th':'Thai','bo':'Tibetan','to':'Tonga','tr':'Turkish','uk':'Ukrainian','ur':'Urdu','uz':'Uzbek','ug':'Uighur','vi':'Vietnamese','cy':'Welsh','yi':'Yiddish','yo':'Yoruba',};var languageList=$('<select id="dropdownListLanguage"/>');for(var val in data)
{$('<option />',{value:val,text:data[val]}).appendTo(languageList);}
languageList.appendTo($('#dropdownListLanguageDiv'));}
function PrintClicked()
{GetDocumentUrl();var selectedVal=[];var currentpage;var currentpagevalue;var currentpageurl;if($('input[name=PrintPage]:radio:checked').length>0){currentpage=$('input[name=PrintPage]:radio:checked').val();}
else{currentpage="PrintPage";}
if($('.magazine').turn('display')=="single")
{if(currentpage=="LeftPrintPage")
{currentpagevalue=(currentPageNumber);selectedVal[0]=documentUrl+documentID+"/XPage_"+currentpagevalue+".jpg";$("#btnPrint").printElement({pageTitle:document.title,leaveOpen:!1,printMode:"iframe",printBodyOptions:{styleToAdd:"padding:0px;margin:0px;color:#FFFFFF !important;border:none;padding:0;margin:0;",items:selectedVal},iframeElementOptions:{styleToAdd:"position:absolute;width:0px;height:0px;bottom:0px;border:none;padding:0;margin:0;"}});reportActivityData(ANALYTICS_PRINT,currentpagevalue);ClosePrintDialog();}
else
{var selectedPrintPageRange1=parseInt($("#dropdownListPageRange1 option:selected").val());var selectedPrintPageRange2=parseInt($("#dropdownListPageRange2 option:selected").val());if(selectedPrintPageRange1<=selectedPrintPageRange2)
{var idx=0;for(var i=selectedPrintPageRange1;i<=selectedPrintPageRange2;i++)
{selectedVal[idx]=documentUrl+documentID+"/XPage_"+i+".jpg";idx++;}
var imagecontainer=demo.querySelector('#image-container');var fragment=getItemsFragment(selectedVal);imagecontainer.insertBefore(fragment,imagecontainer.firstChild);var imgLoad=imagesLoaded(imagecontainer);imgLoad.on('always',function onAlways(){$("#btnPrint").printElement({pageTitle:document.title,leaveOpen:!1,printMode:"iframe",printBodyOptions:{styleToAdd:"padding:0px;margin:0px;color:#FFFFFF !important;border:none;padding:0;margin:0;",items:selectedVal},iframeElementOptions:{styleToAdd:"position:absolute;width:0px;height:0px;bottom:0px;border:none;padding:0;margin:0;"}});reportActivityData(ANALYTICS_PRINT,currentpagevalue);ClosePrintDialog();});imageCount=imgLoad.images.length;}
else
{alert('Invalid print range.');}}}
else
{if(currentpage=="LeftPrintPage")
{if(currentPageNumber==1||currentPageNumber==totalpage)
currentpagevalue=(currentPageNumber);else if(currentPageNumber%2==0)
currentpagevalue=(currentPageNumber);selectedVal[0]=documentUrl+documentID+"/XPage_"+currentpagevalue+".jpg";$("#btnPrint").printElement({pageTitle:document.title,leaveOpen:!1,printMode:"iframe",printBodyOptions:{styleToAdd:"padding:0px;margin:0px;color:#FFFFFF !important;border:none;padding:0;margin:0;",items:selectedVal},iframeElementOptions:{styleToAdd:"position:absolute;width:0px;height:0px;bottom:0px;border:none;padding:0;margin:0;"}});reportActivityData(ANALYTICS_PRINT,currentpagevalue);ClosePrintDialog();}
else if(currentpage=="RightPrintPage")
{if(currentPageNumber==1||currentPageNumber==totalpage)
currentpagevalue=(currentPageNumber);else
currentpagevalue=(parseInt(currentPageNumber)+1);selectedVal[0]=documentUrl+documentID+"/XPage_"+currentpagevalue+".jpg";$("#btnPrint").printElement({pageTitle:document.title,leaveOpen:!1,printMode:"iframe",printBodyOptions:{styleToAdd:"padding:0px;margin:0px;color:#FFFFFF !important;border:none;padding:0;margin:0;",items:selectedVal},iframeElementOptions:{styleToAdd:"position:absolute;width:0px;height:0px;bottom:0px;border:none;padding:0;margin:0;"}});reportActivityData(ANALYTICS_PRINT,currentpagevalue);ClosePrintDialog();}
else
{var selectedPrintPageRange1=parseInt($("#dropdownListPageRange1 option:selected").val());var selectedPrintPageRange2=parseInt($("#dropdownListPageRange2 option:selected").val());if(selectedPrintPageRange1<=selectedPrintPageRange2)
{var idx=0;for(var i=selectedPrintPageRange1;i<=selectedPrintPageRange2;i++)
{selectedVal[idx]=documentUrl+documentID+"/XPage_"+i+".jpg";idx++;}
var imagecontainer=demo.querySelector('#image-container');var fragment=getItemsFragment(selectedVal);imagecontainer.insertBefore(fragment,imagecontainer.firstChild);var imgLoad=imagesLoaded(imagecontainer);imgLoad.on('always',function onAlways(){$("#btnPrint").printElement({pageTitle:document.title,leaveOpen:!1,printMode:"popup",printBodyOptions:{styleToAdd:"padding:0px;margin:0px;color:#FFFFFF !important;border:none;padding:0;margin:0;",items:selectedVal},iframeElementOptions:{styleToAdd:"position:absolute;width:0px;height:0px;bottom:0px;border:none;padding:0;margin:0;"}});reportActivityData(ANALYTICS_PRINT,currentpagevalue);ClosePrintDialog();});imageCount=imgLoad.images.length;}
else
{alert('Invalid print range.');}}}}
function TranslateClicked()
{GetDocumentUrl();var langvalue=$("#dropdownListLanguage option:selected").val();var currentpage;var currentpagevalue;var currentpageurl;if($('input[name=Page]:radio:checked').length>0){currentpage=$('input[name=Page]:radio:checked').val();}
else{currentpage="Page";}
if($('.magazine').turn('display')=="single")
{currentpagevalue=(currentPageNumber);currentpageurl=documentUrl+documentID+'/html/Page_'+currentpagevalue+'.html';}
else
{if(currentpage=="LeftPage")
{if(currentPageNumber==1||currentPageNumber==totalpage)
currentpagevalue=(currentPageNumber);else if(currentPageNumber%2==0)
currentpagevalue=(currentPageNumber);}
else
{if(currentPageNumber==1||currentPageNumber==totalpage)
currentpagevalue=(currentPageNumber);else
currentpagevalue=(currentPageNumber+1);}
currentpageurl=documentUrl+documentID+'/html/Page_'+currentpagevalue+'.html';}
var translateUrl='http://translate.google.com/translate?langpair=en&tl='+langvalue+'&u='+currentpageurl;reportActivityData(ANALYTICS_TRANSLATE,currentpagevalue);CloseTranslateDialog();var win=window.open(translateUrl,'_blank');win.focus();}
function SettingsOkClicked()
{if($('#pageshadow').is(':checked')){isPageShadow=true;$(".gradient").css('display','block');$(".gradient").css('visibility','visible');}else{$(".gradient").css('display','none');$(".gradient").css('visibility','hidden');isPageShadow=false;}
if($('#flippingsound').is(':checked')){IsFlippingSoundEnable=true;}
else{IsFlippingSoundEnable=false;}
if($('#showlinkstooltip').is(':checked')){$('span').addClass('tooltip');$('#containerslideshow span').addClass('tooltip_bottom');$('#toolbarFooter span').addClass('tooltip_bottom');}
else{$('span').removeClass('tooltip');$('#containerslideshow span').removeClass('tooltip_bottom');$('#toolbarFooter span').removeClass('tooltip_bottom');}
if($('#playslideshow').is(':checked')){$("#toolbarHeader").css('visibility','hidden');$("#toolbarHeader").css('display','none');$("#toolbarFooter").css('visibility','hidden');$("#toolbarFooter").css('display','none');$("#containerslideshow").css('visibility','visible');$("#containerslideshow").css('display','block');AutoPlay();}
CloseSettingsDialog();}
function DownloadClicked()
{Open_in_new_tab("../../"+documentID+"/"+pdfName);reportActivityData(ANALYTICS_DOWNLOAD_PDF,parseInt(GetCurrentPageNumber()));CloseDownloadDialog();}
function CreateSettingsOptions()
{$('#pageshadow').prop('checked',true);$('#flippingsound').prop('checked',true);$('#showlinkstooltip').prop('checked',true);$('#playslideshow').prop('checked',false);var data={'2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','10':'10',};var flippingTimer=$('<select id="dropdownListflippingTimer"/>');for(var val in data)
{$('<option />',{value:val,text:data[val]}).appendTo(flippingTimer);}
var t=$('<label style="color:#000; padding-left:5px;">'+"Seconds"+'</label>');flippingTimer.appendTo($('#dropdownListflippingTimerDiv'));t.appendTo($('#dropdownListflippingTimerDiv'));}
function OpenSettingsDialog(){$('.container-overlay').css('display','block');$('.container-overlay').css('visibility','visible');$(".container-print").hide();$(".container-print").css('display','none');$(".container-downloadpdf-popup").hide();$(".container-downloadpdf-popup").css('display','none');$(".container-thumbnails-popup").hide();$(".container-thumbnails-popup").css('display','none');$(".container-share-popup").hide();$(".container-share-popup").css('display','none');$(".container-translate-popup").hide();$(".container-translate-popup").css('display','none');$(".container-settings-popup").fadeIn("slow");$(".container-settings-popup").show();$(".container-settings-popup").css('display','block');$(".container-settings-popup").css('visibility','visible');}
function CloseSettingsDialog(){$('#containersettings').hide();$(".container-overlay").css('display','none');$(".container-overlay").css('visibility','hidden');$("#containersettings").css('display','none');$("#containersettings").css('visibility','hidden');$(".container").css({"opacity":"1"});if($(".magazine").turn('display')=='single');SetSinglePageNumberNavigationBar();}
function CloseDownloadDialog(){$('#containerdownloadpdf').hide();$(".container-overlay").css('display','none');$(".container-overlay").css('visibility','hidden');$("#containerdownloadpdf").css('display','none');$("#containerdownloadpdf").css('visibility','hidden');$(".container").css({"opacity":"1"});}
function CloseShareDialog(){$('#containershare').hide();$(".container-share-popup").css("height","430px");$(".container_div").css("height","430px");$("#container").css("height","350px");$(".content-container").css("height","355px");$("#email_div").css("height","345px");$("#share_div").css("height","0px");$("#share_div").hide('fast');$("#email_div").show('slow');$("#share_div").css("display","none");$("#email_div").css("display","block");$("#containershare").css("top",((wh-430)/2)+"px");$("#containertab").css("height","350px");$(".container-overlay").css('display','none');$(".container-overlay").css('visibility','hidden');$("#containershare").css('display','none');$("#containershare").css('visibility','hidden');$(".container").css({"opacity":"1"});}
function CloseSearchDialog(){$(document).bind('touchmove',false);$(document).unbind('touchmove',true);$('#containersearch').hide();$(".container-overlay").css('display','none');$(".container-overlay").css('visibility','hidden');$("#containersearch").css('display','none');$("#containersearch").css('visibility','hidden');$(".container").css({"opacity":"1"});$("#searchinputheader").val('');$("#searchinputpopup").val('');_SearchTerm="";}
function ClosePrintDialog()
{$('#containerprint').hide();$(".container-overlay").css('display','none');$(".container-overlay").css('visibility','hidden');$("#containerprint").css('display','none');$("#containerprint").css('visibility','hidden');$(".container").css({"opacity":"1"});}
function CloseTranslateDialog(){$('#containertranslate').hide();$(".container-overlay").css('display','none');$(".container-overlay").css('visibility','hidden');$("#containertranslate").css('display','none');$("#containertranslate").css('visibility','hidden');$(".container").css({"opacity":"1"});}
function CloseSlideshowBar()
{clearInterval(autoPlayTimer);$("#toolbarHeader").css('visibility','visible');$("#toolbarHeader").css('display','block');$("#toolbarFooter").css('visibility','visible');$("#toolbarFooter").css('display','block');$("#containerslideshow").css('visibility','hidden');$("#containerslideshow").css('display','none');$('#playslideshow').prop('checked',false);if($('.magazine').turn('display')=="single")
{SetSinglePageNumberNavigationBar();}}
function CloseImagePopup(event){$('#containerimagepopup').html('');$('#containerimagepopup').hide();$("#containerimagepopup").css('display','none');$("#containerimagepopup").css('visibility','hidden');$('.container-overlay').css('display','none');$('.container-overlay').css('visibility','hidden');}
function AddFooter()
{var toolbarfooter='<div align="center" class="toolbar-footer-text" style="display:block" ><div id="toolbarText" class="toolbar-text" align="center"></div></div>';toolbarfooter+='<div class="toolbar-footer-navigation" align="center" style="display:block" >';toolbarfooter+='<div id="navigationblock" class="navigation-block" align="center" style="display:block">';toolbarfooter+='<div id="divnavigation" class="div-navigation" align="center" style="display:block" >';toolbarfooter+='<div class="div-navigation-img" align="center"><span class="tooltip_bottom" data-tooltip="Front Cover"><img id="firstPage" class="navigation-img" src="pics/first_icon.png" ></img></span></div>';toolbarfooter+='<img id="break" src="pics/pagination break.png" style="float:left;"></img>';toolbarfooter+='<div class="div-navigation-img" align="center"><span class="tooltip_bottom" data-tooltip="Previous Page"><img id="prevPage" class="navigation-img" src="pics/prev_icon.png" ></img></span></div>';toolbarfooter+='<span id="tooltip_pagenumber" class="tooltip_bottom" data-tooltip="Previous Page"><div class="div-navigation-input" align="center" style="background-image:url(pics/page_nav_info_bg.png);width:84px;height:27px;">';toolbarfooter+='<input id="inputPageNumber" name="inputPageNumber" type="text"  value="1" class="rounded" align="center" />';toolbarfooter+='</div></span>';toolbarfooter+='<div class="div-navigation-img" align="center"><span class="tooltip_bottom" data-tooltip="Next Page"><img id="nextPage" class="navigation-img" src="pics/next_icon.png" ></img></span></div>';toolbarfooter+='<img id="break" src="pics/pagination break.png" style="float:left;"></img>';toolbarfooter+='<div  class="div-navigation-img" align="center"><span class="tooltip_bottom" data-tooltip=" Back Cover"><img id="lastPage" class="navigation-img" src="pics/last_icon.png" ></img></span></div>';toolbarfooter+='</div>';toolbarfooter+='</div>';toolbarfooter+='</div>';toolbarfooter+='<div align="center"  class="toolbar-footer-fullscreen"  style="display:block" >';toolbarfooter+='<div id="fullscreendiv" class="toolbar-fullscreen-div" align="center"></div>';toolbarfooter+='</div>';$('.toolbar-footer').append(toolbarfooter);}
function CreateThumbnails()
{var whgt=130;var wwid=700;var settingObj={"Width":wwid,"Height":whgt,"BgColor":"ffffff","BgAlpha":0,"BgBorderSize":0,"BgBorderColor":"e0e0e0","ThumbnailsOrder":"random","ResponsiveEnabled":"true","UltraResponsiveEnabled":"false","ThumbnailsPosition":"horizontal","ThumbnailsBgColor":"ffffff","ThumbnailsBgAlpha":100,"ThumbnailsBorderSize":1,"ThumbnailsBorderColor":"e0e0e0","ThumbnailsSpacing":10,"ThumbnailsMarginTop":0,"ThumbnailsMarginRight":0,"ThumbnailsMarginBottom":0,"ThumbnailsMarginLeft":0,"ThumbnailsPaddingTop":10,"ThumbnailsPaddingRight":10,"ThumbnailsPaddingBottom":10,"ThumbnailsPaddingLeft":10,"ThumbnailsInfo":"tooltip","ThumbnailsNavigationEasing":"linear","ThumbnailsNavigationLoop":"false","ThumbnailsNavigationMouseEnabled":"true","ThumbnailsNavigationScrollEnabled":"false","ThumbnailsScrollPosition":"bottom/right","ThumbnailsScrollSize":5,"ThumbnailsScrollScrubColor":"808080","ThumbnailsScrollBarColor":"e0e0e0","ThumbnailsNavigationArrowsEnabled":"true","ThumbnailsNavigationArrowsNoItemsSlide":1,"ThumbnailsNavigationArrowsSpeed":600,"ThumbnailsNavigationPrev":"pics/ThumbnailsPrev3.png","ThumbnailsNavigationPrevHover":"pics/ThumbnailsPrevHover3.png","ThumbnailsNavigationPrevDisabled":"pics/ThumbnailsPrevDisabled3.png","ThumbnailsNavigationNext":"pics/ThumbnailsNext3.png","ThumbnailsNavigationNextHover":"pics/ThumbnailsNextHover3.png","ThumbnailsNavigationNextDisabled":"pics/ThumbnailsNextDisabled3.png","ThumbnailLoader":"pics/ThumbnailLoader.gif","ThumbnailWidth":100,"ThumbnailHeight":100,"ThumbnailAlpha":100,"ThumbnailAlphaHover":100,"ThumbnailBgColor":"f1f1f1","ThumbnailBgColorHover":"f1f1f1","ThumbnailBorderSize":1,"ThumbnailBorderColor":"d0d0d0","ThumbnailBorderColorHover":"303030","ThumbnailPaddingTop":2,"ThumbnailPaddingRight":2,"ThumbnailPaddingBottom":2,"ThumbnailPaddingLeft":2,"LightboxEnabled":"false","LightboxDisplayTime":600,"LightboxWindowColor":"ffffff","LightboxWindowAlpha":80,"LightboxLoader":"dopts/assets/gui/images/LightboxLoader.gif","LightboxBgColor":"ffffff","LightboxBgAlpha":100,"LightboxBorderSize":1,"LightboxBorderColor":"e0e0e0","LightboxMarginTop":30,"LightboxMarginRight":30,"LightboxMarginBottom":30,"LightboxMarginLeft":30,"LightboxPaddingTop":10,"LightboxPaddingRight":10,"LightboxPaddingBottom":10,"LightboxPaddingLeft":10,"LightboxNavigationPrev":"dopts/assets/gui/images/LightboxPrev.png","LightboxNavigationPrevHover":"dopts/assets/gui/images/LightboxPrevHover.png","LightboxNavigationNext":"dopts/assets/gui/images/LightboxNext.png","LightboxNavigationNextHover":"dopts/assets/gui/images/LightboxNextHover.png","LightboxNavigationClose":"dopts/assets/gui/images/LightboxClose.png","LightboxNavigationCloseHover":"dopts/assets/gui/images/LightboxCloseHover.png","LightboxNavigationInfoBgColor":"ffffff","LightboxNavigationInfoTextColor":"c0c0c0","LightboxNavigationDisplayTime":600,"LightboxNavigationTouchDeviceSwipeEnabled":"true","SocialShareEnabled":"false","SocialShareLightbox":"dopts/assets/gui/images/SocialShareLightbox.png","TooltipBgColor":"ffffff","TooltipStrokeColor":"000000","TooltipTextColor":"000000","LabelPosition":"bottom","LabelAlwaysVisible":"false","LabelUnderHeight":50,"LabelBgColor":"000000","LabelBgAlpha":80,"LabelTextColor":"ffffff","SlideshowEnabled":"false","SlideshowTime":5000,"SlideshowLoop":"false","documentid":documentID}
var obj=[];for(var i=1;i<=totalpage;i++)
{var obj1={"Image":"../../"+documentID+'/Thumbnail_'+(i)+'.jpg',"Thumb":"../../"+documentID+'/Thumbnail_'+(i)+'.jpg',"Title":"","Caption":"","Media":"","LightboxMedia":"","Link":i,"Target":""}
obj.push(obj1);}
$('#scrollerContainer4').DOPThumbnailScroller({'ID':'4','SettingsFilePath':settingObj,'ContentFilePath':obj});}
function AddIntroPage(fname)
{if(isIntro==true)
{var optionswidth=$('.magazine').width(),optionsheight=$('.magazine').height();var magW,magH;var ar=pagewidth/pageheight;if(optionswidth>optionsheight*2)
{magW=optionsheight*ar*2;magH=optionsheight;}
else
{var newWidth=(optionswidth-100)/2;magW=newWidth*2;magH=newWidth/ar;}
var devicewidth2=$(window).width();var windowScreenWidth=$('.magazine').width()-100;var windowScreenHeight=$('.magazine').height()-100;var ori=window.orientation;if(ori==0||ori==180)
{HideIntroPage();}
else
{ShowIntroPage();}
$('#containerintro').css('width',(magW/2)+'px');$('#containerintro').css('height',(windowScreenHeight)+'px');$('#containerintro').css('margin-left',(devicewidth2/2-windowScreenWidth/2)+'px');$('#containerintro').css('margin-top',(-windowScreenHeight-10)+'px');var ipagewidth="";var ipageheight="";var pTop="";var pLeft="";if(intropageheight>intropagewidth)
{if(intropageheight>windowScreenHeight)
{ipageheight=windowScreenHeight;pLeft=0;pTop=(intropageheight-ipageheight)/2;}
else
{ipageheight=windowScreenHeight;}}
else
{if(intropageheight>windowScreenHeight)
{ipageheight=windowScreenHeight;}
else
{if(intropagewidth<(windowScreenWidth/2))
ipagewidth=windowScreenWidth/2;else
{ipagewidth=windowScreenWidth/2;ipageheight=ipagewidth*(intropageheight/intropagewidth);}}}
pTop=((windowScreenHeight-84)-ipageheight)/2;var intropage='<img id="intropage" src="'+'../../'+documentID+'/'+fname+'" style="padding-left:'+pLeft+'px; padding-top:'+pTop+'px; width:'+ipagewidth+'px; height:'+ipageheight+'px; " /></a>';$('#containerintro').append(intropage);}}
function HideIntroPage()
{if(isIntro==true)
{$('#containerintro').css('display','none');$('#containerintro').css('visibility','hidden');}}
function ShowIntroPage()
{if(isIntro==true)
{$('#containerintro').css('display','block');$('#containerintro').css('visibility','visible');}}
function HidePageNavigation()
{$('#containersinglenavigation').css('display','none');$('#containersinglenavigation').css('visibility','hidden');}
function ShowPageNavigation()
{var devicewidth2=$(window).width();var deviceheight2=$(window).height();var windowScreenWidth=$('.magazine').width();var windowScreenHeight=$('.magazine').height();var options=$('.magazine').turn('options');var magW,magH;var ar=pagewidth/pageheight;if(devicewidth2>deviceheight2*2)
{if(options.height*ar*2>options.width)
{var newWidth=(devicewidth2-100)/2;magW=newWidth*2;magH=newWidth/ar;}
else
{magW=options.height*ar*2;magH=options.height;}}
else
{var newWidth=(options.width-100)/2;magW=newWidth*2;magH=newWidth/ar;}
$('#containersinglenavigation').css('display','block');$('#containersinglenavigation').css('visibility','visible');$('#containersinglenavigation').css('display','block');$('#containersinglenavigation').css('visibility','visible');$('#divpagearea').css('width',(windowScreenWidth-100)+'px');$('#divpagearea').css('height','1px');if($('.magazine').turn('page')==1)
{$('#divthumbnailsprev1').css('visibility','hidden');}
else if($('.magazine').turn('page')>1&&$('.magazine').turn('page')<totalpage)
{$('#divthumbnailsprev1').css('visibility','visible');$('#divthumbnailsnext1').css('visibility','visible');}
else if($('.magazine').turn('page')==totalpage)
{$('#divthumbnailsnext1').css('visibility','hidden');}}
function UpdateSinglePageNavigationIcons()
{if($('.magazine').turn('display')=='single')
{if($('.magazine').turn('page')==1)
{$('#divthumbnailsprev1').css("visibility","hidden");$('#divthumbnailsnext1').css("visibility","visible");}
else if($('.magazine').turn('page')<totalpage&&$('.magazine').turn('page')>1)
{$('#divthumbnailsprev1').css("visibility","visible");$('#divthumbnailsnext1').css("visibility","visible");}
else if($('.magazine').turn('page')==totalpage)
{$('#divthumbnailsprev1').css("visibility","visible");$('#divthumbnailsnext1').css("visibility","hidden");}
SetSinglePageNumberNavigationBar();}
else if($('.magazine').turn('display')=='double')
{UpdateDoublePageNavigationIcons();}}
function UpdateDoublePageNavigationIcons()
{if($('.magazine').turn('page')==1)
{$('.previous-button').css("visibility","hidden");$('.next-button').css("visibility","visible");}
else if($('.magazine').turn('page')<totalpage&&$('.magazine').turn('page')>1)
{if(parseInt($('.magazine').turn('page'))+1==totalpage)
{$('.previous-button').css("visibility","visible");$('.next-button').css("visibility","hidden");}
else
{$('.previous-button').css("visibility","visible");$('.next-button').css("visibility","visible");}}
else if($('.magazine').turn('page')==totalpage)
{$('.previous-button').css("visibility","visible");$('.next-button').css("visibility","hidden");}}
function UpdatePageNavigationIcons()
{if($('.magazine').turn('display')=='single')
{reportActivityData(ANALYTICS_THUMBNAILS_CLICKED,parseInt(GetCurrentPageNumber()));setTimeout(UpdateSinglePageNavigationIcons,400)}
else
{reportActivityData(ANALYTICS_THUMBNAILS_CLICKED,parseInt(GetCurrentPageNumber()));setTimeout(UpdateDoublePageNavigationIcons,400);}}
function ValidateEmail()
{var emailfrom=document.getElementById('emailFrom');var emailto=document.getElementById('emailTo');var emailsubject=document.getElementById('emailSubject');var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;var msg="";if(!filter.test(emailfrom.value)){msg+='Please enter a valid sender email address \n';}
var emailToArr=emailto.value.split(',');if(emailToArr.length>0)
{for(var i=0;i<emailToArr.length;i++)
{if(!filter.test(emailToArr[i].toString())){msg+='Please enter a valid recipient email address \n';}}}
else
{if(!filter.test(emailto.value)){msg+='Please enter a valid recipient email address \n';}}
if(emailsubject.value==""){msg+='Please enter a valid email subject \n';}
if(msg!="")
alert(msg);else
{}}
function BorderRadiusIcon(val)
{$('.controls').css("-webkit-border-radius",val+"px");$('.controls').css("-moz-border-radius",val+"px");$('.controls').css("-o-border-radius",val+"px");$('.controls').css("-ms-border-radius",val+"px");$('.controls').css("-khtml-border-radius",val+"px");$('.controls').css("border-radius",val+"px");}
function AutoPlay()
{$("#imgSlideshowPlay").attr('src','pics/slideshow_pause.png');var flippingSpeed=1000*parseInt($("#dropdownListflippingTimer option:selected").val());autoPlayTimer=setInterval(function(){if($('.magazine').turn('page')==totalpage)
$(".magazine").turn("page",1);else
$('.magazine').turn('next');},flippingSpeed);}
function getItemsFragment(selectedVal)
{var fragment=document.createDocumentFragment();for(var i=0;i<selectedVal.length;i++){var item=getImageItem(selectedVal[i]);fragment.appendChild(item);}
return fragment;}
function getImageItem(imgsrc){var item=document.createElement('li');item.className='is-loading';var img=document.createElement('img');img.src=imgsrc;item.appendChild(img);return item;}
var flag=true;function inString(str)
{return str.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g,'');}
function toMyString(str)
{return str.replace(/[^A-Za-z 0-9 \/\\\|]*/g,'');}
function SearchText(){xmlSearch=new XMLHttpRequest();var documentindexxmlpath="../../"+documentID+"/DocumentIndex.xml";xmlSearch.open("GET",documentindexxmlpath,false);xmlSearch.send();xmlSearch=xmlSearch.responseXML;var searchterm=document.getElementById("searchinputheader").value;_SearchTerm=searchterm;var allitems=xmlSearch.getElementsByTagName("page");results=new Array;pages=new Array;if(searchterm.length<1)
{searchItemsHeight=0;}else{$("#search-item-container").html("");for(var i=0;i<allitems.length;i++){if(!allitems[i].lastChild)
var name="";else
var name=allitems[i].lastChild.nodeValue.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g,'');var exp=new RegExp(searchterm,"igm");if(name.match(exp)!=null){results.push(allitems[i]);pages.push(i);}}
showResults(results,pages,searchterm);reportActivityData(ANALYTICS_SEARCH,parseInt(GetCurrentPageNumber()));}}
function showResults(results,pages,searchterm){if(results.length>0){var resultshere=document.getElementById("search-item-container");row_num=results.length;var searchdiv='<div id="searchdiv" class="search_div"  style="background:#ffffff;width:380px;overflow:scroll; ">';for(var k=0;k<row_num;++k)
{var searchTxtIndex=-1;var searchTxt;var page_no=++pages[k];searchTxtIndex=results[k].lastChild.nodeValue.toLowerCase().search(searchterm.toLowerCase());searchTxt=results[k].lastChild.nodeValue;var count=0;var regex=new RegExp(searchterm,'gi');var count=searchTxt.match(regex);if(count!=null&&count.length>0)
{var noc=count.length;}
var index=0;var strlen=searchTxt.length;var i=0;while(i<noc)
{var index=searchTxt.toLowerCase().search(searchterm.toLowerCase());var t1=searchTxt.substr(0,index);var prt1;if(index>50)
{prt1=searchTxt.substr(index-50,index+20);}
else
{prt1=searchTxt.substr(0,index+20);}
var bindex=prt1.toLowerCase().search(searchterm.toLowerCase());var ftext=prt1.substr(0,bindex);var btext=prt1.substr(bindex,searchterm.length);var etext=prt1.substr(bindex+searchterm.length,(bindex+searchterm.length+20));var source="../../"+documentID+"/Thumbnail_"+page_no+".jpg";page_no=page_no--;var searchspan='<div id="searchspan" class="search_span" style="" >';searchspan+='<span id="text_span_'+i+'">'+toMyString(ftext)+'</span>';searchspan+='<span id="text_span_'+i+'" style="font-weight:bold; text-align:justify;color:black"> '+toMyString(btext)+' </span>';searchspan+='<span id="text_span_'+i+'">'+toMyString(etext)+'... </span>';searchspan+='</div>';searchdiv+='<div class="container_search_item" width="96%" align="left" onclick="GoToPage('+(page_no)+')" style="">'
searchdiv+='<div id="thumbnail_img_'+page_no+'"  style="float:left; width:30%; margin-top:2px; margin-left:1px; height:90%;">';searchdiv+='<img id="thumb_img_'+page_no+'" class="thumb_image" src="'+source+' "width="100%"/>';searchdiv+='</div>';searchdiv+='<div id="content_thumb_'+page_no+'" style="float:right;width:65%;margin-left:1.5%;margin-right:1.5%;padding-top:2%;">';searchdiv+='<span id="page_num_'+page_no+'" style="font-weight:bold; text-align:left;color:black;font-family:arial;">Page '+page_no+' </span>';searchdiv+=searchspan;searchdiv+='</div>';searchdiv+='</div>';searchTxt=searchTxt.substr(index+searchterm.length,strlen);i++;index=0;}}
searchdiv+='</div>';$("#search-item-container").append(searchdiv);var h1=$("#search_dialague_div").height();var h2=$("#search_header_div").height();var h3=$("#outer_div_search").height();$("#searchdiv").css("height",(h3-(h1+h2+18))+"px");$("#search-item-container").css("height",(h3-(h1+h2+18))+"px");$("#search-item-container").css("padding-top","8px");searchItemsHeight=results.length*160;if(results.length>2)
{var scrollingContent=document.getElementById("search-item-container");new ScrollFix(scrollingContent);}}
else{var resultshere=document.getElementById("search-item-container");var para=document.createElement("p");var notfound=document.createTextNode("No result found like "+searchterm+" !");resultshere.appendChild(para);para.appendChild(notfound);}
flag=true;}
function ChangePageShadow()
{if(($(".magazine").turn('display')=='double')&&isPageShadow)
{$(".gradient").css('display','block');$(".gradient").css('visibility','visible');}else{$(".gradient").css('display','none');$(".gradient").css('visibility','hidden');}}
function prepareGoogleData(ActivityType,currentpagenumber)
{var bRet=true;_reportstring="";try{PageName=currentpagenumber;}
catch(e){bRet=false;return bRet;}
if(publicationName!="")
_reportstring=publicationName;_reportstring+='/'+document.title+'/';switch(ActivityType)
{case ANALYTICS_PAGEVIEW:{_reportstring+="pagesview"+"/"+PageName;}
break;case ANALYTICS_PRINT:{_reportstring+="action"+'/'+"print"+'/'+PageName;}
break;case ANALYTICS_SEARCH:{_reportstring+="action"+'/'+"search"+'/'+PageName+'/'+_SearchTerm;}
break;case ANALYTICS_EMAIL:{_reportstring+="action"+'/'+"email"+'/'+PageName;}
break;case ANALYTICS_DOWNLOAD_PDF:{_reportstring+="action"+'/'+"downloadpdf"+'/'+PageName;}
break;case ANALYTICS_TRANSLATE:{_reportstring+="action"+'/'+"translate"+'/'+PageName;}
break;default:{bRet=false;}}
return bRet;}
function reportActivityData(val,currentpagenumber)
{var sGAAccount=GoogleAnalyticsAccount;var PageName=currentpagenumber;if(val==ANALYTICS_LINK_CLICK)
{_reportstring="";if(publicationName!="")
_reportstring=publicationName;_reportstring+='/'+document.title+'/'+"action"+'/'+"link"+'/'+PageName+'/'+AnalyticsPageLinkURL;if(sGAAccount!="")
{callGAServer(sGAAccount,_reportstring);}}
else if(val==ANALYTICS_THUMBNAILS_CLICKED)
{_reportstring="";_reportstring+="action"+'/'+"thumbnail"+'/'+PageName;if(sGAAccount!="")
{callGAServer(sGAAccount,_reportstring);}}
else
{if(prepareGoogleData(val,currentpagenumber)&&sGAAccount!="")
{callGAServer(sGAAccount,_reportstring);}}
(function(){var supportTouch=$.support.touch,scrollEvent="touchmove scroll",touchStartEvent=supportTouch?"touchstart":"mousedown",touchStopEvent=supportTouch?"touchend":"mouseup",touchMoveEvent=supportTouch?"touchmove":"mousemove";$.event.special.swipeupdown={setup:function(){var thisObject=$('#zoomPage');var $this=$(thisObject);$this.bind(touchStartEvent,function(event){var data=event.originalEvent.touches?event.originalEvent.touches[0]:event,start={time:(new Date).getTime(),coords:[data.pageX,data.pageY],origin:$(event.target)},stop;function moveHandler(event){if(!start){return;}
var data=event.originalEvent.touches?event.originalEvent.touches[0]:event;stop={time:(new Date).getTime(),coords:[data.pageX,data.pageY]};if(Math.abs(start.coords[1]-stop.coords[1])>10){event.preventDefault();}}
$this.bind(touchMoveEvent,moveHandler).one(touchStopEvent,function(event){$this.unbind(touchMoveEvent,moveHandler);if(start&&stop){if(stop.time-start.time<1000&&Math.abs(start.coords[1]-stop.coords[1])>30&&Math.abs(start.coords[0]-stop.coords[0])<75){start.origin.trigger("swipeupdown").trigger(start.coords[1]>stop.coords[1]?"swipeup":"swipedown");}}
start=stop=undefined;});});}};$.each({swipedown:"swipeupdown",swipeup:"swipeupdown"},function(event,sourceEvent){$.event.special[event]={setup:function(){$(this).bind(sourceEvent,$.noop);}};});})();(function($){$.fn.doubleTap=function(doubleTapCallback){return this.each(function(){var elm=this;var lastTap=0;$(elm).bind('vmousedown',function(e){var now=(new Date()).valueOf();var diff=(now-lastTap);lastTap=now;if(diff<250){if($.isFunction(doubleTapCallback))
{doubleTapCallback.call(elm);}}});});}})(jQuery);var pinchOutCounterPortrait=0;$("#containerzoom").swipe({pinchIn:function(event,direction,distance,duration,fingerCount,pinchZoom)
{},pinchOut:function(event,direction,distance,duration,fingerCount,pinchZoom)
{},pinchStatus:function(event,phase,direction,distance,duration,fingerCount,pinchZoom){},doubleTap:function(event,target){pinchOutCounterPortrait=0;var resizew=parseInt($(".magazine-viewport").css('width'),10)-200;var resizeh=parseInt($(".magazine-viewport").css('height'),10)-200;var resizet=((window.screen.availHeight-(resizeh+44))/2);var resizel=((window.screen.availWidth-(resizew))/2);$("#containerzoom").animate({height:resizeh,width:resizew,"margin-top":resizet,"margin-left":resizel},500);$("#containersinglenavigation").css("visibility","visible");$("#containersinglenavigation").css("display","block");$("#containerbg").css("visibility","visible");$("#containerbg").css("display","block");var resizeZoomCounter=setInterval(function(){clearInterval(resizeZoomCounter);$("#zoomPage").attr('src',"");$("#containerzoom").css("visibility","hidden");$("#containerzoom").css("display","none");$(".toolbar-header").css("visibility","visible");$(".toolbar-header").css("display","block");$(".container").css("visibility","visible");$(".container").css("display","block");$(".touchpanview-wrap").remove();var zoomPage=$('<img id="zoomPage" class="defferred" width="0" height="0" src="" data-src="" style="visibility:hidden; border:0px solid black;" />');zoomPage.appendTo($('#containerzoom'));window.scrollTo(0,1);},550);setTimeout(resizeViewportWindow,40);},tap:function(event,target){},fingers:2,pinchThreshold:0,threshold:50});$("#containerzoom2").swipe({pinchIn:function(event,direction,distance,duration,fingerCount,pinchZoom)
{},pinchOut:function(event,direction,distance,duration,fingerCount,pinchZoom)
{},pinchStatus:function(event,phase,direction,distance,duration,fingerCount,pinchZoom){},doubleTap:function(event,target){pinchOutCounterPortrait=0;var resizew=parseInt($(".magazine-viewport").css('width'),10)-100;var resizeh=parseInt($(".magazine-viewport").css('height'),10)-100;var resizet=((window.screen.availHeight-(resizeh+44))/2);var resizel=((window.screen.availWidth-(resizew))/2)+100;$("#containerzoom2").animate({height:resizeh,width:resizew,"margin-top":resizet,"margin-left":resizel},500);$("#containerbg").css("visibility","visible");$("#containerbg").css("display","block");var resizeZoomCounter=setInterval(function(){clearInterval(resizeZoomCounter);var ori=window.orientation;if(ori==0||ori==180)
{$("#containersinglenavigation").css("visibility","visible");$("#containersinglenavigation").css("display","block");var mt=$('meta[name=viewport]');mt=mt.length?mt:$('<meta name="viewport" />').appendTo('head');var valuem='width=768,height=1004,user-scalable=yes,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0';mt.attr('content',valuem);$(document).bind('touchmove',false);$(document).unbind('touchmove',true);}
$("#zoomPage2").attr('src',"");$("#containerzoom2").css("visibility","hidden");$("#containerzoom2").css("display","none");$(".toolbar-header").css("visibility","visible");$(".toolbar-header").css("display","block");$(".container").css("visibility","visible");$(".container").css("display","block");$(".touchpanview-wrap").remove();var zoomPage2=$('<img id="zoomPage2" class="defferred" width="0" height="0" src="" data-src="" style="visibility:hidden; border:0px solid black;" />');zoomPage2.appendTo($('#containerzoom2'));window.scrollTo(0,1);},550);setTimeout(resizeViewportWindow,40);},tap:function(event,target){},fingers:2,pinchThreshold:0,threshold:50});}