// Copied from class example with modification


var urlBase = 'http://COP4331-5.com/LAMPAPI'; //TODO: Change URL
var extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";

function doLogin()
{
	userId = 0;
	firstName = "";
	lastName = "";
	
	var login = document.getElementById("login-name").value;
	var password = document.getElementById("login-password").value;
//	var hash = md5( password );

  console.log(login, password);
	
// 	document.getElementById("loginResult").innerHTML = "";

// 	var tmp = {login:login,password:password};
// //	var tmp = {login:login,password:hash};
// 	var jsonPayload = JSON.stringify( tmp );
	
// 	var url = urlBase + '/Login.' + extension;

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", url, true);
// 	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
// 	try
// 	{
// 		xhr.onreadystatechange = function() 
// 		{
// 			if (this.readyState == 4 && this.status == 200) 
// 			{
// 				var jsonObject = JSON.parse( xhr.responseText );
// 				userId = jsonObject.id;
		
// 				if( userId < 1 )
// 				{		
// 					document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
// 					return;
// 				}
		
// 				firstName = jsonObject.firstName;
// 				lastName = jsonObject.lastName;

// 				saveCookie();
	
// 				window.location.href = "color.html";
// 			}
// 		};
// 		xhr.send(jsonPayload);
// 	}
// 	catch(err)
// 	{
// 		document.getElementById("loginResult").innerHTML = err.message;
// 	}

}

function doSignup()
{
	userId = 0;
	firstName = "";
	lastName = "";
	
	var login = document.getElementById("login-name").value;
	var password = document.getElementById("login-password").value;
//	var hash = md5( password );

  console.log(login, password);
	
// 	document.getElementById("loginResult").innerHTML = "";

// 	var tmp = {login:login,password:password};
// //	var tmp = {login:login,password:hash};
// 	var jsonPayload = JSON.stringify( tmp );
	
// 	var url = urlBase + '/Login.' + extension;

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", url, true);
// 	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
// 	try
// 	{
// 		xhr.onreadystatechange = function() 
// 		{
// 			if (this.readyState == 4 && this.status == 200) 
// 			{
// 				var jsonObject = JSON.parse( xhr.responseText );
// 				userId = jsonObject.id;
		
// 				if( userId < 1 )
// 				{		
// 					document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
// 					return;
// 				}
		
// 				firstName = jsonObject.firstName;
// 				lastName = jsonObject.lastName;

// 				saveCookie();
	
// 				window.location.href = "color.html";
// 			}
// 		};
// 		xhr.send(jsonPayload);
// 	}
// 	catch(err)
// 	{
// 		document.getElementById("loginResult").innerHTML = err.message;
// 	}

}


// function saveCookie()
// {
// 	var minutes = 20;
// 	var date = new Date();
// 	date.setTime(date.getTime()+(minutes*60*1000));	
// 	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + date.toGMTString();
// }

// function readCookie()
// {
// 	userId = -1;
// 	var data = document.cookie;
// 	var splits = data.split(",");
// 	for(var i = 0; i < splits.length; i++) 
// 	{
// 		var thisOne = splits[i].trim();
// 		var tokens = thisOne.split("=");
// 		if( tokens[0] == "firstName" )
// 		{
// 			firstName = tokens[1];
// 		}
// 		else if( tokens[0] == "lastName" )
// 		{
// 			lastName = tokens[1];
// 		}
// 		else if( tokens[0] == "userId" )
// 		{
// 			userId = parseInt( tokens[1].trim() );
// 		}
// 	}
	
// 	if( userId < 0 )
// 	{
// 		window.location.href = "index.html";
// 	}
// 	else
// 	{
// 		document.getElementById("userName").innerHTML = "Logged in as " + firstName + " " + lastName;
// 	}
// }

// function doLogout()
// {
// 	userId = 0;
// 	firstName = "";
// 	lastName = "";
// 	document.cookie = "firstName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
// 	window.location.href = "index.html";
// }

function addContact()
{
	var newFirstname = document.getElementById("add-firstname").value;
	var newLastname = document.getElementById("add-lastname").value;
	var newEmail = document.getElementById("add-email").value;
	var newPhone = document.getElementById("add-phone").value;

	// document.getElementById("colorAddResult").innerHTML = "";
  
	var tmp = { // TODO: Edit for API
    fname: newFirstname,
    lname: newLastname,
    email: newEmail,
    phone: newPhone
  };

	var jsonPayload = JSON.stringify( tmp );

  console.log(tmp);

  // Add contact HTML
  // TODO: put this after successful api call
  document.getElementById('contact-list').innerHTML += '<div class="list-group-item">\n' +
  '<div class="d-flex w-100 justify-content-between">\n' +
    '<h5 class="mb-1">' + newFirstname + ' ' + newLastname +'</h5>\n' +
    '<div class="btn-group" role="group" aria-label="Basic radio toggle button group">\n' +
      '<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" data-bs-toggle="modal" data-bs-target="#edit-modal">\n' +
      '<label class="btn btn-outline-primary" for="btnradio1">Edit</label>\n' +
      '<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" data-bs-toggle="modal" data-bs-target="#delete-modal">\n' +
      '<label class="btn btn-outline-primary" for="btnradio2">Delete</label>\n' +
    '</div>\n' +
  '</div>\n' +
  '<p class="mb-1">' + newPhone + '</p>\n' +
  '<p class="mb-1">' + newEmail + '</p>\n' +
  '</div>\n'
	// var url = urlBase + '/AddColor.' + extension; TODO: Edit later
	
	// var xhr = new XMLHttpRequest();
	// xhr.open("POST", url, true);
	// xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	// try
	// {
	// 	xhr.onreadystatechange = function() 
	// 	{
	// 		if (this.readyState == 4 && this.status == 200) 
	// 		{
	// 			document.getElementById("colorAddResult").innerHTML = "Color has been added";
	// 		}
	// 	};
	// 	xhr.send(jsonPayload);
	// }
	// catch(err)
	// {
	// 	document.getElementById("colorAddResult").innerHTML = err.message;
	// }
	
}

function editPopup() {
  var newFirstname = document.getElementById("edit-firstname").value;
	var newLastname = document.getElementById("edit-lastname").value;
	var newEmail = document.getElementById("edit-email").value;
	var newPhone = document.getElementById("edit-phone").value;
}

function editContact()
{
  var id = 99;
	var newFirstname = document.getElementById("edit-firstname").value;
	var newLastname = document.getElementById("edit-lastname").value;
	var newEmail = document.getElementById("edit-email").value;
	var newPhone = document.getElementById("edit-phone").value;

	// document.getElementById("colorAddResult").innerHTML = "";
  
	var tmp = { // TODO: Edit for API
    id: id,
    fname: newFirstname,
    lname: newLastname,
    email: newEmail,
    phone: newPhone
  };

	var jsonPayload = JSON.stringify( tmp );

  console.log(tmp);

	// var url = urlBase + '/AddColor.' + extension; TODO: Edit later
	
	// var xhr = new XMLHttpRequest();
	// xhr.open("POST", url, true);
	// xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	// try
	// {
	// 	xhr.onreadystatechange = function() 
	// 	{
	// 		if (this.readyState == 4 && this.status == 200) 
	// 		{
	// 			document.getElementById("colorAddResult").innerHTML = "Color has been added";
	// 		}
	// 	};
	// 	xhr.send(jsonPayload);
	// }
	// catch(err)
	// {
	// 	document.getElementById("colorAddResult").innerHTML = err.message;
	// }
	
}

// function searchColor()
// {
// 	var srch = document.getElementById("searchText").value;
// 	document.getElementById("colorSearchResult").innerHTML = "";
	
// 	var colorList = "";

// 	var tmp = {search:srch,userId:userId};
// 	var jsonPayload = JSON.stringify( tmp );

// 	var url = urlBase + '/SearchColors.' + extension;
	
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", url, true);
// 	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
// 	try
// 	{
// 		xhr.onreadystatechange = function() 
// 		{
// 			if (this.readyState == 4 && this.status == 200) 
// 			{
// 				document.getElementById("colorSearchResult").innerHTML = "Color(s) has been retrieved";
// 				var jsonObject = JSON.parse( xhr.responseText );
				
// 				for( var i=0; i<jsonObject.results.length; i++ )
// 				{
// 					colorList += jsonObject.results[i];
// 					if( i < jsonObject.results.length - 1 )
// 					{
// 						colorList += "<br />\r\n";
// 					}
// 				}
				
// 				document.getElementsByTagName("p")[0].innerHTML = colorList;
// 			}
// 		};
// 		xhr.send(jsonPayload);
// 	}
// 	catch(err)
// 	{
// 		document.getElementById("colorSearchResult").innerHTML = err.message;
// 	}
	
// }
