const express = require('express');
const admin = require('firebase-admin');
var bodyParser = require('body-parser');

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

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// COMPANY
app.get('/api/company', (req, res) => {
	var user_id = req.query.user_id;
	var companyRef = ref.child(`users/${user_id}/company_status`);
	companyRef.on('value', (snapshot) => {
		res.send(snapshot.val());
	}, (err) => {
		console.log("The read failed: " + err.code);
	});
});

app.post('/api/company', (req, res) => {
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;
	var companyRef = ref.child(`users/${user_id}/company_status`);
	var newCompanyRef = companyRef.push();
	newCompanyRef.set({
		  id: company_id,
		  accepted: false,
		  rejected: false
	});

	res.send({ status: 200 });
});

// STEP
app.post('/api/steps', (req, res) => {
	var date = req.body.date;
	var name = req.body.name;
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;

	var stepRef = ref.child(`users/${user_id}/company_status/${company_id}/steps`);
	var newStepRef = stepRef.push();
	newStepRef.set({
		date,
		name
	});

	res.send({ status: 200 });
});

// ACCEPTED
app.post('/api/accepted', (req, res) => {
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;

	var companyRef = ref.child(`users/${user_id}/company_status/${company_id}`);
	companyRef.update({
		accepted: true,
		rejected: false
	});

	res.send({ status: 200 });
});

// REJECTED
app.post('/api/rejected', (req, res) => {
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;

	var companyRef = ref.child(`users/${user_id}/company_status/${company_id}`);
	companyRef.update({
		rejected: true,
		accepted: false
	});

	res.send({ status: 200 });
});

app.listen(port, () => console.log(`Listening on port ${port}`));