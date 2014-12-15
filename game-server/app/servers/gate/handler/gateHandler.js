module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};



//GATE


Handler.prototype.gateConnect=function(msg,session,next) {
	//1验证登陆信息合法性
	/*var uid=msg.uid;
	var upassword=msg.upassword;
  	//uid不合法 返还500
	if(!uid) {
		next(null,{code:500
		});
		return;
	}
	//upassword不合法 返还501
	if (!upassword) {
		next(null,{code:501
		});
		return;
	};

	//2分配用户到login服务器
	var loginServers = this.app.getServersByType('login');
	//如果当前没有服务器 返还503
	if(!loginServers || loginServers.length === 0 ) {
		next(null, {code: 503});
		return;
	}

	//有服务器分配服务器 返还服务器地址 端口和 通过code
	var loginServer = dispatcher.dispatch(uid, loginServers);
  	next(null, {code:100 host: loginServer.host, port: loginServer.clientPort});*/

  	next(null, {code:100 host:'host get', port: 'port get'});
}