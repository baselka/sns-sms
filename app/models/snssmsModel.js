const util = require('../utils/index')

exports.send = (phone, result) => {

    

    const mobileNo = `${phone}`
    const OTP = util.randomOTP(1000, 9999)

    const params = {
        Message: `Welcome! your mobile verification code is:  ${OTP}`, /* required */
        PhoneNumber: mobileNo,
    }

    sns.publish(params, (err, res) => {
        let data = {
            message: ''
        }
        if (err) {
            data.message = err
            result(data, null)
        }
        else {
            data.message = 'OTP sent successfully'
            result(null, data)
        }
    })  


}

exports.subscribe = (phone, result) => {

    

    const mobileNo = `${phone}`

    const params = {
        Protocol: 'SMS',
        TopicArn: 'arn:aws:sns:ap-southeast-1:016463407756:SNSTESTSMS', // change this to your own Topic ARN from AWS console
        Endpoint: mobileNo,
    }

    sns.subscribe(params, (err, res) => {
        let data = {
            message: ''
        }
        if (err) {
            data.message = err
            result(data, null)
        }
        else {
            data.message = 'User subscribed successfully'
            result(null, data)
        }
    })  


}