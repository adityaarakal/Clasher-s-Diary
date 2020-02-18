var AWS = require('aws-sdk');

let awsConfig = require('../common/config/awsConfig.js');

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = (event, callback) => {

    let params = {
        TableName: "coc-playercrud",
        Key: {
            "playertag": event.body.playertag
        }
    };

    return docClient.delete(params, (error, data) => {
        if (error) {
            callback(error);
        } else {
            callback(error, data.Items);
        }
    })
}

module.exports = remove;