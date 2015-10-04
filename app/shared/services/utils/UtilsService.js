'use strict';

/**
 * utilises service
 */
(function(ng) {
  ng.module('websiteassemblylineApp')
    .factory('UtilsService', function() {
      return {

        /**
         * CamelCases strings
         *
         * @param {String} string
         * @returns {*}
         */
        camelcase: function(string) {
          return string.replace(/_+(.)?/g, function(match, chr) {
            if (chr) {
              return chr.toUpperCase();
            } else {
              return '';
            }
          });
        },

        /**
         * Capitalize first latter
         *
         * @param {String} string
         * @returns {string}
         */
        capitalize: function(string) {
          return string.charAt(0).toUpperCase() + string.substring(1);
        },

        // like lookupIndex but alot more agile
        // like normal index of but add supports to search within property
        // usage: Utils.indexOf(arr, 5, 'id'), Utils.indexOf(arr, tab, 'id')
        indexOf : function(arr, srch, prop){
          for(var i = 0; i < arr.length; i++){
            if(prop && arr[i][prop] && (arr[i][prop] === srch[prop] || arr[i][prop] === srch)) return i;
            if(arr[i] === srch) return i;
          }
          return -1;
        }
      };
    });

})(angular);