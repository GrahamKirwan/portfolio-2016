
// JavaScript Document

xmlDocumentAPP = new XMLHttpRequest(); 


xmlDocumentAPP.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       myFunction(this);
   }
};
var page_xml_APP_path=base_url+"appsettings.xml";

xmlDocumentAPP.open("GET", page_xml_APP_path);     // here we need the path to xml document                   
xmlDocumentAPP.send();                        



function docFunc(docXML)
{
	var documentXML=docXML.responseXML;
var first_row = documentXML.getElementsByTagName("doc");
		var PDF_file_name = first_row[0].attributes.getNamedItem("filename").value;
		var PDF_url=base_url+PDF_file_name;
		document.getElementById('download').href=PDF_url;	
	
}
function myFunction(xml) {
var xmlDocument=xml.responseXML; 


if (xmlDocument.getElementsByTagName("enabledownload")[0].childNodes[0].nodeValue!=1)
	{
		document.getElementById('download').style.visibility="hidden";
		document.getElementById('download').style.display="none";
	}
else
	{
		
		xmlDoc = new XMLHttpRequest(); 


		xmlDoc.onreadystatechange = function() {
		   if (this.readyState == 4 && this.status == 200) {
			   docFunc(this);
		   }
		};
		var doc_xml_path=base_url+"document.xml";
		
		xmlDoc.open("GET", doc_xml_path);     // here we need the path to xml document                   
		xmlDoc.send(); 
		
		
		
		
	}

if (xmlDocument.getElementsByTagName("enablethumnails")[0].childNodes[0].nodeValue!=1)
	{
		document.getElementById('thumb').style.visibility="hidden";
		document.getElementById('thumb').style.display="none";
		
	}

if (xmlDocument.getElementsByTagName("enablesend")[0].childNodes[0].nodeValue!=1)
	{
		document.getElementById('share').style.visibility="hidden";
		document.getElementById('share').style.display="none";	
		
	}
if (xmlDocument.getElementsByTagName("enablesearch")[0].childNodes[0].nodeValue!=1)
	{
		document.getElementById('search').style.visibility="hidden";
		document.getElementById('search').style.display="none";	
			
	}

}