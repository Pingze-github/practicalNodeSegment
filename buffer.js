
let b = new Buffer('我吃西红柿');
console.log(b);
console.log(b.length);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log( b.toString() );
console.log( b.toString('utf-8') );
console.log( b.toString('hex') );
console.log( b.toString('ascii') );
console.log( b.toString('binary') );
console.log( b.toString('base64') );
console.log( Buffer.isBuffer(b) );

// console.log( b.toString('gbk') ); Node 不原生支持GBK

// NODE支持的编码
// ascii utf8 utf16le base64 binary hex

// 字节长度。常用于Headers - Content-Length
console.log( Buffer.byteLength(b) );
console.log( Buffer.byteLength('abcd') );
console.log( Buffer.byteLength('诶必塞第') ); // 每个utf-8中文字符占3个byteLength

// POST数据是字节流，利用Buffer处理效率远高于String。





