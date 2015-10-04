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


//checking what prints for item.price and item.currency_code
var price = items.forEach(function(item){
  console.log(item.price);
});

var currency = items.forEach(function(item){
  console.log(item.currency_code);
})

//creating an array of items that do not hav USD as currency code 
//and returning a string within that array
var euro = items.map(function(item){
  if (item.currency_code !== "USD"){
    return item.title +" "+"costs"+" "+ "\xA3"+item.price+".";
  } else{
    return false;
  }
})

console.log(euro);

//fitlering out all the undefined objects within the array

ccArray = euro.filter(function(item){
  return item !== false;
})

console.log(ccArray);
// console.log(ccArray.join(''));

//creating a string from the array
var str= ccArray.join('');

console.log(str);

//getting answer to display on page by creating a node
//and passing it the string
var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(str);

answer3.appendChild(textNode);


///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Question 4


// item.materials.indexOf("wood") ===>
// NOT item.indexof.... bc...
//We are dealing with OBJECTS within an array.
var containsWood = items.filter(function(item){

  if ( item.materials.indexOf("wood") !== -1){

    return true;
  }

});

console.log(containsWood);


//creating an array and returning a string within
//that array

var wood = containsWood.map(function(item){
  return item.title+" "+"is made of wood.";
});

console.log(wood);

//since we are displaying an array and a node
//only accepts strings, we are forced to use
//.innerHTML
document.getElementById( 'answer4' ).innerHTML = 
wood[0] + "<br />" + wood[1]+ "<br/>" + wood[2]+ "</br>"+ wood[3]+ "<br/>" + wood[4];



///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Question 5

//creating a string within an array that returns the item title
//along with the number of materials it uses
var foo=items.map(function(item){ 
 if(item.materials.length >= 8){
  return item.title+" "+"has"+" "+item.materials.length+" "+"materials:"
  }
});

//in order to format that answer correctly,
//we created an additional array to display under the first one...
// this array contains the list of materials.
var bar=items.map(function(item){ 
 if(item.materials.length >= 8){
  return item.materials;
  }
});

// console.log(foo);


//filtering out the undefined objects
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

//using inner html to format the answer correctly. used join to create a string
//for the list of materials. 
document.getElementById( 'answer5' ).innerHTML = 
fooFilt[0]+ "<br/>"+"<br/>" + barFilt[0].join("<br />") 

+ "<br/>" +"<br/>"+

fooFilt[1]+ "<br/>"+"<br/>" + barFilt[1].join("<br />");
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Question 6


//fitler the array for item.who_made === "i_did"
var iDidFilter = items.filter(function(item){
   return item.who_made === "i_did";
});

 console.log(iDidFilter.length);

//creating string for the answer
 var str = iDidFilter.length +" "+ "were made by their sellers."

 console.log(str);

//creating node to display answer on page
var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(str);

answer6.appendChild(textNode);


}());

