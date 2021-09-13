// Copied from class example with modification


var urlBase = 'http://COP4331-5.com/LAMPAPI'; //TODO: Change URL
var extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";

var idForDeletion = -1;

// document.querySelector('.delete-contact').addEventListener('click', deleteSelect);


// contact element to be inserted, as a string
function contactElement(id, fName, lName, email, phone) {
  
  contact = '<div id="' + id + '" class="contact-item list-group-item" ' + 
    'data-id="' + id + '" ' + 
    'data-firstname="' + fName + '" ' +
    'data-lastname="' + lName + '" ' +
    'data-email="' + email + '" ' +
    'data-phone="' + phone + '">\n' +
  '<div class="d-flex w-100 justify-content-between">\n' +
  '<h5 class="mb-1">' + fName + ' ' + lName +'</h5>\n' +
  '<div class="btn-group" role="group" aria-label="button group">\n' +
  '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</button>\n' +
  '<button type="button" class="delete-contact btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#delete-modal"' +
    'onclick="deleteSelect(' + id + ');">Delete</label>\n' +
  '</div>\n' +
  '</div>\n' +
  '<p class="contact-phone mb-1">' + phone + '</p>\n' +
  '<p class="contact-email mb-1">' + email + '</p>\n' +
  '</div>\n'

  return contact;
}

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

  // Add contact HTML. New contacts are added above existing ones
  // TODO: put this after successful API call
  document.getElementById('contact-list').innerHTML = 
    contactElement(99, newFirstname, newLastname, newEmail, newPhone) +
    document.getElementById('contact-list').innerHTML;

  document.getElementById("add-form").reset();
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

// TODO: Do if there's time left
// Inserts contact info to be edited into the edit modal
function editPopup() {

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

// Selects the contact to be deleted by id
function deleteSelect(id) {
  console.log(id);
  idForDeletion = id;
}

function doDelete() {

  // Hides the deleted element
  // This should go after the api call confirms deletion from the server
  document.getElementById(idForDeletion).className = "d-none";



  // api call goes here:
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
