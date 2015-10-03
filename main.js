//IIFE
(function () {


////////////////////////////////////Question 1 

console.log(items.length);

items.forEach(function (item) {
  console.log(item.price);
});

var prices = items.map (function (item) {
  return item.price;

});

//adding items together

var sum = prices.reduce( function (previous, next) {

  return previous + next;

});
console.log(sum);

var avg = sum/ items.length;
console.log(avg);

//convert to 2 decimal places
var converted = avg.toFixed(2);
console.log(converted);

//convert to string

var str = ' The average price is $' + converted+".";
  console.log(str);

  //make it show up on the page
    // find our answer element

  var answer1 = document.querySelector('#answer1');

  //create a node from our above answer
  var textNode = document.createTextNode(str);

  answer1.appendChild(textNode);


/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////Question 2

// {o_o} how this works: we use a forEach() method to iterate
// through the list and push the results of the condition(>14,<18) to an array.
// Decided against using map() because we ran into problems getting the results
// to display properly in index.html

 var itemTitles=[];
 
  var merchList=items.forEach(function(item){

      if(item.price > 14 && item.price < 18){

        itemTitles.push(item.title);
      }
  });


console.log(itemTitles);




// used innerHTML to display on 3 separate lines {o_o}

document.getElementById( 'answer2' ).innerHTML = itemTitles[0] + "<br />" + itemTitles[1]+ "<br/>" + itemTitles[2];


// ///////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////Question 3

var price = items.forEach(function(item){
  console.log(item.price);
});

var currency = items.forEach(function(item){
  console.log(item.currency_code);
})

var euro = items.map(function(item){
  if (item.currency_code !== "USD"){
    return item.title +" "+"costs"+" "+ "\xA3"+item.price+".";
  } else{
    return false;
  }
})

console.log(euro);

ccArray = euro.filter(function(item){
  return item !== false;
})

console.log(ccArray);
// console.log(ccArray.join(''));

var str= ccArray.join('');

console.log(str);

var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(str);

answer3.appendChild(textNode);


///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Question 4

var containsWood = items.filter(function(item){

  if ( item.materials.indexOf("wood") !== -1){

    return true;
  }

});

console.log(containsWood);

var wood = containsWood.map(function(item){
  return item.title+" "+"is made of wood.";
});

console.log(wood);

document.getElementById( 'answer4' ).innerHTML = 
wood[0] + "<br />" + wood[1]+ "<br/>" + wood[2]+ "</br>"+ wood[3]+ "<br/>" + wood[4];



///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Question 5
var foo=items.map(function(item){ 
 if(item.materials.length >= 8){
  return item.title+" "+"has"+" "+item.materials.length+" "+"materials:"
  }
});

var bar=items.map(function(item){ 
 if(item.materials.length >= 8){
  return item.materials;
  }
});

// console.log(foo);

var fooFilt=foo.filter(function(item){
 if ( item !== "undefined"){
    return item;
  }
})

var barFilt=bar.filter(function(item){
 if ( item !== "undefined"){
    return item;
  }
})


console.log(fooFilt);
console.log(barFilt);

document.getElementById( 'answer5' ).innerHTML = 
fooFilt[0]+ "<br/>"+"<br/>" + barFilt[0].join("<br />") 

+ "<br/>" +"<br/>"+

fooFilt[1]+ "<br/>"+"<br/>" + barFilt[1].join("<br />");
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Question 6

var iDidFilter = items.filter(function(item){
   return item.who_made === "i_did";
});

 console.log(iDidFilter.length);

 var str = iDidFilter.length +" "+ "were made by their sellers."

 console.log(str);

var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(str);

answer6.appendChild(textNode);


}());

