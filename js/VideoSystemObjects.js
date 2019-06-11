"use strict";

/*Objeto Person*/
function Person (name, lastname1, born, lastname2 = null, picture){

	//La función se invoca con el operador new
    if (!(this instanceof Person))
			throw new InvalidAccessConstructorException();

	//Lanzamos las excepciones de las propiedades obligatorias del objeto Person, si la propiedad name, lastname1 o born esta vacia se lanzara una excepción avisando que estas propiedas deben tener un valor
	if (!(name) || name === '') throw new EmptyValueException("name");

	if (!(lastname1) || lastname1 === '') throw new EmptyValueException("lastname1");

	if (!(born)|| born === '') throw new EmptyValueException("born");
	//Aqui añado una expresión regular para determinar como se tiene que pasar el formato de la fecha si no se hace de tal forma saltara una exception
	/*Ejemplos:
	Fecha mm-dd-aaaa
	12/14/2013
	03-05-2013
	3-15-2013
	3.5.2013*/
	//if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test (born) !== true)
	//throw new InvalidValueException("born", born);


	//Declaramos las variables correspondientes a las propiedades del objeto person
    var _name = name;
    var _lastname1 = lastname1;
    var _lastname2 = "";
    var _born = new Date(born);
		var _picture = picture;

    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("name");
			_name = value;
		}
	});

    Object.defineProperty(this, 'lastname1', {
		get:function(){
			return _lastname1;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("lastname1");
			return _lastname1 = value;
		}
    });

    Object.defineProperty(this, 'lastname2', {
		get:function(){
			return _lastname2;
		},
		set:function(value = ""){
			return _lastname2 = value;
		}
    });


    Object.defineProperty(this, 'born', {
		get:function(){
      		return _born;
		},
		set:function(value){
			//if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test (value) !== true)
			//throw new InvalidValueException("born", value);
			if (value === 'undefined' || value === '') throw new EmptyValueException("born");
      		_born = new Date (value);
		}
    });

    Object.defineProperty(this, 'picture', {
		get:function(){
			return _picture;
		},
		set:function(value){
			return _picture = value;
		}
    });
}
Person.prototype = {};
Person.prototype.constructor = Person;

//Modificación para mostrar el valor de los actors y directors en la base de datos
Person.prototype.getObject = function(){
	return{
		name : this.name,
		lastname1 : this.lastname1,
		born : this.born,
		picture : this.picture
	};
}

Person.prototype.toString = function (){
	var options = {year: "numeric", day: "numeric" , month: "long"};
	return "Nombre Completo: " + this.name  + " " + this.lastname1 + " Fecha de Nacimiento: " + this.born.toLocaleDateString("es-ES", options);
}
/*Fin Objeto Person*/

/*Objeto Category*/
function Category(name){

    //La función se invoca con el operador new
    if (!(this instanceof Category))
		throw new InvalidAccessConstructorException();

	if (!(name) || name === '') throw new EmptyValueException("name");

    var _name = name;
    var _description = "";

    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("name");
			_name = value;
		}
    });

    Object.defineProperty(this, 'description', {
		get:function(){
			return _description;
		},
		set:function(value = ""){
			 _description = value;
		}
    });
}
Category.prototype = {};
Category.prototype.constructor = Category;

//Modificación para mostrar el valor de las categorias en la base de datos
Category.prototype.getObject = function(){
	return{
		name : this.name,
		description : this.description,
	};
}

Category.prototype.toString = function (){
	return "The catergoy name: " + this.name + " " + this.description;
}
/*Fin Objeto Category*/

/*Objeto Resource*/
function Resource (duration,link, audios = null, subtitles = null){

    //La función se invoca con el operador new
    if (!(this instanceof Resource))
        throw new InvalidAccessConstructorException();

    if (!(duration) || duration === '') throw new EmptyValueException("duration");
    if (Number.isNaN(duration))
        throw new InvalidValueException("duration", duration);

    if (!(link) || link === '') throw new EmptyValueException("link");
	if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)$/.test (link) === true ||
		/^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (link) === true)
		throw new IncorrectValueLink("link", link);

    var _link = link;
    var _duration = duration;
    var _audios = audios || []; //Array de String
    var _subtitles = subtitles || []; //Array de String

    Object.defineProperty(this, 'duration', { //Falta controlar la duración
		get:function(){
			return _duration;
		},
		set:function(value){
            if (value === 'undefined' || value === '') throw new EmptyValueException("duration");
            value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value))
				throw new InvalidValueException("duration", value);
			_duration = value;
		}
    });

    Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
            if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)$/.test (value) === true ||
            /^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (value) === true)
			throw new IncorrectValueLink("link", link);
                if (value === 'undefined' || value === '') throw new EmptyValueException("link");
				_link = value;
		}
    });

	Object.defineProperty(this, 'audios', {
		get:function(){
			return _audios;
		},
		set:function(value){
			_audios.push(value);
		}
	});

	Object.defineProperty(this, 'subtitles', {
		get:function(){
			return _subtitles;
		},
		set:function(value){
			_subtitles.push(value);
		}
    });



}
Resource.prototype = {};
Resource.prototype.constructor = Resource;

Resource.prototype.toString = function (){
	return this.duration +  this.link  +  this.audios  +  this.subtitles;
}
/*Fin Objeto Resource*/

/*Objeto Production*/
function Production(title,publication,image){  //Es una clase abstracta

	//La función se invoca con el operador new
	if (!(this instanceof Production))
		throw new InvalidAccessConstructorException();

	//Comprobación para que Production sea clase abstracta.
    if ((this.constructor === Production)) {
        throw new AbstractClassException("Production"); //Lanzamos la excepción para la clase abstracta
	}

	if (!(title) || title === '') throw new EmptyValueException("title");

    if (!(publication)|| publication === '') throw new EmptyValueException("publication");
    //Aqui añado una expresión regular para determinar como se tiene que pasar el formato de la fecha si no se hace de tal forma saltara una exception
    /*Ejemplos:
    Fecha mm-dd-aaaa
    12/14/2013
    03-05-2013
    3-15-2013
    3.5.2013*/
    //if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test (publication) !== true)
    //throw new InvalidValueException("publication", publication);

		var _title = title;
		var _nationality = "";
    var _publication = new Date (publication);
    var _synopsis = "";
    var _image = image;

	Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("title");
			_title = value;
		}
	});

	Object.defineProperty(this, 'nationality', {
		get:function(){
			return _nationality;
		},
		set:function(value = ""){
			_nationality = value;
		}
	});

	Object.defineProperty(this, 'publication', {
		get:function(){
            return _publication;
		},
		set:function(value){
			//if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test (value) !== true)
			//throw new InvalidValueException("publication", value);
			if (value === 'undefined' || value === '') throw new EmptyValueException("publication");
            _publication = value;
		}
    });

	Object.defineProperty(this, 'synopsis', {
		get:function(){
			return _synopsis;
		},
		set:function(value = ""){
			_synopsis = value;
		}
	});

	Object.defineProperty(this, 'image', {
		get:function(){
			return _image;
		},
		set:function(value){
			_image = value;
		}
	});
}
Production.prototype = {};
Production.prototype.constructor = Production;

Production.prototype.getObject = function(){
	return{
		title : this.title,
		publication : this.publication,
		image : this.image
	};
}

Production.prototype.toString = function (){
  //var options = {weekday: "long", year: "numeric",day: "numeric" ,month: "long"};
	return this.constructor.name + ": " + this.title + " " + this.publication;
}
/*Fin de Objeto Production*/


/*Heredados de la clase abstracta*/
/*Objeto Movie*/
//Movie hereda propiedades de la clase abstracta Production
function Movie(title,publication,image,resource = null, locations = null){

    //La función se invoca con el operador new
	if (!(this instanceof Movie))
		throw new InvalidAccessConstructorException();

    //Invocamos el constructor de la clase padre, en él se comprueba que utilizamos el operador new.
	Production.call(this,title,publication,image);

	var _resource = resource;
	var _locations = locations || "Carece de localización.";

	Object.defineProperty(this, 'resource', {
		get:function(){
			return _resource;
		},
		set:function(value){
			_resource = value;
		}
	});

	Object.defineProperty(this, 'locations', {
		get:function(){
			return _locations;
		},
		set:function(value){
			_locations.push(value);
		}
	});
}
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.getObject = function(){
  return{
		title : this.title,
		publication : this.publication,
		image : this.image,
    type : "Movie"
	};
}

Movie.prototype.toString = function(){
	//Llamamos al toString de la clase padre
	return Production.prototype.toString.call(this) + ", Recurso: " + this.resource + ", Coordenadas: " + this.locations;
}
/*Fin Objeto Movie*/

/*Objeto Serie*/
//Serie hereda propiedades de la clase abstracta Production
function Serie(title,publication,image,seasons = null){

    //La función se invoca con el operador new
	if (!(this instanceof Serie))
		throw new InvalidAccessConstructorException();

	//Invocamos el constructor de la clase padre, en él se comprueba que utilizamos el operador new.
	Production.call(this,title,publication,image,seasons);

	var _seasons = seasons || [];

	Object.defineProperty(this, 'seasons', {
		get:function(){
			return _seasons;
		},
		set:function(value){
			_seasons.push(value);
		}
	});


}
Serie.prototype = Object.create(Production.prototype);
Serie.prototype.constructor = Serie;

Serie.prototype.getObject = function(){
  return{
		title : this.title,
		publication : this.publication,
		image : this.image,
    type : "Serie"
	};
}

Serie.prototype.toString = function(){
	//Llamamos al toString de la clase padre
	return Production.prototype.toString.call(this) +" Temporadas: "+ this.seasons;
}
/*Fin Objeto Serie*/

/*Objeto Season*/
function Season(title,episodes){

    //La función se invoca con el operador new
    if (!(this instanceof Season))
        throw new InvalidAccessConstructorException();

    if (!(title) || title === '') throw new EmptyValueException("title");

    var _title = title;
    var _episodes = episodes || [];

    Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("title");
            _title = value;
		}
    });

    Object.defineProperty(this, 'episodes', {
		get:function(){
			return _episodes;
		},
		set:function(value = []){
			//_episodes.push(value);
			_episodes = {
				title: String,
				episode: Resource,
				scenarios: [Location]
			};
		}
    });
}
Season.prototype = {};
Season.prototype.constructor = Season;

Season.prototype.toString = function (){
	return this.title + " " + this.episodes;
}
/*Fin Objeto Season*/

/*Objeto User*/
function User(username,email,password){

	//La función se invoca con el operador new
    if (!(this instanceof User))
			throw new InvalidAccessConstructorException();

		//Lanzamos las excepciones de las propiedades obligatorias del objeto User, si la propiedad username, email o password esta vacia se lanzara una excepción avisando que estas propiedas deben tener un valor
		if (!(username) || username === '') throw new EmptyValueException("username");
		/*Excepción username a traves de una expresión regular*/
		if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (username) !== true)
		throw new InvalidValueException("username", username);


		if (!(email) || email === '') throw new EmptyValueException("email");
		/*Excepción email a traves de una expresión regular*/
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test (email) !== true)
		throw new InvalidValueException("email", email);


		if (!(password) || password === '') throw new EmptyValueException("password");
		/*Excepción password a traves de una expresión regular: La contraseña debe tener al menos entre 8 y 16 caracteres,
		al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.*/
		if (/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test (password) !== true)
		throw new IncorrectValuePassword("password", password);

	//Declaramos las variables correspondientes a las propiedades del objeto User
    var _username = username;
    var _email = email;
    var _password = password;


    Object.defineProperty(this, 'username', {
			get:function(){
				return _username;
			},
			set:function(value){
				if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (value) !== true)
				throw new InvalidValueException("username", value);
				if (value === 'undefined' || value === '') throw new EmptyValueException("username");
				_username = value;
			}
		});

    Object.defineProperty(this, 'email', {
		get:function(){
			return _email;
		},
		set:function(value){
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test (value) !== true)
			throw new InvalidValueException("email", value);
			if (value === 'undefined' || value === '') throw new EmptyValueException("email");
			_email = value;
		}
		});

		Object.defineProperty(this, 'password', {
			get:function(){
				return _password;
			},
			set:function(value){
				if (/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test (value) !== true)
				throw new InvalidValueException("password", value);
				if (value === 'undefined' || value === '') throw new EmptyValueException("password");
				_password = value;
			}
			});

}
User.prototype = {};
User.prototype.constructor = User;

User.prototype.toString = function (){
	return "Username: "+this.username + "\nEmail: " +this.email+ "\nPassword: "+this.password;
}
/*Fin Objeto User*/

/*Objeto Coordinate*/
function Coordinate (latitude,longitude){

	//La función se invoca con el operador new
    if (!(this instanceof Coordinate))
			throw new InvalidAccessConstructorException();

        latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
        if (Number.isNaN(latitude)  || latitude < -90 || latitude > 90)
            throw new InvalidValueException("latitude", latitude);
        longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
        if (Number.isNaN(longitude)  || longitude < -180 || longitude > 180)
            throw new InvalidValueException("longitude", longitude);

	//Declaramos las variables correspondientes a las propiedades del objeto Coordinate
	var _latitude = latitude;
	var _longitude = longitude;


    Object.defineProperty(this, 'latitude', {
		get:function(){
			return _latitude;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value)  || value < -90 || value > 90)
				throw new InvalidValueException("latitude", value);
			_latitude = value;
		}
	});

    Object.defineProperty(this, 'longitude', {
		get:function(){
			return _longitude;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value)  || value < -180 || value > 180)
				throw new InvalidValueException("latitude", value);
			_longitude = value;
		}
	});

}
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;

Coordinate.prototype.getSexagesimalLatitude = function (){
	var direction = this.latitude >= 0 ? "N" : "S";
	var latitude = Math.abs(this.latitude);
	var grades =  Math.floor (latitude);
	var tmpMinutes = (latitude - grades) * 60;
	var minutes = Math.floor (tmpMinutes);
	var tmpSeconds = (tmpMinutes - minutes) * 60;
	var seconds = Math.round (tmpSeconds);

	return grades + " ° " + minutes + " ' " + seconds + " '' " + direction;
}

Coordinate.prototype.getSexagesimalLongitude = function (){
	var direction = this.longitude >= 0 ? "E" : "W";
	var longitude = Math.abs(this.longitude);
	var grades =  Math.floor (longitude);
	var tmpMinutes = (longitude - grades) * 60;
	var minutes = Math.floor (tmpMinutes);
	var tmpSeconds = (tmpMinutes - minutes) * 60;
	var seconds = Math.round (tmpSeconds);

	return grades + " ° " + minutes + " ' " + seconds + " '' " + direction;
}
/*Fin Objeto Coordinate*/
