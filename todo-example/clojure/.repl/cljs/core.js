goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2627 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2627))
{return or__3548__auto____2627;
} else
{var or__3548__auto____2628 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2628))
{return or__3548__auto____2628;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2629 = coll;

if(cljs.core.truth_(and__3546__auto____2629))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2629;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2630 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2630))
{return or__3548__auto____2630;
} else
{var or__3548__auto____2631 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2631))
{return or__3548__auto____2631;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2632 = coll;

if(cljs.core.truth_(and__3546__auto____2632))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2632;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2633 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2633))
{return or__3548__auto____2633;
} else
{var or__3548__auto____2634 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2634))
{return or__3548__auto____2634;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2635 = coll;

if(cljs.core.truth_(and__3546__auto____2635))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2635;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2636 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2636))
{return or__3548__auto____2636;
} else
{var or__3548__auto____2637 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2637))
{return or__3548__auto____2637;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2644 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2638 = coll;

if(cljs.core.truth_(and__3546__auto____2638))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2638;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2639 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2639))
{return or__3548__auto____2639;
} else
{var or__3548__auto____2640 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2640))
{return or__3548__auto____2640;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2645 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2641 = coll;

if(cljs.core.truth_(and__3546__auto____2641))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2641;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2642 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2642))
{return or__3548__auto____2642;
} else
{var or__3548__auto____2643 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2643))
{return or__3548__auto____2643;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2644.call(this,coll,n);
case  3 :
return _nth__2645.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2647 = coll;

if(cljs.core.truth_(and__3546__auto____2647))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2647;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2648 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2648))
{return or__3548__auto____2648;
} else
{var or__3548__auto____2649 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2649))
{return or__3548__auto____2649;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2650 = coll;

if(cljs.core.truth_(and__3546__auto____2650))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2650;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2651 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2651))
{return or__3548__auto____2651;
} else
{var or__3548__auto____2652 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2652))
{return or__3548__auto____2652;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2659 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2653 = o;

if(cljs.core.truth_(and__3546__auto____2653))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2653;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2654 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2654))
{return or__3548__auto____2654;
} else
{var or__3548__auto____2655 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2655))
{return or__3548__auto____2655;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2660 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2656 = o;

if(cljs.core.truth_(and__3546__auto____2656))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2656;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2657 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2657))
{return or__3548__auto____2657;
} else
{var or__3548__auto____2658 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2658))
{return or__3548__auto____2658;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2659.call(this,o,k);
case  3 :
return _lookup__2660.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2662 = coll;

if(cljs.core.truth_(and__3546__auto____2662))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2662;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2663 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2663))
{return or__3548__auto____2663;
} else
{var or__3548__auto____2664 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2664))
{return or__3548__auto____2664;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2665 = coll;

if(cljs.core.truth_(and__3546__auto____2665))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2665;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2666 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2666))
{return or__3548__auto____2666;
} else
{var or__3548__auto____2667 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2667))
{return or__3548__auto____2667;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2668 = coll;

if(cljs.core.truth_(and__3546__auto____2668))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2668;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2669 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2669))
{return or__3548__auto____2669;
} else
{var or__3548__auto____2670 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2670))
{return or__3548__auto____2670;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2671 = coll;

if(cljs.core.truth_(and__3546__auto____2671))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2671;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2672 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2672))
{return or__3548__auto____2672;
} else
{var or__3548__auto____2673 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2673))
{return or__3548__auto____2673;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2674 = coll;

if(cljs.core.truth_(and__3546__auto____2674))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2674;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2675 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2675))
{return or__3548__auto____2675;
} else
{var or__3548__auto____2676 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2676))
{return or__3548__auto____2676;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2677 = coll;

if(cljs.core.truth_(and__3546__auto____2677))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2677;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2678 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2678))
{return or__3548__auto____2678;
} else
{var or__3548__auto____2679 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2679))
{return or__3548__auto____2679;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2680 = coll;

if(cljs.core.truth_(and__3546__auto____2680))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2680;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2681 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2681))
{return or__3548__auto____2681;
} else
{var or__3548__auto____2682 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2682))
{return or__3548__auto____2682;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2683 = o;

if(cljs.core.truth_(and__3546__auto____2683))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2683;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2684 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2684))
{return or__3548__auto____2684;
} else
{var or__3548__auto____2685 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2685))
{return or__3548__auto____2685;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2686 = o;

if(cljs.core.truth_(and__3546__auto____2686))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2686;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2687 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2687))
{return or__3548__auto____2687;
} else
{var or__3548__auto____2688 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2688))
{return or__3548__auto____2688;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2689 = o;

if(cljs.core.truth_(and__3546__auto____2689))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2689;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2690 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2690))
{return or__3548__auto____2690;
} else
{var or__3548__auto____2691 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2691))
{return or__3548__auto____2691;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2692 = o;

if(cljs.core.truth_(and__3546__auto____2692))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2692;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2693 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2693))
{return or__3548__auto____2693;
} else
{var or__3548__auto____2694 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2694))
{return or__3548__auto____2694;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2701 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2695 = coll;

if(cljs.core.truth_(and__3546__auto____2695))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2695;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2696 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2696))
{return or__3548__auto____2696;
} else
{var or__3548__auto____2697 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2697))
{return or__3548__auto____2697;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2702 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2698 = coll;

if(cljs.core.truth_(and__3546__auto____2698))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2698;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2699 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2699))
{return or__3548__auto____2699;
} else
{var or__3548__auto____2700 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2700))
{return or__3548__auto____2700;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2701.call(this,coll,f);
case  3 :
return _reduce__2702.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2704 = o;

if(cljs.core.truth_(and__3546__auto____2704))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2704;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2705 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2705))
{return or__3548__auto____2705;
} else
{var or__3548__auto____2706 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2706))
{return or__3548__auto____2706;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2707 = o;

if(cljs.core.truth_(and__3546__auto____2707))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2707;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2708 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2708))
{return or__3548__auto____2708;
} else
{var or__3548__auto____2709 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2709))
{return or__3548__auto____2709;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2710 = o;

if(cljs.core.truth_(and__3546__auto____2710))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2710;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2711 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2711))
{return or__3548__auto____2711;
} else
{var or__3548__auto____2712 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2712))
{return or__3548__auto____2712;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2713 = o;

if(cljs.core.truth_(and__3546__auto____2713))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2713;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2714 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2714))
{return or__3548__auto____2714;
} else
{var or__3548__auto____2715 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2715))
{return or__3548__auto____2715;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2716 = d;

if(cljs.core.truth_(and__3546__auto____2716))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2716;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2717 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2717))
{return or__3548__auto____2717;
} else
{var or__3548__auto____2718 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2718))
{return or__3548__auto____2718;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2719 = this$;

if(cljs.core.truth_(and__3546__auto____2719))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2719;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2720 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2720))
{return or__3548__auto____2720;
} else
{var or__3548__auto____2721 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2721))
{return or__3548__auto____2721;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2722 = this$;

if(cljs.core.truth_(and__3546__auto____2722))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2722;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2723 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2723))
{return or__3548__auto____2723;
} else
{var or__3548__auto____2724 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2724))
{return or__3548__auto____2724;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2725 = this$;

if(cljs.core.truth_(and__3546__auto____2725))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2725;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2726 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2726))
{return or__3548__auto____2726;
} else
{var or__3548__auto____2727 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2727))
{return or__3548__auto____2727;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2728 = null;
var G__2728__2729 = (function (o,k){
return null;
});
var G__2728__2730 = (function (o,k,not_found){
return not_found;
});
G__2728 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2728__2729.call(this,o,k);
case  3 :
return G__2728__2730.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2728;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2732 = null;
var G__2732__2733 = (function (_,f){
return f.call(null);
});
var G__2732__2734 = (function (_,f,start){
return start;
});
G__2732 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2732__2733.call(this,_,f);
case  3 :
return G__2732__2734.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2732;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2736 = null;
var G__2736__2737 = (function (_,n){
return null;
});
var G__2736__2738 = (function (_,n,not_found){
return not_found;
});
G__2736 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2736__2737.call(this,_,n);
case  3 :
return G__2736__2738.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2736;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2746 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2740 = cljs.core._nth.call(null,cicoll,0);
var n__2741 = 1;

while(true){
if(cljs.core.truth_((n__2741 < cljs.core._count.call(null,cicoll))))
{{
var G__2750 = f.call(null,val__2740,cljs.core._nth.call(null,cicoll,n__2741));
var G__2751 = (n__2741 + 1);
val__2740 = G__2750;
n__2741 = G__2751;
continue;
}
} else
{return val__2740;
}
break;
}
}
});
var ci_reduce__2747 = (function (cicoll,f,val){
var val__2742 = val;
var n__2743 = 0;

while(true){
if(cljs.core.truth_((n__2743 < cljs.core._count.call(null,cicoll))))
{{
var G__2752 = f.call(null,val__2742,cljs.core._nth.call(null,cicoll,n__2743));
var G__2753 = (n__2743 + 1);
val__2742 = G__2752;
n__2743 = G__2753;
continue;
}
} else
{return val__2742;
}
break;
}
});
var ci_reduce__2748 = (function (cicoll,f,val,idx){
var val__2744 = val;
var n__2745 = idx;

while(true){
if(cljs.core.truth_((n__2745 < cljs.core._count.call(null,cicoll))))
{{
var G__2754 = f.call(null,val__2744,cljs.core._nth.call(null,cicoll,n__2745));
var G__2755 = (n__2745 + 1);
val__2744 = G__2754;
n__2745 = G__2755;
continue;
}
} else
{return val__2744;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2746.call(this,cicoll,f);
case  3 :
return ci_reduce__2747.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2748.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2756 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2769 = null;
var G__2769__2770 = (function (coll,f){
var this__2757 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2757.a[this__2757.i]),(this__2757.i + 1));
});
var G__2769__2771 = (function (coll,f,start){
var this__2758 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2758.i);
});
G__2769 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2769__2770.call(this,coll,f);
case  3 :
return G__2769__2771.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2769;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2759 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2760 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2773 = null;
var G__2773__2774 = (function (coll,n){
var this__2761 = this;
var i__2762 = (n + this__2761.i);

if(cljs.core.truth_((i__2762 < this__2761.a.length)))
{return (this__2761.a[i__2762]);
} else
{return null;
}
});
var G__2773__2775 = (function (coll,n,not_found){
var this__2763 = this;
var i__2764 = (n + this__2763.i);

if(cljs.core.truth_((i__2764 < this__2763.a.length)))
{return (this__2763.a[i__2764]);
} else
{return not_found;
}
});
G__2773 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2773__2774.call(this,coll,n);
case  3 :
return G__2773__2775.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2773;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2765 = this;
return (this__2765.a.length - this__2765.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2766 = this;
return (this__2766.a[this__2766.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2767 = this;
if(cljs.core.truth_(((this__2767.i + 1) < this__2767.a.length)))
{return (new cljs.core.IndexedSeq(this__2767.a,(this__2767.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2768 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2777 = null;
var G__2777__2778 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2777__2779 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2777 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2777__2778.call(this,array,f);
case  3 :
return G__2777__2779.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2777;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2781 = null;
var G__2781__2782 = (function (array,k){
return (array[k]);
});
var G__2781__2783 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2781 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2781__2782.call(this,array,k);
case  3 :
return G__2781__2783.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2781;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2785 = null;
var G__2785__2786 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2785__2787 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2785 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2785__2786.call(this,array,n);
case  3 :
return G__2785__2787.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2785;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2789 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2789))
{var s__2790 = temp__3698__auto____2789;

return cljs.core._first.call(null,s__2790);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2791 = cljs.core.next.call(null,s);
s = G__2791;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2792 = cljs.core.seq.call(null,x);
var n__2793 = 0;

while(true){
if(cljs.core.truth_(s__2792))
{{
var G__2794 = cljs.core.next.call(null,s__2792);
var G__2795 = (n__2793 + 1);
s__2792 = G__2794;
n__2793 = G__2795;
continue;
}
} else
{return n__2793;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2796 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2797 = (function() { 
var G__2799__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2800 = conj.call(null,coll,x);
var G__2801 = cljs.core.first.call(null,xs);
var G__2802 = cljs.core.next.call(null,xs);
coll = G__2800;
x = G__2801;
xs = G__2802;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2799 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2799__delegate.call(this, coll, x, xs);
};
G__2799.cljs$lang$maxFixedArity = 2;
G__2799.cljs$lang$applyTo = (function (arglist__2803){
var coll = cljs.core.first(arglist__2803);
var x = cljs.core.first(cljs.core.next(arglist__2803));
var xs = cljs.core.rest(cljs.core.next(arglist__2803));
return G__2799__delegate.call(this, coll, x, xs);
});
return G__2799;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2796.call(this,coll,x);
default:
return conj__2797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2797.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2804 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2805 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2804.call(this,coll,n);
case  3 :
return nth__2805.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2807 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2808 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2807.call(this,o,k);
case  3 :
return get__2808.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2811 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2812 = (function() { 
var G__2814__delegate = function (coll,k,v,kvs){
while(true){
var ret__2810 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2815 = ret__2810;
var G__2816 = cljs.core.first.call(null,kvs);
var G__2817 = cljs.core.second.call(null,kvs);
var G__2818 = cljs.core.nnext.call(null,kvs);
coll = G__2815;
k = G__2816;
v = G__2817;
kvs = G__2818;
continue;
}
} else
{return ret__2810;
}
break;
}
};
var G__2814 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2814__delegate.call(this, coll, k, v, kvs);
};
G__2814.cljs$lang$maxFixedArity = 3;
G__2814.cljs$lang$applyTo = (function (arglist__2819){
var coll = cljs.core.first(arglist__2819);
var k = cljs.core.first(cljs.core.next(arglist__2819));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2819)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2819)));
return G__2814__delegate.call(this, coll, k, v, kvs);
});
return G__2814;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2811.call(this,coll,k,v);
default:
return assoc__2812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2812.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2821 = (function (coll){
return coll;
});
var dissoc__2822 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2823 = (function() { 
var G__2825__delegate = function (coll,k,ks){
while(true){
var ret__2820 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2826 = ret__2820;
var G__2827 = cljs.core.first.call(null,ks);
var G__2828 = cljs.core.next.call(null,ks);
coll = G__2826;
k = G__2827;
ks = G__2828;
continue;
}
} else
{return ret__2820;
}
break;
}
};
var G__2825 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2825__delegate.call(this, coll, k, ks);
};
G__2825.cljs$lang$maxFixedArity = 2;
G__2825.cljs$lang$applyTo = (function (arglist__2829){
var coll = cljs.core.first(arglist__2829);
var k = cljs.core.first(cljs.core.next(arglist__2829));
var ks = cljs.core.rest(cljs.core.next(arglist__2829));
return G__2825__delegate.call(this, coll, k, ks);
});
return G__2825;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2821.call(this,coll);
case  2 :
return dissoc__2822.call(this,coll,k);
default:
return dissoc__2823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2823.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__314__auto____2830 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2831 = x__314__auto____2830;

if(cljs.core.truth_(and__3546__auto____2831))
{var and__3546__auto____2832 = x__314__auto____2830.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2832))
{return cljs.core.not.call(null,x__314__auto____2830.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2832;
}
} else
{return and__3546__auto____2831;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__314__auto____2830);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2834 = (function (coll){
return coll;
});
var disj__2835 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2836 = (function() { 
var G__2838__delegate = function (coll,k,ks){
while(true){
var ret__2833 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2839 = ret__2833;
var G__2840 = cljs.core.first.call(null,ks);
var G__2841 = cljs.core.next.call(null,ks);
coll = G__2839;
k = G__2840;
ks = G__2841;
continue;
}
} else
{return ret__2833;
}
break;
}
};
var G__2838 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2838__delegate.call(this, coll, k, ks);
};
G__2838.cljs$lang$maxFixedArity = 2;
G__2838.cljs$lang$applyTo = (function (arglist__2842){
var coll = cljs.core.first(arglist__2842);
var k = cljs.core.first(cljs.core.next(arglist__2842));
var ks = cljs.core.rest(cljs.core.next(arglist__2842));
return G__2838__delegate.call(this, coll, k, ks);
});
return G__2838;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2834.call(this,coll);
case  2 :
return disj__2835.call(this,coll,k);
default:
return disj__2836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2836.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2843 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2844 = x__314__auto____2843;

if(cljs.core.truth_(and__3546__auto____2844))
{var and__3546__auto____2845 = x__314__auto____2843.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2845))
{return cljs.core.not.call(null,x__314__auto____2843.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2845;
}
} else
{return and__3546__auto____2844;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__314__auto____2843);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2846 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2847 = x__314__auto____2846;

if(cljs.core.truth_(and__3546__auto____2847))
{var and__3546__auto____2848 = x__314__auto____2846.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2848))
{return cljs.core.not.call(null,x__314__auto____2846.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2848;
}
} else
{return and__3546__auto____2847;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__314__auto____2846);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__314__auto____2849 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2850 = x__314__auto____2849;

if(cljs.core.truth_(and__3546__auto____2850))
{var and__3546__auto____2851 = x__314__auto____2849.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2851))
{return cljs.core.not.call(null,x__314__auto____2849.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2851;
}
} else
{return and__3546__auto____2850;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__314__auto____2849);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__314__auto____2852 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2853 = x__314__auto____2852;

if(cljs.core.truth_(and__3546__auto____2853))
{var and__3546__auto____2854 = x__314__auto____2852.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2854))
{return cljs.core.not.call(null,x__314__auto____2852.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2854;
}
} else
{return and__3546__auto____2853;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__314__auto____2852);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__314__auto____2855 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2856 = x__314__auto____2855;

if(cljs.core.truth_(and__3546__auto____2856))
{var and__3546__auto____2857 = x__314__auto____2855.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2857))
{return cljs.core.not.call(null,x__314__auto____2855.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2857;
}
} else
{return and__3546__auto____2856;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__314__auto____2855);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2858 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2859 = x__314__auto____2858;

if(cljs.core.truth_(and__3546__auto____2859))
{var and__3546__auto____2860 = x__314__auto____2858.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2860))
{return cljs.core.not.call(null,x__314__auto____2858.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2860;
}
} else
{return and__3546__auto____2859;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__314__auto____2858);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__314__auto____2861 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2862 = x__314__auto____2861;

if(cljs.core.truth_(and__3546__auto____2862))
{var and__3546__auto____2863 = x__314__auto____2861.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2863))
{return cljs.core.not.call(null,x__314__auto____2861.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2863;
}
} else
{return and__3546__auto____2862;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__314__auto____2861);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2864 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2864.push(key);
}));
return keys__2864;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__314__auto____2865 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2866 = x__314__auto____2865;

if(cljs.core.truth_(and__3546__auto____2866))
{var and__3546__auto____2867 = x__314__auto____2865.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2867))
{return cljs.core.not.call(null,x__314__auto____2865.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2867;
}
} else
{return and__3546__auto____2866;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__314__auto____2865);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2868 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2868))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2869 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2869))
{return or__3548__auto____2869;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2868;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2870 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2870))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2870;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2871 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2871))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2871;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2872 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2872))
{return (n == n.toFixed());
} else
{return and__3546__auto____2872;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2873 = coll;

if(cljs.core.truth_(and__3546__auto____2873))
{var and__3546__auto____2874 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2874))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2874;
}
} else
{return and__3546__auto____2873;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2879 = (function (x){
return true;
});
var distinct_QMARK___2880 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2881 = (function() { 
var G__2883__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2875 = cljs.core.set([y,x]);
var xs__2876 = more;

while(true){
var x__2877 = cljs.core.first.call(null,xs__2876);
var etc__2878 = cljs.core.next.call(null,xs__2876);

if(cljs.core.truth_(xs__2876))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2875,x__2877)))
{return false;
} else
{{
var G__2884 = cljs.core.conj.call(null,s__2875,x__2877);
var G__2885 = etc__2878;
s__2875 = G__2884;
xs__2876 = G__2885;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2883 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2883__delegate.call(this, x, y, more);
};
G__2883.cljs$lang$maxFixedArity = 2;
G__2883.cljs$lang$applyTo = (function (arglist__2886){
var x = cljs.core.first(arglist__2886);
var y = cljs.core.first(cljs.core.next(arglist__2886));
var more = cljs.core.rest(cljs.core.next(arglist__2886));
return G__2883__delegate.call(this, x, y, more);
});
return G__2883;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2879.call(this,x);
case  2 :
return distinct_QMARK___2880.call(this,x,y);
default:
return distinct_QMARK___2881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2881.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2887 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2887)))
{return r__2887;
} else
{if(cljs.core.truth_(r__2887))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2889 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2890 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2888 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2888,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2888);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2889.call(this,comp);
case  2 :
return sort__2890.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2892 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2893 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2892.call(this,keyfn,comp);
case  3 :
return sort_by__2893.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2895 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2896 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2895.call(this,f,val);
case  3 :
return reduce__2896.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2902 = (function (f,coll){
var temp__3695__auto____2898 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2898))
{var s__2899 = temp__3695__auto____2898;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2899),cljs.core.next.call(null,s__2899));
} else
{return f.call(null);
}
});
var seq_reduce__2903 = (function (f,val,coll){
var val__2900 = val;
var coll__2901 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2901))
{{
var G__2905 = f.call(null,val__2900,cljs.core.first.call(null,coll__2901));
var G__2906 = cljs.core.next.call(null,coll__2901);
val__2900 = G__2905;
coll__2901 = G__2906;
continue;
}
} else
{return val__2900;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2902.call(this,f,val);
case  3 :
return seq_reduce__2903.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2907 = null;
var G__2907__2908 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2907__2909 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2907 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2907__2908.call(this,coll,f);
case  3 :
return G__2907__2909.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2907;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2911 = (function (){
return 0;
});
var _PLUS___2912 = (function (x){
return x;
});
var _PLUS___2913 = (function (x,y){
return (x + y);
});
var _PLUS___2914 = (function() { 
var G__2916__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2916 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2916__delegate.call(this, x, y, more);
};
G__2916.cljs$lang$maxFixedArity = 2;
G__2916.cljs$lang$applyTo = (function (arglist__2917){
var x = cljs.core.first(arglist__2917);
var y = cljs.core.first(cljs.core.next(arglist__2917));
var more = cljs.core.rest(cljs.core.next(arglist__2917));
return G__2916__delegate.call(this, x, y, more);
});
return G__2916;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2911.call(this);
case  1 :
return _PLUS___2912.call(this,x);
case  2 :
return _PLUS___2913.call(this,x,y);
default:
return _PLUS___2914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2914.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2918 = (function (x){
return (- x);
});
var ___2919 = (function (x,y){
return (x - y);
});
var ___2920 = (function() { 
var G__2922__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2922 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2922__delegate.call(this, x, y, more);
};
G__2922.cljs$lang$maxFixedArity = 2;
G__2922.cljs$lang$applyTo = (function (arglist__2923){
var x = cljs.core.first(arglist__2923);
var y = cljs.core.first(cljs.core.next(arglist__2923));
var more = cljs.core.rest(cljs.core.next(arglist__2923));
return G__2922__delegate.call(this, x, y, more);
});
return G__2922;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2918.call(this,x);
case  2 :
return ___2919.call(this,x,y);
default:
return ___2920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2920.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2924 = (function (){
return 1;
});
var _STAR___2925 = (function (x){
return x;
});
var _STAR___2926 = (function (x,y){
return (x * y);
});
var _STAR___2927 = (function() { 
var G__2929__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2929 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2929__delegate.call(this, x, y, more);
};
G__2929.cljs$lang$maxFixedArity = 2;
G__2929.cljs$lang$applyTo = (function (arglist__2930){
var x = cljs.core.first(arglist__2930);
var y = cljs.core.first(cljs.core.next(arglist__2930));
var more = cljs.core.rest(cljs.core.next(arglist__2930));
return G__2929__delegate.call(this, x, y, more);
});
return G__2929;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2924.call(this);
case  1 :
return _STAR___2925.call(this,x);
case  2 :
return _STAR___2926.call(this,x,y);
default:
return _STAR___2927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2927.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2931 = (function (x){
return (1 / x);
});
var _SLASH___2932 = (function (x,y){
return (x / y);
});
var _SLASH___2933 = (function() { 
var G__2935__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2935 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2935__delegate.call(this, x, y, more);
};
G__2935.cljs$lang$maxFixedArity = 2;
G__2935.cljs$lang$applyTo = (function (arglist__2936){
var x = cljs.core.first(arglist__2936);
var y = cljs.core.first(cljs.core.next(arglist__2936));
var more = cljs.core.rest(cljs.core.next(arglist__2936));
return G__2935__delegate.call(this, x, y, more);
});
return G__2935;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2931.call(this,x);
case  2 :
return _SLASH___2932.call(this,x,y);
default:
return _SLASH___2933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2933.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2937 = (function (x){
return true;
});
var _LT___2938 = (function (x,y){
return (x < y);
});
var _LT___2939 = (function() { 
var G__2941__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2942 = y;
var G__2943 = cljs.core.first.call(null,more);
var G__2944 = cljs.core.next.call(null,more);
x = G__2942;
y = G__2943;
more = G__2944;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2941 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2941__delegate.call(this, x, y, more);
};
G__2941.cljs$lang$maxFixedArity = 2;
G__2941.cljs$lang$applyTo = (function (arglist__2945){
var x = cljs.core.first(arglist__2945);
var y = cljs.core.first(cljs.core.next(arglist__2945));
var more = cljs.core.rest(cljs.core.next(arglist__2945));
return G__2941__delegate.call(this, x, y, more);
});
return G__2941;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2937.call(this,x);
case  2 :
return _LT___2938.call(this,x,y);
default:
return _LT___2939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2939.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2946 = (function (x){
return true;
});
var _LT__EQ___2947 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2948 = (function() { 
var G__2950__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2951 = y;
var G__2952 = cljs.core.first.call(null,more);
var G__2953 = cljs.core.next.call(null,more);
x = G__2951;
y = G__2952;
more = G__2953;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2950 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2950__delegate.call(this, x, y, more);
};
G__2950.cljs$lang$maxFixedArity = 2;
G__2950.cljs$lang$applyTo = (function (arglist__2954){
var x = cljs.core.first(arglist__2954);
var y = cljs.core.first(cljs.core.next(arglist__2954));
var more = cljs.core.rest(cljs.core.next(arglist__2954));
return G__2950__delegate.call(this, x, y, more);
});
return G__2950;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2946.call(this,x);
case  2 :
return _LT__EQ___2947.call(this,x,y);
default:
return _LT__EQ___2948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2948.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2955 = (function (x){
return true;
});
var _GT___2956 = (function (x,y){
return (x > y);
});
var _GT___2957 = (function() { 
var G__2959__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2960 = y;
var G__2961 = cljs.core.first.call(null,more);
var G__2962 = cljs.core.next.call(null,more);
x = G__2960;
y = G__2961;
more = G__2962;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2959 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2959__delegate.call(this, x, y, more);
};
G__2959.cljs$lang$maxFixedArity = 2;
G__2959.cljs$lang$applyTo = (function (arglist__2963){
var x = cljs.core.first(arglist__2963);
var y = cljs.core.first(cljs.core.next(arglist__2963));
var more = cljs.core.rest(cljs.core.next(arglist__2963));
return G__2959__delegate.call(this, x, y, more);
});
return G__2959;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2955.call(this,x);
case  2 :
return _GT___2956.call(this,x,y);
default:
return _GT___2957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2957.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2964 = (function (x){
return true;
});
var _GT__EQ___2965 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2966 = (function() { 
var G__2968__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2969 = y;
var G__2970 = cljs.core.first.call(null,more);
var G__2971 = cljs.core.next.call(null,more);
x = G__2969;
y = G__2970;
more = G__2971;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2968__delegate.call(this, x, y, more);
};
G__2968.cljs$lang$maxFixedArity = 2;
G__2968.cljs$lang$applyTo = (function (arglist__2972){
var x = cljs.core.first(arglist__2972);
var y = cljs.core.first(cljs.core.next(arglist__2972));
var more = cljs.core.rest(cljs.core.next(arglist__2972));
return G__2968__delegate.call(this, x, y, more);
});
return G__2968;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2964.call(this,x);
case  2 :
return _GT__EQ___2965.call(this,x,y);
default:
return _GT__EQ___2966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2966.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2973 = (function (x){
return x;
});
var max__2974 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2975 = (function() { 
var G__2977__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2977 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2977__delegate.call(this, x, y, more);
};
G__2977.cljs$lang$maxFixedArity = 2;
G__2977.cljs$lang$applyTo = (function (arglist__2978){
var x = cljs.core.first(arglist__2978);
var y = cljs.core.first(cljs.core.next(arglist__2978));
var more = cljs.core.rest(cljs.core.next(arglist__2978));
return G__2977__delegate.call(this, x, y, more);
});
return G__2977;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2973.call(this,x);
case  2 :
return max__2974.call(this,x,y);
default:
return max__2975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2975.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2979 = (function (x){
return x;
});
var min__2980 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2981 = (function() { 
var G__2983__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2983 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2983__delegate.call(this, x, y, more);
};
G__2983.cljs$lang$maxFixedArity = 2;
G__2983.cljs$lang$applyTo = (function (arglist__2984){
var x = cljs.core.first(arglist__2984);
var y = cljs.core.first(cljs.core.next(arglist__2984));
var more = cljs.core.rest(cljs.core.next(arglist__2984));
return G__2983__delegate.call(this, x, y, more);
});
return G__2983;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2979.call(this,x);
case  2 :
return min__2980.call(this,x,y);
default:
return min__2981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2981.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2985 = (n % d);

return cljs.core.fix.call(null,((n - rem__2985) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2986 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2986));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2987 = (function (){
return Math.random.call(null);
});
var rand__2988 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2987.call(this);
case  1 :
return rand__2988.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2990 = (function (x){
return true;
});
var _EQ__EQ___2991 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2992 = (function() { 
var G__2994__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2995 = y;
var G__2996 = cljs.core.first.call(null,more);
var G__2997 = cljs.core.next.call(null,more);
x = G__2995;
y = G__2996;
more = G__2997;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2994 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2994__delegate.call(this, x, y, more);
};
G__2994.cljs$lang$maxFixedArity = 2;
G__2994.cljs$lang$applyTo = (function (arglist__2998){
var x = cljs.core.first(arglist__2998);
var y = cljs.core.first(cljs.core.next(arglist__2998));
var more = cljs.core.rest(cljs.core.next(arglist__2998));
return G__2994__delegate.call(this, x, y, more);
});
return G__2994;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2990.call(this,x);
case  2 :
return _EQ__EQ___2991.call(this,x,y);
default:
return _EQ__EQ___2992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2992.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2999 = n;
var xs__3000 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3001 = xs__3000;

if(cljs.core.truth_(and__3546__auto____3001))
{return (n__2999 > 0);
} else
{return and__3546__auto____3001;
}
})()))
{{
var G__3002 = (n__2999 - 1);
var G__3003 = cljs.core.next.call(null,xs__3000);
n__2999 = G__3002;
xs__3000 = G__3003;
continue;
}
} else
{return xs__3000;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3008 = null;
var G__3008__3009 = (function (coll,n){
var temp__3695__auto____3004 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3004))
{var xs__3005 = temp__3695__auto____3004;

return cljs.core.first.call(null,xs__3005);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3008__3010 = (function (coll,n,not_found){
var temp__3695__auto____3006 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3006))
{var xs__3007 = temp__3695__auto____3006;

return cljs.core.first.call(null,xs__3007);
} else
{return not_found;
}
});
G__3008 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3008__3009.call(this,coll,n);
case  3 :
return G__3008__3010.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3008;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3012 = (function (){
return "";
});
var str_STAR___3013 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3014 = (function() { 
var G__3016__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3017 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3018 = cljs.core.next.call(null,more);
sb = G__3017;
more = G__3018;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3016 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3016__delegate.call(this, x, ys);
};
G__3016.cljs$lang$maxFixedArity = 1;
G__3016.cljs$lang$applyTo = (function (arglist__3019){
var x = cljs.core.first(arglist__3019);
var ys = cljs.core.rest(arglist__3019);
return G__3016__delegate.call(this, x, ys);
});
return G__3016;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3012.call(this);
case  1 :
return str_STAR___3013.call(this,x);
default:
return str_STAR___3014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3014.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3020 = (function (){
return "";
});
var str__3021 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3022 = (function() { 
var G__3024__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3024 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3024__delegate.call(this, x, ys);
};
G__3024.cljs$lang$maxFixedArity = 1;
G__3024.cljs$lang$applyTo = (function (arglist__3025){
var x = cljs.core.first(arglist__3025);
var ys = cljs.core.rest(arglist__3025);
return G__3024__delegate.call(this, x, ys);
});
return G__3024;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3020.call(this);
case  1 :
return str__3021.call(this,x);
default:
return str__3022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3022.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3026 = (function (s,start){
return s.substring(start);
});
var subs__3027 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3026.call(this,s,start);
case  3 :
return subs__3027.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3029 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__3030 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3029.call(this,ns);
case  2 :
return symbol__3030.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3032 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__3033 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3032.call(this,ns);
case  2 :
return keyword__3033.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3035 = cljs.core.seq.call(null,x);
var ys__3036 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3035)))
{return cljs.core.nil_QMARK_.call(null,ys__3036);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3036)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3035),cljs.core.first.call(null,ys__3036))))
{{
var G__3037 = cljs.core.next.call(null,xs__3035);
var G__3038 = cljs.core.next.call(null,ys__3036);
xs__3035 = G__3037;
ys__3036 = G__3038;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3039_SHARP_,p2__3040_SHARP_){
return cljs.core.hash_combine.call(null,p1__3039_SHARP_,cljs.core.hash.call(null,p2__3040_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3041__3042 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3041__3042))
{var G__3044__3046 = cljs.core.first.call(null,G__3041__3042);
var vec__3045__3047 = G__3044__3046;
var key_name__3048 = cljs.core.nth.call(null,vec__3045__3047,0,null);
var f__3049 = cljs.core.nth.call(null,vec__3045__3047,1,null);
var G__3041__3050 = G__3041__3042;

var G__3044__3051 = G__3044__3046;
var G__3041__3052 = G__3041__3050;

while(true){
var vec__3053__3054 = G__3044__3051;
var key_name__3055 = cljs.core.nth.call(null,vec__3053__3054,0,null);
var f__3056 = cljs.core.nth.call(null,vec__3053__3054,1,null);
var G__3041__3057 = G__3041__3052;

var str_name__3058 = cljs.core.name.call(null,key_name__3055);

obj[str_name__3058] = f__3056;
var temp__3698__auto____3059 = cljs.core.next.call(null,G__3041__3057);

if(cljs.core.truth_(temp__3698__auto____3059))
{var G__3041__3060 = temp__3698__auto____3059;

{
var G__3061 = cljs.core.first.call(null,G__3041__3060);
var G__3062 = G__3041__3060;
G__3044__3051 = G__3061;
G__3041__3052 = G__3062;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3063 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3064 = this;
return (new cljs.core.List(this__3064.meta,o,coll,(this__3064.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3065 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3066 = this;
return this__3066.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3067 = this;
return this__3067.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3068 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3069 = this;
return this__3069.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3070 = this;
return this__3070.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3071 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3072 = this;
return (new cljs.core.List(meta,this__3072.first,this__3072.rest,this__3072.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3073 = this;
return this__3073.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3074 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3075 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3076 = this;
return (new cljs.core.List(this__3076.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3077 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3078 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3079 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3080 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3081 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3082 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3084 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3085 = this;
return this__3085.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3086 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3087){
var items = cljs.core.seq( arglist__3087 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3088 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3089 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3090 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3091 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3091.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3092 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3093 = this;
return this__3093.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3094 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3094.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3094.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3095 = this;
return this__3095.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3096 = this;
return (new cljs.core.Cons(meta,this__3096.first,this__3096.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3097 = null;
var G__3097__3098 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3097__3099 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3097 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3097__3098.call(this,string,f);
case  3 :
return G__3097__3099.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3097;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3101 = null;
var G__3101__3102 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3101__3103 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3101 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3101__3102.call(this,string,k);
case  3 :
return G__3101__3103.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3101;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3105 = null;
var G__3105__3106 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3105__3107 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3105 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3105__3106.call(this,string,n);
case  3 :
return G__3105__3107.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3105;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__3109 = null;
var G__3109__3110 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3109__3111 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3109 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3109__3110.call(this,_,coll);
case  3 :
return G__3109__3111.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3109;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3113 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3113;
} else
{lazy_seq.x = x__3113.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3114 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3115 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3116 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3117 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3117.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3118 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3119 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3120 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3121 = this;
return this__3121.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3122 = this;
return (new cljs.core.LazySeq(meta,this__3122.realized,this__3122.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3123 = cljs.core.array.call(null);

var s__3124 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3124)))
{ary__3123.push(cljs.core.first.call(null,s__3124));
{
var G__3125 = cljs.core.next.call(null,s__3124);
s__3124 = G__3125;
continue;
}
} else
{return ary__3123;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3126 = s;
var i__3127 = n;
var sum__3128 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3129 = (i__3127 > 0);

if(cljs.core.truth_(and__3546__auto____3129))
{return cljs.core.seq.call(null,s__3126);
} else
{return and__3546__auto____3129;
}
})()))
{{
var G__3130 = cljs.core.next.call(null,s__3126);
var G__3131 = (i__3127 - 1);
var G__3132 = (sum__3128 + 1);
s__3126 = G__3130;
i__3127 = G__3131;
sum__3128 = G__3132;
continue;
}
} else
{return sum__3128;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3136 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3137 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3138 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3133 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3133))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3133),concat.call(null,cljs.core.rest.call(null,s__3133),y));
} else
{return y;
}
})));
});
var concat__3139 = (function() { 
var G__3141__delegate = function (x,y,zs){
var cat__3135 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3134 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3134))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3134),cat.call(null,cljs.core.rest.call(null,xys__3134),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3135.call(null,concat.call(null,x,y),zs);
};
var G__3141 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3141__delegate.call(this, x, y, zs);
};
G__3141.cljs$lang$maxFixedArity = 2;
G__3141.cljs$lang$applyTo = (function (arglist__3142){
var x = cljs.core.first(arglist__3142);
var y = cljs.core.first(cljs.core.next(arglist__3142));
var zs = cljs.core.rest(cljs.core.next(arglist__3142));
return G__3141__delegate.call(this, x, y, zs);
});
return G__3141;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3136.call(this);
case  1 :
return concat__3137.call(this,x);
case  2 :
return concat__3138.call(this,x,y);
default:
return concat__3139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3139.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3143 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3144 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3145 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3146 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3147 = (function() { 
var G__3149__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3149 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3149__delegate.call(this, a, b, c, d, more);
};
G__3149.cljs$lang$maxFixedArity = 4;
G__3149.cljs$lang$applyTo = (function (arglist__3150){
var a = cljs.core.first(arglist__3150);
var b = cljs.core.first(cljs.core.next(arglist__3150));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3150)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3150))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3150))));
return G__3149__delegate.call(this, a, b, c, d, more);
});
return G__3149;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3143.call(this,a);
case  2 :
return list_STAR___3144.call(this,a,b);
case  3 :
return list_STAR___3145.call(this,a,b,c);
case  4 :
return list_STAR___3146.call(this,a,b,c,d);
default:
return list_STAR___3147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3147.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3160 = (function (f,args){
var fixed_arity__3151 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3151 + 1)) <= fixed_arity__3151)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3161 = (function (f,x,args){
var arglist__3152 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3153 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3152,fixed_arity__3153) <= fixed_arity__3153)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3152));
} else
{return f.cljs$lang$applyTo(arglist__3152);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3152));
}
});
var apply__3162 = (function (f,x,y,args){
var arglist__3154 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3155 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3154,fixed_arity__3155) <= fixed_arity__3155)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3154));
} else
{return f.cljs$lang$applyTo(arglist__3154);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3154));
}
});
var apply__3163 = (function (f,x,y,z,args){
var arglist__3156 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3157 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3156,fixed_arity__3157) <= fixed_arity__3157)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3156));
} else
{return f.cljs$lang$applyTo(arglist__3156);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3156));
}
});
var apply__3164 = (function() { 
var G__3166__delegate = function (f,a,b,c,d,args){
var arglist__3158 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3159 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3158,fixed_arity__3159) <= fixed_arity__3159)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3158));
} else
{return f.cljs$lang$applyTo(arglist__3158);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3158));
}
};
var G__3166 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3166__delegate.call(this, f, a, b, c, d, args);
};
G__3166.cljs$lang$maxFixedArity = 5;
G__3166.cljs$lang$applyTo = (function (arglist__3167){
var f = cljs.core.first(arglist__3167);
var a = cljs.core.first(cljs.core.next(arglist__3167));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3167)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3167))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3167)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3167)))));
return G__3166__delegate.call(this, f, a, b, c, d, args);
});
return G__3166;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3160.call(this,f,a);
case  3 :
return apply__3161.call(this,f,a,b);
case  4 :
return apply__3162.call(this,f,a,b,c);
case  5 :
return apply__3163.call(this,f,a,b,c,d);
default:
return apply__3164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3164.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3168){
var obj = cljs.core.first(arglist__3168);
var f = cljs.core.first(cljs.core.next(arglist__3168));
var args = cljs.core.rest(cljs.core.next(arglist__3168));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3169 = (function (x){
return false;
});
var not_EQ___3170 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3171 = (function() { 
var G__3173__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3173 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3173__delegate.call(this, x, y, more);
};
G__3173.cljs$lang$maxFixedArity = 2;
G__3173.cljs$lang$applyTo = (function (arglist__3174){
var x = cljs.core.first(arglist__3174);
var y = cljs.core.first(cljs.core.next(arglist__3174));
var more = cljs.core.rest(cljs.core.next(arglist__3174));
return G__3173__delegate.call(this, x, y, more);
});
return G__3173;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3169.call(this,x);
case  2 :
return not_EQ___3170.call(this,x,y);
default:
return not_EQ___3171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3171.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3175 = pred;
var G__3176 = cljs.core.next.call(null,coll);
pred = G__3175;
coll = G__3176;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3177 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{{
var G__3178 = pred;
var G__3179 = cljs.core.next.call(null,coll);
pred = G__3178;
coll = G__3179;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3180 = null;
var G__3180__3181 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3180__3182 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3180__3183 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3180__3184 = (function() { 
var G__3186__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3186 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3186__delegate.call(this, x, y, zs);
};
G__3186.cljs$lang$maxFixedArity = 2;
G__3186.cljs$lang$applyTo = (function (arglist__3187){
var x = cljs.core.first(arglist__3187);
var y = cljs.core.first(cljs.core.next(arglist__3187));
var zs = cljs.core.rest(cljs.core.next(arglist__3187));
return G__3186__delegate.call(this, x, y, zs);
});
return G__3186;
})()
;
G__3180 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3180__3181.call(this);
case  1 :
return G__3180__3182.call(this,x);
case  2 :
return G__3180__3183.call(this,x,y);
default:
return G__3180__3184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3180.cljs$lang$maxFixedArity = 2;
G__3180.cljs$lang$applyTo = G__3180__3184.cljs$lang$applyTo;
return G__3180;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3188__delegate = function (args){
return x;
};
var G__3188 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3188__delegate.call(this, args);
};
G__3188.cljs$lang$maxFixedArity = 0;
G__3188.cljs$lang$applyTo = (function (arglist__3189){
var args = cljs.core.seq( arglist__3189 );;
return G__3188__delegate.call(this, args);
});
return G__3188;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3193 = (function (){
return cljs.core.identity;
});
var comp__3194 = (function (f){
return f;
});
var comp__3195 = (function (f,g){
return (function() {
var G__3199 = null;
var G__3199__3200 = (function (){
return f.call(null,g.call(null));
});
var G__3199__3201 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3199__3202 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3199__3203 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3199__3204 = (function() { 
var G__3206__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3206 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3206__delegate.call(this, x, y, z, args);
};
G__3206.cljs$lang$maxFixedArity = 3;
G__3206.cljs$lang$applyTo = (function (arglist__3207){
var x = cljs.core.first(arglist__3207);
var y = cljs.core.first(cljs.core.next(arglist__3207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3207)));
return G__3206__delegate.call(this, x, y, z, args);
});
return G__3206;
})()
;
G__3199 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3199__3200.call(this);
case  1 :
return G__3199__3201.call(this,x);
case  2 :
return G__3199__3202.call(this,x,y);
case  3 :
return G__3199__3203.call(this,x,y,z);
default:
return G__3199__3204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3199.cljs$lang$maxFixedArity = 3;
G__3199.cljs$lang$applyTo = G__3199__3204.cljs$lang$applyTo;
return G__3199;
})()
});
var comp__3196 = (function (f,g,h){
return (function() {
var G__3208 = null;
var G__3208__3209 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3208__3210 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3208__3211 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3208__3212 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3208__3213 = (function() { 
var G__3215__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3215__delegate.call(this, x, y, z, args);
};
G__3215.cljs$lang$maxFixedArity = 3;
G__3215.cljs$lang$applyTo = (function (arglist__3216){
var x = cljs.core.first(arglist__3216);
var y = cljs.core.first(cljs.core.next(arglist__3216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3216)));
return G__3215__delegate.call(this, x, y, z, args);
});
return G__3215;
})()
;
G__3208 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3208__3209.call(this);
case  1 :
return G__3208__3210.call(this,x);
case  2 :
return G__3208__3211.call(this,x,y);
case  3 :
return G__3208__3212.call(this,x,y,z);
default:
return G__3208__3213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3208.cljs$lang$maxFixedArity = 3;
G__3208.cljs$lang$applyTo = G__3208__3213.cljs$lang$applyTo;
return G__3208;
})()
});
var comp__3197 = (function() { 
var G__3217__delegate = function (f1,f2,f3,fs){
var fs__3190 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3218__delegate = function (args){
var ret__3191 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3190),args);
var fs__3192 = cljs.core.next.call(null,fs__3190);

while(true){
if(cljs.core.truth_(fs__3192))
{{
var G__3219 = cljs.core.first.call(null,fs__3192).call(null,ret__3191);
var G__3220 = cljs.core.next.call(null,fs__3192);
ret__3191 = G__3219;
fs__3192 = G__3220;
continue;
}
} else
{return ret__3191;
}
break;
}
};
var G__3218 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3218__delegate.call(this, args);
};
G__3218.cljs$lang$maxFixedArity = 0;
G__3218.cljs$lang$applyTo = (function (arglist__3221){
var args = cljs.core.seq( arglist__3221 );;
return G__3218__delegate.call(this, args);
});
return G__3218;
})()
;
};
var G__3217 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3217__delegate.call(this, f1, f2, f3, fs);
};
G__3217.cljs$lang$maxFixedArity = 3;
G__3217.cljs$lang$applyTo = (function (arglist__3222){
var f1 = cljs.core.first(arglist__3222);
var f2 = cljs.core.first(cljs.core.next(arglist__3222));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3222)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3222)));
return G__3217__delegate.call(this, f1, f2, f3, fs);
});
return G__3217;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3193.call(this);
case  1 :
return comp__3194.call(this,f1);
case  2 :
return comp__3195.call(this,f1,f2);
case  3 :
return comp__3196.call(this,f1,f2,f3);
default:
return comp__3197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3197.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3223 = (function (f,arg1){
return (function() { 
var G__3228__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3228 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3228__delegate.call(this, args);
};
G__3228.cljs$lang$maxFixedArity = 0;
G__3228.cljs$lang$applyTo = (function (arglist__3229){
var args = cljs.core.seq( arglist__3229 );;
return G__3228__delegate.call(this, args);
});
return G__3228;
})()
;
});
var partial__3224 = (function (f,arg1,arg2){
return (function() { 
var G__3230__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3230 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3230__delegate.call(this, args);
};
G__3230.cljs$lang$maxFixedArity = 0;
G__3230.cljs$lang$applyTo = (function (arglist__3231){
var args = cljs.core.seq( arglist__3231 );;
return G__3230__delegate.call(this, args);
});
return G__3230;
})()
;
});
var partial__3225 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3232__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3232 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3232__delegate.call(this, args);
};
G__3232.cljs$lang$maxFixedArity = 0;
G__3232.cljs$lang$applyTo = (function (arglist__3233){
var args = cljs.core.seq( arglist__3233 );;
return G__3232__delegate.call(this, args);
});
return G__3232;
})()
;
});
var partial__3226 = (function() { 
var G__3234__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3235__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3235 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3235__delegate.call(this, args);
};
G__3235.cljs$lang$maxFixedArity = 0;
G__3235.cljs$lang$applyTo = (function (arglist__3236){
var args = cljs.core.seq( arglist__3236 );;
return G__3235__delegate.call(this, args);
});
return G__3235;
})()
;
};
var G__3234 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3234__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3234.cljs$lang$maxFixedArity = 4;
G__3234.cljs$lang$applyTo = (function (arglist__3237){
var f = cljs.core.first(arglist__3237);
var arg1 = cljs.core.first(cljs.core.next(arglist__3237));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3237)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3237))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3237))));
return G__3234__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3234;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3223.call(this,f,arg1);
case  3 :
return partial__3224.call(this,f,arg1,arg2);
case  4 :
return partial__3225.call(this,f,arg1,arg2,arg3);
default:
return partial__3226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3226.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3238 = (function (f,x){
return (function() {
var G__3242 = null;
var G__3242__3243 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3242__3244 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3242__3245 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3242__3246 = (function() { 
var G__3248__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3248 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3248__delegate.call(this, a, b, c, ds);
};
G__3248.cljs$lang$maxFixedArity = 3;
G__3248.cljs$lang$applyTo = (function (arglist__3249){
var a = cljs.core.first(arglist__3249);
var b = cljs.core.first(cljs.core.next(arglist__3249));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3249)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3249)));
return G__3248__delegate.call(this, a, b, c, ds);
});
return G__3248;
})()
;
G__3242 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3242__3243.call(this,a);
case  2 :
return G__3242__3244.call(this,a,b);
case  3 :
return G__3242__3245.call(this,a,b,c);
default:
return G__3242__3246.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3242.cljs$lang$maxFixedArity = 3;
G__3242.cljs$lang$applyTo = G__3242__3246.cljs$lang$applyTo;
return G__3242;
})()
});
var fnil__3239 = (function (f,x,y){
return (function() {
var G__3250 = null;
var G__3250__3251 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3250__3252 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3250__3253 = (function() { 
var G__3255__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3255 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3255__delegate.call(this, a, b, c, ds);
};
G__3255.cljs$lang$maxFixedArity = 3;
G__3255.cljs$lang$applyTo = (function (arglist__3256){
var a = cljs.core.first(arglist__3256);
var b = cljs.core.first(cljs.core.next(arglist__3256));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3256)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3256)));
return G__3255__delegate.call(this, a, b, c, ds);
});
return G__3255;
})()
;
G__3250 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3250__3251.call(this,a,b);
case  3 :
return G__3250__3252.call(this,a,b,c);
default:
return G__3250__3253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3250.cljs$lang$maxFixedArity = 3;
G__3250.cljs$lang$applyTo = G__3250__3253.cljs$lang$applyTo;
return G__3250;
})()
});
var fnil__3240 = (function (f,x,y,z){
return (function() {
var G__3257 = null;
var G__3257__3258 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3257__3259 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3257__3260 = (function() { 
var G__3262__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3262 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3262__delegate.call(this, a, b, c, ds);
};
G__3262.cljs$lang$maxFixedArity = 3;
G__3262.cljs$lang$applyTo = (function (arglist__3263){
var a = cljs.core.first(arglist__3263);
var b = cljs.core.first(cljs.core.next(arglist__3263));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3263)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3263)));
return G__3262__delegate.call(this, a, b, c, ds);
});
return G__3262;
})()
;
G__3257 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3257__3258.call(this,a,b);
case  3 :
return G__3257__3259.call(this,a,b,c);
default:
return G__3257__3260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3257.cljs$lang$maxFixedArity = 3;
G__3257.cljs$lang$applyTo = G__3257__3260.cljs$lang$applyTo;
return G__3257;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3238.call(this,f,x);
case  3 :
return fnil__3239.call(this,f,x,y);
case  4 :
return fnil__3240.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3266 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3264 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3264))
{var s__3265 = temp__3698__auto____3264;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3265)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3265)));
} else
{return null;
}
})));
});

return mapi__3266.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3267))
{var s__3268 = temp__3698__auto____3267;

var x__3269 = f.call(null,cljs.core.first.call(null,s__3268));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3269)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3268));
} else
{return cljs.core.cons.call(null,x__3269,keep.call(null,f,cljs.core.rest.call(null,s__3268)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3279 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3276 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3276))
{var s__3277 = temp__3698__auto____3276;

var x__3278 = f.call(null,idx,cljs.core.first.call(null,s__3277));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3278)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3277));
} else
{return cljs.core.cons.call(null,x__3278,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3277)));
}
} else
{return null;
}
})));
});

return keepi__3279.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3324 = (function (p){
return (function() {
var ep1 = null;
var ep1__3329 = (function (){
return true;
});
var ep1__3330 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3331 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3286 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3286))
{return p.call(null,y);
} else
{return and__3546__auto____3286;
}
})());
});
var ep1__3332 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3287 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3287))
{var and__3546__auto____3288 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3288))
{return p.call(null,z);
} else
{return and__3546__auto____3288;
}
} else
{return and__3546__auto____3287;
}
})());
});
var ep1__3333 = (function() { 
var G__3335__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3289 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3289))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3289;
}
})());
};
var G__3335 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3335__delegate.call(this, x, y, z, args);
};
G__3335.cljs$lang$maxFixedArity = 3;
G__3335.cljs$lang$applyTo = (function (arglist__3336){
var x = cljs.core.first(arglist__3336);
var y = cljs.core.first(cljs.core.next(arglist__3336));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3336)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3336)));
return G__3335__delegate.call(this, x, y, z, args);
});
return G__3335;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3329.call(this);
case  1 :
return ep1__3330.call(this,x);
case  2 :
return ep1__3331.call(this,x,y);
case  3 :
return ep1__3332.call(this,x,y,z);
default:
return ep1__3333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3333.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3325 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3337 = (function (){
return true;
});
var ep2__3338 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3290 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3290))
{return p2.call(null,x);
} else
{return and__3546__auto____3290;
}
})());
});
var ep2__3339 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3291 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3291))
{var and__3546__auto____3292 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3292))
{var and__3546__auto____3293 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3293))
{return p2.call(null,y);
} else
{return and__3546__auto____3293;
}
} else
{return and__3546__auto____3292;
}
} else
{return and__3546__auto____3291;
}
})());
});
var ep2__3340 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3294 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3294))
{var and__3546__auto____3295 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3295))
{var and__3546__auto____3296 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3296))
{var and__3546__auto____3297 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3297))
{var and__3546__auto____3298 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3298))
{return p2.call(null,z);
} else
{return and__3546__auto____3298;
}
} else
{return and__3546__auto____3297;
}
} else
{return and__3546__auto____3296;
}
} else
{return and__3546__auto____3295;
}
} else
{return and__3546__auto____3294;
}
})());
});
var ep2__3341 = (function() { 
var G__3343__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3299 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3299))
{return cljs.core.every_QMARK_.call(null,(function (p1__3270_SHARP_){
var and__3546__auto____3300 = p1.call(null,p1__3270_SHARP_);

if(cljs.core.truth_(and__3546__auto____3300))
{return p2.call(null,p1__3270_SHARP_);
} else
{return and__3546__auto____3300;
}
}),args);
} else
{return and__3546__auto____3299;
}
})());
};
var G__3343 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3343__delegate.call(this, x, y, z, args);
};
G__3343.cljs$lang$maxFixedArity = 3;
G__3343.cljs$lang$applyTo = (function (arglist__3344){
var x = cljs.core.first(arglist__3344);
var y = cljs.core.first(cljs.core.next(arglist__3344));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3344)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3344)));
return G__3343__delegate.call(this, x, y, z, args);
});
return G__3343;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3337.call(this);
case  1 :
return ep2__3338.call(this,x);
case  2 :
return ep2__3339.call(this,x,y);
case  3 :
return ep2__3340.call(this,x,y,z);
default:
return ep2__3341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3341.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3326 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3345 = (function (){
return true;
});
var ep3__3346 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3301 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3301))
{var and__3546__auto____3302 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3302))
{return p3.call(null,x);
} else
{return and__3546__auto____3302;
}
} else
{return and__3546__auto____3301;
}
})());
});
var ep3__3347 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3303 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3303))
{var and__3546__auto____3304 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3304))
{var and__3546__auto____3305 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3305))
{var and__3546__auto____3306 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3306))
{var and__3546__auto____3307 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3307))
{return p3.call(null,y);
} else
{return and__3546__auto____3307;
}
} else
{return and__3546__auto____3306;
}
} else
{return and__3546__auto____3305;
}
} else
{return and__3546__auto____3304;
}
} else
{return and__3546__auto____3303;
}
})());
});
var ep3__3348 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3308 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3308))
{var and__3546__auto____3309 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3309))
{var and__3546__auto____3310 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3310))
{var and__3546__auto____3311 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3311))
{var and__3546__auto____3312 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3312))
{var and__3546__auto____3313 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3313))
{var and__3546__auto____3314 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3314))
{var and__3546__auto____3315 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3315))
{return p3.call(null,z);
} else
{return and__3546__auto____3315;
}
} else
{return and__3546__auto____3314;
}
} else
{return and__3546__auto____3313;
}
} else
{return and__3546__auto____3312;
}
} else
{return and__3546__auto____3311;
}
} else
{return and__3546__auto____3310;
}
} else
{return and__3546__auto____3309;
}
} else
{return and__3546__auto____3308;
}
})());
});
var ep3__3349 = (function() { 
var G__3351__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3316 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3316))
{return cljs.core.every_QMARK_.call(null,(function (p1__3271_SHARP_){
var and__3546__auto____3317 = p1.call(null,p1__3271_SHARP_);

if(cljs.core.truth_(and__3546__auto____3317))
{var and__3546__auto____3318 = p2.call(null,p1__3271_SHARP_);

if(cljs.core.truth_(and__3546__auto____3318))
{return p3.call(null,p1__3271_SHARP_);
} else
{return and__3546__auto____3318;
}
} else
{return and__3546__auto____3317;
}
}),args);
} else
{return and__3546__auto____3316;
}
})());
};
var G__3351 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3351__delegate.call(this, x, y, z, args);
};
G__3351.cljs$lang$maxFixedArity = 3;
G__3351.cljs$lang$applyTo = (function (arglist__3352){
var x = cljs.core.first(arglist__3352);
var y = cljs.core.first(cljs.core.next(arglist__3352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3352)));
return G__3351__delegate.call(this, x, y, z, args);
});
return G__3351;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3345.call(this);
case  1 :
return ep3__3346.call(this,x);
case  2 :
return ep3__3347.call(this,x,y);
case  3 :
return ep3__3348.call(this,x,y,z);
default:
return ep3__3349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3349.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3327 = (function() { 
var G__3353__delegate = function (p1,p2,p3,ps){
var ps__3319 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3354 = (function (){
return true;
});
var epn__3355 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3272_SHARP_){
return p1__3272_SHARP_.call(null,x);
}),ps__3319);
});
var epn__3356 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3273_SHARP_){
var and__3546__auto____3320 = p1__3273_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3320))
{return p1__3273_SHARP_.call(null,y);
} else
{return and__3546__auto____3320;
}
}),ps__3319);
});
var epn__3357 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3274_SHARP_){
var and__3546__auto____3321 = p1__3274_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3321))
{var and__3546__auto____3322 = p1__3274_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3322))
{return p1__3274_SHARP_.call(null,z);
} else
{return and__3546__auto____3322;
}
} else
{return and__3546__auto____3321;
}
}),ps__3319);
});
var epn__3358 = (function() { 
var G__3360__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3323 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3323))
{return cljs.core.every_QMARK_.call(null,(function (p1__3275_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3275_SHARP_,args);
}),ps__3319);
} else
{return and__3546__auto____3323;
}
})());
};
var G__3360 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3360__delegate.call(this, x, y, z, args);
};
G__3360.cljs$lang$maxFixedArity = 3;
G__3360.cljs$lang$applyTo = (function (arglist__3361){
var x = cljs.core.first(arglist__3361);
var y = cljs.core.first(cljs.core.next(arglist__3361));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3361)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3361)));
return G__3360__delegate.call(this, x, y, z, args);
});
return G__3360;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3354.call(this);
case  1 :
return epn__3355.call(this,x);
case  2 :
return epn__3356.call(this,x,y);
case  3 :
return epn__3357.call(this,x,y,z);
default:
return epn__3358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3358.cljs$lang$applyTo;
return epn;
})()
};
var G__3353 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3353__delegate.call(this, p1, p2, p3, ps);
};
G__3353.cljs$lang$maxFixedArity = 3;
G__3353.cljs$lang$applyTo = (function (arglist__3362){
var p1 = cljs.core.first(arglist__3362);
var p2 = cljs.core.first(cljs.core.next(arglist__3362));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3362)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3362)));
return G__3353__delegate.call(this, p1, p2, p3, ps);
});
return G__3353;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3324.call(this,p1);
case  2 :
return every_pred__3325.call(this,p1,p2);
case  3 :
return every_pred__3326.call(this,p1,p2,p3);
default:
return every_pred__3327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3327.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3402 = (function (p){
return (function() {
var sp1 = null;
var sp1__3407 = (function (){
return null;
});
var sp1__3408 = (function (x){
return p.call(null,x);
});
var sp1__3409 = (function (x,y){
var or__3548__auto____3364 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3364))
{return or__3548__auto____3364;
} else
{return p.call(null,y);
}
});
var sp1__3410 = (function (x,y,z){
var or__3548__auto____3365 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3365))
{return or__3548__auto____3365;
} else
{var or__3548__auto____3366 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3366))
{return or__3548__auto____3366;
} else
{return p.call(null,z);
}
}
});
var sp1__3411 = (function() { 
var G__3413__delegate = function (x,y,z,args){
var or__3548__auto____3367 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3367))
{return or__3548__auto____3367;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3413__delegate.call(this, x, y, z, args);
};
G__3413.cljs$lang$maxFixedArity = 3;
G__3413.cljs$lang$applyTo = (function (arglist__3414){
var x = cljs.core.first(arglist__3414);
var y = cljs.core.first(cljs.core.next(arglist__3414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3414)));
return G__3413__delegate.call(this, x, y, z, args);
});
return G__3413;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3407.call(this);
case  1 :
return sp1__3408.call(this,x);
case  2 :
return sp1__3409.call(this,x,y);
case  3 :
return sp1__3410.call(this,x,y,z);
default:
return sp1__3411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3411.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3403 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3415 = (function (){
return null;
});
var sp2__3416 = (function (x){
var or__3548__auto____3368 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3368))
{return or__3548__auto____3368;
} else
{return p2.call(null,x);
}
});
var sp2__3417 = (function (x,y){
var or__3548__auto____3369 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3369))
{return or__3548__auto____3369;
} else
{var or__3548__auto____3370 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3370))
{return or__3548__auto____3370;
} else
{var or__3548__auto____3371 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3371))
{return or__3548__auto____3371;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3418 = (function (x,y,z){
var or__3548__auto____3372 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3372))
{return or__3548__auto____3372;
} else
{var or__3548__auto____3373 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3373))
{return or__3548__auto____3373;
} else
{var or__3548__auto____3374 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3374))
{return or__3548__auto____3374;
} else
{var or__3548__auto____3375 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3375))
{return or__3548__auto____3375;
} else
{var or__3548__auto____3376 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3376))
{return or__3548__auto____3376;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3419 = (function() { 
var G__3421__delegate = function (x,y,z,args){
var or__3548__auto____3377 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3377))
{return or__3548__auto____3377;
} else
{return cljs.core.some.call(null,(function (p1__3280_SHARP_){
var or__3548__auto____3378 = p1.call(null,p1__3280_SHARP_);

if(cljs.core.truth_(or__3548__auto____3378))
{return or__3548__auto____3378;
} else
{return p2.call(null,p1__3280_SHARP_);
}
}),args);
}
};
var G__3421 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3421__delegate.call(this, x, y, z, args);
};
G__3421.cljs$lang$maxFixedArity = 3;
G__3421.cljs$lang$applyTo = (function (arglist__3422){
var x = cljs.core.first(arglist__3422);
var y = cljs.core.first(cljs.core.next(arglist__3422));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3422)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3422)));
return G__3421__delegate.call(this, x, y, z, args);
});
return G__3421;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3415.call(this);
case  1 :
return sp2__3416.call(this,x);
case  2 :
return sp2__3417.call(this,x,y);
case  3 :
return sp2__3418.call(this,x,y,z);
default:
return sp2__3419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3419.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3404 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3423 = (function (){
return null;
});
var sp3__3424 = (function (x){
var or__3548__auto____3379 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3379))
{return or__3548__auto____3379;
} else
{var or__3548__auto____3380 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3380))
{return or__3548__auto____3380;
} else
{return p3.call(null,x);
}
}
});
var sp3__3425 = (function (x,y){
var or__3548__auto____3381 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3381))
{return or__3548__auto____3381;
} else
{var or__3548__auto____3382 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3382))
{return or__3548__auto____3382;
} else
{var or__3548__auto____3383 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3383))
{return or__3548__auto____3383;
} else
{var or__3548__auto____3384 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3384))
{return or__3548__auto____3384;
} else
{var or__3548__auto____3385 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3385))
{return or__3548__auto____3385;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3426 = (function (x,y,z){
var or__3548__auto____3386 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3386))
{return or__3548__auto____3386;
} else
{var or__3548__auto____3387 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3387))
{return or__3548__auto____3387;
} else
{var or__3548__auto____3388 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3388))
{return or__3548__auto____3388;
} else
{var or__3548__auto____3389 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3389))
{return or__3548__auto____3389;
} else
{var or__3548__auto____3390 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3390))
{return or__3548__auto____3390;
} else
{var or__3548__auto____3391 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3391))
{return or__3548__auto____3391;
} else
{var or__3548__auto____3392 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3392))
{return or__3548__auto____3392;
} else
{var or__3548__auto____3393 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3393))
{return or__3548__auto____3393;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3427 = (function() { 
var G__3429__delegate = function (x,y,z,args){
var or__3548__auto____3394 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3394))
{return or__3548__auto____3394;
} else
{return cljs.core.some.call(null,(function (p1__3281_SHARP_){
var or__3548__auto____3395 = p1.call(null,p1__3281_SHARP_);

if(cljs.core.truth_(or__3548__auto____3395))
{return or__3548__auto____3395;
} else
{var or__3548__auto____3396 = p2.call(null,p1__3281_SHARP_);

if(cljs.core.truth_(or__3548__auto____3396))
{return or__3548__auto____3396;
} else
{return p3.call(null,p1__3281_SHARP_);
}
}
}),args);
}
};
var G__3429 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3429__delegate.call(this, x, y, z, args);
};
G__3429.cljs$lang$maxFixedArity = 3;
G__3429.cljs$lang$applyTo = (function (arglist__3430){
var x = cljs.core.first(arglist__3430);
var y = cljs.core.first(cljs.core.next(arglist__3430));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3430)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3430)));
return G__3429__delegate.call(this, x, y, z, args);
});
return G__3429;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3423.call(this);
case  1 :
return sp3__3424.call(this,x);
case  2 :
return sp3__3425.call(this,x,y);
case  3 :
return sp3__3426.call(this,x,y,z);
default:
return sp3__3427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3427.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3405 = (function() { 
var G__3431__delegate = function (p1,p2,p3,ps){
var ps__3397 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3432 = (function (){
return null;
});
var spn__3433 = (function (x){
return cljs.core.some.call(null,(function (p1__3282_SHARP_){
return p1__3282_SHARP_.call(null,x);
}),ps__3397);
});
var spn__3434 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3283_SHARP_){
var or__3548__auto____3398 = p1__3283_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3398))
{return or__3548__auto____3398;
} else
{return p1__3283_SHARP_.call(null,y);
}
}),ps__3397);
});
var spn__3435 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3284_SHARP_){
var or__3548__auto____3399 = p1__3284_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3399))
{return or__3548__auto____3399;
} else
{var or__3548__auto____3400 = p1__3284_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3400))
{return or__3548__auto____3400;
} else
{return p1__3284_SHARP_.call(null,z);
}
}
}),ps__3397);
});
var spn__3436 = (function() { 
var G__3438__delegate = function (x,y,z,args){
var or__3548__auto____3401 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3401))
{return or__3548__auto____3401;
} else
{return cljs.core.some.call(null,(function (p1__3285_SHARP_){
return cljs.core.some.call(null,p1__3285_SHARP_,args);
}),ps__3397);
}
};
var G__3438 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3438__delegate.call(this, x, y, z, args);
};
G__3438.cljs$lang$maxFixedArity = 3;
G__3438.cljs$lang$applyTo = (function (arglist__3439){
var x = cljs.core.first(arglist__3439);
var y = cljs.core.first(cljs.core.next(arglist__3439));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3439)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3439)));
return G__3438__delegate.call(this, x, y, z, args);
});
return G__3438;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3432.call(this);
case  1 :
return spn__3433.call(this,x);
case  2 :
return spn__3434.call(this,x,y);
case  3 :
return spn__3435.call(this,x,y,z);
default:
return spn__3436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3436.cljs$lang$applyTo;
return spn;
})()
};
var G__3431 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3431__delegate.call(this, p1, p2, p3, ps);
};
G__3431.cljs$lang$maxFixedArity = 3;
G__3431.cljs$lang$applyTo = (function (arglist__3440){
var p1 = cljs.core.first(arglist__3440);
var p2 = cljs.core.first(cljs.core.next(arglist__3440));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3440)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3440)));
return G__3431__delegate.call(this, p1, p2, p3, ps);
});
return G__3431;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3402.call(this,p1);
case  2 :
return some_fn__3403.call(this,p1,p2);
case  3 :
return some_fn__3404.call(this,p1,p2,p3);
default:
return some_fn__3405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3405.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3453 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3441 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3441))
{var s__3442 = temp__3698__auto____3441;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3442)),map.call(null,f,cljs.core.rest.call(null,s__3442)));
} else
{return null;
}
})));
});
var map__3454 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3443 = cljs.core.seq.call(null,c1);
var s2__3444 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3445 = s1__3443;

if(cljs.core.truth_(and__3546__auto____3445))
{return s2__3444;
} else
{return and__3546__auto____3445;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3443),cljs.core.first.call(null,s2__3444)),map.call(null,f,cljs.core.rest.call(null,s1__3443),cljs.core.rest.call(null,s2__3444)));
} else
{return null;
}
})));
});
var map__3455 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3446 = cljs.core.seq.call(null,c1);
var s2__3447 = cljs.core.seq.call(null,c2);
var s3__3448 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3449 = s1__3446;

if(cljs.core.truth_(and__3546__auto____3449))
{var and__3546__auto____3450 = s2__3447;

if(cljs.core.truth_(and__3546__auto____3450))
{return s3__3448;
} else
{return and__3546__auto____3450;
}
} else
{return and__3546__auto____3449;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3446),cljs.core.first.call(null,s2__3447),cljs.core.first.call(null,s3__3448)),map.call(null,f,cljs.core.rest.call(null,s1__3446),cljs.core.rest.call(null,s2__3447),cljs.core.rest.call(null,s3__3448)));
} else
{return null;
}
})));
});
var map__3456 = (function() { 
var G__3458__delegate = function (f,c1,c2,c3,colls){
var step__3452 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3451 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3451)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3451),step.call(null,map.call(null,cljs.core.rest,ss__3451)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3363_SHARP_){
return cljs.core.apply.call(null,f,p1__3363_SHARP_);
}),step__3452.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3458 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3458__delegate.call(this, f, c1, c2, c3, colls);
};
G__3458.cljs$lang$maxFixedArity = 4;
G__3458.cljs$lang$applyTo = (function (arglist__3459){
var f = cljs.core.first(arglist__3459);
var c1 = cljs.core.first(cljs.core.next(arglist__3459));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3459)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3459))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3459))));
return G__3458__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3458;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3453.call(this,f,c1);
case  3 :
return map__3454.call(this,f,c1,c2);
case  4 :
return map__3455.call(this,f,c1,c2,c3);
default:
return map__3456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3456.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3460 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3460))
{var s__3461 = temp__3698__auto____3460;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3461),take.call(null,(n - 1),cljs.core.rest.call(null,s__3461)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3464 = (function (n,coll){
while(true){
var s__3462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3463 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3463))
{return s__3462;
} else
{return and__3546__auto____3463;
}
})()))
{{
var G__3465 = (n - 1);
var G__3466 = cljs.core.rest.call(null,s__3462);
n = G__3465;
coll = G__3466;
continue;
}
} else
{return s__3462;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3464.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3467 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3468 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3467.call(this,n);
case  2 :
return drop_last__3468.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3470 = cljs.core.seq.call(null,coll);
var lead__3471 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3471))
{{
var G__3472 = cljs.core.next.call(null,s__3470);
var G__3473 = cljs.core.next.call(null,lead__3471);
s__3470 = G__3472;
lead__3471 = G__3473;
continue;
}
} else
{return s__3470;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3476 = (function (pred,coll){
while(true){
var s__3474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3475 = s__3474;

if(cljs.core.truth_(and__3546__auto____3475))
{return pred.call(null,cljs.core.first.call(null,s__3474));
} else
{return and__3546__auto____3475;
}
})()))
{{
var G__3477 = pred;
var G__3478 = cljs.core.rest.call(null,s__3474);
pred = G__3477;
coll = G__3478;
continue;
}
} else
{return s__3474;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3476.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3479 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3479))
{var s__3480 = temp__3698__auto____3479;

return cljs.core.concat.call(null,s__3480,cycle.call(null,s__3480));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3481 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3482 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3481.call(this,n);
case  2 :
return repeat__3482.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3484 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3485 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3484.call(this,n);
case  2 :
return repeatedly__3485.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3491 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3487 = cljs.core.seq.call(null,c1);
var s2__3488 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3489 = s1__3487;

if(cljs.core.truth_(and__3546__auto____3489))
{return s2__3488;
} else
{return and__3546__auto____3489;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3487),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3488),interleave.call(null,cljs.core.rest.call(null,s1__3487),cljs.core.rest.call(null,s2__3488))));
} else
{return null;
}
})));
});
var interleave__3492 = (function() { 
var G__3494__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3490 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3490)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3490),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3490)));
} else
{return null;
}
})));
};
var G__3494 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3494__delegate.call(this, c1, c2, colls);
};
G__3494.cljs$lang$maxFixedArity = 2;
G__3494.cljs$lang$applyTo = (function (arglist__3495){
var c1 = cljs.core.first(arglist__3495);
var c2 = cljs.core.first(cljs.core.next(arglist__3495));
var colls = cljs.core.rest(cljs.core.next(arglist__3495));
return G__3494__delegate.call(this, c1, c2, colls);
});
return G__3494;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3491.call(this,c1,c2);
default:
return interleave__3492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3492.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3498 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3496 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3496))
{var coll__3497 = temp__3695__auto____3496;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3497),cat.call(null,cljs.core.rest.call(null,coll__3497),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3498.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3499 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3500 = (function() { 
var G__3502__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3502 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3502__delegate.call(this, f, coll, colls);
};
G__3502.cljs$lang$maxFixedArity = 2;
G__3502.cljs$lang$applyTo = (function (arglist__3503){
var f = cljs.core.first(arglist__3503);
var coll = cljs.core.first(cljs.core.next(arglist__3503));
var colls = cljs.core.rest(cljs.core.next(arglist__3503));
return G__3502__delegate.call(this, f, coll, colls);
});
return G__3502;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3499.call(this,f,coll);
default:
return mapcat__3500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3500.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3504 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3504))
{var s__3505 = temp__3698__auto____3504;

var f__3506 = cljs.core.first.call(null,s__3505);
var r__3507 = cljs.core.rest.call(null,s__3505);

if(cljs.core.truth_(pred.call(null,f__3506)))
{return cljs.core.cons.call(null,f__3506,filter.call(null,pred,r__3507));
} else
{return filter.call(null,pred,r__3507);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3509 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3509.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3508_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3508_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3516 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3517 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3510 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3510))
{var s__3511 = temp__3698__auto____3510;

var p__3512 = cljs.core.take.call(null,n,s__3511);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3512))))
{return cljs.core.cons.call(null,p__3512,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3511)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3518 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3513 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3513))
{var s__3514 = temp__3698__auto____3513;

var p__3515 = cljs.core.take.call(null,n,s__3514);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3515))))
{return cljs.core.cons.call(null,p__3515,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3514)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3515,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3516.call(this,n,step);
case  3 :
return partition__3517.call(this,n,step,pad);
case  4 :
return partition__3518.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3524 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3525 = (function (m,ks,not_found){
var sentinel__3520 = cljs.core.lookup_sentinel;
var m__3521 = m;
var ks__3522 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3522))
{var m__3523 = cljs.core.get.call(null,m__3521,cljs.core.first.call(null,ks__3522),sentinel__3520);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3520,m__3523)))
{return not_found;
} else
{{
var G__3527 = sentinel__3520;
var G__3528 = m__3523;
var G__3529 = cljs.core.next.call(null,ks__3522);
sentinel__3520 = G__3527;
m__3521 = G__3528;
ks__3522 = G__3529;
continue;
}
}
} else
{return m__3521;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3524.call(this,m,ks);
case  3 :
return get_in__3525.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3530,v){
var vec__3531__3532 = p__3530;
var k__3533 = cljs.core.nth.call(null,vec__3531__3532,0,null);
var ks__3534 = cljs.core.nthnext.call(null,vec__3531__3532,1);

if(cljs.core.truth_(ks__3534))
{return cljs.core.assoc.call(null,m,k__3533,assoc_in.call(null,cljs.core.get.call(null,m,k__3533),ks__3534,v));
} else
{return cljs.core.assoc.call(null,m,k__3533,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3535,f,args){
var vec__3536__3537 = p__3535;
var k__3538 = cljs.core.nth.call(null,vec__3536__3537,0,null);
var ks__3539 = cljs.core.nthnext.call(null,vec__3536__3537,1);

if(cljs.core.truth_(ks__3539))
{return cljs.core.assoc.call(null,m,k__3538,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3538),ks__3539,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3538,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3538),args));
}
};
var update_in = function (m,p__3535,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3535, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3540){
var m = cljs.core.first(arglist__3540);
var p__3535 = cljs.core.first(cljs.core.next(arglist__3540));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3540)));
return update_in__delegate.call(this, m, p__3535, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3541 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3566 = null;
var G__3566__3567 = (function (coll,k){
var this__3542 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3566__3568 = (function (coll,k,not_found){
var this__3543 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3566 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3566__3567.call(this,coll,k);
case  3 :
return G__3566__3568.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3566;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3544 = this;
var new_array__3545 = cljs.core.aclone.call(null,this__3544.array);

(new_array__3545[k] = v);
return (new cljs.core.Vector(this__3544.meta,new_array__3545));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3546 = this;
var new_array__3547 = cljs.core.aclone.call(null,this__3546.array);

new_array__3547.push(o);
return (new cljs.core.Vector(this__3546.meta,new_array__3547));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3570 = null;
var G__3570__3571 = (function (v,f){
var this__3548 = this;
return cljs.core.ci_reduce.call(null,this__3548.array,f);
});
var G__3570__3572 = (function (v,f,start){
var this__3549 = this;
return cljs.core.ci_reduce.call(null,this__3549.array,f,start);
});
G__3570 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3570__3571.call(this,v,f);
case  3 :
return G__3570__3572.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3570;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3550 = this;
if(cljs.core.truth_((this__3550.array.length > 0)))
{var vector_seq__3551 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3550.array.length)))
{return cljs.core.cons.call(null,(this__3550.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3551.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3552 = this;
return this__3552.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3553 = this;
var count__3554 = this__3553.array.length;

if(cljs.core.truth_((count__3554 > 0)))
{return (this__3553.array[(count__3554 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3555 = this;
if(cljs.core.truth_((this__3555.array.length > 0)))
{var new_array__3556 = cljs.core.aclone.call(null,this__3555.array);

new_array__3556.pop();
return (new cljs.core.Vector(this__3555.meta,new_array__3556));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3557 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3558 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3559 = this;
return (new cljs.core.Vector(meta,this__3559.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3560 = this;
return this__3560.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3574 = null;
var G__3574__3575 = (function (coll,n){
var this__3561 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3562 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3562))
{return (n < this__3561.array.length);
} else
{return and__3546__auto____3562;
}
})()))
{return (this__3561.array[n]);
} else
{return null;
}
});
var G__3574__3576 = (function (coll,n,not_found){
var this__3563 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3564 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3564))
{return (n < this__3563.array.length);
} else
{return and__3546__auto____3564;
}
})()))
{return (this__3563.array[n]);
} else
{return not_found;
}
});
G__3574 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3574__3575.call(this,coll,n);
case  3 :
return G__3574__3576.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3574;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3565 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3565.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3578 = null;
var G__3578__3579 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3578__3580 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3578 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3578__3579.call(this,_,k);
case  3 :
return G__3578__3580.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3578;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3582){
var args = cljs.core.seq( arglist__3582 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3583 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3584 = array.length;

var i__3585 = 0;

while(true){
if(cljs.core.truth_((i__3585 < len__3584)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3585]))))
{return i__3585;
} else
{{
var G__3586 = (i__3585 + incr);
i__3585 = G__3586;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3588 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3589 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3587 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3587))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3587;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3588.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3589.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3592 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3611 = null;
var G__3611__3612 = (function (coll,k){
var this__3593 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3611__3613 = (function (coll,k,not_found){
var this__3594 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3594.strobj,(this__3594.strobj[k]),not_found);
});
G__3611 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3611__3612.call(this,coll,k);
case  3 :
return G__3611__3613.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3611;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3595 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3596 = goog.object.clone.call(null,this__3595.strobj);
var overwrite_QMARK___3597 = new_strobj__3596.hasOwnProperty(k);

(new_strobj__3596[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3597))
{return (new cljs.core.ObjMap(this__3595.meta,this__3595.keys,new_strobj__3596));
} else
{var new_keys__3598 = cljs.core.aclone.call(null,this__3595.keys);

new_keys__3598.push(k);
return (new cljs.core.ObjMap(this__3595.meta,new_keys__3598,new_strobj__3596));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3595.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3599 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3599.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3600 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3601 = this;
if(cljs.core.truth_((this__3601.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3591_SHARP_){
return cljs.core.vector.call(null,p1__3591_SHARP_,(this__3601.strobj[p1__3591_SHARP_]));
}),this__3601.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3602 = this;
return this__3602.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3603 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3604 = this;
return (new cljs.core.ObjMap(meta,this__3604.keys,this__3604.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3605 = this;
return this__3605.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3606 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3606.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3607 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3608 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3608))
{return this__3607.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3608;
}
})()))
{var new_keys__3609 = cljs.core.aclone.call(null,this__3607.keys);
var new_strobj__3610 = goog.object.clone.call(null,this__3607.strobj);

new_keys__3609.splice(cljs.core.scan_array.call(null,1,k,new_keys__3609),1);
cljs.core.js_delete.call(null,new_strobj__3610,k);
return (new cljs.core.ObjMap(this__3607.meta,new_keys__3609,new_strobj__3610));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3616 = null;
var G__3616__3617 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3616__3618 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3616 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3616__3617.call(this,_,k);
case  3 :
return G__3616__3618.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3616;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3620 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3650 = null;
var G__3650__3651 = (function (coll,k){
var this__3621 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3650__3652 = (function (coll,k,not_found){
var this__3622 = this;
var bucket__3623 = (this__3622.hashobj[cljs.core.hash.call(null,k)]);
var i__3624 = (cljs.core.truth_(bucket__3623)?cljs.core.scan_array.call(null,2,k,bucket__3623):null);

if(cljs.core.truth_(i__3624))
{return (bucket__3623[(i__3624 + 1)]);
} else
{return not_found;
}
});
G__3650 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3650__3651.call(this,coll,k);
case  3 :
return G__3650__3652.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3650;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3625 = this;
var h__3626 = cljs.core.hash.call(null,k);
var bucket__3627 = (this__3625.hashobj[h__3626]);

if(cljs.core.truth_(bucket__3627))
{var new_bucket__3628 = cljs.core.aclone.call(null,bucket__3627);
var new_hashobj__3629 = goog.object.clone.call(null,this__3625.hashobj);

(new_hashobj__3629[h__3626] = new_bucket__3628);
var temp__3695__auto____3630 = cljs.core.scan_array.call(null,2,k,new_bucket__3628);

if(cljs.core.truth_(temp__3695__auto____3630))
{var i__3631 = temp__3695__auto____3630;

(new_bucket__3628[(i__3631 + 1)] = v);
return (new cljs.core.HashMap(this__3625.meta,this__3625.count,new_hashobj__3629));
} else
{new_bucket__3628.push(k,v);
return (new cljs.core.HashMap(this__3625.meta,(this__3625.count + 1),new_hashobj__3629));
}
} else
{var new_hashobj__3632 = goog.object.clone.call(null,this__3625.hashobj);

(new_hashobj__3632[h__3626] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3625.meta,(this__3625.count + 1),new_hashobj__3632));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3633 = this;
var bucket__3634 = (this__3633.hashobj[cljs.core.hash.call(null,k)]);
var i__3635 = (cljs.core.truth_(bucket__3634)?cljs.core.scan_array.call(null,2,k,bucket__3634):null);

if(cljs.core.truth_(i__3635))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3636 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3637 = this;
if(cljs.core.truth_((this__3637.count > 0)))
{var hashes__3638 = cljs.core.js_keys.call(null,this__3637.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3615_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3637.hashobj[p1__3615_SHARP_])));
}),hashes__3638);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3639 = this;
return this__3639.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3640 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3641 = this;
return (new cljs.core.HashMap(meta,this__3641.count,this__3641.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3642 = this;
return this__3642.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3643 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3643.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3644 = this;
var h__3645 = cljs.core.hash.call(null,k);
var bucket__3646 = (this__3644.hashobj[h__3645]);
var i__3647 = (cljs.core.truth_(bucket__3646)?cljs.core.scan_array.call(null,2,k,bucket__3646):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3647)))
{return coll;
} else
{var new_hashobj__3648 = goog.object.clone.call(null,this__3644.hashobj);

if(cljs.core.truth_((3 > bucket__3646.length)))
{cljs.core.js_delete.call(null,new_hashobj__3648,h__3645);
} else
{var new_bucket__3649 = cljs.core.aclone.call(null,bucket__3646);

new_bucket__3649.splice(i__3647,2);
(new_hashobj__3648[h__3645] = new_bucket__3649);
}
return (new cljs.core.HashMap(this__3644.meta,(this__3644.count - 1),new_hashobj__3648));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3654 = ks.length;

var i__3655 = 0;
var out__3656 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3655 < len__3654)))
{{
var G__3657 = (i__3655 + 1);
var G__3658 = cljs.core.assoc.call(null,out__3656,(ks[i__3655]),(vs[i__3655]));
i__3655 = G__3657;
out__3656 = G__3658;
continue;
}
} else
{return out__3656;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3659 = null;
var G__3659__3660 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3659__3661 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3659 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3659__3660.call(this,_,k);
case  3 :
return G__3659__3661.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3659;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3663 = cljs.core.seq.call(null,keyvals);
var out__3664 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3663))
{{
var G__3665 = cljs.core.nnext.call(null,in$__3663);
var G__3666 = cljs.core.assoc.call(null,out__3664,cljs.core.first.call(null,in$__3663),cljs.core.second.call(null,in$__3663));
in$__3663 = G__3665;
out__3664 = G__3666;
continue;
}
} else
{return out__3664;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3667){
var keyvals = cljs.core.seq( arglist__3667 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3668_SHARP_,p2__3669_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3670 = p1__3668_SHARP_;

if(cljs.core.truth_(or__3548__auto____3670))
{return or__3548__auto____3670;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3669_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3671){
var maps = cljs.core.seq( arglist__3671 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3674 = (function (m,e){
var k__3672 = cljs.core.first.call(null,e);
var v__3673 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3672)))
{return cljs.core.assoc.call(null,m,k__3672,f.call(null,cljs.core.get.call(null,m,k__3672),v__3673));
} else
{return cljs.core.assoc.call(null,m,k__3672,v__3673);
}
});
var merge2__3676 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3674,(function (){var or__3548__auto____3675 = m1;

if(cljs.core.truth_(or__3548__auto____3675))
{return or__3548__auto____3675;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3676,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3677){
var f = cljs.core.first(arglist__3677);
var maps = cljs.core.rest(arglist__3677);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3679 = cljs.core.ObjMap.fromObject([],{});
var keys__3680 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3680))
{var key__3681 = cljs.core.first.call(null,keys__3680);
var entry__3682 = cljs.core.get.call(null,map,key__3681,"﷐'user/not-found");

{
var G__3683 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3682,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3679,key__3681,entry__3682):ret__3679);
var G__3684 = cljs.core.next.call(null,keys__3680);
ret__3679 = G__3683;
keys__3680 = G__3684;
continue;
}
} else
{return ret__3679;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3685 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3698 = null;
var G__3698__3699 = (function (coll,v){
var this__3686 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3698__3700 = (function (coll,v,not_found){
var this__3687 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3687.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3698 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3698__3699.call(this,coll,v);
case  3 :
return G__3698__3700.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3698;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3688 = this;
return (new cljs.core.Set(this__3688.meta,cljs.core.assoc.call(null,this__3688.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3689 = this;
return cljs.core.keys.call(null,this__3689.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3690 = this;
return (new cljs.core.Set(this__3690.meta,cljs.core.dissoc.call(null,this__3690.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3691 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3692 = this;
var and__3546__auto____3693 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3693))
{var and__3546__auto____3694 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3694))
{return cljs.core.every_QMARK_.call(null,(function (p1__3678_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3678_SHARP_);
}),other);
} else
{return and__3546__auto____3694;
}
} else
{return and__3546__auto____3693;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3695 = this;
return (new cljs.core.Set(meta,this__3695.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3696 = this;
return this__3696.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3697 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3697.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3702 = null;
var G__3702__3703 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3702__3704 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3702 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3702__3703.call(this,_,k);
case  3 :
return G__3702__3704.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3702;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3707 = cljs.core.seq.call(null,coll);
var out__3708 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3707))))
{{
var G__3709 = cljs.core.rest.call(null,in$__3707);
var G__3710 = cljs.core.conj.call(null,out__3708,cljs.core.first.call(null,in$__3707));
in$__3707 = G__3709;
out__3708 = G__3710;
continue;
}
} else
{return out__3708;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3711 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3712 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3712))
{var e__3713 = temp__3695__auto____3712;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3713));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3711,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3706_SHARP_){
var temp__3695__auto____3714 = cljs.core.find.call(null,smap,p1__3706_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3714))
{var e__3715 = temp__3695__auto____3714;

return cljs.core.second.call(null,e__3715);
} else
{return p1__3706_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3723 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3716,seen){
while(true){
var vec__3717__3718 = p__3716;
var f__3719 = cljs.core.nth.call(null,vec__3717__3718,0,null);
var xs__3720 = vec__3717__3718;

var temp__3698__auto____3721 = cljs.core.seq.call(null,xs__3720);

if(cljs.core.truth_(temp__3698__auto____3721))
{var s__3722 = temp__3698__auto____3721;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3719)))
{{
var G__3724 = cljs.core.rest.call(null,s__3722);
var G__3725 = seen;
p__3716 = G__3724;
seen = G__3725;
continue;
}
} else
{return cljs.core.cons.call(null,f__3719,step.call(null,cljs.core.rest.call(null,s__3722),cljs.core.conj.call(null,seen,f__3719)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3723.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3726 = cljs.core.Vector.fromArray([]);
var s__3727 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3727)))
{{
var G__3728 = cljs.core.conj.call(null,ret__3726,cljs.core.first.call(null,s__3727));
var G__3729 = cljs.core.next.call(null,s__3727);
ret__3726 = G__3728;
s__3727 = G__3729;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3726);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3730 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3730))
{return or__3548__auto____3730;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3731 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3731 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3731 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3732 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3732))
{return or__3548__auto____3732;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3733 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3733 > -1)))
{return cljs.core.subs.call(null,x,2,i__3733);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3736 = cljs.core.ObjMap.fromObject([],{});
var ks__3737 = cljs.core.seq.call(null,keys);
var vs__3738 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3739 = ks__3737;

if(cljs.core.truth_(and__3546__auto____3739))
{return vs__3738;
} else
{return and__3546__auto____3739;
}
})()))
{{
var G__3740 = cljs.core.assoc.call(null,map__3736,cljs.core.first.call(null,ks__3737),cljs.core.first.call(null,vs__3738));
var G__3741 = cljs.core.next.call(null,ks__3737);
var G__3742 = cljs.core.next.call(null,vs__3738);
map__3736 = G__3740;
ks__3737 = G__3741;
vs__3738 = G__3742;
continue;
}
} else
{return map__3736;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3745 = (function (k,x){
return x;
});
var max_key__3746 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3747 = (function() { 
var G__3749__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3734_SHARP_,p2__3735_SHARP_){
return max_key.call(null,k,p1__3734_SHARP_,p2__3735_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3749 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3749__delegate.call(this, k, x, y, more);
};
G__3749.cljs$lang$maxFixedArity = 3;
G__3749.cljs$lang$applyTo = (function (arglist__3750){
var k = cljs.core.first(arglist__3750);
var x = cljs.core.first(cljs.core.next(arglist__3750));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3750)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3750)));
return G__3749__delegate.call(this, k, x, y, more);
});
return G__3749;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3745.call(this,k,x);
case  3 :
return max_key__3746.call(this,k,x,y);
default:
return max_key__3747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3747.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3751 = (function (k,x){
return x;
});
var min_key__3752 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3753 = (function() { 
var G__3755__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3743_SHARP_,p2__3744_SHARP_){
return min_key.call(null,k,p1__3743_SHARP_,p2__3744_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3755 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3755__delegate.call(this, k, x, y, more);
};
G__3755.cljs$lang$maxFixedArity = 3;
G__3755.cljs$lang$applyTo = (function (arglist__3756){
var k = cljs.core.first(arglist__3756);
var x = cljs.core.first(cljs.core.next(arglist__3756));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3756)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3756)));
return G__3755__delegate.call(this, k, x, y, more);
});
return G__3755;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3751.call(this,k,x);
case  3 :
return min_key__3752.call(this,k,x,y);
default:
return min_key__3753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3753.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3759 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3760 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3757))
{var s__3758 = temp__3698__auto____3757;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3758),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3758)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3759.call(this,n,step);
case  3 :
return partition_all__3760.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3762 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3762))
{var s__3763 = temp__3698__auto____3762;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3763))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3763),take_while.call(null,pred,cljs.core.rest.call(null,s__3763)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3764 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3765 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3781 = null;
var G__3781__3782 = (function (rng,f){
var this__3766 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3781__3783 = (function (rng,f,s){
var this__3767 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3781 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3781__3782.call(this,rng,f);
case  3 :
return G__3781__3783.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3781;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3768 = this;
var comp__3769 = (cljs.core.truth_((this__3768.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3769.call(null,this__3768.start,this__3768.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3770 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3770.end - this__3770.start) / this__3770.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3771 = this;
return this__3771.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3772 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3772.meta,(this__3772.start + this__3772.step),this__3772.end,this__3772.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3773 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3774 = this;
return (new cljs.core.Range(meta,this__3774.start,this__3774.end,this__3774.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3775 = this;
return this__3775.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3785 = null;
var G__3785__3786 = (function (rng,n){
var this__3776 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3776.start + (n * this__3776.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3777 = (this__3776.start > this__3776.end);

if(cljs.core.truth_(and__3546__auto____3777))
{return cljs.core._EQ_.call(null,this__3776.step,0);
} else
{return and__3546__auto____3777;
}
})()))
{return this__3776.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3785__3787 = (function (rng,n,not_found){
var this__3778 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3778.start + (n * this__3778.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3779 = (this__3778.start > this__3778.end);

if(cljs.core.truth_(and__3546__auto____3779))
{return cljs.core._EQ_.call(null,this__3778.step,0);
} else
{return and__3546__auto____3779;
}
})()))
{return this__3778.start;
} else
{return not_found;
}
}
});
G__3785 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3785__3786.call(this,rng,n);
case  3 :
return G__3785__3787.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3785;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3780 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3780.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3789 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3790 = (function (end){
return range.call(null,0,end,1);
});
var range__3791 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3792 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3789.call(this);
case  1 :
return range__3790.call(this,start);
case  2 :
return range__3791.call(this,start,end);
case  3 :
return range__3792.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3794 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3794))
{var s__3795 = temp__3698__auto____3794;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3795),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3795)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3797))
{var s__3798 = temp__3698__auto____3797;

var fst__3799 = cljs.core.first.call(null,s__3798);
var fv__3800 = f.call(null,fst__3799);
var run__3801 = cljs.core.cons.call(null,fst__3799,cljs.core.take_while.call(null,(function (p1__3796_SHARP_){
return cljs.core._EQ_.call(null,fv__3800,f.call(null,p1__3796_SHARP_));
}),cljs.core.next.call(null,s__3798)));

return cljs.core.cons.call(null,run__3801,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3801),s__3798))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3816 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3812))
{var s__3813 = temp__3695__auto____3812;

return reductions.call(null,f,cljs.core.first.call(null,s__3813),cljs.core.rest.call(null,s__3813));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3817 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3814))
{var s__3815 = temp__3698__auto____3814;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3815)),cljs.core.rest.call(null,s__3815));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3816.call(this,f,init);
case  3 :
return reductions__3817.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3820 = (function (f){
return (function() {
var G__3825 = null;
var G__3825__3826 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3825__3827 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3825__3828 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3825__3829 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3825__3830 = (function() { 
var G__3832__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3832__delegate.call(this, x, y, z, args);
};
G__3832.cljs$lang$maxFixedArity = 3;
G__3832.cljs$lang$applyTo = (function (arglist__3833){
var x = cljs.core.first(arglist__3833);
var y = cljs.core.first(cljs.core.next(arglist__3833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3833)));
return G__3832__delegate.call(this, x, y, z, args);
});
return G__3832;
})()
;
G__3825 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3825__3826.call(this);
case  1 :
return G__3825__3827.call(this,x);
case  2 :
return G__3825__3828.call(this,x,y);
case  3 :
return G__3825__3829.call(this,x,y,z);
default:
return G__3825__3830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3825.cljs$lang$maxFixedArity = 3;
G__3825.cljs$lang$applyTo = G__3825__3830.cljs$lang$applyTo;
return G__3825;
})()
});
var juxt__3821 = (function (f,g){
return (function() {
var G__3834 = null;
var G__3834__3835 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3834__3836 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3834__3837 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3834__3838 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3834__3839 = (function() { 
var G__3841__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3841 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3841__delegate.call(this, x, y, z, args);
};
G__3841.cljs$lang$maxFixedArity = 3;
G__3841.cljs$lang$applyTo = (function (arglist__3842){
var x = cljs.core.first(arglist__3842);
var y = cljs.core.first(cljs.core.next(arglist__3842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3842)));
return G__3841__delegate.call(this, x, y, z, args);
});
return G__3841;
})()
;
G__3834 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3834__3835.call(this);
case  1 :
return G__3834__3836.call(this,x);
case  2 :
return G__3834__3837.call(this,x,y);
case  3 :
return G__3834__3838.call(this,x,y,z);
default:
return G__3834__3839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3834.cljs$lang$maxFixedArity = 3;
G__3834.cljs$lang$applyTo = G__3834__3839.cljs$lang$applyTo;
return G__3834;
})()
});
var juxt__3822 = (function (f,g,h){
return (function() {
var G__3843 = null;
var G__3843__3844 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3843__3845 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3843__3846 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3843__3847 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3843__3848 = (function() { 
var G__3850__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3850 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3850__delegate.call(this, x, y, z, args);
};
G__3850.cljs$lang$maxFixedArity = 3;
G__3850.cljs$lang$applyTo = (function (arglist__3851){
var x = cljs.core.first(arglist__3851);
var y = cljs.core.first(cljs.core.next(arglist__3851));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3851)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3851)));
return G__3850__delegate.call(this, x, y, z, args);
});
return G__3850;
})()
;
G__3843 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3843__3844.call(this);
case  1 :
return G__3843__3845.call(this,x);
case  2 :
return G__3843__3846.call(this,x,y);
case  3 :
return G__3843__3847.call(this,x,y,z);
default:
return G__3843__3848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3843.cljs$lang$maxFixedArity = 3;
G__3843.cljs$lang$applyTo = G__3843__3848.cljs$lang$applyTo;
return G__3843;
})()
});
var juxt__3823 = (function() { 
var G__3852__delegate = function (f,g,h,fs){
var fs__3819 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3853 = null;
var G__3853__3854 = (function (){
return cljs.core.reduce.call(null,(function (p1__3802_SHARP_,p2__3803_SHARP_){
return cljs.core.conj.call(null,p1__3802_SHARP_,p2__3803_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3819);
});
var G__3853__3855 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3804_SHARP_,p2__3805_SHARP_){
return cljs.core.conj.call(null,p1__3804_SHARP_,p2__3805_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3819);
});
var G__3853__3856 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3806_SHARP_,p2__3807_SHARP_){
return cljs.core.conj.call(null,p1__3806_SHARP_,p2__3807_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3819);
});
var G__3853__3857 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3808_SHARP_,p2__3809_SHARP_){
return cljs.core.conj.call(null,p1__3808_SHARP_,p2__3809_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3819);
});
var G__3853__3858 = (function() { 
var G__3860__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3810_SHARP_,p2__3811_SHARP_){
return cljs.core.conj.call(null,p1__3810_SHARP_,cljs.core.apply.call(null,p2__3811_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3819);
};
var G__3860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3860__delegate.call(this, x, y, z, args);
};
G__3860.cljs$lang$maxFixedArity = 3;
G__3860.cljs$lang$applyTo = (function (arglist__3861){
var x = cljs.core.first(arglist__3861);
var y = cljs.core.first(cljs.core.next(arglist__3861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3861)));
return G__3860__delegate.call(this, x, y, z, args);
});
return G__3860;
})()
;
G__3853 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3853__3854.call(this);
case  1 :
return G__3853__3855.call(this,x);
case  2 :
return G__3853__3856.call(this,x,y);
case  3 :
return G__3853__3857.call(this,x,y,z);
default:
return G__3853__3858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3853.cljs$lang$maxFixedArity = 3;
G__3853.cljs$lang$applyTo = G__3853__3858.cljs$lang$applyTo;
return G__3853;
})()
};
var G__3852 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3852__delegate.call(this, f, g, h, fs);
};
G__3852.cljs$lang$maxFixedArity = 3;
G__3852.cljs$lang$applyTo = (function (arglist__3862){
var f = cljs.core.first(arglist__3862);
var g = cljs.core.first(cljs.core.next(arglist__3862));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3862)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3862)));
return G__3852__delegate.call(this, f, g, h, fs);
});
return G__3852;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3820.call(this,f);
case  2 :
return juxt__3821.call(this,f,g);
case  3 :
return juxt__3822.call(this,f,g,h);
default:
return juxt__3823.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3823.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3864 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3867 = cljs.core.next.call(null,coll);
coll = G__3867;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3865 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3863))
{return (n > 0);
} else
{return and__3546__auto____3863;
}
})()))
{{
var G__3868 = (n - 1);
var G__3869 = cljs.core.next.call(null,coll);
n = G__3868;
coll = G__3869;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3864.call(this,n);
case  2 :
return dorun__3865.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3870 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3871 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3870.call(this,n);
case  2 :
return doall__3871.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3873 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3873),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3873),1)))
{return cljs.core.first.call(null,matches__3873);
} else
{return cljs.core.vec.call(null,matches__3873);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3874 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3874)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3874),1)))
{return cljs.core.first.call(null,matches__3874);
} else
{return cljs.core.vec.call(null,matches__3874);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3875 = cljs.core.re_find.call(null,re,s);
var match_idx__3876 = s.search(re);
var match_str__3877 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3875))?cljs.core.first.call(null,match_data__3875):match_data__3875);
var post_match__3878 = cljs.core.subs.call(null,s,(match_idx__3876 + cljs.core.count.call(null,match_str__3877)));

if(cljs.core.truth_(match_data__3875))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3875,re_seq.call(null,re,post_match__3878));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3879_SHARP_){
return print_one.call(null,p1__3879_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3880 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3880))
{var and__3546__auto____3884 = (function (){var x__314__auto____3881 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3882 = x__314__auto____3881;

if(cljs.core.truth_(and__3546__auto____3882))
{var and__3546__auto____3883 = x__314__auto____3881.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3883))
{return cljs.core.not.call(null,x__314__auto____3881.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3883;
}
} else
{return and__3546__auto____3882;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__314__auto____3881);
}
})();

if(cljs.core.truth_(and__3546__auto____3884))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3884;
}
} else
{return and__3546__auto____3880;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__314__auto____3885 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3886 = x__314__auto____3885;

if(cljs.core.truth_(and__3546__auto____3886))
{var and__3546__auto____3887 = x__314__auto____3885.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3887))
{return cljs.core.not.call(null,x__314__auto____3885.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3887;
}
} else
{return and__3546__auto____3886;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__314__auto____3885);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3888 = cljs.core.first.call(null,objs);
var sb__3889 = (new goog.string.StringBuffer());

var G__3890__3891 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3890__3891))
{var obj__3892 = cljs.core.first.call(null,G__3890__3891);
var G__3890__3893 = G__3890__3891;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3892,first_obj__3888)))
{} else
{sb__3889.append(" ");
}
var G__3894__3895 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3892,opts));

if(cljs.core.truth_(G__3894__3895))
{var string__3896 = cljs.core.first.call(null,G__3894__3895);
var G__3894__3897 = G__3894__3895;

while(true){
sb__3889.append(string__3896);
var temp__3698__auto____3898 = cljs.core.next.call(null,G__3894__3897);

if(cljs.core.truth_(temp__3698__auto____3898))
{var G__3894__3899 = temp__3698__auto____3898;

{
var G__3902 = cljs.core.first.call(null,G__3894__3899);
var G__3903 = G__3894__3899;
string__3896 = G__3902;
G__3894__3897 = G__3903;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3900 = cljs.core.next.call(null,G__3890__3893);

if(cljs.core.truth_(temp__3698__auto____3900))
{var G__3890__3901 = temp__3698__auto____3900;

{
var G__3904 = cljs.core.first.call(null,G__3890__3901);
var G__3905 = G__3890__3901;
obj__3892 = G__3904;
G__3890__3893 = G__3905;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3889);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3906 = cljs.core.first.call(null,objs);

var G__3907__3908 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3907__3908))
{var obj__3909 = cljs.core.first.call(null,G__3907__3908);
var G__3907__3910 = G__3907__3908;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3909,first_obj__3906)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3911__3912 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3909,opts));

if(cljs.core.truth_(G__3911__3912))
{var string__3913 = cljs.core.first.call(null,G__3911__3912);
var G__3911__3914 = G__3911__3912;

while(true){
cljs.core.string_print.call(null,string__3913);
var temp__3698__auto____3915 = cljs.core.next.call(null,G__3911__3914);

if(cljs.core.truth_(temp__3698__auto____3915))
{var G__3911__3916 = temp__3698__auto____3915;

{
var G__3919 = cljs.core.first.call(null,G__3911__3916);
var G__3920 = G__3911__3916;
string__3913 = G__3919;
G__3911__3914 = G__3920;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3917 = cljs.core.next.call(null,G__3907__3910);

if(cljs.core.truth_(temp__3698__auto____3917))
{var G__3907__3918 = temp__3698__auto____3917;

{
var G__3921 = cljs.core.first.call(null,G__3907__3918);
var G__3922 = G__3907__3918;
obj__3909 = G__3921;
G__3907__3910 = G__3922;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3923){
var objs = cljs.core.seq( arglist__3923 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3924){
var objs = cljs.core.seq( arglist__3924 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3925){
var objs = cljs.core.seq( arglist__3925 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3926){
var objs = cljs.core.seq( arglist__3926 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3927){
var objs = cljs.core.seq( arglist__3927 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3928 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3928,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3929 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3929))
{var nspc__3930 = temp__3698__auto____3929;

return cljs.core.str.call(null,nspc__3930,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3931 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3931))
{var nspc__3932 = temp__3698__auto____3931;

return cljs.core.str.call(null,nspc__3932,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3933 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3933,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3934 = this;
var G__3935__3936 = cljs.core.seq.call(null,this__3934.watches);

if(cljs.core.truth_(G__3935__3936))
{var G__3938__3940 = cljs.core.first.call(null,G__3935__3936);
var vec__3939__3941 = G__3938__3940;
var key__3942 = cljs.core.nth.call(null,vec__3939__3941,0,null);
var f__3943 = cljs.core.nth.call(null,vec__3939__3941,1,null);
var G__3935__3944 = G__3935__3936;

var G__3938__3945 = G__3938__3940;
var G__3935__3946 = G__3935__3944;

while(true){
var vec__3947__3948 = G__3938__3945;
var key__3949 = cljs.core.nth.call(null,vec__3947__3948,0,null);
var f__3950 = cljs.core.nth.call(null,vec__3947__3948,1,null);
var G__3935__3951 = G__3935__3946;

f__3950.call(null,key__3949,this$,oldval,newval);
var temp__3698__auto____3952 = cljs.core.next.call(null,G__3935__3951);

if(cljs.core.truth_(temp__3698__auto____3952))
{var G__3935__3953 = temp__3698__auto____3952;

{
var G__3960 = cljs.core.first.call(null,G__3935__3953);
var G__3961 = G__3935__3953;
G__3938__3945 = G__3960;
G__3935__3946 = G__3961;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3954 = this;
return this$.watches = cljs.core.assoc.call(null,this__3954.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3955 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3955.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3956 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3956.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3957 = this;
return this__3957.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3958 = this;
return this__3958.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3959 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3968 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3969 = (function() { 
var G__3971__delegate = function (x,p__3962){
var map__3963__3964 = p__3962;
var map__3963__3965 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3963__3964))?cljs.core.apply.call(null,cljs.core.hash_map,map__3963__3964):map__3963__3964);
var validator__3966 = cljs.core.get.call(null,map__3963__3965,"﷐'validator");
var meta__3967 = cljs.core.get.call(null,map__3963__3965,"﷐'meta");

return (new cljs.core.Atom(x,meta__3967,validator__3966,null));
};
var G__3971 = function (x,var_args){
var p__3962 = null;
if (goog.isDef(var_args)) {
  p__3962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3971__delegate.call(this, x, p__3962);
};
G__3971.cljs$lang$maxFixedArity = 1;
G__3971.cljs$lang$applyTo = (function (arglist__3972){
var x = cljs.core.first(arglist__3972);
var p__3962 = cljs.core.rest(arglist__3972);
return G__3971__delegate.call(this, x, p__3962);
});
return G__3971;
})()
;
atom = function(x,var_args){
var p__3962 = var_args;
switch(arguments.length){
case  1 :
return atom__3968.call(this,x);
default:
return atom__3969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3969.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3973 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3973))
{var validate__3974 = temp__3698__auto____3973;

if(cljs.core.truth_(validate__3974.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")))));
}
} else
{}
var old_value__3975 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3975,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3976 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3977 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3978 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3979 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3980 = (function() { 
var G__3982__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3982 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3982__delegate.call(this, a, f, x, y, z, more);
};
G__3982.cljs$lang$maxFixedArity = 5;
G__3982.cljs$lang$applyTo = (function (arglist__3983){
var a = cljs.core.first(arglist__3983);
var f = cljs.core.first(cljs.core.next(arglist__3983));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3983)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3983))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3983)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3983)))));
return G__3982__delegate.call(this, a, f, x, y, z, more);
});
return G__3982;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3976.call(this,a,f);
case  3 :
return swap_BANG___3977.call(this,a,f,x);
case  4 :
return swap_BANG___3978.call(this,a,f,x,y);
case  5 :
return swap_BANG___3979.call(this,a,f,x,y,z);
default:
return swap_BANG___3980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3980.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3984){
var iref = cljs.core.first(arglist__3984);
var f = cljs.core.first(cljs.core.next(arglist__3984));
var args = cljs.core.rest(cljs.core.next(arglist__3984));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3985 = (function (){
return gensym.call(null,"G__");
});
var gensym__3986 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3985.call(this);
case  1 :
return gensym__3986.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3988 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3988.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3989 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3989.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3989.state,this__3989.f);
}
return cljs.core.deref.call(null,this__3989.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3990){
var body = cljs.core.seq( arglist__3990 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3991__3992 = options;
var map__3991__3993 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3991__3992))?cljs.core.apply.call(null,cljs.core.hash_map,map__3991__3992):map__3991__3992);
var keywordize_keys__3994 = cljs.core.get.call(null,map__3991__3993,"﷐'keywordize-keys");
var keyfn__3995 = (cljs.core.truth_(keywordize_keys__3994)?cljs.core.keyword:cljs.core.str);
var f__4001 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__378__auto____4000 = (function iter__3996(s__3997){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3997__3998 = s__3997;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3997__3998)))
{var k__3999 = cljs.core.first.call(null,s__3997__3998);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3995.call(null,k__3999),thisfn.call(null,(x[k__3999]))]),iter__3996.call(null,cljs.core.rest.call(null,s__3997__3998)));
} else
{return null;
}
break;
}
})));
});

return iter__378__auto____4000.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4001.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4002){
var x = cljs.core.first(arglist__4002);
var options = cljs.core.rest(arglist__4002);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4003 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4007__delegate = function (args){
var temp__3695__auto____4004 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4003),args);

if(cljs.core.truth_(temp__3695__auto____4004))
{var v__4005 = temp__3695__auto____4004;

return v__4005;
} else
{var ret__4006 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4003,cljs.core.assoc,args,ret__4006);
return ret__4006;
}
};
var G__4007 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4007__delegate.call(this, args);
};
G__4007.cljs$lang$maxFixedArity = 0;
G__4007.cljs$lang$applyTo = (function (arglist__4008){
var args = cljs.core.seq( arglist__4008 );;
return G__4007__delegate.call(this, args);
});
return G__4007;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4010 = (function (f){
while(true){
var ret__4009 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4009)))
{{
var G__4013 = ret__4009;
f = G__4013;
continue;
}
} else
{return ret__4009;
}
break;
}
});
var trampoline__4011 = (function() { 
var G__4014__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4014 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4014__delegate.call(this, f, args);
};
G__4014.cljs$lang$maxFixedArity = 1;
G__4014.cljs$lang$applyTo = (function (arglist__4015){
var f = cljs.core.first(arglist__4015);
var args = cljs.core.rest(arglist__4015);
return G__4014__delegate.call(this, f, args);
});
return G__4014;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4010.call(this,f);
default:
return trampoline__4011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4011.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4016 = (function (){
return rand.call(null,1);
});
var rand__4017 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4016.call(this);
case  1 :
return rand__4017.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4019 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4019,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4019,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4028 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4029 = (function (h,child,parent){
var or__3548__auto____4020 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4020))
{return or__3548__auto____4020;
} else
{var or__3548__auto____4021 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4021))
{return or__3548__auto____4021;
} else
{var and__3546__auto____4022 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4022))
{var and__3546__auto____4023 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4023))
{var and__3546__auto____4024 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4024))
{var ret__4025 = true;
var i__4026 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4027 = cljs.core.not.call(null,ret__4025);

if(cljs.core.truth_(or__3548__auto____4027))
{return or__3548__auto____4027;
} else
{return cljs.core._EQ_.call(null,i__4026,cljs.core.count.call(null,parent));
}
})()))
{return ret__4025;
} else
{{
var G__4031 = isa_QMARK_.call(null,h,child.call(null,i__4026),parent.call(null,i__4026));
var G__4032 = (i__4026 + 1);
ret__4025 = G__4031;
i__4026 = G__4032;
continue;
}
}
break;
}
} else
{return and__3546__auto____4024;
}
} else
{return and__3546__auto____4023;
}
} else
{return and__3546__auto____4022;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4028.call(this,h,child);
case  3 :
return isa_QMARK___4029.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4033 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4034 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4033.call(this,h);
case  2 :
return parents__4034.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4036 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4037 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4036.call(this,h);
case  2 :
return ancestors__4037.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4039 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4040 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4039.call(this,h);
case  2 :
return descendants__4040.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4050 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4051 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")))));
}
var tp__4045 = "﷐'parents".call(null,h);
var td__4046 = "﷐'descendants".call(null,h);
var ta__4047 = "﷐'ancestors".call(null,h);
var tf__4048 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4049 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4045.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4047.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4047.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4045,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4048.call(null,"﷐'ancestors".call(null,h),tag,td__4046,parent,ta__4047),"﷐'descendants":tf__4048.call(null,"﷐'descendants".call(null,h),parent,ta__4047,tag,td__4046)});
})());

if(cljs.core.truth_(or__3548__auto____4049))
{return or__3548__auto____4049;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4050.call(this,h,tag);
case  3 :
return derive__4051.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4057 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4058 = (function (h,tag,parent){
var parentMap__4053 = "﷐'parents".call(null,h);
var childsParents__4054 = (cljs.core.truth_(parentMap__4053.call(null,tag))?cljs.core.disj.call(null,parentMap__4053.call(null,tag),parent):cljs.core.set([]));
var newParents__4055 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4054))?cljs.core.assoc.call(null,parentMap__4053,tag,childsParents__4054):cljs.core.dissoc.call(null,parentMap__4053,tag));
var deriv_seq__4056 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4042_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4042_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4042_SHARP_),cljs.core.second.call(null,p1__4042_SHARP_)));
}),cljs.core.seq.call(null,newParents__4055)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4053.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4043_SHARP_,p2__4044_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4043_SHARP_,p2__4044_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4056));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4057.call(this,h,tag);
case  3 :
return underive__4058.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4060 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4062 = (cljs.core.truth_((function (){var and__3546__auto____4061 = xprefs__4060;

if(cljs.core.truth_(and__3546__auto____4061))
{return xprefs__4060.call(null,y);
} else
{return and__3546__auto____4061;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4062))
{return or__3548__auto____4062;
} else
{var or__3548__auto____4064 = (function (){var ps__4063 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4063) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4063),prefer_table)))
{} else
{}
{
var G__4067 = cljs.core.rest.call(null,ps__4063);
ps__4063 = G__4067;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4064))
{return or__3548__auto____4064;
} else
{var or__3548__auto____4066 = (function (){var ps__4065 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4065) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4065),y,prefer_table)))
{} else
{}
{
var G__4068 = cljs.core.rest.call(null,ps__4065);
ps__4065 = G__4068;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4066))
{return or__3548__auto____4066;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4069 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4069))
{return or__3548__auto____4069;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4078 = cljs.core.reduce.call(null,(function (be,p__4070){
var vec__4071__4072 = p__4070;
var k__4073 = cljs.core.nth.call(null,vec__4071__4072,0,null);
var ___4074 = cljs.core.nth.call(null,vec__4071__4072,1,null);
var e__4075 = vec__4071__4072;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4073)))
{var be2__4077 = (cljs.core.truth_((function (){var or__3548__auto____4076 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4076))
{return or__3548__auto____4076;
} else
{return cljs.core.dominates.call(null,k__4073,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4075:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4077),k__4073,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4073," and ",cljs.core.first.call(null,be2__4077),", and neither is preferred")));
}
return be2__4077;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4078))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4078));
return cljs.core.second.call(null,best_entry__4078);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4079 = mf;

if(cljs.core.truth_(and__3546__auto____4079))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4079;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4080 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4080))
{return or__3548__auto____4080;
} else
{var or__3548__auto____4081 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4081))
{return or__3548__auto____4081;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4082 = mf;

if(cljs.core.truth_(and__3546__auto____4082))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4082;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4083 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4083))
{return or__3548__auto____4083;
} else
{var or__3548__auto____4084 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4084))
{return or__3548__auto____4084;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4085 = mf;

if(cljs.core.truth_(and__3546__auto____4085))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4085;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4086 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4086))
{return or__3548__auto____4086;
} else
{var or__3548__auto____4087 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4087))
{return or__3548__auto____4087;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4088 = mf;

if(cljs.core.truth_(and__3546__auto____4088))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4088;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4089 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4089))
{return or__3548__auto____4089;
} else
{var or__3548__auto____4090 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4090))
{return or__3548__auto____4090;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4091 = mf;

if(cljs.core.truth_(and__3546__auto____4091))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4091;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4092 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4092))
{return or__3548__auto____4092;
} else
{var or__3548__auto____4093 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4093))
{return or__3548__auto____4093;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4094 = mf;

if(cljs.core.truth_(and__3546__auto____4094))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4094;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4095 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4095))
{return or__3548__auto____4095;
} else
{var or__3548__auto____4096 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4096))
{return or__3548__auto____4096;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4097 = mf;

if(cljs.core.truth_(and__3546__auto____4097))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4097;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4098 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4098))
{return or__3548__auto____4098;
} else
{var or__3548__auto____4099 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4099))
{return or__3548__auto____4099;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4100 = mf;

if(cljs.core.truth_(and__3546__auto____4100))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4100;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4101 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4101))
{return or__3548__auto____4101;
} else
{var or__3548__auto____4102 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4102))
{return or__3548__auto____4102;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4103 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4104 = cljs.core._get_method.call(null,mf,dispatch_val__4103);

if(cljs.core.truth_(target_fn__4104))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4103)));
}
return cljs.core.apply.call(null,target_fn__4104,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4105 = this;
cljs.core.swap_BANG_.call(null,this__4105.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4105.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4105.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4105.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4106 = this;
cljs.core.swap_BANG_.call(null,this__4106.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4106.method_cache,this__4106.method_table,this__4106.cached_hierarchy,this__4106.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4107 = this;
cljs.core.swap_BANG_.call(null,this__4107.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4107.method_cache,this__4107.method_table,this__4107.cached_hierarchy,this__4107.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4108 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4108.cached_hierarchy),cljs.core.deref.call(null,this__4108.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4108.method_cache,this__4108.method_table,this__4108.cached_hierarchy,this__4108.hierarchy);
}
var temp__3695__auto____4109 = cljs.core.deref.call(null,this__4108.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4109))
{var target_fn__4110 = temp__3695__auto____4109;

return target_fn__4110;
} else
{var temp__3695__auto____4111 = cljs.core.find_and_cache_best_method.call(null,this__4108.name,dispatch_val,this__4108.hierarchy,this__4108.method_table,this__4108.prefer_table,this__4108.method_cache,this__4108.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4111))
{var target_fn__4112 = temp__3695__auto____4111;

return target_fn__4112;
} else
{return cljs.core.deref.call(null,this__4108.method_table).call(null,this__4108.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4113 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4113.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4113.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4113.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4113.method_cache,this__4113.method_table,this__4113.cached_hierarchy,this__4113.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4114 = this;
return cljs.core.deref.call(null,this__4114.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4115 = this;
return cljs.core.deref.call(null,this__4115.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4116 = this;
return cljs.core.do_invoke.call(null,mf,this__4116.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4117__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4117 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4117__delegate.call(this, _, args);
};
G__4117.cljs$lang$maxFixedArity = 1;
G__4117.cljs$lang$applyTo = (function (arglist__4118){
var _ = cljs.core.first(arglist__4118);
var args = cljs.core.rest(arglist__4118);
return G__4117__delegate.call(this, _, args);
});
return G__4117;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
