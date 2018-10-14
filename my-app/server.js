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

app.use((req, res, next) => {
	console.log('Got request', req.path, req.method);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Origin', '*');
	return next();
});

// COMPANY
app.get('/api/company', (req, res) => {
	var user_id = req.query.user_id;
	var companyRef = ref.child(`users/${user_id}/company_status`);
	companyRef.once('value', (snapshot) => {
		res.send(snapshot.val());
	}, (err) => {
		console.log("The read failed: " + err.code);
	});
});
app.post('/api/company', (req, res) => {
	var user_id = req.body.user_id;
	var companyRef = ref.child(`users/${user_id}/company_status`);
	var newCompanyRef = companyRef.push();
	newCompanyRef.set({
		  accepted: false,
		  rejected: false,
		  name: req.body.name
	});

	res.send({ status: 200 });
});
app.delete('/api/company', (req, res) => {
	var company_id = req.query.company_id;
	var user_id = req.query.user_id;
	var companyRef = ref.child(`users/${user_id}/company_status/${company_id}`);
	companyRef.remove();

	res.send({ status: 200 });
});

// STEP
app.post('/api/steps', (req, res) => {
	var date = req.body.date;
	var name = req.body.name;
	var description = req.body.description;
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;

	var stepRef = ref.child(`users/${user_id}/company_status/${company_id}/steps`);
	var newStepRef = stepRef.push();
	newStepRef.set({
		date,
		name,
		description
	});

	res.send({ status: 200 });
});
app.delete('/api/steps', (req, res) => {
	var company_id = req.query.company_id;
	var user_id = req.query.user_id;
	var step_id = req.query.step_id;

	var companyRef = ref.child(`users/${user_id}/company_status/${company_id}/steps/${step_id}`);
	companyRef.remove();

	res.send({ status: 200 });
});

// ACCEPTED or REJECTED
app.post('/api/offer', (req, res) => {
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;

	var companyRef = ref.child(`users/${user_id}/company_status/${company_id}`);
	companyRef.update({
		accepted: req.body.accepted,
		rejected: req.body.rejected
	});
	res.send({ status: 200 });
});

app.listen(port, () => console.log(`Listening on port ${port}`));