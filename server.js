var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port   = process.env.PORT || 8080, // Config Ports
    router = express.Router(); // Import Router module from express

/// Routes

router.get('/', function(req,res){
    res.json({message: 'Yep, that works!'});
})



app.use('/api', router); // Regiter routes, adding the /api prefix


// Start the server
app.listen(port);
console.log('Abra kadabra on port ' + port);
