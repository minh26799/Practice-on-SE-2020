 // code with FreeCodeCamp
 //Working with functions from another JS file
 /* const test = require('./test');
console.log(test.sum(1,1));
*/

//Working with events
/*
const Event = require('events');
const Es = new Event();

Es.on('sum', (num1, num2)=>{
    console.log(num1 + num2);
})

Es.emit('sum',1,2);

class Person extends Event{
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on('name',()=>{
    console.log('my name is '+ pedro.name);
})

pedro.emit('name');
*/

//Working with Readline
/*
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                        output : process.stdout});
let num1 = Math.floor((Math.random() *10) + 1);
let num2 = Math.floor((Math.random() *10) + 1);
let ans = num1 + num2;

rl.question(`What os ${ num1 } + ${num2}? \n`, (userInput) => {
    if(userInput.trim() == ans) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        rl.on('line', (userInput)=>{
            if(userInput.trim() == ans){
                rl.close();
            }else {
                rl.setPrompt(`Your answer of ${ userInput } is incorrect try again\n`);
                rl.prompt();
            }
        })
    }
})

rl.on('close', ()=>{
    console.log('Correct!!!!!!!!');
})

*/
/*

const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(5000);
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 2607;



