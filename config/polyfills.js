'use strict';

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
  (function() {
    var canvasBindings = require("canvas/lib/bindings");
    global.CanvasGradient = canvasBindings.CanvasGradient;
    global.CanvasPattern = canvasBindings.CanvasPattern;
  }());
}
