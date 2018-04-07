/*
 * Created by Strawmanbobi
 * 2015-03-02
 */

exports.randomChar = function(l) {
    var x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
    var tmp = "";
    for(var i = 0;i < l; i++)  {
        tmp += x.charAt(Math.ceil(Math.random()*100000000)%x.length);
    }
    return  tmp;
};

exports.randomNumber = function(l) {
    var x = "0123456789";
    var tmp = "";
    for(var i = 0;i < l; i++)  {
        tmp += x.charAt(Math.ceil(Math.random()*100000000)%x.length);
    }
    return  tmp;
};

exports.validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

exports.getHashCode = function (str, caseSensitive) {
    if(!caseSensitive){
        str = str.toLowerCase();
    }
    var hash = 1315423911, i, ch;
    for (i = str.length - 1; i >= 0; i--) {
        ch = str.charCodeAt(i);
        hash ^= ((hash << 5) + ch + (hash >> 2));
    }

    return (hash & 0x7FFFFFFF);
};

function rnd() {
    var today = new Date();
    var seed = today.getTime();
    seed = (seed * 9301 + 49297) % 233280;
    return seed / (233280.0);
}

function cr(number) {
    return Math.ceil(rnd() * number);
}

function isNumber() {
    var r = /^[0-9]*[1-9][0-9]*$/;
    return r.test(str);
}