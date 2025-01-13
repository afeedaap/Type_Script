//infer types(implicit types)

// let username="afeeda";
// username=0;
// let subcribers=30_000;
// subcribers="addddd";

//defining types (explicit types)
// let username:string="debug";
// let subcribers:number=30_000;
// let issubscribed:boolean=true;
// let skills:string[]=["js","react","ts"];
// let count:number[]=[1,2,3,4]
// let emptystring:[]=[]

// let userDetail:{name:string;age:number;salary:number}={name:"debug",age:34,salary:3000};
// userDetail.age=56;
// interface
// interface Details{ 
//     name:string;
//     age:number;
//     salary:number;
//     getName:()=>void;

// }
// let userDetail:Details={
//     name:"afeeda",
//     age:28,
//     salary:3000,
//     getName(){
//         console.log(this.name);
        
//     }

    
// };
// let userDetail1:Details={
//     name:"adhila",
//     age:24,
//     salary:3000,
//     getName(){
//         console.log(this.name);
        
//     }
    
// };

// type Details
// type Details = {
//     name: string;
//     age: number;
//     place: string;
// };

// let userDetails: Details = {
//     name: "afeeda",
//     age: 28,
//     place: "kariyad",
// };
// console.log(userDetails)

//union type or optinal
// let skills:(string|number|boolean)[]=["js","ts","react",1,2,3,false];
// // optional
// type Details={
//     name:string;
//     age:number;
//     place?:string;
//     getDetails?:()=>void;
// }
// let userDetas:Details={
//     name:"afeda",
//     age:28,
   

// }

//functions

type Details={
    name:string;
    age:number;
    place?:string;
    getDetails?:()=>void;
}
let userDeta:Details={
    name:"afeda",
    age:28,
   

} 
// function getuser(userDetas:Details){
//     return userDetas.age
// }
// getuser(userDetas)
// using inline when not need code reusable
// function getuser({name,age}:{name:string;age:number}){
//     return name
// }
// getuser({name:"afeeda",age:28})

// function getuser(userDetails:Details):number|string{
//     return userDetas.name
// }
// const newvalue=getuser(userDetas)
// newvalue.toString()
//we dont want to return we can use void for purpose of console like that
// function getuser(userDetails:Details):void{
//     console.log(userDetas.name) 
// }
// getuser(userDetas)

// function getuser(userDeta:Details){
//     return {name:userDeta.name,age:userDeta.age}
// }
// getuser(userDeta)

//named types
type  statusType="pending "|"completed"|"failed";
let currentstatus:statusType="pending ";
//from api
const response="pending";
if(response==="pending"){
    currentstatus="pending "
}
