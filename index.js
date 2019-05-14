const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());



app.get('/cookies', (request, response) => {

	// get the currently set cookie
	var visits = request.cookies['visits'];

	// see if there is a cookie
	if( visits === undefined ){

		// set a default value if it doesn't exist
		visits = 1;

	}

	else{

		// if a cookie exists, make a value thats 1 bigger
		visits = parseInt( visits ) + 1;
	}

	// set the cookie
	response.cookie('visits', visits);

	response.send('hhhheeeelllppp!!!!!' +" visits " + visits);;

});


// app.delete('animals/:name/delete'(request, response) => {


// 	jsonfile.readFile(FILE, (err, obj)=> {
// 		for(let i=0; i < obj.animal.length; i++){

// 			animal = obj.animals[i];
// 			if(animal.name = request.params.name);

// 			//this is the thing we wan to delete
// 			obj.animals.splice(i,1);

// 		}
// 	})

// })



app.listen(3000);
