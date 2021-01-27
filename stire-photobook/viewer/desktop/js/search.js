window.onload = loadDocumentIndex;
var flag=true;
function inString(str)
{
	return str.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '') ; 
}

function toMyString(str)
{
	return str.replace(/[^A-Za-z 0-9 \/\\\|]*/g, '') ; 
}

function loadDocumentIndex() {
	xmlSearch = new XMLHttpRequest(); 
	var documentindexxmlpath=documentID+"/DocumentIndex.xml";
    xmlSearch.open("GET", documentindexxmlpath, false);     // here we need the path to xml document                   
    xmlSearch.send();                        
    xmlSearch=xmlSearch.responseXML; 		
}

function SearchText() { // search the index (duh!)
		
	xmlSearch = new XMLHttpRequest(); 
	var documentindexxmlpath=documentID+"/DocumentIndex.xml";
	xmlSearch.open("GET", documentindexxmlpath, false);     // here we need the path to xml document                   
	xmlSearch.send();                        
	xmlSearch=xmlSearch.responseXML; 


	// get the search term from a form field with id 'searchinputheader'
	$("#search-item-container").html("");
	var searchterm = document.getElementById("searchinputheader").value;
	var allitems = xmlSearch.getElementsByTagName("page");
	//var total = 
	results = new Array;
	pages=new Array;
	if (searchterm.length < 3) 
	{
		alert("Enter at least three characters");
	} else {
		
		for (var i=0;i<allitems.length;i++) {
		// see if the XML entry matches the search term,
		// and (if so) store it in an array
			if (!allitems[i].lastChild)
				var name="";
			else
				var name = allitems[i].lastChild.nodeValue.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
			
			var exp = new RegExp(searchterm,"igm");
			
			if ( name.match(exp) != null) {
			results.push(allitems[i]);
			pages.push(i);
			}
			
		}
		
// send the results to another function that displays them to the user
	showResults(results, pages, searchterm);
	}
}



function showResults(results, pages, searchterm) {
 
 
	if (results.length > 0) {
		var resultshere = document.getElementById("search-item-container");
		row_num=results.length; //edit this value to suit
		var searchdiv='<div id="searchdiv" class="search_div"  style="background:#ffffff;width:380px;overflow-x:hidden;overflow-y:auto;">';
		for (var k=0;k<row_num;++k)
		{
			var searchTxtIndex=-1;
			var searchTxt;
			var page_no=++pages[k];
			searchTxtIndex=results[k].lastChild.nodeValue.toLowerCase().search(searchterm.toLowerCase());
			searchTxt=results[k].lastChild.nodeValue;
			var count=0;
			var regex = new RegExp( searchterm, 'gi' );
			var count =searchTxt.match(regex);  
			if(count!=null && count.length>0)
			{
				var noc=count.length;
			}
			var index=0;
			var strlen=searchTxt.length;
			var i=0;
			while(i<noc)
			{
				
				var index = searchTxt.toLowerCase().search(searchterm.toLowerCase());
				var t1=searchTxt.substr(0,index);
				var prt1;
				if(index>50)
				{
					prt1=searchTxt.substr(index-50,index+20);
				}
				else
				{
					prt1=searchTxt.substr(0,index+20);
				}
				var bindex= prt1.toLowerCase().search(searchterm.toLowerCase());
				var ftext=prt1.substr(0,bindex);
				var btext=prt1.substr(bindex,searchterm.length);
				var etext=prt1.substr(bindex+searchterm.length,(bindex+searchterm.length+20));
				var source=documentID+"/Thumbnail_"+page_no+".jpg";
				page_no=page_no--;
				
				var searchspan=	'<div id="searchspan" class="search_span" style="" >';
				searchspan 	+=		'<span id="text_span_'+i+'">'+ toMyString(ftext)+'</span>';  
				searchspan 	+=		'<span id="text_span_'+i+'" style="font-weight:bold; text-align:justify;color:black"> '+toMyString(btext)+' </span>';
				searchspan 	+=		'<span id="text_span_'+i+'">'+ toMyString(etext)+'... </span>';  
				searchspan	+=	'</div>';
				searchdiv	+=	'<div class="container_search_item" width="100%" align="left" onclick="GoToPage('+(page_no)+')" style="">'
				searchdiv	+=		'<div id="thumbnail_img_'+page_no+'"  style="float:left;width:30%;margin-top:2%;margin-left:1%;";>';
				searchdiv	+=			'<img id="thumb_img_'+page_no+'" class="thumb_image" src="'+source+'"width="100%""/>';
				searchdiv	+=		'</div>';
				searchdiv	+=		'<div id="content_thumb_'+page_no+'" style="float:right;width:65%;margin-left:1.5%;margin-right:1.5%;padding-top:2%;">';
				searchdiv	+=			'<span id="page_num_'+page_no+'" style="font-weight:bold; text-align:left;color:black;font-family:arial;">Page '+page_no+' </span>';
				searchdiv	+=			searchspan;
				searchdiv	+=		'</div>';
				searchdiv	+=	'</div>';
				searchTxt=searchTxt.substr(index+searchterm.length,strlen);
				i++;
				index=0;
			}
		}
		searchdiv+=	'</div>';
		$("#search-item-container").append(searchdiv);
		var h1=$("#search_dialague_div").height();
		var h2=$("#search_header_div").height();
		var h3=$("#outer_div_search").height();
		$("#searchdiv").css("height",(h3-(h1+h2+18))+"px");
		$("#search-item-container").css("height",(h3-(h1+h2+18))+"px");
		$("#search-item-container").css("padding-top","8px");
	}
	else {
	// else tell the user no matches were found
		var resultshere = document.getElementById("search-item-container");
		var para = document.createElement("p");
		var notfound = document.createTextNode("No result found like "+searchterm +" !");
		resultshere.appendChild(para);
		para.appendChild(notfound);
	}
	flag=true;
}