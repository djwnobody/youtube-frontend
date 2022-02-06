$("#panelRegister").hide();
// 注册/登录切换
$("#btnRegister").click(function () {
  $("#panelRegister").show();
  $("#panelLogin").hide();
});
$("#btnLogin").click(function () {
  $("#panelRegister").hide();
  $("#panelLogin").show();
});

// 注册
