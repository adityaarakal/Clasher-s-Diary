var AWS = require('aws-sdk');

let awsConfig = require('../common/config/awsConfig.js');
let playerModel = require("../models/playerModel.js");

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let create = (event, callback) => {

    let params = {
        TableName: "coc-playercrud",
        Item: JSON.parse(event.body)
    };
    params.Item.createdAt = Date.now();

    return docClient.put(params, (error, data) => {
        if (error) {
            callback(error);
        } else {
            callback(error, params.Item);
        }
    })
}

module.exports = create;