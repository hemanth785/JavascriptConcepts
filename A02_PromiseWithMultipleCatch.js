/*
* Promise definition: 
*     - "Promise is a 'object' representing the 'eventual completion or failure' of an 'asynchronus operation' "
*/

//helper function
function validateCart(){
  return true;
}

//return function from the function
function createOrder(){
  const promise = new Promise(function(resolve, reject){
    //validate cart
    if(!validateCart()){
      const error = new Error("Cart is not valid")
      reject(error)
    }

    //Create order in database, which returns orderId
    const orderId = "5534n34kj5";
    if(orderId){
      setTimeout(function(){
        resolve(orderId);
      }, 3000)
    }

    
  })

  return promise;
}

//function return payment related promise
function makePayment(orderId){
  const promise = new Promise(function(resolve, reject){
    paymentInfo="pay_84foi489jf";
    resolve(paymentInfo);
  })

  return promise;
}


//calling function which returns promise
createOrder()
  .then(function(orderId){
    console.log("OrderId: "+orderId);
    return orderId;   //Here it is important to return either value or promise to be resolved for the next function in chaining
  })
  .catch(function(err){
    console.log("Issue in create order: "+err.message);
  })
  .then(function(orderId){
    return makePayment(orderId);
  })
  .catch(function(err){
    console.log("Issue in Payment: "+err.message);
  })
  .then(function(paymentInfo){
    console.log("paymentInfo: "+paymentInfo);
  })
  .catch(function(err){
    console.log(err.message);
  })

//Note: If in some cases, even if one step results in error, and if we want to contiue with next steps, 
//then we have to use catch block after every then block

console.log("Called create order function---->")