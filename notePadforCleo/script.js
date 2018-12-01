
var Notes = []; //subject
var noteText = []; //comment
var colors = [];


var CurrentClients = [];
var number = [];
var email = [];

var PotentialClientsArray = [];
var pnumber = [];
var pmail = [];

window.onload=function(){
	console.log("blaah")
	//when the page loads immediately get the values from local storage
	var Notes = JSON.parse(localStorage.getItem('Notes'));
	var noteText = JSON.parse(localStorage.getItem('noteText'));
	
	var CurrentClients = JSON.parse(localStorage.getItem('CurrentClients'));
	var number = JSON.parse(localStorage.getItem('number'));
	var email = JSON.parse(localStorage.getItem('email'));
	
	var PotentialClientsArray = JSON.parse(localStorage.getItem('PotentialClientsArray'));
	var pnumber = JSON.parse(localStorage.getItem('pnumber'));
	var pmail = JSON.parse(localStorage.getItem('pmail'));
	
	document.getElementById('NquantityDisplay').innerHTML  = 'Quantity: ' + Notes.length;
	document.getElementById('CCquantityDisplay').innerHTML  = 'Quantity: ' + CurrentClients.length;
	document.getElementById('PCquantityDisplay').innerHTML  = 'Quantity: ' + PotentialClientsArray.length;
	//'Quantity: ${notes.length}'
	
	//Section to display note array
	document.getElementById('NotesDisplay').innerHTML = '';
		//for each note in my notes array, display that note
	for(let i = 0; i < Notes.length; i++){
		document.getElementById('TextDisplay').innerHTML = 'Note';
		document.getElementById('NotesDisplay').innerHTML += `<h4>${Notes[i]}</h4>
		<div>
		<input type="button"
		 value="DELETE" onclick="deleteNote(${i})" /> 
		
		<input type="button"
		 value="See more" onclick="displayText(${i})" /> 
		 </div><br>
		 `

		//'<h4>'+ notes[i] +'</h4> <hr/>'
	}
	for(let i = 0; i < CurrentClients.length; i++){
		document.getElementById('CurrentClientsDisplay').innerHTML += `<h4>${CurrentClients[i]}</h4>
		<input type="button"
		 value="DELETE" onclick="deleteCurrentClients(${i})" /> 
		<input type="button"
		 value="more" onclick="displayExtra(${i})" />`;
		//'<h4>'+ CurrentClients[i] +'</h4> <hr/>'
	}


	for(let i = 0; i < PotentialClientsArray.length; i++){
		document.getElementById('PotentialClientsDisplay').innerHTML += `<h4>${PotentialClientsArray[i]}</h4>
		<input type="button"
		 value="DELETE" onclick="deletePotentialClients(${i})" /> 
		<input type="button"
		 value="more" onclick="displayExtra2(${i})" />`;
		//'<h4>'+ PotentialClients[i] +'</h4> <hr/>'
	}
	
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
function addNote() {
	var newNote = document.getElementById('newNote').value; //to store the value of the subject (what they typed in)
	var newText = document.getElementById('newText').value;
	var color = document.getElementById('color').value; //to store the value of the body
	//check if value is not empty
	if (newNote !== '' && newText !== ''){
		//add value to array
		Notes.push(newNote);
		noteText.push(newText);
		colors.push(color);

		//removes value from the current subject/comment box so it can be filled again
		document.getElementById('newNote').value = '';
		document.getElementById('newText').value = '';
		if (newNote){
			console.log("blaah")
			//stores the entire array into localstorage
			localStorage.setItem('Notes', JSON.stringify(Notes)); 
			localStorage.setItem('noteText', JSON.stringify(noteText));
		}

		//call functions
		displayNote();


	}
}


function displayNote(){
	//Section to display quantity
	document.getElementById('NquantityDisplay').innerHTML  = 'Quantity: ' + Notes.length;
	//'Quantity: ${notes.length}'
	
	//Section to display note array
	document.getElementById('NotesDisplay').innerHTML = '';
		//for each note in my notes array, display that note
	for(let i = 0; i < Notes.length; i++){
			document.getElementById('NotesDisplay').innerHTML += `<h4 id="${Notes[i]}">${Notes[i]}</h4>
			<div>
			<input type="button"
			 value="DELETE" onclick="deleteNote(${i})" /> 
			
			<input type="button"
			 value="See more" onclick="displayText(${i})" />
			</div>
			 `
			
			//'<h4>'+ notes[i] +'</h4> <hr/>'HTML = `<h4>${body}</h4>`
			;
			color = colors[i]
			document.getElementById(Notes[i]).style.color =color;
		
	}

}



function sortNote(){
	Notes.sort(); //sorts notes alphabetically
	displayNote(); //call displayNote again to update with new sorting
}

function deleteNote(index){
	//1st arg is the index
	//2nd arg number of element remove
	//removes 1 shoe at position index
	Notes.splice(index, 1);
	noteText.splice(index, 1);

	displayNote();
}

//================================================


function addCurrentClients() {
	//check if value is not empty
	//get value from input
	let currentClients = document.getElementById('currentClients').value;
	let numbCurrentClients = document.getElementById('numbCurrentClients').value;
	let emailCurrentClients = document.getElementById('emailCurrentClients').value;

	//check if value is not empty
	if (currentClients !== ''&& numbCurrentClients !== ''&& emailCurrentClients !== ''){
		//add value to array
		CurrentClients.push(currentClients);
		number.push(numbCurrentClients);
		email.push(emailCurrentClients);
		if (CurrentClients){
			//stores the entire array into localstorage
			localStorage.setItem('CurrentClients', JSON.stringify(CurrentClients)); 
			localStorage.setItem('number', JSON.stringify(number));
			localStorage.setItem('email', JSON.stringify(email));
		}
		//removes value from input
		document.getElementById('currentClients').value = '';
		document.getElementById('numbCurrentClients').value = '';
		document.getElementById('emailCurrentClients').value = '';
		displayCurrentClients();
	}
}

function displayCurrentClients(){
	//Section to display quantity
	document.getElementById('CCquantityDisplay').innerHTML  = 'Quantity: ' + CurrentClients.length;
	//'Quantity: ${currentClients.length}'

	//Section to display CurrentClients array
	document.getElementById('CurrentClientsDisplay').innerHTML = '';
		//for each note in my CurrentsClients array, display that note
	for(let i = 0; i < CurrentClients.length; i++){
		document.getElementById('CurrentClientsDisplay').innerHTML += `<h4>${CurrentClients[i]}</h4>
		<input type="button"
		 value="DELETE" onclick="deleteCurrentClients(${i})" /> 
		<input type="button"
		 value="more" onclick="displayExtra(${i})" />`;
		//'<h4>'+ CurrentClients[i] +'</h4> <hr/>'
	}

}
function displayExtra(i){
	name = CurrentClients[i]
	num = number[i]
	mail = email[i]
	document.getElementById('extraDisplay').innerHTML = `<h4>Name: ${name} <br>email: ${mail} <br> number: ${num}</h4>`
}

function deleteCurrentClients(index){
	//1st arg is the index
	//2nd arg number of element remove
	//removes 1 Client at position index
	CurrentClients.splice(index, 1);

	displayCurrentClients();
}

function sortCurrentClients(){
	CurrentClients.sort();
	displayCurrentClients()
}




//===============================================================

function addPotentialClientsFun() {
	//check if value is not empty
	//get value from input
	let pClientsVar = document.getElementById('potentialClientsID').value;
	let numbPotentialClients = document.getElementById('numbPotentialClients').value;
	let emailPotentialClients = document.getElementById('emailPotentialClients').value;
	//check if value is not empty
	if (pClientsVar !== ''&& numbPotentialClients !== ''&& emailPotentialClients !== ''){
		//add value to array
		PotentialClientsArray.push(pClientsVar);
		pnumber.push(numbPotentialClients);
		pmail.push(emailPotentialClients);
		if (PotentialClientsArray){
			//stores the entire array into localstorage
			localStorage.setItem('PotentialClientsArray', JSON.stringify(PotentialClientsArray)); 
			localStorage.setItem('pnumber', JSON.stringify(pnumber));
			localStorage.setItem('pmail', JSON.stringify(pmail));
		}
		//removes value from input
		document.getElementById('potentialClientsID').value = '';
		document.getElementById('numbPotentialClients').value = '';
		document.getElementById('emailPotentialClients').value = '';
		displayPotentialClients();
	}
}

function displayPotentialClients(){
	//Section to display quantity
	document.getElementById('PCquantityDisplay').innerHTML  = 'Quantity: ' + PotentialClientsArray.length;
	//'Quantity: ${potentialClients.length}'

	//Section to display PotentialClients array
	document.getElementById('PotentialClientsDisplay').innerHTML = '';


		//for each note in my PotentialClients array, display that note
	for(let i = 0; i < PotentialClientsArray.length; i++){
		document.getElementById('PotentialClientsDisplay').innerHTML += `<h4>${PotentialClientsArray[i]}</h4>
		<input type="button"
		 value="DELETE" onclick="deletePotentialClients(${i})" /> 
		<input type="button"
		 value="more" onclick="displayExtra2(${i})" />`;
		//'<h4>'+ PotentialClients[i] +'</h4> <hr/>'
	}
}

function displayExtra2(i){
	name = PotentialClientsArray[i]
	num = pnumber[i]
	mail = pmail[i]
	document.getElementById('extraDisplay2').innerHTML = `Name: ${name} <br><h4>email: ${mail} number: ${num}</h4>`
}

function deletePotentialClients(index){
	//1st arg is the index
	//2nd arg number of element remove
	//removes 1 shoe at position index
	PotentialClientsArray.splice(index, 1);

	displayPotentialClients();

}

function sortPotentialClients(){
	PotentialClientsArray.sort();
	displayPotentialClients();
}





