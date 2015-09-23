/*global console,nude*/

/**
 *
 * Angular Nude JS
 * https://github.com/sovanna/angular-nudejs
 * Licence MIT
 * (c) 2015 Sovanna Hing <sovanna.hing@gmail.com>
 *
 */
(function (window, angular, undefined) {
    'use strict';

    angular.module('sasrio.angular-nudejs', [])

    .factory('ssNudeInterceptor', [
        function () {
            return {
                detectFromBase64: function (base64, callback)  {
                    var nI = new Image();
                    nI.src = base64;

                    if (!base64) {
                        console.warn('base64 source element undef');
                    }

                    if (!callback) {
                        return console.error('missing callback func');
                    }

                    nI.onload = function () {
                        if (nude) {
                            nude.load(nI);

                            nude.scan(callback);
                        }
                    };
                }
            };
        }
    ]);

})(window, window.angular);