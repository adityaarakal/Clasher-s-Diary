var AWS = require('aws-sdk');

let awsConfig = require('../common/config/awsConfig.js');

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let readAll = (event, callback) => {

    let params = {
        TableName: "coc-playercrud"
    }

    return docClient.scan(params, (error, data) => {
        if (error) {
            console.log("not written")
            callback(error);
        } else {
            console.log("written")
            callback(error, data.Items);
        }
    })
}

module.exports = readAll;