"use strict";

var request = require("request");
var express = require("express");
var _ = require("lodash");

var echonestMiddleware = function(key, requestOptions) {
    if(!_.isString(key)) {
        throw new Error(
            "API Key should be a string"
        );
    }
    
    var api = express();

    api.use(function(req, res) {
        var options = _.extend(requestOptions || {}, {
            url: "http://developer.echonest.com/api/v4" + req.url,
            qs: {
                api_key: key
            }
        });

        req.pipe(request(options)).pipe(res);
    });

    return api;
};

module.exports = echonestMiddleware
