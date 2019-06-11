"use-strict";
function cargarFichero(){
  var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var file = JSON.parse(this.responseText);

            addDataBase("Categories",file.StoreCategories);
            addDataBase("Actors",file.StoreActors);
            addDataBase("Directors",file.StoreDirectors);
            addDataBase("Productions",file.StoreProductions);
            addDataBaseAssign("AsignarCategories",file.StoreAssignCategory);
            addDataBaseAssign("AsignarActors",file.StoreAssignActors);
            addDataBaseAssign("AsignarDirectors",file.StoreAssignDirectors);

        }
    };
    request.open("GET","js/json/VideoSystem.json",true);
    request.responseType = 'json';
    request.send();
}

function generarFichero(){
    var storeCategories = [];
    var storeActors = [];
    var storeDirectors = [];
    var storeProductions = [];
    var storeAssignCategory = [];
    var storeAssignActors = [];
    var storeAssignDirectors = [];

    var dataBase = indexedDB.open("VSystemDataBase");

    dataBase.onsuccess = function (event){
      var db = event.target.result;
      var store = db.transaction(["Categories", "Actors", "Directors", "Productions","AsignarCategories", "AsignarActors", "AsignarDirectors"]);

      var ObjectStoreActor = store.objectStore("Actors");
      ObjectStoreActor.openCursor().onsuccess = function (event){

        var cursorAct = event.target.result;

        if(cursorAct){

          storeActors.push(cursorAct.value);

          cursorAct.continue();
        }
      }


      var ObjectStoreCategory = store.objectStore("Categories");
      ObjectStoreCategory.openCursor().onsuccess = function (event){

        var cursorCat = event.target.result;

        if(cursorCat){
          storeCategories.push(cursorCat.value);

          cursorCat.continue();
        }
      }

      var ObjectStoreDirector = store.objectStore("Directors");
      ObjectStoreDirector.openCursor().onsuccess = function (event){

        var cursorDir = event.target.result;

        if(cursorDir){

          storeDirectors.push(cursorDir.value);

          cursorDir.continue();
        }
      }


      var ObjectStoreProduction = store.objectStore("Productions");
      ObjectStoreProduction.openCursor().onsuccess = function (event){

        var cursorPro = event.target.result;

        if(cursorPro){

          storeProductions.push(cursorPro.value);

          cursorPro.continue();
        }
      }


      var ObjectStoreActPro = store.objectStore("AsignarActors");
      ObjectStoreActPro.openCursor().onsuccess = function (event){

        var cursorActPro = event.target.result;

        if(cursorActPro){

          storeAssignActors.push(cursorActPro.value);

          cursorActPro.continue();
        }
      }

      var ObjectStoreCatPro = store.objectStore("AsignarCategories");
      ObjectStoreCatPro.openCursor().onsuccess = function (event){

        var cursorCatPro = event.target.result;

        if(cursorCatPro){

          storeAssignCategory.push(cursorCatPro.value);

          cursorCatPro.continue();
        }
      }

      var ObjectStoreDirPro = store.objectStore("AsignarDirectors");
      ObjectStoreDirPro.openCursor().onsuccess = function (event){

        var cursorDirPro = event.target.result;

        if(cursorDirPro){

          storeAssignDirectors.push(cursorDirPro.value);

          cursorDirPro.continue();
        }
      }

      store.oncomplete = function (event){
        var dataObjects = {
          user: getCookie("username"),
          StoreCategories: storeCategories,
          StoreActors: storeActors,
          StoreDirectors: storeDirectors,
          StoreProductions: storeProductions,
          StoreAssignCategory: storeAssignCategory,
          StoreAssignActors: storeAssignActors,
          StoreAssignDirectors: storeAssignDirectors,

        }

        var ruta = "js/json/Server.php";
        var request = new XMLHttpRequest();
        data = JSON.stringify(dataObjects);
        console.log(data);
        request.open('POST', ruta, true);
        request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        request.send('data='+ data + "&" + 'user=prueba');

        }
      }
    }
