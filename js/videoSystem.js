"use-strict";
var VideoSystem = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
	var instantiated; //Objeto con la instancia única VideoSystem

	function init() { //Inicialización del Singleton

		//Declaración de la función constructora de la instancia VideoSystem
		function VideoSystem(){
			/*La función se invoca con el operador new*/
			if (!(this instanceof VideoSystem))
				throw new InvalidAccessConstructorException();

			/* Definición del atributo name */
			var _name = "";

			Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(name = ""){
					name = name.trim();
					if (name === 'undefined' || name === "") throw new EmptyValueException("name");
					_name = name;
				}
			});

			/* Definición del atributo users como array para contener todas los usuarios del Sistema. */
			var _users = []; //array con los usuarios del sistema.

			//Devuelve un iterator de los usuarios del sistema
			Object.defineProperty(this, 'users', {
				get:function(){
				    var nextIndex = 0;
				    return { //Iterador de usuarios, si no hacemos el iterador devolvemos el "contenedor"(array)
				       next: function(){ //Propiedad next que devuelve el contenido por el que vamos recorriendo, cada vez que llamemos a next vmaos a saber cuanto vale nextIndex
				           return nextIndex < _users.length ? //recorremos el array de 0 a la longitud de usuarios
							   {value: _users[nextIndex++].user, done: false} : //array con la posición que le hemos y le indicamos que no hemos terminado todavia
							   //Cuando ejecutamos nextIndex++ vale cero y cuando vuelve al next: vale 1, es un literal, devuelve el objeto a traves del value y el done para saber si hemos terminado o no
				               {done: true};
				       }
				    }
				}
			});

			//Comprobamos si se encuentra algún username en la posición del array
			this.getUserNamePosition = function (user){
				if (!(user instanceof User)) {
					throw new UserVideoSystemException ();
				}

				function compareElements(element) {
					return(element.user.username === user.username)
				}

				return _users.findIndex(compareElements);
			};

			//Comprobamos si se encuentra algún email en la posición del array
			this.getUserEmailPosition = function(user){
				if (!(user instanceof User)) {
					throw new UserVideoSystemException ();
				}

				function compareElements(element) {
					return(element.user.email === user.email)
				}

				return _users.findIndex(compareElements);
			};

			//Añade un nuevo usuario al gestor
			this.addUser = function(user){
				if (!(user instanceof User)) {
					throw new UserVideoSystemException ("User");
				}

				if(user === null){
					throw new NullParamException("user");
				}

				var positionUserName = this.getUserNamePosition(user);
				var positionEmail = this.getUserEmailPosition(user);

				if (positionUserName === -1){
					if(positionEmail === -1){
						_users.push(
							{
								user:user
							}
						);
					}else{
						throw new UserExistsException("email");
					}
				}else{
					throw new UserExistsException("username");
				}

				return _users.length;
			};

			//Elimina un usuario del gestor
			this.removeUser = function(user){
				if (!(user instanceof User)) {
					throw new UserVideoSystemException ("User");
				}

				if(user === null){
					throw new NullParamException("user");
				}

				var position = this.getUserPosition(user);

				if (position !== -1){

					_users.splice(position, 1);

				}else{

					throw new UserNoExistsException();

				}
				return _users.length;
			};

			//Dado un usuario, devuelve la posición de ese usuario en el array de usuario o -1 si no lo encontramos.
			this.getUserPosition = function (user){
				if (!(user instanceof User)) {
					throw new UserVideoSystemException ();
				}

				function compareElements(element) {
					return(element.user.username === user.username || element.user.email === user.email)
				}

				return _users.findIndex(compareElements);
			};


			/* Definición del atributo categories como array para contener todas las categorías del sistema. */
			var _categories = []; //array de categorías.

			//Devuelve un iterator de las categorias del sistema
			Object.defineProperty(this, 'categories', { //Sería exactamente igual que el de usuarios solo que con categories
				get:function(){
				    var nextIndex = 0;
				    return {
				       next: function(){
				           return nextIndex < _categories.length ?
				               {value: _categories[nextIndex++].category, done: false} :
				               {done: true};
				       }
				    }
				}
			});

			//Añade una nueva categoria al sistema
			this.addCategory = function(category){
				if (!(category instanceof Category)) {
					throw new CategoryVideoSystemException ("Category");
				}

				if(category == null){
					throw new NullParamException("category");
				}

				var position = this.getCategoryPosition(category);

				if (position === -1){
					_categories.push(
						{
							category:category,
							productions: []
						}
					);

				}else{
					throw new CategoryExistsException();
				}

				return _categories.length;
			};

			//Elimina una categoria del sistema
			this.removeCategory = function(category){
				if (!(category instanceof Category)) {
					throw new CategoryVideoSystemException ("Category");
				}

				if(category == null){
					throw new NullParamException("category");
				}

				var position = this.getCategoryPosition(category);

				if (position !== -1){

					_categories.splice(position, 1);

				}else{
					throw new CategoryNotExistsException();
				}

				return _categories.length;
			};

			//Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
			this.getCategoryPosition = function (category){
				if (!(category instanceof Category)) {
					throw new CategoryVideoSystemException("Category");
				}

				function compareElements(element) {
					return (element.category.name === category.name)
				}

				return _categories.findIndex(compareElements);
			};

			// Definición del atributo productions como array para contener todas las productiones del sistema. */
			var _productions = []; //array de producciones

			//Devuelve un iterator de las producciones del sistema
			Object.defineProperty(this, 'productions', { //Sería exactamente igual que el de usuarios solo que con producciones
				get:function(){
				    var nextIndex = 0;
				    return {
				       next: function(){
				           return nextIndex < _productions.length ?
				               {value:_productions[nextIndex++].production, done: false} :
				               {done: true};
				       }
				    }
				}
			});

			//Añade una nueva producción al sistema
			this.addProduction = function(production){
				if (!(production instanceof Production)) {
					throw new ProductionVideoSystemException ("Production");
				}

				if( production == null){
					throw new NullParamException("production");
				}

				var position = this.getProductionPosition(production);

				if (position === -1){
					_productions.push(
						{
							production:production
						}
					);
				}else{
					throw new ProductionExistsException();
				}

				return _productions.length;
			};

			//Elimina una producción del sistema
			this.removeProduction = function(production){

				if (!(production instanceof Production)) {
					throw new ProductionVideoSystemException ("Production");
				}

				if(production == null){
					throw new NullParamException("production");
				}

				var position = this.getProductionPosition(production);

				if (position !== -1){

					_productions.splice(position, 1);

				}else{
					throw new ProductionNoExistsException();
				}

				return _productions.length;
			};

			//Dado una production, devuelve la posición de esa production en el array de producciones o -1 si no lo encontramos.
			this.getProductionPosition = function (production){
				if (!(production instanceof Production)) {
					throw new ProductionVideoSystemException("Production");
				}

				function compareElements(element) {
					return (element.production.title === production.title)
				}

				return _productions.findIndex(compareElements);
			};

			/* Definición del atributo actors como array para contener todas los actores del sistema. */
			var _actors = []; //array de actores.

			//Devuelve un iterator de los actores del sistema
			Object.defineProperty(this, 'actors', { //Sería exactamente igual que el de usuarios solo que con categories
				get:function(){
				    var nextIndex = 0;
				    return {
				       next: function(){
				           return nextIndex < _actors.length ?
				               {value: _actors[nextIndex++].actor, done: false} :
				               {done: true};
				       }
				    }
				}
			});

			//Añade un nuevo actor al sistema
			this.addActor = function(actor){
				if (!(actor instanceof Person)) {
					throw new ActorVideoSystemException("Person");
				}

				if(actor == null){
					throw new NullParamException("actor");
				}

				var position = this.getActorPosition(actor);
				if (position === -1){
					_actors.push(
						{
							actor:actor,
							productions: []
						}
					);

				}else{
					throw new ActorExistsException();
				}

				return _actors.length;
			};

			//Elimina un actor del sistema
			this.removeActor = function(actor){
				if (!(actor instanceof Person)) {

					throw new ActorVideoSystemException ("Person");

				}

				if(actor == null){

					throw new NullParamException("actor");

				}

				var position = this.getActorPosition(actor);

				if (position !== -1){

					_actors.splice(position, 1);

				}else{
					throw new ActorNoExistsException();
				}
				return _actors.length;
			};


			//Dado un Actor, devuelve la posición de ese actor en el array de actores o -1 si no lo encontramos.
			this.getActorPosition = function (actor){
				if (!(actor instanceof Person)) {
					throw new ActorVideoSystemException("Person");
				}

				function compareElements(element) {
					return (element.actor.name === actor.name && element.actor.lastname1 === actor.lastname1)
				}

				return _actors.findIndex(compareElements);
			};

			/* Definición del atributo directors como array para contener todas los directores del sistema.*/
			var _directors = []; //array de actores.

			//Devuelve un iterator de los directores del sistema
			Object.defineProperty(this, 'directors', { //Sería exactamente igual que el de usuarios solo que con categories
				get:function(){
				    var nextIndex = 0;
				    return {
				       next: function(){
				           return nextIndex < _directors.length ?
				               {value: _directors[nextIndex++].director, done: false} :
				               {done: true};
				       }
				    }
				}
			});

			//Añade un nuevo director al sistema
			this.addDirector = function(director){

				if (!(director instanceof Person)) {

					throw new DirectorVideoSystemException("Person");

				}

				if(director == null){

					throw new NullParamException("director");

				}

				var position = this.getDirectorPosition(director);

				if (position === -1){
					_directors.push(
						{
							director:director,
							productions: []
						}
					);

				}else{
					throw new DirectorExistsException();
				}

				return _directors.length;
			};

			//Elimina un director del sistema
			this.removeDirector = function(director){
				if (!(director instanceof Person)) {

					throw new DirectorVideoSystemException("Person");

				}

				if(director == null){
					throw new NullParamException("director");
				}

				var position = this.getDirectorPosition(director);

				if (position !== -1){

					_directors.splice(position, 1);

				}else{
					throw new DirectorNoExistsException();
				}

				return _directors.length;
			};

			//Dado un director, devuelve la posición de ese director en el array de directores o -1 si no lo encontramos.
			this.getDirectorPosition = function (director){
				if (!(director instanceof Person)) {
					throw new DirectorVideoSystemException("Person");
				}

				function compareElements(element) {
					return (element.director.name === director.name && element.director.lastname1 === director.lastname1)
				}

				return _directors.findIndex(compareElements);
			};




			/*MÉTODOS ASSIGN Y DEASIGN JUNTO CON ITERADORES DE CATEGORÍA, DIRECTOR Y ACTOR*/
			/*Métodos assignCategory y deassignCategory*/
			//Asigna una o más producciones a una categoría
			this.assignCategory = function(category, production){
				if (category == null) {
					throw new NullParamException("category");
				}
				if (production == null) {
					throw new NullParamException("production");
				}
				var positionCategory = this.getCategoryPosition(category);
				var positionProduction = this.getProductionPosition(production);

				if(positionCategory !== -1){//Si existe la categoria, busca la produccion
					if(positionProduction !== -1){//Buscamos en el array de productions si coincide con la introducida
						var i = 0;
						var encontrado = false;
						while(i < _categories[positionCategory].productions.length && !encontrado){
							if (_categories[positionCategory].productions[i].title === production.title){
								encontrado = true;
							}
							i++;
						}
						if(!encontrado){//Coge la categoria que coincida con la position de la categoria encontrada.
						//La propiedad production de ese elemento. Hace el push al array
							_categories[positionCategory].productions.push(production);
						}else{
							throw new AssignCategoryException(); //Si esa categoria ya esta asignada a una production muestra la excepction
						}
					}else{//Si no existe la añade
						this.addProduction(production);
						this.assignCategory(category, production); //Vuelve a llamar a la funcion
					}
				}else{//Si no existe la añade
					this.addCategory(category);
					this.assignCategory(category, production);
				}

				return _categories[positionCategory].productions.length;
			};

			//Dado una produccion y el array productions de las categories, devuelve la posición de esa produccion.
			this.getProductionCategoryPosition = function(production, categoryProduction){
				function compareElements(element) {
					return (element.title === production.title)
				}
				return categoryProduction.findIndex(compareElements);
			}

			this.deassignCategory = function(category,production){
				if(category == null){
					throw new NullParamException();
				}

				if(production == null){
					throw new NullParamException();
				}

				//Busca la posicion de esa categoria en el array _categories para ver si existe
				var positionCategory = this.getCategoryPosition(category);
				var positionProduction = this.getProductionCategoryPosition(production, _categories[positionCategory].productions);

				if(positionCategory !== -1){ //Busca la categoría, si esta existe, busca la production
					if(positionProduction !== -1){ //Si la production existe
						_categories[positionCategory].productions.splice(positionProduction,1); //Si la production existe se elimina
					}else{ //si la production no existe lanzamos una excepción
						throw new ProductionNoExistsException();
					}
				}else{ //si la categoria no existe lanzamos una excepción
					throw new CategoryNotExistsException();
				}

				return _categories[positionCategory].productions.length;
			};
			//Devuelve un iterator de las producciones que hemos asignado a una categoría
			this.getProductionsCategory = function(category){
				if (category == null) {
					throw new NullParamException();
				}
				var positionCategory = this.getCategoryPosition(category);
				if (positionCategory === -1) {throw new CategoryNotExistsVideoSystemException();}
				var nextIndex = 0;
			    return {
			       next: function(){
			       		var production = null;
			       		while (nextIndex < _categories[positionCategory].productions.length && production === null){
			       			if (_categories[positionCategory].category.name === category.name){
								production = _categories[positionCategory].productions[nextIndex];
			       			}
			       			nextIndex++;
			       		}
			       		if (production !== null){
			       			return {value: production, done: false}
			       		}
			       		if (nextIndex >= _categories[positionCategory].productions.length) return {done: true};
			       }
			    }
			};


			/*Métodos assignDirector y deassignDirector*/
			//Asigna una o más producciones a un director
			this.assignDirector = function(director, production){
				if (director == null) {
					throw new NullParamException("director");
				}
				if (production == null) {
					throw new NullParamException("production");
				}
				var positionDirector = this.getDirectorPosition(director);
				var positionProduction = this.getProductionPosition(production);

				if(positionDirector !== -1){//Si existe el director, busca la produccion
					if(positionProduction !== -1){//Buscamos en el array de productions si coincide con la introducida
						var i = 0;
						var encontrado = false;
						while(i < _directors[positionDirector].productions.length && !encontrado){
							if (_directors[positionDirector].productions[i].title === production.title){
								encontrado = true;
							}
							i++;
						}
						if(!encontrado){//Coge el director que coincida con la position del director encontrada.
						//La propiedad production de ese elemento. Hace el push al array
							_directors[positionDirector].productions.push(production);
						}else{
							throw new AssignDirectorException(); //Si ese director ya esta asignado a una production muestra la excepction
						}
					}else{//Si no existe la añade
						this.addProduction(production);
						this.assignDirector(director, production); //Vuelve a llamar a la funcion
					}
				}else{//Si no existe la añade
					this.addDirector(director);
					this.assignDirector(director, production);
				}

				return _directors[positionDirector].productions.length;
			};

			//Dado una produccion y el array productions de los directors, devuelve la posición de esa produccion.
			this.getProductionDirectorPosition = function(production, directorProduction){
				function compareElements(element) {
					return (element.title === production.title)
				}
				return directorProduction.findIndex(compareElements);
			}

			this.deassignDirector = function(director,production){
				if(director == null){
					throw new NullParamException();
				}

				if(production == null){
					throw new NullParamException();
				}

				//Busca la posicion de ese director en el array _directors para ver si existe
				var positionDirector = this.getDirectorPosition(director);
				var positionProduction = this.getProductionDirectorPosition(production, _directors[positionDirector].productions);

				if(positionDirector !== -1){ //Busca el director, si esta existe, busca la production
					if(positionProduction !== -1){ //Si la production existe
						_directors[positionDirector].productions.splice(positionProduction,1); //Si la production existe se elimina
					}else{ //si la production no existe lanzamos una excepción
						throw new ProductionNoExistsException();
					}
				}else{ //si el director no existe lanzamos una excepción
					throw new DirectorNoExistsException();
				}

				return _directors[positionDirector].productions.length;
			};

			//Devuelve un iterator de las producciones que hemos asignado a un director
            this.getProductionsDirector = function(director){
				if (director == null) {
					throw new NullParamException();
				}
				var positionDirector = this.getDirectorPosition(director);
				if (positionDirector === -1) {throw new PersonNotExistsVideoSystemException();}
				var nextIndex = 0;
			    return {
			       next: function(){
			       		var directors = null;
			       		while (nextIndex < _directors[positionDirector].productions.length && directors === null){
			       			if (_directors[positionDirector].director.name === director.name){
								directors = _directors[positionDirector].productions[nextIndex];
			       			}
			       			nextIndex++;
			       		}
			       		if (directors !== null){
			       			return {value: directors, done: false}
			       		}
			       		if (nextIndex >= _directors[positionDirector].productions.length) return {done: true};
			       }
			    }
			};



			/*Métodos assignActor y deassignActor*/
			//Asigna una o más producciones a un Actor
			this.assignActor = function(actor, production, character, main){
				if (actor == null) {
					throw new NullParamException("actor");
				}
				if (production == null) {
					throw new NullParamException("production");
				}
				var positionActor= this.getActorPosition(actor);
				var positionProduction = this.getProductionPosition(production);

				if(positionActor !== -1){//Si existe el Actor, busca la produccion
					if(positionProduction !== -1){//Buscamos en el array de productions si coincide con la introducida
						var i = 0;
						var encontrado = false;
						while(i < _actors[positionActor].productions.length && !encontrado){
							if (_actors[positionActor].productions[i].title === production.title){
								encontrado = true;
							}
							i++;
						}
						if(!encontrado){//Coge el actor que coincida con la position del actor encontrada.
						//La propiedad production de ese elemento. Hace el push al array
							_actors[positionActor].productions.push({
								production:production,
								character:character,
								main:main
							});
						}else{
							throw new AssignActorException(); //Si ese actor ya esta asignado a una production muestra la excepction
						}
					}else{//Si no existe la añade
						this.addProduction(Production);
						this.assignActor(actor, production); //Vuelve a llamar a la funcion
					}
				}else{//Si no existe la añade
					this.addActor(actor);
					this.assignActor(actor, production);
				}

				return _actors[positionActor].productions.length;
			};

			//Dado una produccion y el array productions de los actors, devuelve la posición de esa produccion.
			this.getProductionActorPosition = function(production, actorProduction){
				function compareElements(element) {
					return (element.title === production.title)
				}
				return actorProduction.findIndex(compareElements);
			}

			this.deassignActor = function(actor,production){
				if(actor == null){
					throw new NullParamException();
				}

				if(production == null){
					throw new NullParamException();
				}

				//Busca la posicion de ese actor en el array _actors para ver si existe
				var positionActor = this.getActorPosition(actor);
				var positionProduction = this.getProductionActorPosition(production, _actors[positionActor].productions);
				if(positionActor !== -1){ //Si existe el actor, busca la produccion
					if(positionProduction !== -1){
						_actors[positionActor].productions.splice(positionProduction,1);
					}else{ //Si no existe la produccion
						throw new ProductionNoExistsException();
					}
				}else{ //Si no existe el actor
					throw new ActorNoExistsException();
				}

				return _actors[positionActor].productions.length;
			};

			//Devuelve un iterator de las producciones que hemos asignado a un actor
			this.getProductionsActor = function(actor){
				if (actor == null) {
					throw new NullParamException();
				}
				var positionActor = this.getActorPosition(actor);
				if (positionActor === -1) {throw new PersonNotExistsVideoSystemException();}
				var nextIndex = 0;
			    return {
			       next: function(){
						   var production = null;
						   var papel = null;
			       		while (nextIndex < _actors[positionActor].productions.length && production === null){
							   if (_actors[positionActor].actor.name === actor.name){
								production = _actors[positionActor].productions[nextIndex].production;
								papel = _actors[positionActor].productions[nextIndex].character;
			       			}
			       			nextIndex++;
			       		}
			       		if (production !== null){
			       			return {value: production, /*papel: papel,*/ done: false}
			       		}
			       		if (nextIndex >= _actors[positionActor].productions.length) return {done: true};
			       }
			    }
			};

			/*FIN MÉTODOS ASSIGN Y DEASIGN JUNTO CON ITERADORES DE CATEGORÍA, DIRECTOR Y ACTOR*/

			/*Método getCast que es un iterador para obtener la relación entre actores*/
			this.getCast = function(production){
				if (production == null) {
					throw new NullParamException();
				}

				var positionProduction = this.getProductionPosition(production); //Miramos la posición de la producción

				if (positionProduction === -1) { //Comprobamos si la producción existe o no existe
					throw new ProductionNoExistsException();
				}
				var nextActor = 0; //Creamos una variable con el próximo actor inicializada a 0
				var nextProduction = 0; //Creamos una variable con la próxima production inicializada a 0
			    return {
					next: function(){
						var actor = null; //inicializamos el actor a null
						var paper = null; //el papel que realiza en la production a null también
						var principalActor = null; //y si es actor principal a null también

						while (nextActor < _actors.length && actor === null){
							if (nextProduction < _actors[nextActor].productions.length && _actors[nextActor].productions[nextProduction].production.title === production.title){
								actor = _actors[nextActor].actor;
								paper = _actors[nextActor].productions[nextProduction].character;
								principalActor = _actors[nextActor].productions[nextProduction].main;
							}

							nextProduction++;

							if (nextProduction >= _actors[nextActor].productions.length){
								nextProduction = 0;
								nextActor++;
							}
						}
						if (actor !== null && paper !== null && principalActor !== null){
							return {value: actor, paper:paper, principalActor:principalActor, done:false}
						}

						if (nextActor >= _actors.length) return {done: true};
					}
				}
			};

		} //Fin constructor VideoSystem
		VideoSystem.prototype = {};
		VideoSystem.prototype.constructor = VideoSystem;

		var instance = new VideoSystem();//Devolvemos el objeto VideoSystem para que sea una instancia única.
		Object.freeze(instance);
		return instance;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () {
			if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
				instantiated = init(); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
})();
