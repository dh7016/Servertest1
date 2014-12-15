module.exports = function(app) {
  return new loginRemote(app);
};

var loginRemote = function(app) {
  this.app = app;
};





//检查登陆用户和密码
loginRemote.prototype.authCheck = function(uid,password) {
	
	//读取login数据库中的数据
    




};
