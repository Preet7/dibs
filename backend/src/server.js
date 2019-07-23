'use strict';

const bodyParser = require('body-parser');
const express = require('express');
 
const { name, version } = require('../package.json');

    console.log(`
    Hello World ${name} ${version}`);

//Look at string templates in javascript
//Get a status route up and running. Right now show version number and name.
// It should be something we can use postman up and running


