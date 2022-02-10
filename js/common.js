// dayjs 注册插件
dayjs.extend(window.dayjs_plugin_relativeTime);
// art-template 注册过滤器
template.defaults.imports.relativeTime = function (value) {
  return dayjs().to(dayjs(value));
};

// serialize 获取到的?email=xxx.xxx&password=xxxxxx 变为 {email:xxx}
function query(str) {
  str = str.replace("?", "");
  let arr = str.split("&");
  let obj = {};
  arr.forEach((item) => {
    let newArr = item.split("=");
    obj[newArr[0]] = newArr[1];
  });
  return obj;
}

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
