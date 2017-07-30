
// 应用程序当前目录
console.log( process.cwd() );
// 改变当前目录
process.chdir('../');
console.log(process.cwd());


// Node版本
console.log(process.version);
console.log(process.versions);

// Node配置
console.log(process.config);

// 进程id
console.log(process.pid);

// 可以确定Node脚本启动的位置
console.log(process.title);

// 可执行文件位置（Node位置）
console.log(process.execPath);

// 启动参数
console.log(process.argv);

// 系统信息 - 平台
console.log(process.platform);
// 系统信息 - CPU位数
console.log(process.arch);

// 环境变量
console.log(process.env);

// 标准输出流(不换行的输出)
process.stdout.write('这句话');
process.stdout.write('在一行中');
process.stderr.write('有错误');

// 标准输入流
process.stdin.setEncoding = 'utf-8';
process.stdin.on('readable', function() {
  let chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(chunk);
  }
});


// 退出
// process.exit();
// process.kill(process.pid);

// 异步操作
process.nextTick(() => {
  console.log('now next tick')
});
