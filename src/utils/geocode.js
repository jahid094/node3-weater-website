const request = require('request')

const geocode = (address , callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiamFoaWQwOTQiLCJhIjoiY2s4MWk5dmk5MDE4MDNmb2dhOWswYnFtNiJ9.-O5ks9jZzEtfWMhVOqhG8Q'

    request({ url , json: true} , (error , {body}) =>{
        if(error)
        {
            callback('Unable to connect to the location!', undefined)
        }
        else if(body.features.length === 0)
        {
            callback('unable to find the location . Try another search !', undefined)
        }
        else{
            callback(undefined , {

                latitude : body.features[0].center[1] ,
                longitude: body.features[0].center[0] ,
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode