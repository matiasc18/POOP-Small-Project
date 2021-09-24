// Copied from class example with modification

// TODO: DISABLE BUTTONS UNTIL API RESPONSE

// var urlBase = 'https://welovepoop.xyz/LAMPAPI'; //TODO: Change URL
var urlBase = 'http://welovepoop.xyz/LAMPAPI'; //TODO: Change URL
var extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";

var idSelection = -1;


// document.querySelector('.delete-contact').addEventListener('click', deleteSelect);

readCookie()

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
  '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-modal"' +
    'onclick="selectForEdit(' + id + ')">Edit</button>\n' +
  '<button type="button" class="delete-contact btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#delete-modal"' +
    'onclick="selectForDelete(' + id + ');">Delete</button>\n' +
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
	
	// userId = 99;
	// firstName = "Bobby";
	// lastName = "Tables";
	// saveCookie();
	// window.location.href = "contacts.html";

	var tmp = {login:login,password:password};
//	var tmp = {login:login,password:hash};
	var jsonPayload = JSON.stringify( tmp );
	
	var url = urlBase + '/Login.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				var jsonObject = JSON.parse( xhr.responseText );
				userId = jsonObject.id;

				console.log(jsonObject);
				if( userId < 1 )
				{		
					console.log("Not found");
					// document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
					return;
				}
		
				firstName = jsonObject.firstName;
				lastName = jsonObject.lastName;

				saveCookie();
	
				window.location.href = "contacts.html";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		// document.getElementById("loginResult").innerHTML = err.message;
		console.log(err.message);
	}

}

function doSignup()
{
	userId = 0;
	firstName = "";
	lastName = "";
	
	var fName = document.getElementById("signup-firstname").value;
	var lName = document.getElementById("signup-lastname").value;
	var username = document.getElementById("signup-username").value;
	var password = document.getElementById("signup-pass").value;
//	var hash = md5( password );

	var tmp = {
		FirstName: fName,
		LastName: lName,
		Username: username,
		Password: password
	};
//	var tmp = {login:login,password:hash};
	var jsonPayload = JSON.stringify( tmp );
	
	console.log(tmp);

	var url = urlBase + '/CreateUser.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				console.log(this); // This
				var check = 99;
				var jsonObject = JSON.parse( xhr.responseText );
				
				// userId = jsonObject.id;
		
				if( userId < 1 )
				{	
					console.log("Signup failed");	
					// document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
					return;
				}
				console.log(jsonObject);
				console.log("Signup succeess");

				// firstName = jsonObject.firstName;
				// lastName = jsonObject.lastName;

				// saveCookie();
	
				// window.location.href = "contacts.html";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		// document.getElementById("loginResult").innerHTML = err.message;
		console.log(err);
	}

}


function saveCookie()
{
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + date.toGMTString();
}

function readCookie()
{
	console.log("Reading cookie");
	userId = -1;
	var data = document.cookie;
	var splits = data.split(",");
	for(var i = 0; i < splits.length; i++) 
	{
		var thisOne = splits[i].trim();
		var tokens = thisOne.split("=");
		if( tokens[0] == "firstName" )
		{
			firstName = tokens[1];
		}
		else if( tokens[0] == "lastName" )
		{
			lastName = tokens[1];
		}
		else if( tokens[0] == "userId" )
		{
			userId = parseInt( tokens[1].trim() );
		}
	}
	
	var path = window.location.pathname;

	console.log("Data:", firstName, lastName, userId);
	console.log("Path:", window.location.pathname);
	
	if (path == "/index.html" || path == "/") {
		if (userId >= 0) {
			window.location.href = "contacts.html";
		}
	}
	else if (path == "/contacts.html")
	{
		if (userId >= 0) {
			document.getElementById("userName").innerHTML = "Logged in as " + firstName + " " + lastName;
		}
		else {
			window.location.href = "index.html";
		}
	}
}

function doLogout()
{
	userId = 0;
	firstName = "";
	lastName = "";
	document.cookie = "firstName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
	window.location.href = "index.html";
}

function addContact()
{
	var newFirstname = document.getElementById("add-firstname").value;
	var newLastname = document.getElementById("add-lastname").value;
	var newEmail = document.getElementById("add-email").value;
	var newPhone = document.getElementById("add-phone").value;

	// document.getElementById("colorAddResult").innerHTML = "";
  
	var tmp = {
    userId: userId,
		FirstName: newFirstname,
    LastName: newLastname,
    Email: newEmail,
    Phone: newPhone
  };

	var jsonPayload = JSON.stringify( tmp );

  console.log(tmp);

  // Add contact HTML. New contacts are added above existing ones
  // TODO: put this after successful API call

  // document.getElementById('contact-list').innerHTML = 
  //   contactElement(99, newFirstname, newLastname, newEmail, newPhone) +
  //   document.getElementById('contact-list').innerHTML;

  document.getElementById("add-form").reset();
	var url = urlBase + '/ContactCreation.' + extension; //TODO: Edit later
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				// document.getElementById("colorAddResult").innerHTML = "Color has been added";
				document.getElementById('contact-list').innerHTML = 
					contactElement(99, newFirstname, newLastname, newEmail, newPhone) +
					document.getElementById('contact-list').innerHTML;
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		// document.getElementById("colorAddResult").innerHTML = err.message;
		console.log(err);
	}
	
}

// Inserts contact info to be edited into the edit modal
function selectForEdit(id) {
	idSelection = id;

  var el = document.getElementById(id);
  var fName = el.getAttribute("data-firstname");
  var lName = el.getAttribute("data-lastname");
  var email = el.getAttribute("data-email");
  var phone = el.getAttribute("data-phone");

  document.getElementById("edit-firstname").value = fName;
	document.getElementById("edit-lastname").value = lName;
	document.getElementById("edit-email").value = email;
	document.getElementById("edit-phone").value = phone;
}

function editContact()
{
  var id = idSelection;
	var newFirstname = document.getElementById("edit-firstname").value;
	var newLastname = document.getElementById("edit-lastname").value;
	var newEmail = document.getElementById("edit-email").value;
	var newPhone = document.getElementById("edit-phone").value;

	var tmp = {
    ID: id,
    FirstName: newFirstname,
    LastName: newLastname,
    Email: newEmail,
    Phone: newPhone
  };

	var jsonPayload = JSON.stringify( tmp );

  console.log(tmp);

	var url = urlBase + '/ContactUpdate.' + extension;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				// document.getElementById("colorAddResult").innerHTML = "Color has been added";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		// document.getElementById("colorAddResult").innerHTML = err.message;
	}
	
}

// Selects the contact to be deleted by id
function selectForDelete(id) {
  console.log(id);
  idSelection = id;
}

function doDelete() { 

  // api call goes here:
	var tmp = {
    userID: userId,
    contactID: idSelection
  };

	var jsonPayload = JSON.stringify( tmp );

  console.log(tmp);

	var url = urlBase + '/ContactDeletion.' + extension;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				// document.getElementById("colorAddResult").innerHTML = "Color has been added";
				// Hides the deleted element
				document.getElementById(idSelection).className = "d-none";
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		// document.getElementById("colorAddResult").innerHTML = err.message;
	}
}

function searchContact()
{
	var srch = document.getElementById("search").value;

	var tmp = {search:srch,userId:userId};
	// var tmp = {search:srch,userId:userId};
	var jsonPayload = JSON.stringify( tmp );

	var url = urlBase + '/ContactSearch.' + extension;
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				// document.getElementById("colorSearchResult").innerHTML = "Color(s) has been retrieved";
				var jsonObject = JSON.parse( xhr.responseText );

				console.log(jsonObject);
				
				// for( var i=0; i<jsonObject.results.length; i++ )
				// {
				// 	colorList += jsonObject.results[i];
				// 	if( i < jsonObject.results.length - 1 )
				// 	{
				// 		colorList += "<br />\r\n";
				// 	}
				// }
				var contactList = "";
				jsonObject.results.forEach(row => {
					contactList += contactElement(row[0], row[1], row[2], row[4], row[3]);					
				});
				
				document.getElementById("contact-list").innerHTML = contactList;
			}
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		console.log(err);
		// document.getElementById("colorSearchResult").innerHTML = err.message;
	}
	
}
