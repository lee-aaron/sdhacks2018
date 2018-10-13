const express = require('express');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 5000;

// Setup Firebase
var serviceAccount = require('./sdhacks2018-219306-firebase-adminsdk-sad6o-4ff8e4edb4.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sdhacks2018-219306.firebaseio.com'
});
var db = admin.database();
var ref = db.ref('/');

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

app.get('/api/firebase', (req, res) => {
	var usersRef = ref.child('test');
	usersRef.set({
	  field1: "hello",
	  field2: "world"
	});

	res.send({
		status: 'success'
	})
});

app.listen(port, () => console.log(`Listening on port ${port}`));