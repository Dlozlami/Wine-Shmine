const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require('mongoose');
const https = require('https');
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))

const secretKey = 'o8uhs7errqlosw830j#^*)N[]pek3e9--o-wqldsm902is,-dsuew0fduyj2-slw0wjd4r[w0-iiwqokweidg8wqj2pss9tffb96ywaxb937ehd90dow-;e;==lk9j98j/.oi-=[;k28uw4rq4ewfrqf+q';
const refreshKey = 'o8uhs7errqlosw830j#^*)N[]xsyg26gednpsrtuui98908732fros-w;w.skhgfeazdsuew0fduyj2-slw0wjd4r[w0-iiwqokdfdweidg8wqj2pss9tff848r4e9p[jn9765tbw ds=1qqwsfrqf+q';

mongoose.connect('mongodb://127.0.0.1:27017/wine-list')


app.post('/checkout', (req, res) => {
	// Extract the required data from the request body
	//const { email, amount } = req.body;
	console.log('Posted')
	// Construct the params object from the extracted data
	const params = JSON.stringify({
	  "email": 'dlozi.mthethwa@gmail.com',
	  "amount": 743337
	});
  
	// Set up the options for the HTTPS request
	const options = {
	  hostname: 'api.paystack.co',
	  port: 443,
	  path: '/transaction/initialize',
	  method: 'POST',
	  headers: {
		Authorization: 'Bearer sk_test_8aaa40862087154621ff4fd5a8b9bfee00d6283f', // Replace with your actual Paystack API secret key
		'Content-Type': 'application/json'
	  }
	};
  
	// Make the HTTPS request to the Paystack API
	const reqPaystack = https.request(options, response => {
	  let data = '';
  
	  response.on('data', chunk => {
		data += chunk;
	  });
  
	  response.on('end', () => {
		// Parse the response data and send it back to the client
		const responseData = JSON.parse(data);
		res.json(responseData);
	  });
	});
  
	reqPaystack.on('error', error => {
	  console.error(error);
	  res.status(500).json({ error: 'An error occurred while processing the payment.' });
	});
  
	// Write the request body (params) and end the request
	reqPaystack.write(params);
	reqPaystack.end();
  });
  


app.listen(8080, function () {
	console.log("server started...\nClick the url to gain access: http://localhost:8080/");
})