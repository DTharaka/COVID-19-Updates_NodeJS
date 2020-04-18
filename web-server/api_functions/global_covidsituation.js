const request = require('request');

const globalCovidFunction = (country,callback) =>{
    const url = 'https://api.covid19api.com/live/country/'+ country;
    request({url, json: true},(error,{body})=>{ // Object destructuring (error,response)
            if(error){
                callback('Unable to connect services..!',undefined);
            }else if(body.error){
                callback('Unable to find location..!',undefined);
            }else{
                callback(undefined,{
                    Country: body[5].Country,
                    Update_time: body[5].Date,
                    Confirmed_cases: body[5].Confirmed,
                    Total_deaths: body[5].Deaths,
                    Total_recovered: body[5].Recovered,
                    Active_patients: body[5].Active,
            })
        }
    })
} 

module.exports = globalCovidFunction;
