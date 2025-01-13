//function overloading
// function add(num1:number|string|boolean,num2:number|string|boolean){
//     if(typeof num1==="string"|| typeof num2==="string"){
//         return num1+""+num2;
//     }
// }
// console.log(add(2,3));
// console.log(add("2","2"));
//function overloading
//  function adding(num1:number,num2:number):number;
//  function adding(num1:string,num2:string):string;
//  function adding(num1:any,num2:any):any{
//     return num1+num2
//  }
//  adding(2,3)
//  console.log(adding(2,3));
//  adding()
//  console.log("2","4");
//generic
// function getage(age:number|string):string|number{
//     return age
// } 
// function getage<T>(age:T):T{
//     return age;
// }
// getage<string>("20");
// getage<number>(20);
// type userDetail={
//     name:string;
//     age:number
// }
// const userDetail:userDetail={
//     name:"afeeda",
//     age:28
// }
// type adminDetail={
//     name:string;
//     role:string;
// }
// const adminDetail:adminDetail={
//     name:"adhila",
// role:"admin"
// }
// function getDetails<T>(details:T):T{
//     return details
// }
// const userValue=getDetails<userDetail>(userDetail);
// const adminValue=getDetails<adminDetail>(adminDetail)
// adminValue.
//when we have same attribute for diffrent we can merge for get common attribute
// type userDetail={
//     name:string;
//     age:number;
// }
// type adminDetail=userDetail&{
//     role:string;
// }
// const userDetail:userDetail={
//     name:"afeeda",
//     age:28
// }
// const adminDetail:adminDetail={
//     name:"adhila",
//     age:25,
//     role:"admin"
// }
//enums
// type statusType="pending"|"completed"|"failed";
// const enum statusType{
//    PENDING="pending",
//    COMPLETED="completed",
//    FAILED="failed"
// }
// function getstatus(orderID:string,status:statusType){
//     console.log(orderID,"==",status)
// }
// getstatus("12233",statusType.COMPLETED)
//as const or type casting
// let username="afeeda " as const;
//  username="afeeda"
//keyof/typeof
;
// const userDetail:Users={
//     name:"afeeda",
//     age:28
// }
// when we need readonly all attribute using readonly
// const userDetail:readonly<Users>={
//     name:"afeeda",
//     age:28
// }
//when we need partially change the any attribute using partial type
// const userDetail:Partial<Users>={
//     name:"afeeda",
//     age:28
// }
//reuired ultilty typr
// const userDetail:Required<Users>={
//     name:"afeeda",
//     age:28
// }
// const userDetail:Pick<Users,"name"|"age">={
//     name:"afeeda",
//     age:28
// }
//omitt
// const userDetail:Omit<Users,"salary">={
//     name:"afeeda",
//     age:28,
// }
// when we need need temove any from union type we can use exclude type
// type statusType="pending"|"completed"|"failed";
// const status:Exclude<statusType,"pending">=""
// record
// type Food={
//     KFC:string;
//     PIZZA:string;
//     CHICKEN:string
// }
// type Food=Record<string,any>
// const food:Food={
//     pizza:"fdgg",
//     chiken:20
// }
//another method record
// type Food={
//     [index:string]:any
// }
// const food:Food={
//         pizza:"fdgg",
//         chiken:20
//     }
//any/unknown/never/void/null
// let username:string="afeeda";
// username.
//unknown
// let username:unknown="afeeda"
// const newvalue =username as string;
// newvalue.
//never  when dont return we can use never becuase error gives infinte loop 
// function throwerror(message:string):never{
//     throw new Error(message)
// }
//void
// function throwerror(message:string):void{
//   console.log(message)
// }
// type User={
//     name:string;
//     getName:()=>string;
// }
// const currentObj:User={
//     name:"afeeda",
//     getName(){
// return "afeda"
//     }
// }
///when return string dfintly return strinh hwhile invoking
// type User={
//     name:string;
//     getName:(message:string)=>void;
// }
// const currentObj:User={
//     name:"afeeda",
//     getName(message){
// console.log(message)
//     }
// }
// currentObj.getName("ssddd")
//null
// let username:string|null=null;
// function get(){
//     if(username){
//         return "heloo"
//     }
//      else if(username===null){
//         return "null heloo"
//      }
// }
var promptSync = require('prompt-sync')();
// Ask for a character input
var charInput = promptSync('Enter a character: ');
// Display the input
console.log("You entered: ".concat(charInput));
