//Named Function

console.log("Line 1");

getStudent(1,showStudents)

console.log('Line 2')

function showMarks(marks){
    console.log(marks);
}

function showCourses(courses){
    console.log(courses);
    getQuizMarks(courses.courses,showMarks)
}

function showStudents(student){
    console.log(student);
    getCourses(student,showCourses);
}

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