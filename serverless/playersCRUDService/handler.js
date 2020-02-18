'use strict';

let readAllPlayers = require('./controllers/readAll.js');
let createPlayer = require('./controllers/create.js');
let deletePlayer = require('./controllers/delete.js');
let updatePlayer = require('./controllers/update.js');

module.exports.readAll = (event, context, callback) => {

  readAllPlayers(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    };
    console.log("writing data");
    context.succeed(response);
  });
};

module.exports.create = (event, context, callback) => {

  createPlayer(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    };
    console.log("writing data");
    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  updatePlayer(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
    context.succeed(response);
  })
}

module.exports.delete = () => {
  deletePlayer(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    }
    context.succeed(response);
  })
}