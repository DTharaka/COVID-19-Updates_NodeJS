const request = require('request');

const localCovidFunction = (callback)=>{
    const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
    request({url, json: true},(error,{body})=>{ // Object destructuring (error,response)
            if(error){
                callback('Unable to connect services..!',undefined);
            }else if(body.error){
                callback('Unable to find location..!',undefined);
            }else{
                callback(undefined,{
                    Update_time: body.data.update_date_time,
                    New_cases: body.data.local_new_cases,
                    Total_cases: body.data.local_total_cases,
                    Total_deaths: body.data.local_deaths,
                    Total_recovered: body.data.local_recovered,
                    Global_total_cases: body.data.global_total_cases,
                    Global_total_deaths: body.data.global_deaths,
                    Global_recovered: body.data.global_recovered
            })
        }
    })
}

module.exports = localCovidFunction;