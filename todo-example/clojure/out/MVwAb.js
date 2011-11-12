goog.provide('todomvc.core');
goog.require('cljs.core');
"﷐'require".call(null,cljs.core.Vector.fromArray([clojure.browser.repl,"﷐'as",todomvc.core.repl]));
repl.connect.call(null,"http://localhost:9000/repl");
todomvc.core.greet = (function greet(n){
return cljs.core.str.call(null,"Hello ",n);
});
goog.exportSymbol('todomvc.core.greet', todomvc.core.greet);
