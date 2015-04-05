function justFindTheFreakingThing(thingYourLookingFor) {
  item = $('#' + thingYourLookingFor);
  console.log("Tried by id : " + item);  
  
  if(isItNullOrNot(item)) {
    item = $('.' + thingYourLookingFor);
    console.log("Tried by class : " + item);
    
    if(isItNullOrNot(item)) {
      item = document.getElementsByName(thingYourLookingFor)
      console.log("Tried by name - this better work : " + item);
    }
  }

  if(isItNullOrNot(item)) {
    console.log("This will never happen.")
  }

  item = $(item); // don't know what this does
  
  // fixing jquery bug where sometimes it finds more things
  if($.isArray(item)) {
    item = item[0];
  }

  debugger;
  
  return item;
}

function isItNullOrNot(something) {
  console.log("Is this null? or not " + something == null || something == "undefined");
  return something == null || typeof something == 'undefined';
}