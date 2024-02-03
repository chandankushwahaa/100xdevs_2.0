// to install - npm install zod
// zod is a TypeScript-first schema declaration and validation library. It is designed to be easy to use with TypeScript, but still allow for easy integration with plain JavaScript.


const zod = require('zod');


// If this is array of numbers with atleast 1 input, return true else return false

function validateInput(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3,4]); // Success
validateInput([1,2,'3',4]); // Failure




// The use case could be to validate a objects with specific keys and values, then we can use object() method of zod.

function validateObject(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateObject({ // Success
    email: 'chandanck22@yahoo.com',
    password: '123456'
});
validateObject({  // Failure
    email: 'chandan',
    password: '123'  // password should be atleast 6 characters
});