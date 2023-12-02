//callback Function

console.log("Line 1");

getStudent(1,(student)=>{
    console.log(student);
    getCourses(student,(courses)=>{
        console.log(courses);
        getQuizMarks(courses.courses,(marks)=>{
            console.log(marks);
        })
    })
})

console.log('Line 2')

function getStudent (id,callback){
    setTimeout(() => {
        console.log('Fetching from Dataase... ');
        callback({id:id, name:"Rahim"});
    }, 2000);
}

function getCourses(student,callback){
    setTimeout(() => {
        console.log('Student Courses from DataBase...');
        callback({id:student.id,name:student.name,
        courses:['Javascrtipt','Python']});

    },2000);
}

function getQuizMarks(courses,callback){
    setTimeout(() => {
        console.log('Marks...');
        callback({[courses[0]]:5,[courses[1]]:8})
    }, 1500);
}