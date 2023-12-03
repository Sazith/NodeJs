// Real Life
// Promise -> Pending
// Pending -> Successful -> Fulfil
// Pending -> Failure

// Jaascript Promise
// Promise -> Async Operation (Initial State : Pending)
// Pending -> Successful => Resolved
// Pending -> Failure => Rejected

const p = new Promise((resolve,reject) =>{
    // Async Operation
    setTimeout(() => {

        resolve('The Promise is successful|');

    }, 2000);

   // reject('The Promise is failure');
})

console.log(p);

p
.then((result)=>{console.log(result);})
.catch((error)=>{
    console.log(error);
})

console.log('After :....');