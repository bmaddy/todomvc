goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4132){
var vec__4133__4134 = p__4132;
var k__4135 = cljs.core.nth.call(null,vec__4133__4134,0,null);
var v__4136 = cljs.core.nth.call(null,vec__4133__4134,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4135.toLowerCase()),v__4136]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4167 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4137 = this$;

if(cljs.core.truth_(and__3546__auto____4137))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4137;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4138 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4138))
{return or__3548__auto____4138;
} else
{var or__3548__auto____4139 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4139))
{return or__3548__auto____4139;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4168 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4140 = this$;

if(cljs.core.truth_(and__3546__auto____4140))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4140;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4141 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4141))
{return or__3548__auto____4141;
} else
{var or__3548__auto____4142 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4142))
{return or__3548__auto____4142;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4169 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4143 = this$;

if(cljs.core.truth_(and__3546__auto____4143))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4143;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4144 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4144))
{return or__3548__auto____4144;
} else
{var or__3548__auto____4145 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4145))
{return or__3548__auto____4145;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4170 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4146 = this$;

if(cljs.core.truth_(and__3546__auto____4146))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4146;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4147 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4147))
{return or__3548__auto____4147;
} else
{var or__3548__auto____4148 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4148))
{return or__3548__auto____4148;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__4167.call(this,this$);
case  2 :
return connect__4168.call(this,this$,opt1);
case  3 :
return connect__4169.call(this,this$,opt1,opt2);
case  4 :
return connect__4170.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4172 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4149 = this$;

if(cljs.core.truth_(and__3546__auto____4149))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4149;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4150 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4150))
{return or__3548__auto____4150;
} else
{var or__3548__auto____4151 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4151))
{return or__3548__auto____4151;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4173 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4152 = this$;

if(cljs.core.truth_(and__3546__auto____4152))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4152;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4153 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4153))
{return or__3548__auto____4153;
} else
{var or__3548__auto____4154 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4154))
{return or__3548__auto____4154;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4174 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4155 = this$;

if(cljs.core.truth_(and__3546__auto____4155))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4155;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4156 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4156))
{return or__3548__auto____4156;
} else
{var or__3548__auto____4157 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4157))
{return or__3548__auto____4157;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4175 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4158 = this$;

if(cljs.core.truth_(and__3546__auto____4158))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4158;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4159 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4159))
{return or__3548__auto____4159;
} else
{var or__3548__auto____4160 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4160))
{return or__3548__auto____4160;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4176 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4161 = this$;

if(cljs.core.truth_(and__3546__auto____4161))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4161;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4162 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4162))
{return or__3548__auto____4162;
} else
{var or__3548__auto____4163 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4163))
{return or__3548__auto____4163;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__4172.call(this,this$,opt);
case  3 :
return transmit__4173.call(this,this$,opt,opt2);
case  4 :
return transmit__4174.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4175.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4176.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4164 = this$;

if(cljs.core.truth_(and__3546__auto____4164))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4164;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4165 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4165))
{return or__3548__auto____4165;
} else
{var or__3548__auto____4166 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4166))
{return or__3548__auto____4166;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4178){
var vec__4179__4180 = p__4178;
var k__4181 = cljs.core.nth.call(null,vec__4179__4180,0,null);
var v__4182 = cljs.core.nth.call(null,vec__4179__4180,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4181.toLowerCase()),v__4182]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4183 = null;
var G__4183__4184 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4183__4185 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4183__4186 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4183__4187 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4183__4188 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4183 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4183__4184.call(this,this$,uri);
case  3 :
return G__4183__4185.call(this,this$,uri,method);
case  4 :
return G__4183__4186.call(this,this$,uri,method,content);
case  5 :
return G__4183__4187.call(this,this$,uri,method,content,headers);
case  6 :
return G__4183__4188.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4183;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4190){
var vec__4191__4192 = p__4190;
var k__4193 = cljs.core.nth.call(null,vec__4191__4192,0,null);
var v__4194 = cljs.core.nth.call(null,vec__4191__4192,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4193.toLowerCase()),v__4194]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__4201 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4195 = this$;

if(cljs.core.truth_(and__3546__auto____4195))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4195;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4196 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4196))
{return or__3548__auto____4196;
} else
{var or__3548__auto____4197 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4197))
{return or__3548__auto____4197;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4202 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4198 = this$;

if(cljs.core.truth_(and__3546__auto____4198))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4198;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4199 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4199))
{return or__3548__auto____4199;
} else
{var or__3548__auto____4200 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4200))
{return or__3548__auto____4200;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__4201.call(this,this$,service_name,fn);
case  4 :
return register_service__4202.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4204 = null;
var G__4204__4205 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4204__4206 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4204__4207 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4204__4208 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4204 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4204__4205.call(this,this$);
case  2 :
return G__4204__4206.call(this,this$,on_connect_fn);
case  3 :
return G__4204__4207.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4204__4208.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4204;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__4210 = null;
var G__4210__4211 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4210__4212 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4210 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4210__4211.call(this,this$,service_name,fn);
case  4 :
return G__4210__4212.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4210;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__4223 = (function (){
var temp__3698__auto____4214 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4214))
{var config__4215 = temp__3698__auto____4214;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4215)));
} else
{return null;
}
});
var xpc_connection__4224 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4216){
var vec__4217__4218 = p__4216;
var k__4219 = cljs.core.nth.call(null,vec__4217__4218,0,null);
var v__4220 = cljs.core.nth.call(null,vec__4217__4218,1,null);

var temp__3698__auto____4221 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4219);

if(cljs.core.truth_(temp__3698__auto____4221))
{var field__4222 = temp__3698__auto____4221;

return cljs.core.assoc.call(null,sum,field__4222,v__4220);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4223.call(this);
case  1 :
return xpc_connection__4224.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
