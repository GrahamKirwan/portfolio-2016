// JavaScript Document



// The javascript:
window.onload = loadIndex;
var flag=true;
function inString(str)
{
return str.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '') ; 
}

function toMyString(str)
{
return str.replace(/[^A-Za-z 0-9 \/\\\|]*/g, '') ; 
}
function loadIndex() {
xmlSearch = new XMLHttpRequest(); 
						var mainxmlpath=base_url+"DocumentIndex.xml";
            xmlSearch.open("GET", mainxmlpath, false);     // here we need the path to xml document                   
            xmlSearch.send();                        
            xmlSearch=xmlSearch.responseXML; 
			
			
			
}


function searchIndex() { // search the index (duh!)
		
	xmlSearch = new XMLHttpRequest(); 
						var mainxmlpath=base_url+"DocumentIndex.xml";
            xmlSearch.open("GET", mainxmlpath, false);     // here we need the path to xml document                   
            xmlSearch.send();                        
            xmlSearch=xmlSearch.responseXML; 


	// get the search term from a form field with id 'searchme'

	var searchterm = document.getElementById("searchme").value;
	var allitems = xmlSearch.getElementsByTagName("page");
	//var total = 
	results = new Array;
	pages=new Array;
	if (searchterm.length < 3) {
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
 if (flag)
	{
	 var resultshere = document.getElementById("maintbl");
	 if ( resultshere.hasChildNodes() )
		{
		while ( resultshere.childNodes.length >= 1 )
		{
			resultshere.removeChild( resultshere.firstChild );       
		} 
	}

 }
 
	if (results.length > 0) {
// if there are any results, put them in a list inside the "resultshere" div
	
		var resultshere = document.getElementById("maintbl");
	/*if (flag==false)
		{var child= document.getElementById("childimg");
		resultshere.removeChild(child);
		}

*/		/*var header = document.createElement("h5");
		
		var searchedfor = document.createTextNode("You've searched for "+searchterm);
		resultshere.appendChild(header);
		header.appendChild(searchedfor);
		*/
		//row=new Array();
//cell=new Array();

row_num=results.length; //edit this value to suit
var mainBox=document.createElement('div');
mainBox.setAttribute('data-role','content');
mainBox.setAttribute('class','ui-grid-a ui-body-a');


for (var k=0;k<row_num;++k)
{
	var page_no=++pages[k];
	var source=base_url+"Thumbnail_"+page_no+".jpg";
	page_no=--page_no;
	var res=document.createElement('div');
	res.setAttribute('class','ui-body ui-body-a');
	var res_thumb=document.createElement('div');
	res_thumb.setAttribute('class','ui-block-a');
	res_thumb.setAttribute('style','text-align:center');
	var res_text=document.createElement('div');
	res_text.setAttribute('class','ui-block-b');
	var thumb_img = document.createElement("img");
	var thumb_href=document.createElement("a");
	thumb_href.setAttribute('href','index.html?id='+page_no);
	thumb_href.setAttribute('rel','external');
	thumb_img.setAttribute('src',source);
	thumb_href.appendChild(thumb_img);
	res_thumb.appendChild(thumb_href);
	
	var searchTxtIndex=-1;
	var searchTxt;
	searchTxtIndex=results[k].lastChild.nodeValue.toLowerCase().search(searchterm.toLowerCase());
	searchTxt=results[k].lastChild.nodeValue.substr(searchTxtIndex-150,300);
	var cont=document.createTextNode(toMyString(searchTxt.substr(0,150)));
	var spn=document.createElement("span");
	spn.setAttribute('style','font-weight:bold; text-align:justify');
	spn.appendChild(cont);

	var contSearchTerm=document.createTextNode(toMyString(searchterm.toLowerCase()));
	var spnSearchTerm=document.createElement("span");
	spnSearchTerm.setAttribute('style','font-weight:bold; text-align:justify; color:red;');
	spnSearchTerm.appendChild(contSearchTerm);

	var cont2=document.createTextNode(toMyString(searchTxt.substr(150+searchterm.length,300)));
	var spn2=document.createElement("span");
	spn2.setAttribute('style','font-weight:bold; text-align:justify');
	spn2.appendChild(cont2);

	res_text.appendChild(spn);
	res_text.appendChild(spnSearchTerm);
	res_text.appendChild(spn2);
	
	res.appendChild(res_thumb);
	res.appendChild(res_text);
	
	mainBox.appendChild(res);	
}
resultshere.appendChild(mainBox);
	}
		
		
	else {
// else tell the user no matches were found
		var resultshere = document.getElementById("maintbl");
		var para = document.createElement("p");
		var notfound = document.createTextNode("Sorry, I couldn't find anything like "+searchterm +"!");
		resultshere.appendChild(para);
		para.appendChild(notfound);
	}
	flag=true;
}