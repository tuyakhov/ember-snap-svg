/* jshint node: true */
'use strict';
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-cli-snap-svg',
  included(app) {
    this._super.included.apply(this, arguments);
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import({
        development: 'vendor/snap.svg.js',
        production: 'vendor/snap.svg-min.js'
      });
      app.import('vendor/shims/snap-svg.js');
    }
  },
  treeForVendor(vendorTree) {
    var momentTree = new Funnel(path.dirname(require.resolve('snapsvg')));

    return new MergeTrees([vendorTree, momentTree]);
  }
};
