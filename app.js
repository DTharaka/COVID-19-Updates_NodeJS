const request = require('request');
const globalCovidFunction = require('./global-covidsituation');
const localCovidFunction = require('./local-covidsituation');

globalCovidFunction('India', (error,data)=>{
    console.log('Error: ',error)
    console.log('Data: ',data)
});

localCovidFunction((error,data)=>{
    console.log('Error: ',error)
    console.log('Data: ',data)
});