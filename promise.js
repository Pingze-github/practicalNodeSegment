
// 原生Promise
Promise = bluebird.Promise;
console.dir(Promise);


// **************************
//         Bluebird
// **************************

// bluebird的Promise。添加了许多实用方法。
const bluebird = require('bluebird');
Promise = bluebird.Promise;
console.dir(Promise);

// let wait = Promise.promisify(setTimeout); // 这是错误的，bulebird-Promise的promisify要求参数函数最后一个参数为callback。

// 正确写法1。使用原生写法。
function wait(time) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// 正确写法2。调转参数。
let wait2 = Promise.promisify((time, cb) => {
  setTimeout(cb, time);
});

async function foo() {
  await wait(1000);
  console.log('计时1结束');
  await wait2(1000);
  console.log('计时2结束');
}
foo();

// 整体使用，添加后缀
const fs = Promise.promisifyAll(require('fs'), {suffix: 'P'});

console.log(process.cwd());
process.chdir('../');
console.log(process.cwd());

(async function () {
  console.log();
  fs.readFileP('./promise.js', 'utf-8').then((c) => {
    console.log(c.length);
  })
})();


// 原生的Promise.all()。bluebird当然也支持。
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});
Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});

// bluebird独有的props()。将all()支持的array变为object
Promise.props({
  get3: p1,
  get1337: p2,
  getFoo: p3
}).then(result => {
  console.log(result); // { get3: 3, get1337: 1337, getFoo: 'foo' }
});

// reduce() 可以实现大数量任务依次执行
Promise.reduce(['buffer.js', 'package.json', 'process.js'], function(total, filePath) {
  return fs.readFileP(filePath, "utf8").then(function(contents) {
    console.log('%s: %s', filePath, contents.length);
    return total + contents.length;
  });
}, 0).then(function(total) {
  console.log('total: %s', total);
});


// reduce() 高级用例
// 这里，实现了大数量任务的依次执行，且可以用循环生成任务队列，不需要自己手写。
// 每个任务可以传递数据，但不能为每个任务设置单独的参数。
// 如需单独参数，可以实现将参数储存在列表中。

// 由于传进的数据不要求格式，也可以做成[ {func: xxx, params: []} , {} , {}, ...]的形式。

// 参数列表
let paramList = '多益网络欢迎你'.split('');

// 任务函数(返回promise)
function task(data) {
  return wait(1000).then(() => {
      data += paramList.shift();
      console.log(data);
      return data;
    }
  );
}

// 任务列表
let taskList = Array.from(new Array(paramList.length), () => {return task});

// 任务
Promise.reduce(taskList, (data, func) => {
  return new Promise((resolve) => {
    func(data).then((data) => {
      resolve(data);
    })
  });
}, '').then((data) => {
  console.log();
  console.log('所有任务完成，最后数据是：');
  console.log(data);
});

// 以上用法是为解决ES7前，只用Promise实现大数量异步任务同步执行的问题。在ES7下，问题被大大简化。

(async function() {
  let all = '';
  for (let param of paramList.slice(0)) {
    await wait(1000);
    all += param;
    console.log(all);
  }
})();




