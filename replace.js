
module.exports=function replaces(json,product){
  
product=product.replace(/%productName%/g,json.productName);
product=product.replace(/ %from%/g,json.from);
product=product.replace(/%quantity%/g,json.quantity);
product=product.replace(/%image%/g,json.image);
product=product.replace(/%price%/g,json.price); 
product=product.replace(/%nutrients%/g,json.nutrients);
product=product.replace(/%description%/g,json.description);

if(json.organic===false){
   product=product.replace(/{%NOT_ORGANIC%}/g,"not-organic");
    }
return product;
}

