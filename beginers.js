//string
// let userName:string="afeeda";
// let message:string=`hello ,${name}`
//number
// let age:number=23;
// let price:number=44.90
//boolean
// let ischeck:boolean=true;
//null
// let emptyValue:null=null;
//undefined
// let value:undefined=undefined;
//any
// let anything:any="afeeda";
// anything=34;
// anything=true;
//unknown
// let unknownValue:unknown="heloo";
// if(typeof unknownValue==="string"){
//     console.log(unknownValue.toUpperCase());
// }
//void
// function Message(message: string): void {
//   console.log(message);
// }
// function add(num:number,num2:number):any{
//     return num+num2;
// }
// let sum=add(2,3)
// console.log(sum);
//never
// function throwError(message: string): never {
//     throw new Error(message);
//   }
//   function infiniteLoop(): never {
//     while (true) {}
//   }
//imlicit or inferr type
//   let inferedstring="heloo"; //inered as string
// function add(a: number, b: number) {
//     return a + b; // Inferred as number
//   }
// let numbers = [1, 2, 3]; // Inferred as number[]
//over riding infered types
// let usevalue:any="heloo"
// usevalue=42
//explicit
// r
//union intersection
// let value:string|number;
// value="afeeda"
// value=34;
//type
// type employ={name:string;skills:string[]};
// type admin={name:string;role:string};
// type details=admin&employ;
// const person1:details={
//     name:"afeeda",
//     skills:["js","react"],
//     role:"developer",
// }
// console.log(person1)
// type userid=string|number;
// let id:userid="hello";
// id=12344;
// type User={name:string;
//     age:number;
//     role:string
// }
//readonly
// let user1:  Readonly<User>={
//     name:"afeeda",
//     age:28,
//     role:"admin"
// }
// console.log(user1)
// user1.name="adhila"
//or
// type User={
//     readonly name:string;
//     age:number;
//     role?:string;
// }
// let user1:User={
//     name:"afeeda",
//     age:20,
// }
// user1.name="adhila" //error this prprery immutable
//interface
// interface User{
//     name:string;
//     age:number;
//     email?:string
// }
// // const user:User={
// //     name:"afeeda",
// //     age:28,
// //     email:"apafeeda@.com",
// // }
// const user1:User={
//     name:"adhila",
//     age:20
// }
//extending interface
// interface Animal{
//     species:string
// }
// interface pet extends Animal{
//     name:string;
//     age:number;
// }
// const mypet:pet={
//     name:"cat",
//     age:10,
//     species:"cat"
// }
//functions
// function add(num1:number,num2:number):number{
//     return num1+num2;
// }
// const sumresult=add(4,5)
// console.log(sumresult);
//arrow function 
// const multiply:(x:number,y:number)=>number=(x,y)=>x*y;
// console.log(multiply(23,2));
//rest 
// function sumall(...numbes:number[]):number{
//     return numbes.reduce((sum,num)=>sum+num,0)
// }
// console.log(sumall(1,2,3,4,5));
// type details={
//     name:string;
//     age:number;
// }
// let userDetail:details={
//     name:"afeeda",
//     age:28
// }
// function getUseName(userDetail:details){
//   return userDetail.name
// }
// console.log(getUseName(userDetail))
//enums
// type statusType="pending"|"completed"|"failed"
// enum statusType{
//     pending,
//     failed,
//     completed
// }
//class
// class Person{
//   name:string;
//   age:number;
//   constructor(name:string,age:number){
//     this.name=name;
//     this.age=age;
//   }
//   greet(){
//     console.log(`hello ${this.name} and i ${this.age}`);
//   }
// }
// const person=new Person("AFeeda",29);
// person.greet()
//Access Modifiers
// class Employee{
//   public name:string;
//   private salary:number;
//   constructor(name:string,salary:number){
//     this.name=name,
//     this.salary=salary;
//   }
// greet(){
//   console.log(`my name is${this.name} and salry is ${this.salary} `)
// }
// }
// let emp1=new Employee("afeeda",20000);
// emp1.greet();
// console.log(emp1.name)
//readonly
var Books = /** @class */ (function () {
    function Books(title) {
        this.title = title;
    }
    return Books;
}());
var book = new Books("storyy");
console.log(book.title);
