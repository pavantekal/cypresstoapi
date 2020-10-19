var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec)
var data = require("../mochawesome-report/mochawesome.json")
/* GET home page. */
router.get('/', function(req, res, next) {
    async function execCypress() {
        const {stdout, stderr } = await exec('./node_modules/.bin/cypress run --spec \'./cypress/integration/examples/configuresmtp.js\'');
        res.send(data);
    }
    execCypress();
});

module.exports = router;
