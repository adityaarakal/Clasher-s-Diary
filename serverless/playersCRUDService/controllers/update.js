var AWS = require('aws-sdk');

let awsConfig = require('../common/config/awsConfig.js');

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let update = (event, callback) => {

    let params = {
        TableName: "coc-playercrud",
        Key: {
            "playertag": event.body.playertag
        },
        Item: event.body
    };

    return docClient.put(params, (error, data) => {
        if (error) {
            callback(error)
        } else {
            callback(error, params.Item);
        }
    })
}

module.exports = update;