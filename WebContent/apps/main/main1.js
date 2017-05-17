/**
 *
 */
var ucsd_server = UCSD_SERVER_IP;//"10.63.51.117";


function iFrameHeight() {
	var ifm= document.getElementById("id_childframe");
	var subWeb = document.frames ? document.frames["id_childframe"].document : ifm.contentDocument;
	if(ifm != null && subWeb != null) {
	   ifm.height = subWeb.body.scrollHeight;
	   ifm.width = subWeb.body.scrollWidth;
	}
}

function logout(){
	
	console.log("[javascript:main:logout]");
	_remote_get_call_api(restapi_server,"logout",function(data){
		//alert("log out");
		
		url ="http://" + restapi_server_web + "/apps/login/login.html";
		window.location.href=url;
		return false;
	})
	}

function GetGroups(){
	console.log("[javascript:main:GetGroups]");
	var param={};
	var paramter={"user":LOGIN_USER,"api":"getgroups","texttype":"json","param":param};;
	_remote_post_call_proxy(restapi_server,paramter,function(data){
		var datalist=data;
		return ;
	})
	
}

function AddUser(){
	
	console.log("[javascript:main:adduser]");
	
	$("#id_adduser_modal").modal("show");
	//centerModals();
}

function centerModals(){
    $('.modal').each(function(i){
        var $clone = $(this).clone().css('display', 'block').appendTo('body');    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}



$(document).ready(function(){

	//alert("hell");
	
	LOGIN_USER=getCookie("account");
	UCSD_SERVER_IP = getCookie("ucsdserver")
	//alert(UCSD_SERVER_IP);
	//login_user=document.cookie.split(";")[0].split("=")[1];
    //alert("[javascript:main1:ready] login-user:"+login_user);
    
    $("#login_user").html(LOGIN_USER);
    $("#login_user2").html(LOGIN_USER);
    $("#login_user3").html(LOGIN_USER);
    
    $('.modal').on('show.bs.modal', centerModals);
    $(window).on('resize', centerModals);
	
	console.log("hello");
	//$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/dashboard/dashboard.html?user=admin" );
	//iFrameHeight();

	$("#id_env").click(function(){
		var src = "http://" + restapi_server_web + "/apps/dashboard/dashboard.html?user=admin";
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/dashboard/dashboard.html?user=admin" );
		//$("#id_childframe").attr("src","dashboard.html" );	

          return true;
    });
	
	$("#id_service_vm_esxi").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/service_vm_esxi/service_vm_esxi.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/service_order.html?user=admin" );
        return true;
    });
	$("#id_service_vm_openstack").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/service_vm_openstack/service_vm_openstack.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/service_order.html?user=admin" );
        return true;
    });
	
	$("#id_service_app").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/service_vm_app/service_vm_app.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/service_order.html?user=admin" );
        return true;
    });
	
	$("#id_service_wf").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/service_wf/service_wf.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/service_order.html?user=admin" );
        return true;
    });
	$("#id_service_sf").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/service_factory/service_factory.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/service_order.html?user=admin" );
        return true;
    })
	$("#id_instants").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/instants/instants.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/vms.html?user=admin" );
        return true;
    });
	$("#id_app_instants").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/app_instants/app_instants.html?user=admin" );
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/vms.html?user=admin" );
        return true;
    });
	$("#id_myorder").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/myorder/myorder.html?user=admin" );

		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );

        return true;
    });
	$("#id_app_order").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/app_order/app_order.html?user=admin" );

		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });

	$("#id_networkl4l7").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/service_network/service_network.html?user=admin" );

		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });

	$("#id_myapprove").click(function(){
		$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/myapprove/myapprove.html?user=admin" );

		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });
	$("#id_super_ucsd").click(function(){
		$("#id_childframe").attr("src","http://" + "10.63.51.133" + "/app/cloudmgr/cloudmgr.jsp" );

		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });   https://10.63.51.254/

    $("#id_super_openstack").click(function(){
    		$("#id_childframe").attr("src","http://10.63.51.133/dashboard/" );

    		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
            return true;
    });

	$("#id_super_ucsm").click(function(){
		//$("#id_childframe").attr("src","http://10.63.50.11" );
		window.open("http://10.63.50.11");
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
	});

	$("#id_super_vcenter").click(function(){
		//$("#id_childframe").attr("src","https://10.63.51.144:9443/vsphere-client/" );
		window.open("https://172.16.0.70:9443/vsphere-client/");
		//$("#page-wrapper").load("http://" + restapi_server_web + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
	});

    $("#id_super_apic").click(function(){

    	//$("#id_childframe").attr("src","https://10.63.51.254/" );
    	window.location.href="https://172.16.0.2";
    	//window.open("https://10.74.85.71/");
    	//$("#page-wrapper").load("http://" + restapi_server + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });

    $("#id_cliqr").click(function(){

    	//$("#id_childframe").attr("src","https://10.63.51.254/" );
    	//window.location.href="https://junxie.cliqr.com";
    	$("#id_childframe").attr("src","https://junxie.cliqr.com" );
    	//window.open("https://10.74.85.71/");
    	//$("#page-wrapper").load("http://" + restapi_server + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });
    
    $("#id_security").click(function(){

    	//$("#id_childframe").attr("src","https://10.63.51.254/" );
    	window.location.href="https://10.75.50.84/";
    	//$("#id_childframe").attr("src","https://10.75.50.84/" );
    	//window.open("https://10.74.85.71/");
    	//$("#page-wrapper").load("http://" + restapi_server + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });
    
    $("#id_storage").click(function(){

    	//$("#id_childframe").attr("src","https://10.63.51.254/" );
    	window.open("http://10.75.50.78");
    	//window.open("https://10.74.85.71/");
    	//$("#page-wrapper").load("http://" + restapi_server + ":8080/ucsdportal/pages/monitor.html?user=admin" );
        return true;
    });
    $("#project_list").click(function(){

    	$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/project_ava/project_ava.html?user=admin" );
        return true;
    });
    $("#project_instance").click(function(){

    	$("#id_childframe").attr("src","http://" + restapi_server_web + "/apps/project_inst/project_inst.html?user=admin" );
        return true;
    });

});