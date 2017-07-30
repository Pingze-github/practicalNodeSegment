// 常用基本代码



// TODO child_proceess 模块的几种用法
const cp = require('child_process');
const spawn = cp.spawn;
//let ls_var = spawn('ls', ['-lh', '/var']);
let ls_var = spawn('ipconfig');


// 查看系统信息
const os = require('os');
console.log(os.type());
console.log(os.platform());


// 规范化字符串路径
// 分割符统一转为\
let path = require('path');
let filePath = 'c:\\Program Files (x86)/Common Files/System';
console.log(path.normalize(filePath));






