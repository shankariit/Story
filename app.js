
//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html');
});

app.post('/',(req,res)=>{
     const firstName = req.body.first;
     const lastName = req.body.second;
     const email = req.body.email;

     const data = {
        members:[
          {
               emil_address:email,
               status:"subscribed",
               merge_fields:{
                 FNAME:firstName,
                 LNAME:lastName
               }
          }
        ]
     };

    const jsonData = JSON.stringify(data);

    https.request(url,options,(response)=>{

    });

});

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running on port 3000');
});

//API KEY
// 72643c620d309f7373998741fbd82be9-us1
//List id
// 619e649a28
