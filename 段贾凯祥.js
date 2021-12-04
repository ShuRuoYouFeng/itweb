/*window.onload=function(){
	var div3=document.getElementById('div3');
	var divdiv3=document.getElementById('divdiv3');

}









/*window.onload=function(){
	var Lis=document.getElementByTagName("li");
	for (var i=0, i<Lis.length;i++){
		Lis[i].onmouseover=function(){
		var u=this.getElementByTagName("ul")[0];
			u.style.display="block";
			AddH(i,id);
}
Lis[i].onmouseout=function(){
var u=this.getElementByTagName("ul")[0];
u.style.display="block";
AddH(i,id);
}
}
}
function AddH(){
setTimeOut();
}
function SubH(){
setTimeOut();
}

/*window.onload=function(){
	var Lis=document.getElementsByTagName("li");
	for (var i =0;i< Lis.length ; i++) {
		Lis[i].onmouseover=function(){
			var u=this.getElementsByTagName("ul")[0];
			u.style.display="block";
			ChangH(u.id,1);
		}
		Lis[i].onmouseleave=function(){
			var u=this.getElementsByTagName("ul")[0];
			ChangH(u.id,-1)
		}
	}
}
function ChangH(id,count){
	 var ulList=document.getElementById(id);
	 var h=ulList.offsetHeight;
	 h+=count;
	 if (count>0){
	 	if(h<=1000){
	 		ulList.style.height=h+"px";
	 		setTimeout("ChangeH('"+id+"',1)",10);
	 	}
	 	else{
	 		return;
	 	}
	 }
	 else{
	 	if(h>0){
	 		ulList.style.height=h+"px";
	 		setTimeout("ChangeH('"+id+"',-1)",10);
	 	}
	 	else{
	 		ulList.style.display="none";
	 		return;
	 	}
	 }
}

$(document).ready(function (){
	$(".top-nav li").mousemove(function(){
		$(this).find("ul").slideDown("1000");
	});
	$(".top-nav li").mouseleave(function(){
		$(this).find("ul").sildeUp("slow")	})
})*/
	




function showsubmenu(li){
	var submenu=li.getElementsByTagName("ul")[0];
	submenu.style.display="block";
}

function hidesubmenu(li){
	var submenu=li.getElementsByTagName("ul")[0];
	submenu.style.display="none";
}
