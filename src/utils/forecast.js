const request = require('request')


const forecast = (latitude, longitude , callback) =>{
    const url ='https://api.darksky.net/forecast/e48cfd2457e2bf547112ba5141527596/' +latitude+ ',' +longitude+ ''

    request({url , json: true} , (error, {body}) => {       // request({url , json: true} , (error, response)
        if(error){
            callback('Unable to connect to weather service.' , undefined)
        }
        
        else if(body.error) // response.body.error
        {
            callback('Unable to find location. ' , undefined)
        }

        else
        {
            callback(undefined ,
                body.daily.data[0].summary+' It is currently  '+body.currently.temperature+' degress out . There is a '+body.currently.precipProbability+'% chance of rain'
            ) // response.body.daily-----------
        }
    })

}



module.exports = forecast