;Getting the browser repl running:
;(require '[cljs.repl :as repl])
;(require '[cljs.repl.rhino :as rhino])
;(def env (rhino/repl-env))
;(repl/repl env)
;(require '[cljs.closure :as cljsc])
;(cljsc/build "src/todomvc/core.js.clj" {:output-to "js/core.js"})

(ns todomvc.core)
  (:require [clojure.browser.repl :as repl])

(repl/connect "http://localhost:9000/repl")

(defn ^:export greet [n]
  (str "Hello " n))


