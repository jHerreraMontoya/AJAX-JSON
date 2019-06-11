"use-strict";
const DB_NAME = 'VSystemDataBase';

//Procedemos a la creación de la Base de Datos
function createDB(){

  //Comprobamos si el navegador soporta indexedDB
  if(!window.indexedDB){
        window.alert("El navegador no soporta el IndexedDB.")
  }

  var db = indexedDB.open(DB_NAME);

  db.onupgradeneeded = function (event){
        var objectStore = db.result;

        //Creamos los almacenes de los objetos de VideoSystem
        objectStore.createObjectStore("Categories", {keyPath: 'name'});
        objectStore.createObjectStore("Actors", {keyPath: 'lastname1'});
        objectStore.createObjectStore("Directors", {keyPath: 'lastname1'});
        objectStore.createObjectStore("Productions", {keyPath: 'title'});
        objectStore.createObjectStore("AsignarCategories", {keyPath: 'category'});
        objectStore.createObjectStore("AsignarActors", {keyPath: 'actor'});
        objectStore.createObjectStore("AsignarDirectors", {keyPath: 'director'});

    };
}

//Cargamos la base de datos con los objetos del VSytem
function startDB(){

  var resource1 = new Resource(120, "https://www.jenflix.es", ["Castellano", "Italiano", "Alemán", "Turco", "Inglés"], ["Italiano", "Inglés", "Turco"]);
  var resource2 = new Resource(40, "https://www.jenflix.es", ["Castellano", "Italiano", "Alemán", "Turco", "Inglés"], ["Italiano", "Inglés", "Turco"]);
  var resource3 = new Resource(210, "https://www.jenflix.es", ["Castellano", "Italiano", "Alemán", "Turco", "Inglés"], ["Italiano", "Inglés", "Turco"]);
  var resource4 = new Resource(80, "https://www.jenflix.es", ["Castellano", "Italiano", "Alemán", "Turco", "Inglés"], ["Italiano", "Inglés", "Turco"]);

  var coordinate1 = new Coordinate(65, 90);
  var coordinate2 = new Coordinate(-90, -165);
  var coordinate3 = new Coordinate(-70, 110);

  var season1 = new Season("Temporada 1", ["Episodio 1", "Episodio 2", "Episodio 3", "Episodio 4", "Episodio 5"]);
  var season2 = new Season("Temporada 2", ["Episodio 1", "Episodio 2", "Episodio 3"]);
  var season3 = new Season("Temporada 3", ["Episodio 1", "Episodio 2"]);

  const actorsData = [
    new Person("Benedict", "Cumberbatch", "07/19/1976","","imagenes/actores/benedict-cumberbatch.jpg"),
    new Person("Martin", "Freeman", "09/08/1971","","imagenes/actores/martin-freeman.jpg"),
    new Person("Daniel", "Rovira", "11/01/1980","","imagenes/actores/daniel-rovira.jpg"),
    new Person("Maria", "León", "07/30/1984","","imagenes/actores/maria-león.jpg"),
    new Person("Jon", "Plazaola", "03/28/1982","","imagenes/actores/jon-plazaola.jpg"),
    new Person("Clara", "Lago", "03/06/1990","","imagenes/actores/clara-lago.jpg"),
    new Person("Berto", "Romero", "11/17/1974","","imagenes/actores/berto-romero.jpg"),
    new Person("Daniel", "Radcliffe", "07/23/1989","","imagenes/actores/daniel-radcliffe.jpg"),
    new Person("Zoe", "Kazan", "09/09/1983","","imagenes/actores/zoe-kazan.jpg"),
    new Person("Chris", "Evans", "06/13/1981","","imagenes/actores/chris-evans.jpg"),
    new Person("Scarlett", "Johansson", "11/22/1984","","imagenes/actores/scarlett-johansson.jpg"),
    new Person("Chris", "Pratt", "06/21/1979","","imagenes/actores/chris-pratt.jpg"),
    new Person("Rupert", "Grint", "08/24/1988","","imagenes/actores/rupert-grint.jpg"),
    new Person("Zoe", "Saldaña", "06/19/1978","","imagenes/actores/zoe-saldaña.jpg"),
    new Person("Natasha", "Lyone", "04/04/1979","","imagenes/actores/natasha-lyonne.jpg")
  ];

  const categoriesData = [
    new Category("Comedia"),
    new Category("Romance"),
    new Category("Accion y Aventura"),
    new Category("Ciencia Ficcion"),
    new Category("Drama"),
    new Category("Terror"),
    new Category("Intriga"),
    new Category("Musical"),
    new Category("Animacion")
  ];

  const directorsData = [
    new Person("James", "Gunn", "08/05/1966","","imagenes/directores/james-gunn.jpg"),
    new Person("Michael", "Dowse", "04/19/1973","","imagenes/directores/michael-dowse.jpg"),
    new Person("Joe", "Russo", "07/08/1971","","imagenes/directores/joe-russo.jpg"),
    new Person("Emilio", "Lazaro", "03/28/1945","","imagenes/directores/emilio-lazaro.jpg"),
    new Person("Shawn", "Levy", "07/23/1968","","imagenes/directores/shawn-levy.jpg"),
    new Person("Juan Antonio", "Bayona", "07/23/1968","","imagenes/directores/juan-antonio-bayona.jpg")
  ];

  const productionData = [
    new Movie("8 Apellidos Vascos", "03/14/2014", "imagenes/peliculas_series/apellidos-vascos.jpg", resource1, "\nLatidud: " + coordinate3.getSexagesimalLatitude() + " Longitud: " + coordinate3.getSexagesimalLongitude()),
    new Movie("8 Apellidos Catalanes", "11/18/2015", "imagenes/peliculas_series/apellidos-catalanes.jpg", resource1),
    new Movie("Amigos de mas", "05/02/2014", "imagenes/peliculas_series/amigos-de-mas.jpg", resource3),
    new Movie("Diario de una niñera", "08/24/2007", "imagenes/peliculas_series/diario-de-una-niñera.jpg", resource1, "\nLatidud: " + coordinate1.getSexagesimalLatitude() + " Longitud: " + coordinate1.getSexagesimalLongitude()),
    new Movie("Dr Strange", "10/28/2016", "imagenes/peliculas_series/dr-strange.jpg", resource3),
    new Movie("Harry Potter y la Orden del Fenix", "06/28/2017", "imagenes/peliculas_series/harry-potter-y-la-orden-del-fenix.jpg", resource3),
    new Movie("Los Vengadores", "04/29/2015", "imagenes/peliculas_series/vengadores.jpg", resource3),
    new Movie("Guardianes de la galaxia VOL 1", "08/14/2014", "imagenes/peliculas_series/guardianes-de-la-galaxia.jpg", resource3, "\nLatidud: " + coordinate2.getSexagesimalLatitude() + " Longitud: " + coordinate2.getSexagesimalLongitude()),
    new Serie("Alli Abajo", "04/07/2015", "imagenes/peliculas_series/alli-abajo.jpg", [season1, season2]),
    new Serie("Sherlock Holmes", "07/25/2010", "imagenes/peliculas_series/sherlock.jpg", [season1, season2, season3]),
    new Serie("The Good Doctor", "09/25/2017", "imagenes/peliculas_series/the-good-doctor.jpg", [season1]),
    new Serie("The Big Bang Theory", "09/24/2007", "imagenes/peliculas_series/the-big-bang-theory.jpg", [season1, season2, season3]),
    new Serie("Amor Ocasional", "12/07/2018", "imagenes/peliculas_series/amor-ocasional.jpg", [season1]),
    new Serie("Muñeca Rusa", "02/10/2019", "imagenes/peliculas_series/muñeca-rusa.jpg", [season1]),
    new Serie("Stranger Things", "07/15/2016", "imagenes/peliculas_series/stranger-things.jpg", [season1, season2])
  ];

  const categoryProd = [
    {category: "Comedia", Productions: ["8 Apellidos Vascos", "8 Apellidos Catalanes", "Allí Abajo"]},
    {category: "Romance", Productions: ["Amigos de mas", "Amor Ocasional"]},
    {category: "Accion y Aventura", Productions: ["Dr Strange", "Harry Potter y la Orden del Fenix", "Los Vengadores", "Guardianes de la galaxia VOL 1"]},
    {category: "Animacion", Productions: ["The Big Bang Theory"]},
    {category: "Ciencia Ficcion", Productions: ["Stranger Things"]},
    {category: "Drama", Productions: ["Diario de una niñera", "The Good Doctor"]},
    {category: "Intriga", Productions: ["Sherlock Holmes"]},
    {category: "Musical", Productions: ["Amigos de más"]},
    {category: "Terror", Productions: ["Muñeca Rusa"]}
  ];

  const actorProd = [
    {actor: "Cumberbatch", Productions: ["Sherlock Holmes", "Dr Strange", "Muñeca Rusa"]},
    {actor: "Freeman", Productions: ["Sherlock Holmes" ]},
    {actor: "Rovira", Productions: ["8 Apellidos Vascos",  "8 Apellidos Catalanes", "Stranger Things"]},
    {actor: "León", Productions: ["Alli Abajo" ]},
    {actor: "Plazaola", Productions: [ "Alli Abajo", "The Big Bang Theory", "Amor Ocasional"  ]},
    {actor: "Lago", Productions: [ "8 Apellidos Vascos" ]},
    {actor: "Romero", Productions: ["8 Apellidos Catalanes", "Stranger Things"]},
    {actor: "Radcliffe", Productions: [ "Amigos de mas", "Harry Potter y la Orden del Fénix" ]},
    {actor: "Kazan", Productions: [ "Amigos de mas"]},
    {actor: "Evans", Productions: [ "Diario de una niñera", "Los Vengadores", "Amor Ocasional" ]},
    {actor: "Johansson", Productions: [ "Diario de una niñera", "The Big Bang Theory" ]},
    {actor: "Pratt", Productions: [ "Los Vengadores", "Guardianes de la galaxia VOL 1" ]},
    {actor: "Grint", Productions: [ "Harry Potter y la Orden del Fénix", "The Good Doctor"]},
    {actor: "Saldaña", Productions: [ "Guardianes de la galaxia VOL 1", "The Good Doctor" ]},
    {actor: "Lyone", Productions: [ "Muñeca Rusa" ]}
  ];

  const directorProd = [
    {director: "Lazaro", Productions: [ "8 Apellidos Vascos", "8 Apellidos Catalanes", "Alli Abajo"]},
    {director: "Gunn", Productions: [ "Dr Strange", "Harry Potter y la Orden del Fenix", "Los Vengadores", "Guardianes de la galaxia VOL 1"]},
    {director: "Bayona", Productions: []},
    {director: "Dowse", Productions: [ "Amigos de mas", "The Big Bang Theory",
    "Amor Ocasional", "Stranger Things" ]},
    {director: "Russo", Productions: [ "Sherlock Holmes", "The Good Doctor" ]},
    {director: "Levy", Productions: [ "Diario de una niñera", "Muñeca Rusa" ]}
  ];

  addDataBase("Actors",actorsData);
  addDataBase("Categories",categoriesData);
  addDataBase("Directors",directorsData);
  addDataBase("Productions",productionData);
  addDataBaseAssign("AsignarCategories",categoryProd);
  addDataBaseAssign("AsignarActors",actorProd);
  addDataBaseAssign("AsignarDirectors",directorProd);
}


//Function que añade todos los datos a los almacenes individuales
function addDataBase(store,objects){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        var stores = db.transaction([store],"readwrite").objectStore(store);

        stores.transaction.oncomplete = function(event){
            var addStore = db.transaction([store],"readwrite").objectStore(store);
            for(var d in objects){
                addStore.add(objects[d].getObject());
            }
        };
    };
}

//Function que añade todos los datos asignados a los almacenes individuales
function addDataBaseAssign(store,objects){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        var stores = db.transaction([store],"readwrite").objectStore(store);

        stores.transaction.oncomplete = function(event){
            var addStore = db.transaction([store],"readwrite").objectStore(store);
            for(var d in objects){
                addStore.add(objects[d]);
            }
        };
    };
}

/*Funciones para añadir datos a traves de los Formularios*/

//Function que añade un dato individual a un almaden especifico
function addData(store,object){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        var stores = db.transaction([store],"readwrite").objectStore(store);

        stores.transaction.oncomplete = function(event){
            var addStore = db.transaction([store],"readwrite").objectStore(store);
            addStore.add(object.getObject());
        };
    };
}
//Function que asigna un solo dato individual a un almacen especifico
function addDataAssign(store,assignObject){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        var stores = db.transaction([store],"readwrite").objectStore(store);

        stores.transaction.oncomplete = function(event){
            var addStore = db.transaction([store],"readwrite").objectStore(store);
            addStore.add(assignObject);
        };
    };
}

//Function que borra un dato de una tabla
function DelDataBase(store,key){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        db.transaction([store],"readwrite").objectStore(store).delete(key);
    };
}


/*Functions de Modificación*/
//Function que se encarga de modificar una categoría

//Funcion que modifica una categoria
function modifyCategory(key,name){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        var store = db.transaction(["Categories"],"readwrite").objectStore("Categories");

        var category =  store.get(key);

        store.delete(key);

        category.onsuccess = function(event){
            var data = category.result;

            data.name = name;

            store.add(data);
        };
    };
}

//Function que modifica una categoría asignada a una producción
function modifyAssignCategory(key, name) {
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function (event) {
        var db = event.target.result;
        var objectStore = db.transaction(["AsignarCategories"], "readwrite").objectStore("AsignarCategories");

        var object = objectStore.get(key);

        objectStore.delete(key);

        object.onsuccess = function (event) {

            var data = object.result;

            data.category = name;

            objectStore.add(data);
        };
    };
}

//Function que se encarga de modificar un actor o director
function modifyPerson(table, key, name, lastname1, born){
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event){
        var db = event.target.result;
        var store = db.transaction([table],"readwrite").objectStore(table);

        var person =  store.get(key);

        store.delete(key);

        person.onsuccess = function(event){
            var data = person.result;

            data.name = name;
            data.lastname1 = lastname1;
            data.born = born;

            store.add(data);
        };
    };
}


//Function que se encarga de modificar un actor asignado
function modifyAssignActor(table, key, lastname1){
	var request = indexedDB.open(DB_NAME);

	request.onsuccess = function(event) {
		var db = event.target.result;
		var objectStore = db.transaction([table],"readwrite").objectStore(table);

		var object = objectStore.get(key);

		objectStore.delete(key);

		object.onsuccess = function(event) {
			// Get the old value that we want to update
			var data = object.result;

			data.actor = lastname1;

			objectStore.add(data);
		};
	};
}

//Function que se encarga de modificar un director asignado
function modifyAssignDirector(table, key, lastname1){
	var request = indexedDB.open(DB_NAME);

	request.onsuccess = function(event) {
		var db = event.target.result;
		var objectStore = db.transaction([table],"readwrite").objectStore(table);

		var object = objectStore.get(key);

		objectStore.delete(key);

		object.onsuccess = function(event) {
			// Get the old value that we want to update
			var data = object.result;

			data.director = lastname1;

			objectStore.add(data);
		};
	};
}


/*Funciones de asignación y designación*/
//Function que se encarga de asignar la production a categorías, actores y directores
function assignStore(store, key, assign) {
    var request = indexedDB.open(DB_NAME);

    request.onsuccess = function(event) {
		var db = event.target.result;
		var objectStore = db.transaction([store],"readwrite").objectStore(store);

		var object = objectStore.get(key);

		objectStore.delete(key);

		object.onsuccess = function(event) {
			// Get the old value that we want to update
			var data = object.result;

			data.Productions.push(assign);

			objectStore.add(data);
		};
	};
}

//Funcion que permite desasignar un objeto o elemento de una tabla
function deassingStore(table,key,deassing){
  var request = indexedDB.open(DB_NAME);

	request.onsuccess = function(event) {
		var db = event.target.result;
		var objectStore = db.transaction([table],"readwrite").objectStore(table);

		var object = objectStore.get(key);

		objectStore.delete(key);

		object.onsuccess = function(event) {
			var data = object.result;

			var list = data.Productions;

			var pos = list.indexOf(deassing);

			if(pos != -1){
				list.splice(pos,1);
			}

			objectStore.add(data);
		};
	};
}
