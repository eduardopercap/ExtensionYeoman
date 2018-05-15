'use strict';
const HypothesisManager = require('./background/HypothesisManager');

let hypothesisManager=new HypothesisManager();
hypothesisManager.init();

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page');
