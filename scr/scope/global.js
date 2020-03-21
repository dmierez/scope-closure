var hello = 'hello';
var hello = 'hola'
let world = 'hello world';
let world = 'hola mundo'
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// otro caso

const helloWorld = () => {
    globalVar = 'in global'
}

helloWorld ();
console.log(globalVar)

const anotherFunction = () => {
    var localVar = globalVar = 'in global'
}

anotherFunction();
console.log(globalVar);



///////////////////////////////
// 2da clase

const helloWorld = () => {
    const hello = 'hola mundo';
    console.log(hello);
};

helloWorld();
console.log(hello)


var scope = 'I am global';

const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {
        return scope
    }
    console.log (func());
};

functionScope();
console.log(scope);

///////////////////////////////
// 3era clase


const fruit = () => {
    var fruits = 'apple';
    console.log(fruits);
};

fruit();
console.log(fruits)


const anotherFunction = ( )=> {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2; 
    console.log(x)
    console.log(y)
}
anotherFunction();

