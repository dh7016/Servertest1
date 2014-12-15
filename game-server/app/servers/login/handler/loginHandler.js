module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};




Handler.prototype.loginConnect = function(msg,session,next) {
		
	//1得到uid upassword
    var uid=msg.uid;
    var upassword=msg.upassword;

    //2在数据库中验证这个用户的登陆信息 uid密码是否正确
    




    next(null,{info:'we got connection!!!!!'});
};
