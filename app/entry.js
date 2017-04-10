'use strict';
require('./scss/main.scss');

const angular = require('angular');
const uiBootstrap = require('angular-ui-bootstrap');
const pascalcase = require('pascalcase');
const camelcase = require('camelcase');
const uiRouter = require('angular-ui-router');
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const ngFileUpload = require('ng-file-upload');
const path = require('path');

const restaurantApp = angular.module('restaurantApp', [ngTouch, ngAnimate, uiRouter, ngFileUpload, uiBootstrap]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  restaurantApp.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'));
  restaurantApp.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  restaurantApp.service(name, context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  restaurantApp.component(name, context(key));
});

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  restaurantApp.filter(name, context(key));
});

context = require.context('./directive/', true, /\.js$/);
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  restaurantApp.directive(name, context(key));
});
