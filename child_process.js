
const cp = require('child_process');
const iconv = require('iconv-lite');

console.dir(cp);

// spawn
// 执行系统命令
const spawn = cp.spawn;
let ipconfig = spawn('ipconfig');
ipconfig.stdout.on('data', function(buffer) {
  console.log(buffer.toString());
  // 由于window命令窗口默认gbk编码，正常显示需要iconv-lite进行转码
  let text = iconv.decode(buffer, 'gbk');
  console.log(text);
});



// exec
// 同上
const exec = cp.exec;
let child = exec('dir ./ -a', function (err, stdout, stderr) {
  let text = iconv.decode(stdout, 'gbk'); // 无法decode已经编码的字符串，解码失败
  console.log(text);
});

// exec 和 spawn 的差别
// 1、spawn方法的参数需放在第二个数组参数中，exec可以写成字符串。
// 2、spawn使用二进制流与命令输出链接。需要查看大量返回数据时，最好用spawn。
// 3、exec是在命令执行完后，返回数据。
// 4、回调中，spawn返回Buffer， 而exec的参数stdout则为String类型。
// 5、由于上一条，exec的返回字符串无法解码。
