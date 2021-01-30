const SMS = require('../models/snssmsModel')


exports.send = (req, res) => {
    const { phone } = req.body;

    if (phone === undefined) {
        res.status(401).send({
            success: false,
            statusCode: 401,
            data: {
                message: 'No phone number was submitted'
            }
        });
    } else {

        SMS.send(phone, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    code: 500,
                    data: {
                        message: err.message || "Internal Server Error. Please try again"
                    }
                })
            } else {

                res.status(200).send({
                    success: true,
                    code: 200,
                    data

                })
            }
        })
    }
}

exports.subscribe = (req, res) => {
    const { phone } = req.body;

    if (phone === undefined) {
        res.status(401).send({
            success: false,
            statusCode: 401,
            data: {
                message: 'No phone number was submitted'
            }
        });
    } else {

        SMS.subscribe(phone, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    code: 500,
                    data: {
                        message: err.message || "Internal Server Error. Please try again"
                    }
                })
            } else {

                res.status(200).send({
                    success: true,
                    code: 200,
                    data

                })
            }
        })
    }
}