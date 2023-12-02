//callback Function

console.log("Line 1");

getStudent(1,(student)=>{
    console.log(student);
})

console.log('Line 2')

function getStudent (id,callback){
    setTimeout(() => {
        console.log('Fetching from Dataase... ');
        callback({id:id, name:"Rahim"});
    }, 2000);
}