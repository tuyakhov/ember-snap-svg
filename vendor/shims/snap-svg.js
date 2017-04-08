(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Snap'] };
  }

  define('snap-svg', [], vendorModule);
})();
