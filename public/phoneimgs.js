
var imageurls = ['mapexample.png','listingexample.png','homexample.png','listexample.png','profileexample.png'];
var fadeTime = 2000;
var intervalTime = 5000;

var iphoffset = 0;
var andoffset = 0;

function change(identif,imgurl){
	var fg=$("#"+identif+"fg");
	var bg=$("#"+identif+"bg");
	if(fg.css("display")=="none"){
		fg.css("background-image",'url('+imgurl+')')
		fg.fadeIn(fadeTime);
	}else{
		bg.css("background-image",'url('+imgurl+')');
		fg.fadeOut(fadeTime);
	}
}
$(document).ready(function(){
	iphoffset=0;
        andoffset=~~(imageurls.length/2);
	$("#iphoneexamplefg").css("background-image",'url('+imageurls[iphoffset]+')')
	$("#androidexamplefg").css("background-image",'url('+imageurls[andoffset]+')')
	//setInterval
	setInterval(function(){
		iphoffset = iphoffset + 1;
		if(iphoffset>=imageurls.length){
			iphoffset=0;
		}
		change("iphoneexample",imageurls[iphoffset]);
		andoffset = andoffset + 1;
		if(andoffset>=imageurls.length){
			andoffset=0;
		}
		change("androidexample",imageurls[andoffset]);
	},intervalTime);
})
