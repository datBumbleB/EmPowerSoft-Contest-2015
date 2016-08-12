var boughtProducts = [];
var k = 2;
var result;
$(".prod-style button").click(function() {
    boughtProducts[k++] = {
      "name" : $(this).parent().children().first().text(),
      "quantity" : $(this).parent().children('.quant').first().val()
    }
    console.log(boughtProducts[k-1]);
});

$("#buy").click(function(){
  if(k == 2)
    alert("You don't have any products in your cart");
  else if($(this).parent().children('#buyer-name').first().val() == "")
    alert("Please write your name");
  else if($(this).parent().children('#buyer-adress').first().val() == "")
    alert("Please write your adress");
  else{
    boughtProducts[0] = {"buyer-name": $(this).parent().children('#buyer-name').first().val()}; //or we could use the details form the user that is logged in.
    boughtProducts[1] = {"buyer-adress": $(this).parent().children('#buyer-adress').first().val()};
    result = JSON.stringify(boughtProducts);
    console.log(result);
    //do something with the result...
    k = 2;
    boughtProducts = [];
    alert("Purchase successful")
  }
});
