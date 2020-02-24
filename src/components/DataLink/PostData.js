import axios from 'axios';
export  function DataLink (type,userData) {
	let baseUrl = 'http://localhost:8000/api/v1/';
	return new 	Promise((resolve,reject) => {
		axios
		.post(baseUrl+type,userData)
		// Add a request interceptor
		.then(function (response) {resolve(response)})
		.catch(err => console.log('There was an error:' + err));
	});


}

