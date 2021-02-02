function validateInquiryEmail(email)
{
	
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(email.value.match(emailExp))
	{
		return true;
	}
	else
	{
		email.focus();
		return false;
	}

	
	
	
}

function validateInquiryEmailText(email)
{
	
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(email.match(emailExp))
	{
		return true;
	}
	else
	{
		document.getElementById('receiver_email').focus();
		return false;
	}

	
	
	
}

function validateInquiryLength(element)
{
		//alert(element.value);
		if (element.value.length>=2)
			return true;
		else
		{
			element.focus();
			return false;
		}
	
}

function validate()
{
	var flag=true;
	var host=(location.href).split("/ipad/share.html")
	var doc_id=base_url.split("../");
	
	
	document.getElementById('base').value=host[0];
	document.getElementById('doc_id').value=doc_id[1];	


		
	var emails=document.getElementById('receiver_email').value.split(",");
	if (emails.length<=10)
	{
		for (var i=0;i<emails.length;++i)
		{
		
			if (!validateInquiryEmailText(emails[i]))
			{
				flag=false;
				document.getElementById('receiver_email_label').style.visibility='visible';
				document.getElementById('receiver_email_label').style.display='block';
				break;
			}
		}
		
	}
	else
			{
				flag=false;
				document.getElementById('receiver_email_label').style.visibility='visible';
				document.getElementById('receiver_email_label').style.display='block';
				document.getElementById('receiver_email_label').innerHTML=error_text;
			}
	if (flag)
			{
				
				document.getElementById('receiver_email_label').style.visibility='hidden';
				document.getElementById('receiver_email_label').style.display='none';
			}

	if (!validateInquiryLength(document.getElementById('receiver_name')))
		{
			flag=false;
			document.getElementById('receiver_name_label').style.visibility='visible';
			document.getElementById('receiver_name_label').style.display='block';
	
		}
	else
		{
			
			document.getElementById('receiver_name_label').style.visibility='hidden';
			document.getElementById('receiver_name_label').style.display='none';
			
		}
		
		if (!validateInquiryEmail(document.getElementById('your_email')))	
		{
			flag=false;
			document.getElementById('your_email_label').style.visibility='visible';
			document.getElementById('your_email_label').style.display='block';
	
		}
	else
		{
			
			document.getElementById('your_email_label').style.visibility='hidden';
			document.getElementById('your_email_label').style.display='none';
			
		}
		if (!validateInquiryLength(document.getElementById('your_name')))
		{
			flag=false;
			document.getElementById('your_name_label').style.visibility='visible';
			document.getElementById('your_name_label').style.display='block';
		}
	else
		{
			document.getElementById('your_name_label').style.visibility='hidden';
			document.getElementById('your_name_label').style.display='none';
		}
		
	if (document.getElementById('dis_three'))
		{
			if (!document.getElementById('dis_three').checked || !document.getElementById('dis_one').checked  || !document.getElementById('dis_two').checked )
			{
				flag=false;
				document.getElementById('dis_label').style.visibility='visible';
				document.getElementById('dis_label').style.display='block';
				document.getElementById('dis_label').innerHTML=error_text_dis;	
				
			}
			else
			{
				document.getElementById('dis_label').style.visibility='hidden';
				document.getElementById('dis_label').style.display='none';				
				
			}
			
		}
		
	return flag;
	
	
	
}