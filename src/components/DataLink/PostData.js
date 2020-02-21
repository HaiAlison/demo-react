import axios from 'axios';
export  function DataLink (type,userData) {
	let baseUrl = 'http://localhost:8000/api/v1/';
	
	return new 	Promise((resolve,reject) => {
		axios
		.post(baseUrl+type,userData)
		.then((response) => console.log(response))
		.then((responseJson) => { resolve(responseJson); })
		.catch((error) => {console.log(error); });


	});


}

