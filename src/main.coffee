goog.provide 'main'

goog.require 'este.Dispatcher'

goog.exportSymbol 'este.Dispatcher', este.Dispatcher
goog.exportProperty este.Dispatcher.prototype, 'register', este.Dispatcher.prototype.register
goog.exportProperty este.Dispatcher.prototype, 'unregister', este.Dispatcher.prototype.unregister
goog.exportProperty este.Dispatcher.prototype, 'onError', este.Dispatcher.prototype.onError
goog.exportProperty este.Dispatcher.prototype, 'dispatch', este.Dispatcher.prototype.dispatch
goog.exportProperty este.Dispatcher.prototype, 'waitFor', este.Dispatcher.prototype.waitFor
