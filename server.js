var http=require("http");
var fs=require("fs");
var url=require("url");
var myproduct=fs.readFileSync("product.html");
var background=fs.readFileSync("background.html")
var data=fs.readFileSync("data.json");
var replacehtml=require("./replace");
var overview=fs.readFileSync("template.html");
overview=overview+"";
data=data+"";
var json=JSON.parse(data);
// console.log(json[0])
//   data=data+"";  converted to string
//  var json=JSON.parse(data); converted to Object
myproduct=myproduct+"";

//  console.log(json.length)
var server=http.createServer(function(req,res){
//    var url=req.url.split("/").pop();
     
    if(req.url===""||req.url==="/overview")
    {
      res.write(background);
      for(i=0;i<json.length;i++)
    {
      var newView=overview;
      newView =replacehtml(json[i],overview) ;
      res.write(newView);
    }
    }
    else if(req.url==="/product")
    {
        res.write(product);
    }
    else if(req.url==="/api")
    {
        res.write(data);
    }

      else
    {
      var id=url.parse(req.url,true).query.id;
           
             product = replacehtml(json[id],myproduct);
               res.write(product);
    
      
    }
    res.end();
});

           server.listen(4000,function(){
           console.log("Server is listening");
});