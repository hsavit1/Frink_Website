require('cloud/app.js');

// app.get('*', function(req, res) { res.redirect(301, 'http://weedenjoy.com'); });

Parse.Cloud.define("saveEmail", function(request, response) {
    var email = request.params.email;
    
    if(email==undefined || email == ""){
	response.error("You must provde an email address.");
	return;
    }
    if(email=="Banana@Soup.com"){
	response.error("WTF is bananaSoup");
	return;
    }
    var emailcls = Parse.Object.extend("email");
    var checkemails = new Parse.Query(emailcls);
    checkemails.equalTo("email",email);
    checkemails.count({
	error:function(err){
	    response.error("Internal Error");
	},
	success:function(count){
	    if(count>0){
		response.error("You are already registered.");
		return;
	    }
	    var emailobj = new emailcls;
    
	    emailobj.set("email",email);
	    
	    emailobj.save(null,{
		error:function(emailobj,err){
		    response.error("Internal Error");
		},
		success:function(emailobj){
		    response.success();
		}
	    });
	}
    });
});
