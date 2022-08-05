const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f2f0e855d8e25647291ea782934e378b&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json:true }, (error, { body }) => {
        if(error) {
            callback('unable to connect to location services!', undefined)
        } else if(body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +  ". It is currently " + body.current.temperature + " degrees out It feels like " + body.current.feelslike + " degrees out"
            )
        }
    })
}

module.exports = forecast