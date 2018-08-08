const request = require('superagent-charset')(require('superagent')),
    console = require('tracer').console()



class Searcher {
    constructor() {
        this.base_url = 'http://tieba.baidu.com'
        this.browser_msg = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

    set_name(name) {
        this.name = name
    }

    set_key(wordlist, user) {
        this.wordlist = wordlist
        this.user = user
    }

    get_url() {
        let str = `${this.base_url}/f/search/res?ie=utf-8&kw=${this.name}&qw=`
        if (this.wordlist.length > 1) {
            for (const i of this.wordlist) {
                str += encodeURIComponent(" ")
                str += i
            }
        } else {
            str += this.name
        }
        str+='&red_tag=q1069783350'
        console.log(str)
        return str
    }

    async search() {
        try {
            const res = await request.get(this.get_url()).charset('gbk').set(this.browser_msg)
            const text = res.text
            console.log(text)
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new Searcher