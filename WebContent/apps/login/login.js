
var user;
var password;

function check()
{
	//alert("[javascript:login:check]");
	user = $('#user').val();
	password = $('#password').val();
	
	//alert("[javascript:login:check] user:"+user+" password:"+password);
	
	if(user==""||password==""||user==null || password == null)
		{
		 // alert("[javascript:login:check] user or password are null");
		  return false;
		}
	else
		authentication();
}

function authentication()
{
	console.log("[javascript:login:authentication]");
	//alert("[javascript:login:authentication]");
	var url;
	console.log("[javascript:login:restapi_server]" + restapi_server);
	server = restapi_server;
	api = "login";
	parameter = {"user":user ,"password":password};
	//alert("[javascript:login:authentication] serve:"+server+" api:"+api+" parameter:"+parameter);
	_remote_post_call_api(restapi_server,api,parameter,function(data){
			
		//alert("[javascript:login:authentication] return data"+data);
		
		// alert(data);
		
		if(data=="main"){
			url ="http://" + restapi_server_web + "/apps/main/main.html";
		}else if(data=="false"){
			url ="http://" + restapi_server_web + "/apps/login/login.html";
		}else if(data=="config"){
			url ="http://" + restapi_server_web + "/apps/config/config.html";
		}
		
		window.location.href=url;
		return false;
	})
	
}


$(document).ready(function(){
	//url ="http://" + restapi_server_web + "/apps/main/main.html";
	//alert("[javascript:login:authentication] url"+url);
	//window.location.href=url;
	//restapi_server=window.location.hostname;
	//restapi_server_web= window.location.hostname + ":8080/cloudportal";
	console.log("login:ready:" + restapi_server);
	if(top.location!==self.location){ 
		top.location.reload(); 
		} 
	$('input').iCheck({
		checkboxClass : 'icheckbox_flat-green',
		radioClass : 'iradio_flat-green'
	});
	
});