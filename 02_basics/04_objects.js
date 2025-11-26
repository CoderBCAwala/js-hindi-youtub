// const tinderUser = new Object()
const tinderUser ={}


tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)



const ragularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname :{
            firstname : "charan ",
            lastname : "rajput"
        }
    }
}

// console.log(ragularUser.fullname.userfullname.lastname);



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);





const course = {
    coursename : " js in hindi",
    price: "999",
    courseInsturctor :"hitesh sir"
}

// course.courseInsturctor

const {courseInsturctor: techar} = course

console.log(techar)


// const navbar = ({company}) => {

// }

// navbar(company= "hitesh")


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
// }


