import { checkSchema, validationResult } from "express-validator";

const schema = {
    name: {
        in: ['body'],
        isString: {
            errorMessage: "name should be string, validation failed, type must be string"
        }
    }, 
    surname: {
        in: ['body'],
        isString: {
            errorMessage: "surname should be string, validation failed, type must be string"
        }
    }, 
    email: {
        in: ['body'],
        isString: {
            errorMessage: "email should be string, validation failed, type must be string"
        }
    }, 
    dateOfBirth: {
        in: ['body'],
        isString: {
            errorMessage: "date of birth should be string, validation failed, type must be string"
        }
    },
}

const checkAuthorSchema = checkSchema(schema);

const checkValidationResult = (req,res,next) => {

}




//https://www.youtube.com/watch?v=2ceXABYoUQM