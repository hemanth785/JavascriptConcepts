// CALL: Scenario 1-------------
const student1 = {
  firstName: "Hemanth",
  lastName: "Harikanth",
  printFullName: function(){
    console.log(this.firstName+" "+this.lastName);
  }
}

const student2 = {
  firstName: "Ganesh",
  lastName: "Naik"
}

//calling function of student1 object, by passing student2 object as context for this
//student1.printFullName.call(student2);



// ---------****************************---------------

// CALL: Scenario 2-------------
const student3 = {
  firstName: "Hemanth",
  lastName: "Harikanth",
}

const student4 = {
  firstName: "Ganesh",
  lastName: "Naik"
}

function printFullName(){
  console.log(this.firstName+" "+this.lastName);
}

//calling global function by passing object context

// printFullName()
// printFullName.call(student3)
// printFullName.call(student4)


// ---------****************************---------------

// CALL: Scenario 3- with arguments ------------
function printFullNameWithArgs(place, state){
  console.log(this.firstName+" "+this.lastName+" from "+place+"-"+state);
}

//printFullNameWithArgs.call(student3, "Bengalore", "Karnataka") //first parameter is context for this, and next all parameters are the arguments for function



// ---------****************************---------------

// APPLY: Scenario 1- with arguments ------------
function printFullNameWithApply(args){
  console.log(this.firstName+" "+this.lastName+" from "+args[0]+"-"+args[1]);
}

//printFullNameWithApply.call(student4, ["Bengalore", "Karnataka"]) //One diff with respect to call() is that, mulitple parameters will be passed as array


// ---------****************************---------------

// BIND: Scenario 1- with arguments ------------
function printFullNameWithBind(place, state){
  console.log(this.firstName+" "+this.lastName+" from "+place+"-"+state);
}

//Note: In constrast to call() and apply(), bind method will not call a function
// Instead, it'll return the copy of function on which we are calling bind, with the given context attached to it
// This returned function we need to call again.
const printFullNameFunc = printFullNameWithBind.bind(student3, "Bengalore", "Karnataka") 
printFullNameFunc();