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

app.get('/', (req, res) => {
	res.send("The backend works");
});

/*************
 * User
 */
// Get user
app.get('/api/user', (req, res) => {
	res.send('Get request');
});

// Create user
app.post('/api/user', (req, res) => {
	admin.auth().createUser({
		email: req.body.email,
		password: req.body.password,
		displayName: req.body.displayName || "Anonymous",
		photoURL: req.user.photoURL || null,
	})
	.then(function(userRecord) {
		// See the UserRecord reference doc for the contents of userRecord.
		console.log("Successfully created new user:", userRecord.uid);
	})
	.catch(function(error) {
		console.log("Error creating new user:", error);
	});
});



app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

app.get('/api/firebase/write', (req, res) => {
	var testRef = ref.child('test');
	testRef.set({
	  field1: "hello",
	  field2: "from",
	  field3: "firebase"
	});

	res.send({
		status: 'success'
	})
});

app.get('/api/firebase/read', (req, res) => {
	var testRef = ref.child('test');
	testRef.on('value', function(snapshot) {
		res.send(snapshot.val());
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));