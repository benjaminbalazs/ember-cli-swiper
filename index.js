/* jshint node:true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var FastbootTransform = require('fastboot-transform');

module.exports = {

    name: 'ember-cli-swiper',

    included: function(app) {

        this._super.included.apply(this, arguments);

        app.import(this.treePaths.vendor + '/swiper/js/swiper.min.js');
        app.import(this.treePaths.vendor + '/swiper/css/swiper.min.css');

    },

    treeForVendor: function(vendorTree) {

        var trees = [];
        if ( vendorTree !== undefined ) { trees.push(vendorTree); }

        var swiperTree = FastbootTransform(new Funnel(path.join(path.dirname(require.resolve('swiper')), '..'), {
            destDir: 'swiper',
            include: ['js/swiper.min.js', 'css/swiper.min.css']
        }));

        trees.push(swiperTree);

        //

        return new MergeTrees(trees);

    },

    isDevelopingAddon: function() {
        return true;
    }

};
