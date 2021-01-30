module.exports = app => {
    const api_version = '/sns/sms'
    const SMS = require('../controllers/sns-sms')

    // Subscribe number to topic
    app.post(`${api_version}/subscribe`, SMS.subscribe)

    // send SMS message
    app.post(`${api_version}/send`, SMS.send)

    // Unsubscribe number
    //app.get(`${api_version}/unsubscribe`, SMS)
}