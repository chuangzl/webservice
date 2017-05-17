/**
 *
 */
var restapi_server= window.location.hostname;//"192.168.1.1";
var restapi_server_web= restapi_server + ":8080/cloudportal";
var port = 8080;

//restapi_server_web="10.63.55.:8080/cloudportal";
//restapi_server="10.10.20.161";

//restapi_server_web="10.74.85.228/cloudportal";
//restapi_server="10.74.85.228";

//UCSD_SERVER_IP= "10.74.85.151"; // "10.63.51.117"; //
UCSD_SERVER_IP= "10.63.55.10"; //

LOGIN_USER = " "
Date.prototype.format =function(format)
{
    var o = {
    "M+" : this.getMonth()+1, //month
"d+" : this.getDate(),    //day
"h+" : this.getHours(),   //hour
"m+" : this.getMinutes(), //minute
"s+" : this.getSeconds(), //second
"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
"S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
    RegExp.$1.length==1? o[k] :
    ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

/* function _remote_get_call(server,parameter,event_handler) {
	console.log( parameter );
	$.ajax({
		  //crossDomain: true,
		  type:"POST",
		  //headers: { 'Access-Control-Allow-Origin': '*' },
		  url: "http://" +  server + ":8080/cloudportal/proxy",
		  dataType:"json",
		  data: parameter
		 // username:"root"
		}).done(function(data) {
			event_handler(data);
		});

}
 */

function _remote_post_call_proxy(server,parameter,event_handler) {
	console.log( parameter );
	//alert("[javacript:main:_remote_post_call_proxy]remote get call porxy :"+JSON.stringify(parameter));
	$.ajax({
		  //crossDomain: true,
		  type:"POST",
		  //headers: { 'Access-Control-Allow-Origin': '*' },
		  url: "http://"+server+":"+port+"/cloudportal/proxy",
		  dataType:"json",
		  data: parameter
		 // username:"root"
		}).done(function(data) {
			event_handler(data);
		});

}

/* function _remote_get_workflowinput(server,parameter,event_handler) {
	console.log( parameter );
	$.ajax({
		  //crossDomain: true,
		  type:"POST",
		  //headers: { 'Access-Control-Allow-Origin': '*' },
		  url: "http://" +  server + ":8080/cloudportal/workflowinput",
		  //dataType:"json",
		  data: parameter
		 // username:"root"
		}).done(function(data) {
			event_handler(data);
		});

}
 */
/* function _remote_get_vmdatalist(server,parameter,event_handler) {
	console.log( parameter );
	$.ajax({
		  //crossDomain: true,
		  type:"POST",
		  //headers: { 'Access-Control-Allow-Origin': '*' },
		  url: "http://" +  server + ":8080/cloudportal/vmalldata",
		  dataType:"json",
		  data: parameter
		 // username:"root"
		}).done(function(data) {
			event_handler(data);
		});

} */

function _remote_get_call_api(server,api,event_handler) {
	//alert("[javacript:main:_remote_get_call_api]remote get call api :"+api);
	console.log( api );
	$.ajax({
		  //crossDomain: true,
		  type:"GET",
		  //headers: { 'Access-Control-Allow-Origin': '*' },
		  url: "http://" +  server + ":"+port+"/cloudportal/" + api,
		  //dataType:"json"
		  //data: parameter
		 // username:"root"
		}).done(function(data) {
			event_handler(data);
		});

}

function _remote_post_call_api(server,api,parameter,event_handler) {
	
	console.log( "[javacript:main:_remote_post_call_api]remote post call api :"+parameter + api);
	//alert("[javacript:main:_remote_post_call_api]remote post call api :"+api+parameter);
	$.ajax({
		  //crossDomain: true,
		  type:"POST",
		  //headers: { 'Access-Control-Allow-Origin': '*' },
		  url: "http://" +  server +":"+port+ "/cloudportal/" + api,
		 // dataType:"json",
		  async : false,
		  data: parameter
		 // username:"root"
		}).done(function(data) {
			event_handler(data);
		});

}

$('#myTab a:first').tab('show');
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

function getJsonObjects(jsonobj, name) {
  /*  var objects = [];
    for (var i in obj) {
    	console.log("json_object" + obj[i]);
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getJsonObjects(obj[i], key));
            console.log("json_object:" + obj[i][key]);
        } else if (i == key  && obj[key] == val ) {
            //objects.push(obj);
        	 return obj[key];
        }
    } */
	if (name in jsonobj) return jsonobj[name];
	  for (key in jsonobj) {
	    if ((typeof (jsonobj[key])) == 'object') {
	      var t = getJsonObjects(jsonobj[key], name);
	      if (t) return t;
	    }
	  }
	  return null;
}

function getCookie(name){
	
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
} 


