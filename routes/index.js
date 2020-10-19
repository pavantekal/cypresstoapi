var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec)

/* GET home page. */
router.get('/', function(req, res, next) {
  async function execCypress() {
    const {stdout, stderr } = await exec('node_modules/.bin/cypress run');
    res.send(stdout);
    res.send(stderr);
  }
  execCypress();
});

module.exports = router;
