function DisplayData()
{
	if(document.getElementById('username').value=="")
	{
		alert("Please Enter Name");
		console.log("Please Enter Name");
		return false;
	}
	else if(document.getElementById('emailid').value=="")
	{
		alert("Please Enter Email ID");
		console.log("Please Enter EmailID");
		return false;
	} 
	else if(document.getElementById('phone').value=="")
	{
		alert("Please Enter Phone Number");
		console.log("Please Enter Phone Number");
		return false;
	}
	else if (document.getElementById('txtMsg').value == "")
	{
		alert("Please Enter Message");
		console.log("Please Enter Message");
		return false;
	}
	else
	{
		var name = document.getElementById('username').value;
		var email = document.getElementById('emailid').value;
		var phoneno = document.getElementById('phone').value;
		var message = document.getElementById('txtMsg').value;


		if(checkphone(phoneno) && checkmail(email))
		{
			console.log("Name is   : "+name);
			console.log("Email is   : "+email);
			console.log("Phone No: "+phoneno);
			console.log("Message is : "+message);
		}
	}

	document.getElementById('username').value = "";
	document.getElementById('emailid').value = "";
	document.getElementById('phone').value = "" ;
	document.getElementById('txtMsg').value = "" ;
	
}
function checkphone(phoneno) 
{
	if (phoneno.length < 10 || phoneno.length > 10) 
	{
		alert("Please Enter Valid Phone number");
		console.log("Please Enter Valid Phone number");
		return false;
	}
	else
	{
		return true;
	}
	

}

function checkmail(email) 
{
	var pattern =/^[a-z0-9-]+(\.[0-9])*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.+[a-z]{2,3})$/;

	if(email.match(pattern))
	{
		return true;
	}
	else
	{
		alert("Please Enter Valid Email ID");
		console.log("Please Enter Valid Email ID");
		return false;
	}
}