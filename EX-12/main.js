// EXERCISE 12: Write a for...in loop to iterate over the student object you created above

// Your code here:
let student = {
    name : "Sinh",
    age : 19,
    major : "CS",
}
for ( let key in student){
    console.log(key + " : " + student[key])

}