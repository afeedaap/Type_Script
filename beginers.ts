//string
// let userName:string="afeeda";
// let message:string=`hello ,${name}`
//number
// let age:number=23;
// let price:number=44.90

import { log } from "console"
import { loadavg } from "os";

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
// class Books{
//   readonly title:string;
//   constructor(title:string){
//     this.title=title;
//   }
// }
// let book=new Books("storyy")
// console.log(book.title);


//function overloding
// function add(num1:string,num2:string):string;
// function add(num1:number,num2:number):number;
// function add(num1:any,num2:any):any{
//   return num1+num2;

// }
// let result=add(2,3)
// console.log(result)
// let strresult=add("2","3");
// console.log("strr",strresult)
//generics
// function add<T>(num:T,num1:T):T{
//   return num+num1
// }
// let resultsum=add<number>(2,3)
// console.log(resultsum);
// type user={
//   name:string;
//   age:number
// }
// type admin=user &{

//   role:string
// }
// let userDetail:user={
//   name:"afeeda",
//   age:28
// }
// let adminDetail:admin={
//   name:"adhill",
//   age:22,
//   role:"admin"

// }
// function getname<T>(details:T):T{
//   return details
// }
// let uservalue=getname<user>(userDetail)
// let adminvalue=getname<admin>(adminDetail)
// console.log(uservalue.age)
//utility type
// type user={
//   name:string;
//   age:number;
//   role:string;
// }
// let userDetails:Readonly<user>={
//   name:"feeda",
//   age:23,
//   role:"admin"
// }
// let user1:Partial<user>={
//   name:"aaa"
// }
// console.log(userDetails);
// let user2:Required<user>={
//   name:"afeeda",
//   age:24
// }
// let user2:Pick<user,"name"|"age">={
//   name:"afeeda",
//   age:29,
  
// }
//omit
// let user:Omit<user,"role">={
//   name:"afeeda",
//   age:20
// }
// type statusType="pending"|"completed"|"failed";
// const status:Exclude<statusType,"pending">="completed"

//record
// type food=Record<string,any>;
// let fooditem:food={
//   pizzza:"oval",
//   chivke:"kfc",
//   age:20
// }
// function add(num:number[]):number{
//   return num.reduce((sum,curr)=>sum+curr,0)
// }
// let sumresult=add([1,2,4,5,5])
// console.log(sumresult);
//generics
// function add<T>(num:T):T{
//   return num
// }
// let resultsum=add<number>(2)
// let strsum=add<string>("heloo")
// console.log("resuu",resultsum);
// console.log("sdf",strsum);

//tuples
// const person:[number,string]=[34,"afeeda"];
// console.log(person[0])
//optinsl typles
const person1:[string,number?]=["afeeda",34]
//rest tuples
// const person3:[string,...number[]]=["afeeda",23,45,67,56]
//destruuring
// const arr:[number,number]=[10,20]
// const [x,y]=arr
// console.log(x);

//readonly array
// let person5: readonly number[]=[1,3,45,5]
// let person5=[1,23122]

//readonly tuple 
// let arr:readonly[number,number]=[10,20]
// arr[0]=34;
//typed array
let student:[string,number][]=[
  ["alice",30],["hello",45]
]
console.log(student[1][1]);
