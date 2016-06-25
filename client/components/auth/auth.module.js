'use strict';

angular.module('demopocApp.auth', ['demopocApp.constants', 'demopocApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
