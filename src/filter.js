
/**
 * 格式化时间
 * 
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDate = (str) => {
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {

        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
}

     /**
     * //format可空，默认YYYY-MM-DD hh:mm:ss，timeStamp可空，默认当前时间
      //timeUtil.parseTime('YYYY-MM-DD hh:mm:ss',new Date().getTime()) ->"2016-08-03 16:14:12"
     * @author bajian
     * @param  
     * @return 
     */
export const parseTime = (timeStamp,format) => {
    if ((timeStamp+'').length==10) {
        timeStamp=timeStamp*1000
    }

        var date = new Date(timeStamp||Date.now()),
        o = { 
            'M+' : date.getMonth() + 1, //month 
            'D+' : date.getDate(), //day 
            'h+' : date.getHours(), //hour 
            'm+' : date.getMinutes(), //minute 
            's+' : date.getSeconds(), //second 
            'S' : date.getMilliseconds() //millisecond 
        },
        format=format||'YYYY-MM-DD hh:mm:ss';

        if(/(Y+)/.test(format)) {
            format = format.replace(RegExp.$1, 
                (date.getFullYear() + '').substr(4 - RegExp.$1.length)); 
        } 

        for(var k in o) { 
            if (new RegExp('('+ k +')').test(format)) { 
                format = format.replace(RegExp.$1, 
                    RegExp.$1.length == 1 ? o[k] : ('00'+ o[k]).substr((''+ o[k]).length)); 
            } 
        }
        return format; 
    }



/*
 byte
 */
export const bytesToSize = function(bytes) {
    if (!bytes) return '0B';

    var k = 1024,
    sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
    let size=bytes / Math.pow(k, i);
    if (i<2) 
        size=Math.round(size)
    else
        size=size.toFixed(1)


    return  size+ sizes[i]; 
}

