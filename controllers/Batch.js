'use strict';

var utils = require('../utils/writer.js');
var Batch = require('../service/BatchService');

module.exports.addBatch = function addBatch (req, res, next, body) {
  Batch.addBatch(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addBatch = function addBatch (req, res, next, body) {
  Batch.addBatch(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBatchById = function getBatchById (req, res, next, batchId) {
  Batch.getBatchById(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
