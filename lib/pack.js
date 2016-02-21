
module.exports = pack;


var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}


function pack(uuid_lib) {
    var ov1 = uuid_lib.v1;
    var ov4 = uuid_lib.v4;

    uuid_lib.v1 = pfn(ov1);
    uuid_lib.v4 = pfn(ov4);
    uuid_lib.unparse = unparse;
    

    function pfn(_fn) {
      return function(options, buf, offset) {
        if (buf) {
          return _fn(options, buf, offset);
        } else {
          var buf = new Buffer(16);
          _fn(null, buf);
          return unparse(buf);
        }
      }
    }

    return uuid_lib;
};


function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }