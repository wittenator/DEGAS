const request = require('request')
const express = require('express')
const lib = require('./lib')
var bodyParser = require('body-parser')

var app = express();
const controller = lib.APIController

// parse application/json
app.use(bodyParser.json())




app.get('/getRecipesByIngredient', (req, res) => {
	var ingredients = "chicken";
	var limitLicense = false;
	var number = 10;
	var ranking = 58;

	// key-value map for optional query parameters
	var queryParams = []
	controller.findByIngredients(req.query.ingredients, limitLicense, number, ranking, queryParams, (error, response, context) => {
		console.log(response)
		res.send(response)
	})
})

app.get('/getRecipeByID', (req, res) => {
	controller.getRecipeInformation(req.query.recipeid, (error, response, context) => {
		console.log(response)
		res.send(response)
	})
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})