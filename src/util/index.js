
// 对象转换为数组
export function ObjToArr(obj){
	var arr = []; //定义数组
	for (var i in obj) {
	    arr.push(obj[i]); 
	}
	return arr
}






// 计算时间差
export function handleDate(dateTimeStamp) {
	
	var thisTime = timeFormat(dateTimeStamp);
	thisTime = thisTime.replace(/-/g, '/');
	var time = new Date(thisTime);
	time = time.getTime();

	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
    var result = '';
    var now = new Date().getTime();
    var diffValue = now - time;
    if (diffValue < 0) {
        console.log("时间不对劲,服务器创建时间与当前时间不同步");
        return result = "刚刚";
    }
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (parseInt(dayC) > 30) {
        result = "" + timeFormat(dateTimeStamp);
    }else if(parseInt(dayC) > 1) {
        result = "" + parseInt(dayC) + "天前";
    }else if (parseInt(dayC) === 1) {
        result = "昨天";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
    } else if (minC >= 5) {
        result = "" + parseInt(minC) + "分钟前";
    } else{
        result = "刚刚";   
    }

    return result;
}



function timeFormat(time) {
    var d = new Date(time);
 
    var year = d.getFullYear();       //年  
    var month = d.getMonth() + 1;     //月  
    var day = d.getDate();            //日  
 
    var hh = d.getHours();            //时  
    var mm = d.getMinutes();          //分  
    var ss = d.getSeconds();           //秒  
 
    var clock = year + "/";
 
    if (month < 10)
        clock += "0";
 
    clock += month + "/";
 
    if (day < 10)
        clock += "0";
 
    clock += day + " ";
 
    if (hh < 10)
        clock += "0";
 
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";
 
    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
}