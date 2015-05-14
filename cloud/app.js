
var express = require('express');
var app = express();

app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/', function(req, res) {
    if(req.query.succ!=undefined && req.query.succ != ""){
	res.render('emailsplash', {
	    success:true,
	    error:""
	});
	return;
    }
    res.render('emailsplash', {
	success:false,
	error:""
    });
});

app.post('/',function(req,res) {
    var email=req.body.email;
    if(email==undefined){
	res.render('emailsplash', {
	    success:false,
	    error:""
	});
	return;
    }
    Parse.Cloud.run("saveEmail",{
	email:email
    },{
	error:function(err){
	    res.render('emailsplash', {
		success:false,
		error:err.message
	    });
	},
	success:function(){
	    res.redirect('/?succ=yes')
	}
    });
});

// Attach the Express app to Cloud Code.
app.listen();
