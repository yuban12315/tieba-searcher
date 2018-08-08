const iconv=require('iconv-lite')

class Util {
    static encode(str){
        const buf=iconv.encode(str,'')
    }
}

module.exports=Util