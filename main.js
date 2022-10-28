var person = {
    name : "Radha",
    age : 20,
    email : function(){
        return "radha1384@gmail.com"
    },
    address : {
        street : "5 main st",
        city : "Boston"
    },
    children:["Rama","Hrdaya"]
}

console.log(person);
console.log(person.name);
console.log(person.email);

//to convert it to json string
person = JSON.stringify(person);
console.log(person);
 //to convert into object 
 person = JSON.parse(person)

console.log(person.address.street); 
console.log(person.children[1]);

var people = [
    {
    name:"Hrdaya",
    age:13
    },
    {
    name:"Rama",
    age:12
    },
    {
    name:"Vrinda",
    age:10
    }
]
console.log(people[0]);
console.log(people[2].name);
console.log(people[1].age);
console.log(people[0].name);

for(var i=0;i < people.length;i++){
    console.log(people[i]);
}