//Replacing callback with Promise

console.log("Line 1");

const p = getStudent(1);

p.then((student)=>{
    console.log(student);
    return getCourses(student);
})
.then((courses)=>{
    console.log(courses);
    return getQuizMarks(courses.courses)
})
.then((marks)=>{
    console.log(marks);
});

console.log('Line 2')

function getStudent (id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Fetching from Dataase... ');
            resolve({id:id, name:"Rahim"});
        }, 2000);
    });
    
}

function getCourses(student){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Student Courses from DataBase...');
            resolve({id:student.id,name:student.name,
            courses:['Javascrtipt','Python']});
    
        },2000);
    })
}

function getQuizMarks(courses){
    const p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Marks...');
            resolve({[courses[0]]:5,[courses[1]]:8})
        }, 1500);
    });
    return p;
}