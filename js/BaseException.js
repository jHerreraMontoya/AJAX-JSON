//Excepción base para ir creando el resto de excepciones.
function BaseException() {
}
BaseException.prototype = new Error(); //Herencia del objeto Error.
BaseException.prototype.constructor = BaseException; //Definimos el constructor
//Sobrescribimos el método toString para personalizarlos
BaseException.prototype.toString = function(){
	// note that name and message are properties of Error
	return this.name + ": " + this.message;
};

//Excepciones de validación de parámetros. Reutilizables en todas las clases
function ParameterValidationException() {
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException(); //Heredamos de BaseException
ParameterValidationException.prototype.constructor = ParameterValidationException;

//Excepción personalizada para indicar valores vacios.
function EmptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
EmptyValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
EmptyValueException.prototype.constructor = EmptyValueException;

//Excepción de valor inválido
function InvalidValueException(param, value) {
	this.name = "InvalidValueException";
	this.message = "Error: The paramenter " + param + " has an invalid value. (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
InvalidValueException.prototype.constructor = InvalidValueException;

//Excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException(); 
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;

//Excepción acceso inválido a constructor
function UninstantiatedObjectException(param) {
	this.name = "UninstantiatedObjectException";
	this.message = "You can't instantiate a " + param + " object";
}
UninstantiatedObjectException.prototype = new BaseException(); 
UninstantiatedObjectException.prototype.constructor = UninstantiatedObjectException;

//Excepción intento de instacia clase abstracta
function AbstractClassException(classValue) {
	this.name = "AbstractClassException";
	this.message = classValue + " is a abstract class.";
}
AbstractClassException.prototype = new BaseException(); 
AbstractClassException.prototype.constructor = AbstractClassException;

//Excepciones pertenecientes al VideoSystemObjects.js

//Excepción personalizada para indicar que el link pasado por parametro es erroneo.
function IncorrectValueLink(param) {
	this.name = "IncorrectValueLink";
	this.message = "Error: The " + param + " is incorrect. The correct link for example is https://www.facebook.com";
}
IncorrectValueLink.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
IncorrectValueLink.prototype.constructor = IncorrectValueLink;

//Excepción personalizada para indicar que el password pasado por parametro es erroneo.
function IncorrectValuePassword(param) {
	this.name = "IncorrectValuePassword";
	this.message = "Error: The " + param + " is incorrect. The correct password must have between 8 and 16 characters, at least one digit, at least one lowercase, at least one uppercase and at least one non-alphanumeric character.";
}
IncorrectValuePassword.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
IncorrectValuePassword.prototype.constructor = IncorrectValuePassword;

//Excepciones pertenecientes al VideoSystem.js

/*Excepción que comprueba si el username ya existe o el email ya existe en el sistema*/
function UserExistsException() {
	this.name = "UserExistsException";
	this.message = "Error: The User can't be added, username o the email exists in the Video System.";
}
UserExistsException.prototype = new BaseException();
UserExistsException.prototype.constructor = UserExistsException;

/*Excepción que comprueba si el user no existe en el sistema*/
function UserNoExistsException() {
	this.name = "UserNoExistsException";
	this.message = "Error: The User no exists in the Video System.";
}
UserNoExistsException.prototype = new BaseException();
UserNoExistsException.prototype.constructor = UserNoExistsException;

function CategoryVideoSystemException(param) {
	this.name = " CategoryVideoSystemException";
	this.message = "Error: The method needs a " + param + " parameter.";
}
CategoryVideoSystemException.prototype = new BaseException(); //Heredamos de VideoSystemException
CategoryVideoSystemException.prototype.constructor =  CategoryVideoSystemException;

function NullParamException(param) {
	this.name = "NullParamException";
	this.message = "Error: The parameter " + param + " can't be null";
}
NullParamException.prototype = new BaseException();
NullParamException.prototype.constructor = NullParamException;

/*Excepción que comprueba si la categoria ya existe en el sistema*/
function CategoryExistsException() {
	this.name = "CategoryExistsException";
	this.message = "Error: The category exists in the Video System.";
}
CategoryExistsException.prototype = new BaseException();
CategoryExistsException.prototype.constructor = CategoryExistsException;

/*Excepción que comprueba si la categoria NO existe en el sistema*/
function CategoryNotExistsException() {
	this.name = "CategoryNotExistsException";
	this.message = "Error: The category no exists in the Video System.";
}
CategoryNotExistsException.prototype = new BaseException();
CategoryNotExistsException.prototype.constructor = CategoryNotExistsException;

function ProductionVideoSystemException() {
	this.name = "ProductionVideoSystemException";
	this.message = "Error: The method needs a Production parameter.";
}
ProductionVideoSystemException.prototype = new BaseException(); //Heredamos de VideoSystemException
ProductionVideoSystemException.prototype.constructor =  ProductionVideoSystemException;


/*Excepción que comprueba si la production ya existe en el sistema*/
function ProductionExistsException() {
	this.name = "ProductionExistsException";
	this.message = "Error: The production exists in the Video System.";
}
ProductionExistsException.prototype = new BaseException();
ProductionExistsException.prototype.constructor = ProductionExistsException;

/*Excepción que comprueba si la production NO esta registrada en el sistema*/
function ProductionNoExistsException() {
	this.name = "ProductionNoExistsException";
	this.message = "Error: The production no exists in the Video System.";
}
ProductionNoExistsException.prototype = new BaseException();
ProductionNoExistsException.prototype.constructor = ProductionNoExistsException;

function ActorVideoSystemException() {
	this.name = "ActorVideoSystemException";
	this.message = "Error: The method needs a Actor parameter.";
}
ActorVideoSystemException.prototype = new BaseException(); //Heredamos de VideoSystemException
ActorVideoSystemException.prototype.constructor =  ActorVideoSystemException;

/*Excepción que comprueba si el actor ya existe en el sistema*/
function ActorExistsException() {
	this.name = "ActorExistsException";
	this.message = "Error: The actor exists in the Video System.";
}
ActorExistsException.prototype = new BaseException();
ActorExistsException.prototype.constructor = ActorExistsException;

/*Excepción que comprueba si el actor NO existe en el sistema*/
function ActorNoExistsException() {
	this.name = "ActorNoExistsException";
	this.message = "Error: The actor no exists in the Video System.";
}
ActorNoExistsException.prototype = new BaseException();
ActorNoExistsException.prototype.constructor = ActorNoExistsException;

function DirectorVideoSystemException() {
	this.name = "DirectorVideoSystemException";
	this.message = "Error: The method needs a Director parameter.";
}
DirectorVideoSystemException.prototype = new BaseException(); //Heredamos de VideoSystemException
DirectorVideoSystemException.prototype.constructor =  DirectorVideoSystemException;


/*Excepción que comprueba si el director ya existe en el sistema*/
function DirectorExistsException(director) {
	this.name = "DirectorExistsException";
	this.message = "Error: The director exists in the Video System.";
}
DirectorExistsException.prototype = new BaseException();
DirectorExistsException.prototype.constructor = DirectorExistsException;

/*Excepción que comprueba si el director NO existe en el sistema*/
function DirectorNoExistsException() {
	this.name = "DirectorNoExistsException";
	this.message = "Error: The director not exists in the Video System.";
}
DirectorNoExistsException.prototype = new BaseException();
DirectorNoExistsException.prototype.constructor = DirectorNoExistsException;

/*Excepción de Asignación de una categoría*/
function AssignCategoryException() {
	this.name = "AssignCategoryException";
	this.message = "Error: The category is already assigned the production.";
}
AssignCategoryException.prototype = new BaseException();
AssignCategoryException.prototype.constructor = AssignCategoryException;

/*Excepción de Asignación de un director*/
function AssignDirectorException() {
	this.name = "AssignDirectorException";
	this.message = "Error: The director is already assigned the production.";
}
AssignDirectorException.prototype = new BaseException();
AssignDirectorException.prototype.constructor = AssignDirectorException;

/*Excepción de Asignación de un actorr*/
function AssignActorException() {
	this.name = "AssignActorException";
	this.message = "Error: The actor is already assigned the production.";
}
AssignActorException.prototype = new BaseException();
AssignActorException.prototype.constructor = AssignActorException;