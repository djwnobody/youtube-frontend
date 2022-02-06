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

// 登陆表单验证,用到jquery-validate
$("#formLogin").validate({
  // 失去焦点触发验证
  onBlur: true,
  // 默认发送表单：不
  sendForm: false,
  description: {
    email: {
      required: "邮箱不能为空",
      pattern: "邮箱不符合规则",
    },
    pass: {
      required: "密码不能为空",
      pattern: "密码不符合规则",
    },
  },
  valid: function () {
    // console.log($(this).serialize());
    // console.log($(this).serializeArray());
    // console.log($(this).serializeObj());
    http
    .post("/auth/login", $(this).serializeObj())
    .then((res) => {
      const { data, success } = res.data;
      if (success) {
        localStorage.setItem("token", data);
        Toastify({
          text: "登录成功",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        location.href = "/index.html";
      }
    });
  },
});
