// serialize 获取到的email=xxx%40xxx.xxx&password=xxxxxx 变为 {email:xxx}
// [{name: 'email', value: 'xxx@xxx.xxx'}
// {name: 'password', value: 'xxxxxx'}]  变为 {email:xxx}
$.prototype.serializeObj = function () {
  console.log($(this).serializeArray());
  let obj = {};
  $(this)
    .serializeArray()
    .forEach((item) => {
      obj[item.name] = item.value;
    });
  return obj;
};
