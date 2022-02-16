function validateemail()
{
	var name=document.getElementById('exampleInputEmail1').value;
	
	var text = document.getElementById('text');

	var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;


	if(name.match(pattern))
	{
		
		text.innerHTML =  "Your Email Address is valid";
		text.style.color = "green";
	}
	else
	{
		
		text.innerHTML = "Please check your email";
		text.style.color = "red";
	}

	
}



function validateemail1()
{
	var name=document.getElementById('exampleInputEmail2').value;
	
	var text = document.getElementById('text1');

	var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;


	if(name.match(pattern))
	{
		
		text.innerHTML =  "Your Email Address is valid";
		text.style.color = "white";
	}
	else
	{
		
		text.innerHTML = "Please check your email";
		text.style.color = "white";
	}

	
}