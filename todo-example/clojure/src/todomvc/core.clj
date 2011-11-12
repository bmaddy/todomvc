(ns todomvc.core
  (:require [cljs.repl :as repl]
            [cljs.repl.rhino :as rhino]))

(def env (rhino/repl-env))

(defn -main []
  (repl/repl env))

