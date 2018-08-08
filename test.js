const str="中文"

console.log(encodeURIComponent(str))
console.log(typeof encodeURIComponent(str))
const  str1=encodeURIComponent(str)
const  str2="%E4%B8%AD%E6%96%87"
console.log(decodeURI(str2))