"use-strict";
//Función correspondiente al formulario de inicio de sesión
function inicioSesion() {
    var login = document.getElementById("buttonSesion");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (login.firstChild) {
        login.removeChild(login.firstChild);
    }

    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");

    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.hasChildNodes()) {
        divEncabezado.removeChild(divEncabezado.lastChild);
        divEncabezado.removeAttribute("class");
    }

    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    var divSesion = document.createElement("div");
    divSesion.setAttribute("class", "d-flex align-items-center");
    divSesion.style.minHeight = "800px";
    //principal.appendChild(divSesion);
    $(principal).append(divSesion);

    var contenidoForm = document.createElement("div");
    contenidoForm.style.width = "450px";
    //divSesion.appendChild(contenidoForm);
    $(divSesion).append(contenidoForm);

    var imgLogin = document.createElement("img");
    imgLogin.setAttribute("src", "imagenes/login.png");
    imgLogin.setAttribute("alt", "silueta persona");
    imgLogin.setAttribute("class", "img-thumbnail mx-auto d-block");
    //contenidoForm.appendChild(imgLogin);
    $(contenidoForm).append(imgLogin);

    var form = document.createElement("form");
    form.setAttribute("id", "login");
    form.setAttribute("name", "login");
    //contenidoForm.appendChild(form);
    $(contenidoForm).append(form);

    var divFormGroup1 = document.createElement("div");
    divFormGroup1.setAttribute("class", "form-group m-3");
    //form.appendChild(divFormGroup1);
    $(form).append(divFormGroup1);

    var labelUser = document.createElement("label");
    labelUser.setAttribute("for", "user");
    //labelUser.appendChild(document.createTextNode("User"));
    $(labelUser).append("User");
    //divFormGroup1.appendChild(labelUser);
    $(divFormGroup1).append(labelUser);

    var inputUser = document.createElement("input");
    inputUser.setAttribute("type", "text");
    inputUser.setAttribute("class", "form-control");
    inputUser.setAttribute("id", "user");
    inputUser.setAttribute("placeholder", "Enter User");
    inputUser.setAttribute("name", "user");
    //divFormGroup1.appendChild(inputUser);
    $(divFormGroup1).append(inputUser);

    var divFormGroup2 = document.createElement("div");
    divFormGroup2.setAttribute("class", "form-group m-3");
    //form.appendChild(divFormGroup2);
    $(form).append(divFormGroup2);

    var labelPass = document.createElement("label");
    labelPass.setAttribute("for", "pass");
    //labelPass.appendChild(document.createTextNode("Password"));
    $(labelPass).append("Password");
    //divFormGroup2.appendChild(labelPass);
    $(divFormGroup2).append(labelPass);

    var inputPass = document.createElement("input");
    inputPass.setAttribute("type", "password");
    inputPass.setAttribute("class", "form-control");
    inputPass.setAttribute("id", "pass");
    inputPass.setAttribute("placeholder", "Enter Password");
    inputPass.setAttribute("name", "pass");
    //divFormGroup2.appendChild(inputPass);
    $(divFormGroup2).append(inputPass);

    var divFormGroup3 = document.createElement("div");
    divFormGroup3.setAttribute("class", "form-group mt-5 m-3");
    //form.appendChild(divFormGroup3);
    $(form).append(divFormGroup3);

    var buttonLogin = document.createElement("button");
    buttonLogin.setAttribute("type", "button");
    buttonLogin.setAttribute("id", "buttonLogin");
    buttonLogin.setAttribute("class", "btn btn-outline-primary btn-block");
    //buttonLogin.appendChild(document.createTextNode("LOGIN"));
    $(buttonLogin).append("LOGIN");
    buttonLogin.addEventListener("click", singIn);
    //divFormGroup3.appendChild(buttonLogin);
    $(divFormGroup3).append(buttonLogin);

    var validar = document.createElement("p");
    validar.setAttribute("id", "validarLogin");
    validar.setAttribute("class", "font-weight-bold text-right");
    //form.appendChild(validar);
    $(form).append(validar);

}
//Función correspondiente al botón de submit del formulario de inicio de sesión
function singIn() {
    var user = document.forms['login']['user'].value; //Cogemos el valor del input del user
    var pass = document.forms['login']['pass'].value; //Cogemos el valor del input del pass

    var validation = document.getElementById("validarLogin");

    // Eliminando todos los hijos de un elemento, en este caso el elemento validation
    while (validation.firstChild) {
        validation.removeChild(validation.firstChild);
    }

    //Comprobamos que tanto usuario como contraseña es el indicado
    if (user === "prueba" && pass === "prueba") {
        document.cookie = "username=prueba";
        validation.style.color = "green";
        //validation.appendChild(document.createTextNode("Inicio de sesión correcto."));
        $(validation).append("Inicio de sesión correcto.");
        window.location.href = 'http://localhost/AJAX_JSON'; //Cuando iniciemos sesión la página nos manda a esa localización web
    } else {
        validation.style.color = "red";
        //validation.appendChild(document.createTextNode("Usuario/Contraseña incorrectos."));
        $(validation).append("Usuario/Contraseña incorrectos.");
    }
}

//Función correspondiente al cierre de sesión
function singOut() { //Arreglar esta función al final
    document.cookie = "username=; max-age=0";

    var validation = document.getElementById("validarLogin");

    // Eliminando todos los hijos de un elemento, en este caso el elemento validation
    while (validation.firstChild) {
        validation.removeChild(validation.firstChild);
    }

    var administrar = document.getElementById("administrar");
    //administrar.appendChild(document.createTextNode("Cerrando Sesión."));
    $(administrar).append("Cerrando Sesión.");
    administrar.style.color = "green";
    window.location.href = 'http://localhost/AJAX_JSON'; //Cuando cerremos sesión la página nos manda a esa localización web
}

//Función correspondiente a la cookie para obtenerla
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function gestionForm() {
    var login = document.getElementById("login");

    var user = getCookie("username");

    if (user === "prueba") {
        // Eliminando todos los hijos de un elemento, en este caso el elemento login
        while (login.hasChildNodes()) {
            login.removeChild(login.lastChild);
        }

        login.setAttribute("id", "loginOut");
        var loginOut = document.getElementById("loginOut");
        //loginOut.appendChild(document.createTextNode("Sign Out "));
        $(loginOut).append("Sign Out ");

        var iconSignOut = document.createElement("i");
        iconSignOut.setAttribute("class", "fas fa-sign-out-alt");
        //login.appendChild(iconSignOut);
        $(login).append(iconSignOut);
        loginOut.addEventListener("click", singOut);

        /*Contenido para gestionar los formularios*/
        var main = document.getElementById("main");
        main.setAttribute("class", "container-fluid");

        var contenidoMain = document.createElement("div");
        contenidoMain.setAttribute("class", "row");
        //main.appendChild(contenidoMain);
        $(main).append(contenidoMain);

        var colsContenidoMainA = document.createElement("div");
        colsContenidoMainA.setAttribute("class", "col-md-2 border border-primary rounded m-3 bg-light");
        colsContenidoMainA.style.height = "620px";
        //contenidoMain.appendChild(colsContenidoMainA);
        $(contenidoMain).append(colsContenidoMainA);

        var administrar = document.getElementById("administrar");
        //colsContenidoMainA.appendChild(administrar);
        $(colsContenidoMainA).append(administrar);

        var divAdmin = document.createElement("div");
        divAdmin.setAttribute("id", "accordion");
        //administrar.appendChild(divAdmin);
        $(administrar).append(divAdmin);

        /*Administrar Categorías*/
        var cardCategories = document.createElement("div");
        cardCategories.setAttribute("class", "card mt-3 mr-3 ml-3");
        //divAdmin.appendChild(cardCategories);
        $(divAdmin).append(cardCategories);

        var cardHeaderCategories = document.createElement("div");
        cardHeaderCategories.setAttribute("class", "card-header");
        cardHeaderCategories.setAttribute("id", "headingOne");
        //cardCategories.appendChild(cardHeaderCategories);
        $(cardCategories).append(cardHeaderCategories);

        var headerCategories = document.createElement("h5");
        headerCategories.setAttribute("class", "mb-0");
        //cardHeaderCategories.appendChild(headerCategories);
        $(cardHeaderCategories).append(headerCategories);

        var buttonCategories = document.createElement("button");
        buttonCategories.setAttribute("class", "btn btn-link font-weight-bold");
        buttonCategories.style.textDecoration = "none";
        buttonCategories.setAttribute("data-toggle", "collapse");
        buttonCategories.setAttribute("data-target", "#collapseOne");
        buttonCategories.setAttribute("aria-expanded", "true");
        buttonCategories.setAttribute("aria-controls", "collapseOne");
        //buttonCategories.appendChild(document.createTextNode("Categorías"));
        $(buttonCategories).append("Categorías");
        //cardHeaderCategories.appendChild(buttonCategories);
        $(cardHeaderCategories).append(buttonCategories);

        //Contenido Administrar Categorías
        var containerCategories = document.createElement("div");
        containerCategories.setAttribute("id", "collapseOne");
        containerCategories.setAttribute("class", "border collapse mr-3 ml-3");
        containerCategories.setAttribute("aria-labelledby", "headingOne");
        containerCategories.setAttribute("data-parent", "#accordion");
        //divAdmin.appendChild(containerCategories);
        $(divAdmin).append(containerCategories);

        var bodyCategoriesA = document.createElement("div");
        bodyCategoriesA.setAttribute("class", "card-body");
        //containerCategories.appendChild(bodyCategoriesA);
        $(containerCategories).append(bodyCategoriesA);

        var linkCategoriesA = document.createElement("a");
        linkCategoriesA.setAttribute("href", "#");
        //linkCategoriesA.appendChild(document.createTextNode("Añadir"));
        $(linkCategoriesA).append("Añadir");
        //bodyCategoriesA.appendChild(linkCategoriesA);
        $(bodyCategoriesA).append(linkCategoriesA);
        linkCategoriesA.addEventListener("click", formCreateCategory);

        var bodyCategoriesB = document.createElement("div");
        bodyCategoriesB.setAttribute("class", "card-body");
        //containerCategories.appendChild(bodyCategoriesB);
        $(containerCategories).append(bodyCategoriesB);

        var linkCategoriesB = document.createElement("a");
        linkCategoriesB.setAttribute("href", "#");
        //linkCategoriesB.appendChild(document.createTextNode("Modificar"));
        $(linkCategoriesB).append("Modificar");
        //bodyCategoriesB.appendChild(linkCategoriesB);
        $(bodyCategoriesB).append(linkCategoriesB);
        linkCategoriesB.addEventListener("click", formUpdateCategory);

        var bodyCategoriesC = document.createElement("div");
        bodyCategoriesC.setAttribute("class", "card-body");
        //containerCategories.appendChild(bodyCategoriesC);
        $(containerCategories).append(bodyCategoriesC);

        var linkCategoriesC = document.createElement("a");
        linkCategoriesC.setAttribute("href", "#");
        //linkCategoriesC.appendChild(document.createTextNode("Eliminar"));
        $(linkCategoriesC).append("Eliminar");
        //bodyCategoriesC.appendChild(linkCategoriesC);
        $(bodyCategoriesC).append(linkCategoriesC);
        linkCategoriesC.addEventListener("click", formDeleteCategory);
        /*Fin Administrar Categorías*/

        /*Administrar Actores*/
        var cardActors = document.createElement("div");
        cardActors.setAttribute("class", "card mt-3 mr-3 ml-3");
        //divAdmin.appendChild(cardActors);
        $(divAdmin).append(cardActors);

        var cardHeaderActors = document.createElement("div");
        cardHeaderActors.setAttribute("class", "card-header");
        cardHeaderActors.setAttribute("id", "headingTwo");
        //cardActors.appendChild(cardHeaderActors);
        $(cardActors).append(cardHeaderActors);

        var headerActors = document.createElement("h5");
        headerActors.setAttribute("class", "mb-0");
        //cardHeaderActors.appendChild(headerActors);
        $(cardHeaderActors).append(headerActors);

        var buttonActors = document.createElement("button");
        buttonActors.setAttribute("class", "btn btn-link font-weight-bold");
        buttonActors.style.textDecoration = "none";
        buttonActors.setAttribute("data-toggle", "collapse");
        buttonActors.setAttribute("data-target", "#collapseTwo");
        buttonActors.setAttribute("aria-expanded", "true");
        buttonActors.setAttribute("aria-controls", "collapseTwo");
        //buttonActors.appendChild(document.createTextNode("Actores"));
        $(buttonActors).append("Actores");
        //cardHeaderActors.appendChild(buttonActors);
        $(cardHeaderActors).append(buttonActors);

        //Contenido Administrar Actores
        var containerActors = document.createElement("div");
        containerActors.setAttribute("id", "collapseTwo");
        containerActors.setAttribute("class", "border collapse mr-3 ml-3");
        containerActors.setAttribute("aria-labelledby", "headingTwo");
        containerActors.setAttribute("data-parent", "#accordion");
        //divAdmin.appendChild(containerActors);
        $(divAdmin).append(containerActors);

        var bodyActorsA = document.createElement("div");
        bodyActorsA.setAttribute("class", "card-body");
        //containerActors.appendChild(bodyActorsA);
        $(containerActors).append(bodyActorsA);

        var linkActorsA = document.createElement("a");
        linkActorsA.setAttribute("href", "#");
        //linkActorsA.appendChild(document.createTextNode("Añadir"));
        $(linkActorsA).append("Añadir");
        //bodyActorsA.appendChild(linkActorsA);
        $(bodyActorsA).append(linkActorsA);
        linkActorsA.addEventListener("click", formCreateActors);

        var bodyActorsB = document.createElement("div");
        bodyActorsB.setAttribute("class", "card-body");
        //containerActors.appendChild(bodyActorsB);
        $(containerActors).append(bodyActorsB);

        var linkActorsB = document.createElement("a");
        linkActorsB.setAttribute("href", "#");
        //linkActorsB.appendChild(document.createTextNode("Modificar"));
        $(linkActorsB).append("Modificar");
        //bodyActorsB.appendChild(linkActorsB);
        $(bodyActorsB).append(linkActorsB);
        linkActorsB.addEventListener("click", formUpdateActor);

        var bodyActorsC = document.createElement("div");
        bodyActorsC.setAttribute("class", "card-body");
        //containerActors.appendChild(bodyActorsC);
        $(containerActors).append(bodyActorsC);

        var linkActorsC = document.createElement("a");
        linkActorsC.setAttribute("href", "#");
        //linkActorsC.appendChild(document.createTextNode("Eliminar"));
        $(linkActorsC).append("Eliminar");
        //bodyActorsC.appendChild(linkActorsC);
        $(bodyActorsC).append(linkActorsC);
        linkActorsC.addEventListener("click", formDeleteActors);
        /*Fin Administrar Actores*/


        /*Administrar Directores*/
        var cardDirectors = document.createElement("div");
        cardDirectors.setAttribute("class", "card mt-3 mr-3 ml-3");
        //divAdmin.appendChild(cardDirectors);
        $(divAdmin).append(cardDirectors);

        var cardHeaderDirectors = document.createElement("div");
        cardHeaderDirectors.setAttribute("class", "card-header");
        cardHeaderDirectors.setAttribute("id", "headingThree");
        //cardDirectors.appendChild(cardHeaderDirectors);
        $(cardDirectors).append(cardHeaderDirectors);

        var headerDirectors = document.createElement("h5");
        headerDirectors.setAttribute("class", "mb-0");
        //cardHeaderDirectors.appendChild(headerDirectors);
        $(cardHeaderDirectors).append(headerDirectors);

        var buttonDirectors = document.createElement("button");
        buttonDirectors.setAttribute("class", "btn btn-link font-weight-bold");
        buttonDirectors.style.textDecoration = "none";
        buttonDirectors.setAttribute("data-toggle", "collapse");
        buttonDirectors.setAttribute("data-target", "#collapseThree");
        buttonDirectors.setAttribute("aria-expanded", "true");
        buttonDirectors.setAttribute("aria-controls", "collapseThree");
        //buttonDirectors.appendChild(document.createTextNode("Directores"));
        $(buttonDirectors).append("Directores");
        //cardHeaderDirectors.appendChild(buttonDirectors);
        $(cardHeaderDirectors).append(buttonDirectors);

        //Contenido Administrar Directores
        var containerDirectors = document.createElement("div");
        containerDirectors.setAttribute("id", "collapseThree");
        containerDirectors.setAttribute("class", "border collapse mr-3 ml-3");
        containerDirectors.setAttribute("aria-labelledby", "headingThree");
        containerDirectors.setAttribute("data-parent", "#accordion");
        //divAdmin.appendChild(containerDirectors);
        $(divAdmin).append(containerDirectors);

        var bodyDirectorsA = document.createElement("div");
        bodyDirectorsA.setAttribute("class", "card-body");
        //containerDirectors.appendChild(bodyDirectorsA);
        $(containerDirectors).append(bodyDirectorsA);

        var linkDirectorsA = document.createElement("a");
        linkDirectorsA.setAttribute("href", "#");
        //linkDirectorsA.appendChild(document.createTextNode("Añadir"));
        $(linkDirectorsA).append("Añadir");
        //bodyDirectorsA.appendChild(linkDirectorsA);
        $(bodyDirectorsA).append(linkDirectorsA);
        linkDirectorsA.addEventListener("click", formCreateDirector);


        var bodyDirectorsB = document.createElement("div");
        bodyDirectorsB.setAttribute("class", "card-body");
        //containerDirectors.appendChild(bodyDirectorsB);
        $(containerDirectors).append(bodyDirectorsB);

        var linkDirectorsB = document.createElement("a");
        linkDirectorsB.setAttribute("href", "#");
        //linkDirectorsB.appendChild(document.createTextNode("Modificar"));
        $(linkDirectorsB).append("Modificar");
        //bodyDirectorsB.appendChild(linkDirectorsB);
        $(bodyDirectorsB).append(linkDirectorsB);
        linkDirectorsB.addEventListener("click", formUpdateDirector);

        var bodyDirectorsC = document.createElement("div");
        bodyDirectorsC.setAttribute("class", "card-body");
        //containerDirectors.appendChild(bodyDirectorsC);
        $(containerDirectors).append(bodyDirectorsC);

        var linkDirectorsC = document.createElement("a");
        linkDirectorsC.setAttribute("href", "#");
        //linkDirectorsC.appendChild(document.createTextNode("Eliminar"));
        $(linkDirectorsC).append("Eliminar");
        //bodyDirectorsC.appendChild(linkDirectorsC);
        $(bodyDirectorsC).append(linkDirectorsC);
        linkDirectorsC.addEventListener("click", formDeleteDirectors);
        /*Fin Administrar Directores*/


        /*Administrar Producciones*/
        var cardProductions = document.createElement("div");
        cardProductions.setAttribute("class", "card mt-3 mr-3 ml-3");
        //divAdmin.appendChild(cardProductions);
        $(divAdmin).append(cardProductions);

        var cardHeaderProductions = document.createElement("div");
        cardHeaderProductions.setAttribute("class", "card-header");
        cardHeaderProductions.setAttribute("id", "headingFour");
        //cardProductions.appendChild(cardHeaderProductions);
        $(cardProductions).append(cardHeaderProductions);

        var headerProductions = document.createElement("h5");
        headerProductions.setAttribute("class", "mb-0");
        //cardHeaderProductions.appendChild(headerProductions);
        $(cardHeaderProductions).append(headerProductions);

        var buttonProductions = document.createElement("button");
        buttonProductions.setAttribute("class", "btn btn-link font-weight-bold");
        buttonProductions.style.textDecoration = "none";
        buttonProductions.setAttribute("data-toggle", "collapse");
        buttonProductions.setAttribute("data-target", "#collapseFour");
        buttonProductions.setAttribute("aria-expanded", "true");
        buttonProductions.setAttribute("aria-controls", "collapseFour");
        //buttonProductions.appendChild(document.createTextNode("Producciones"));
        $(buttonProductions).append("Producciones");
        //cardHeaderProductions.appendChild(buttonProductions);
        $(cardHeaderProductions).append(buttonProductions);

        //Contenido Administrar Producciones
        var containerProductions = document.createElement("div");
        containerProductions.setAttribute("id", "collapseFour");
        containerProductions.setAttribute("class", "border collapse mr-3 ml-3");
        containerProductions.setAttribute("aria-labelledby", "headingFour");
        containerProductions.setAttribute("data-parent", "#accordion");
        //divAdmin.appendChild(containerProductions);
        $(divAdmin).append(containerProductions);

        var bodyProductionsA = document.createElement("div");
        bodyProductionsA.setAttribute("class", "card-body");
        //containerProductions.appendChild(bodyProductionsA);
        $(containerProductions).append(bodyProductionsA);

        var linkProductionsA = document.createElement("a");
        linkProductionsA.setAttribute("href", "#");
        //linkProductionsA.appendChild(document.createTextNode("Añadir"));
        $(linkProductionsA).append("Añadir");
        //bodyProductionsA.appendChild(linkProductionsA);
        $(bodyProductionsA).append(linkProductionsA);
        linkProductionsA.addEventListener("click", formCreateProduction);

        var bodyProductionsB = document.createElement("div");
        bodyProductionsB.setAttribute("class", "card-body");
        //containerProductions.appendChild(bodyProductionsB);
        $(containerProductions).append(bodyProductionsB);

        var linkProductionsB = document.createElement("a");
        linkProductionsB.setAttribute("href", "#");
        //linkProductionsB.appendChild(document.createTextNode("Eliminar"));
        $(linkProductionsB).append("Eliminar");
        //bodyProductionsB.appendChild(linkProductionsB);
        $(bodyProductionsB).append(linkProductionsB);
        linkProductionsB.addEventListener("click", formDeleteProduction);
        /*Fin Administrar Producciones*/

        /*AJAX_JSON*/
        var cardServer = document.createElement("div");
        cardServer.setAttribute("class", "card mt-3 mr-3 ml-3");
        //divAdmin.appendChild(cardServer);
        $(divAdmin).append(cardServer);

        var cardHeaderServer = document.createElement("div");
        cardHeaderServer.setAttribute("class", "card-header");
        cardHeaderServer.setAttribute("id", "headingFive");
        //cardServer.appendChild(cardHeaderServer);
        $(cardServer).append(cardHeaderServer);

        var headerServer = document.createElement("h5");
        headerServer.setAttribute("class", "mb-0");
        //cardHeaderServer.appendChild(headerServer);
        $(cardHeaderServer).append(headerServer);

        var buttonServer = document.createElement("button");
        buttonServer.setAttribute("class", "btn btn-link font-weight-bold");
        buttonServer.style.textDecoration = "none";
        buttonServer.setAttribute("data-toggle", "collapse");
        buttonServer.setAttribute("data-target", "#collapseFive");
        buttonServer.setAttribute("aria-expanded", "true");
        buttonServer.setAttribute("aria-controls", "collapseFive");
        //buttonServer.appendChild(document.createTextNode("AJAX/JSON"));
        $(buttonServer).append("AJAX/JSON");
        //cardHeaderServer.appendChild(buttonServer);
        $(cardHeaderServer).append(buttonServer);

        var containerFichero = document.createElement("div");
        containerFichero.setAttribute("id", "collapseFive");
        containerFichero.setAttribute("class", "border collapse mr-3 ml-3");
        containerFichero.setAttribute("aria-labelledby", "headingFive");
        containerFichero.setAttribute("data-parent", "#accordion");
        //divAdmin.appendChild(containerFichero);
        $(divAdmin).append(containerFichero);

        var bodyFichero = document.createElement("div");
        bodyFichero.setAttribute("class", "card-body");
        //containerFichero.appendChild(bodyFichero);
        $(containerFichero).append(bodyFichero);

        var linkFichero = document.createElement("a");
        linkFichero.setAttribute("href", "#");
        //linkFichero.appendChild(document.createTextNode("Crear Fichero"));
        $(linkFichero).append("Crear Fichero");
        //bodyFichero.appendChild(linkFichero);
        $(bodyFichero).append(linkFichero);
        linkFichero.addEventListener("click", generandoFichero);
        /*FIN AJAX_JSON*/

        var colsContenidoMainB = document.createElement("div");
        colsContenidoMainB.setAttribute("class", "col-md-9 border border-primary rounded m-3 bg-light");
        //contenidoMain.appendChild(colsContenidoMainB);
        $(contenidoMain).append(colsContenidoMainB);

        var encabezado = document.getElementById("encabezado");
        //colsContenidoMainB.appendChild(encabezado);
        $(colsContenidoMainB).append(encabezado);

        var principal = document.getElementById("Principal");
        //colsContenidoMainB.appendChild(principal);
        $(colsContenidoMainB).append(principal);

    }

}

//Código que hace referencia a eliminar categorías
function formDeleteCategory() {
    function deleteCategory() {
        var selectCat = document.forms["delete-category"]["deleteCategory"];
        var selectValueCat = selectCat.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (selectValueCat === "") {
            //verificacion.appendChild(document.createTextNode("Error al eliminar la categoría"));
            $(verificacion).append("Error al eliminar la categoría");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var categories = VSystem.categories;
            var category = categories.next();

            while (category.done !== true) {
                var categoryName = category.value.name;
                if (selectValueCat === categoryName) {

                    //Eliminar las categorías del VideoSystem
                    VSystem.removeCategory(category.value);

                    //Eliminar las categorías de la Base de Datos
                    DelDataBase("Categories", categoryName);
                    DelDataBase("AsignarCategories", categoryName);

                    var submenuCat = document.getElementById("submenu");

                    while (submenuCat.hasChildNodes()) {
                        submenuCat.removeChild(submenuCat.lastChild);
                    }
                    categoriesMenuPopulate();
                }
                category = categories.next();
            }

        }
        selectCat.options[selectCat.options.selectedIndex].remove();
        //verificacion.appendChild(document.createTextNode("Categoría eliminada con éxito"));
        $(verificacion).append("Categoría eliminada con éxito");
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Eliminar Categoría"));
    $(encabezado).append("Eliminar Categoría");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formDelCat = document.createElement("form");
    formDelCat.setAttribute("class", "form-inline");
    formDelCat.setAttribute("id", "delete-category");
    formDelCat.setAttribute("name", "delete-category");
    //divForms.appendChild(formDelCat);
    $(divForms).append(formDelCat);

    var formGroupDelCatA = document.createElement("div");
    formGroupDelCatA.setAttribute("class", "form-group");
    //formDelCat.appendChild(formGroupDelCatA);
    $(formDelCat).append(formGroupDelCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "deleteCategory");
    labelCategory.setAttribute("class", "mr-sm-4 font-weight-bold");
    //labelCategory.appendChild(document.createTextNode("Seleccione una categoría "));
    $(labelCategory).append("Seleccione una categoría ");
    //formGroupDelCatA.appendChild(labelCategory);
    $(formGroupDelCatA).append(labelCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectCategory.setAttribute("id", "deleteCategory");
    //formGroupDelCatA.appendChild(selectCategory);
    $(formGroupDelCatA).append(selectCategory);

    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        //optionCategory.appendChild(document.createTextNode(categoryName));
        $(optionCategory).append(categoryName);
        //selectCategory.appendChild(optionCategory);
        $(selectCategory).append(optionCategory);

        category = categories.next();
    }

    var formGroupDelCatB = document.createElement("div");
    formGroupDelCatB.setAttribute("class", "form-group");
    //formDelCat.appendChild(formGroupDelCatB);
    $(formDelCat).append(formGroupDelCatB);

    var divButtonDelCat = document.createElement("div");
    divButtonDelCat.setAttribute("class", "mr-sm-4 mb-sm-0");
    //formGroupDelCatB.appendChild(divButtonDelCat);
    $(formGroupDelCatB).append(divButtonDelCat);

    var buttonDelCat = document.createElement("button");
    buttonDelCat.setAttribute("type", "button");
    buttonDelCat.setAttribute("class", "btn btn-outline-primary");
    //buttonDelCat.appendChild(document.createTextNode("Eliminar"));
    $(buttonDelCat).append("Eliminar");
    //divButtonDelCat.appendChild(buttonDelCat);
    $(divButtonDelCat).append(buttonDelCat);
    buttonDelCat.addEventListener("click", deleteCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);
}

//Código que hace referencia a eliminar Actores
function formDeleteActors() {

    function deleteActors() {
        var selectAct = document.forms["delete-actors"]["deleteActors"];
        var selectValueAct = selectAct.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }


        if (selectValueAct === "") {
            //verificacion.appendChild(document.createTextNode("Error al eliminar la Actriz/or"));
            $(verificacion).append("Error al eliminar la Actriz/or");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var actors = VSystem.actors;
            var actor = actors.next();

            while (actor.done !== true) {
                var actorsNameApe = actor.value.name + " " + actor.value.lastname1;
                if (selectValueAct === actorsNameApe) {

                    //Eliminar actriz/or del VideoSystem
                    VSystem.removeActor(actor.value);

                    //Eliminar actriz/or de la Base de Datos
                    DelDataBase("Actors", actor.value.lastname1);
                    DelDataBase("AsignarActors", actor.value.lastname1);
                }
                actor = actors.next();
            }

        }
        selectAct.options[selectAct.options.selectedIndex].remove();
        //verificacion.appendChild(document.createTextNode("Actriz/or eliminada/o con éxito"));
        $(verificacion).append("Actriz/or eliminada/o con éxito");
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Eliminar Actriz/or"));
    $(encabezado).append("Eliminar Actriz/or");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formDelAct = document.createElement("form");
    formDelAct.setAttribute("class", "form-inline");
    formDelAct.setAttribute("id", "delete-actors");
    formDelAct.setAttribute("name", "delete-actors");
    //divForms.appendChild(formDelAct);
    $(divForms).append(formDelAct);

    var formGroupDelActA = document.createElement("div");
    formGroupDelActA.setAttribute("class", "form-group");
    //formDelAct.appendChild(formGroupDelActA);
    $(formDelAct).append(formGroupDelActA);

    var labelActors = document.createElement("label");
    labelActors.setAttribute("for", "deleteActors");
    labelActors.setAttribute("class", "mr-sm-4 font-weight-bold");
    //labelActors.appendChild(document.createTextNode("Seleccione una Actriz/Actor "));
    $(labelActors).append("Seleccione una Actriz/Actor ");
    //formGroupDelActA.appendChild(labelActors);
    $(formGroupDelActA).append(labelActors);

    var selectActors = document.createElement("select");
    selectActors.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectActors.setAttribute("id", "deleteActors");
    //formGroupDelActA.appendChild(selectActors);
    $(formGroupDelActA).append(selectActors);

    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var actorsNameApe = actor.value.name + " " + actor.value.lastname1;
        var optionActors = document.createElement("option");
        optionActors.setAttribute("value", actorsNameApe);
        //optionActors.appendChild(document.createTextNode(actorsNameApe));
        $(optionActors).append(actorsNameApe);
        //selectActors.appendChild(optionActors);
        $(selectActors).append(optionActors);

        actor = actors.next();
    }
    var formGroupDelActB = document.createElement("div");
    formGroupDelActB.setAttribute("class", "form-group");
    //formDelAct.appendChild(formGroupDelActB);
    $(formDelAct).append(formGroupDelActB);

    var divButtonDelAct = document.createElement("div");
    divButtonDelAct.setAttribute("class", "mr-sm-4 mb-sm-0");
    //formGroupDelActB.appendChild(divButtonDelAct);
    $(formGroupDelActB).append(divButtonDelAct);

    var buttonDelAct = document.createElement("button");
    buttonDelAct.setAttribute("type", "button");
    buttonDelAct.setAttribute("class", "btn btn-outline-primary");
    //buttonDelAct.appendChild(document.createTextNode("Eliminar"));
    $(buttonDelAct).append("Eliminar");
    //divButtonDelAct.appendChild(buttonDelAct);
    $(divButtonDelAct).append(buttonDelAct);
    buttonDelAct.addEventListener("click", deleteActors);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);


}

//Código que hace referencia a eliminar Directores
function formDeleteDirectors() {
    function deleteDirectors() {
        var selectDirec = document.forms["delete-directors"]["deleteDirectors"];
        var selectValueDirec = selectDirec.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (selectValueDirec === "") {
            //verificacion.appendChild(document.createTextNode("Error al eliminar la Director/ora"));
            $(verificacion).append("Error al eliminar la Director/ora");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var directors = VSystem.directors;
            var director = directors.next();

            while (director.done !== true) {
                var directorsNameApe = director.value.name + " " + director.value.lastname1;
                if (selectValueDirec === directorsNameApe) {

                    //Eliminar directora/or del VideoSystem
                    VSystem.removeDirector(director.value);

                    //Eliminar directora/or de la Base de Datos
                    DelDataBase("Directors", director.value.lastname1);
                    DelDataBase("AsignarDirectors", director.value.lastname1);
                }
                director = directors.next();
            }

        }
        selectDirec.options[selectDirec.options.selectedIndex].remove();
        //verificacion.appendChild(document.createTextNode("Director/ora eliminado/a con éxito"));
        $(verificacion).append("Director/ora eliminado/a con éxito");
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Eliminar Directora/or"));
    $(encabezado).append("Eliminar Directora/or");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formDelDirect = document.createElement("form");
    formDelDirect.setAttribute("class", "form-inline");
    formDelDirect.setAttribute("id", "delete-directors");
    formDelDirect.setAttribute("name", "delete-directors");
    //divForms.appendChild(formDelDirect);
    $(divForms).append(formDelDirect);

    var formGroupDelDirectA = document.createElement("div");
    formGroupDelDirectA.setAttribute("class", "form-group");
    //formDelDirect.appendChild(formGroupDelDirectA);
    $(formDelDirect).append(formGroupDelDirectA);

    var labelDirectors = document.createElement("label");
    labelDirectors.setAttribute("for", "deleteDirectors");
    labelDirectors.setAttribute("class", "mr-sm-4 font-weight-bold");
    //labelDirectors.appendChild(document.createTextNode("Seleccione una Directegoría "));
    $(labelDirectors).append("Seleccione una Directora/or ");
    //formGroupDelDirectA.appendChild(labelDirectors);
    $(formGroupDelDirectA).append(labelDirectors);

    var selectDirectors = document.createElement("select");
    selectDirectors.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectDirectors.setAttribute("id", "deleteDirectors");
    //formGroupDelDirectA.appendChild(selectDirectors);
    $(formGroupDelDirectA).append(selectDirectors);

    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();


    while (director.done !== true) {
        var directorsNameApe = director.value.name + " " + director.value.lastname1;
        var optionDirectors = document.createElement("option");
        optionDirectors.setAttribute("value", directorsNameApe);
        //optionDirectors.appendChild(document.createTextNode(directorsNameApe));
        $(optionDirectors).append(directorsNameApe);
        //selectDirectors.appendChild(optionDirectors);
        $(selectDirectors).append(optionDirectors);

        director = directors.next();
    }
    var formGroupDelDirectB = document.createElement("div");
    formGroupDelDirectB.setAttribute("class", "form-group");
    //formDelDirect.appendChild(formGroupDelDirectB);
    $(formDelDirect).append(formGroupDelDirectB);

    var divButtonDelDirect = document.createElement("div");
    divButtonDelDirect.setAttribute("class", "mr-sm-4 mb-sm-0");
    //formGroupDelDirectB.appendChild(divButtonDelDirect);
    $(formGroupDelDirectB).append(divButtonDelDirect);

    var buttonDelDirect = document.createElement("button");
    buttonDelDirect.setAttribute("type", "button");
    buttonDelDirect.setAttribute("class", "btn btn-outline-primary");
    //buttonDelDirect.appendChild(document.createTextNode("Eliminar"));
    $(buttonDelDirect).append("Eliminar");
    //divButtonDelDirect.appendChild(buttonDelDirect);
    $(divButtonDelDirect).append(buttonDelDirect);
    buttonDelDirect.addEventListener("click", deleteDirectors);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);

}

//Código que hace referencia a eliminar Producciones
function formDeleteProduction() {
    function deleteProduction() {
        var selectProduc = document.forms["delete-production"]["deleteProduc"];
        var selectValueProduc = selectProduc.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (selectValueProduc == "") {
            //verificacion.appendChild(document.createTextNode("Error al eliminar la Producción."));
            $(verificacion).append("Error al eliminar la Producción.");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var producciones = VSystem.productions;
            var produccion =  producciones.next();

            while (produccion.done !== true) {
                if (produccion.value.title === selectValueProduc) {
                    var delProd = produccion.value;

                    //Recorro las categorías y deasigno la production que pertenece a la categoría
                    var categories = VSystem.categories;
                    var category = categories.next();

                    while (category.done !== true) {
                        var foundPro = false;
                        var productions = VSystem.getProductionsCategory(category.value);
                        var production = productions.next();

                        while ((production.done !== true) && (!foundPro)) {
                            let productionTitle = production.value.title;
                            if (productionTitle === selectValueProduc) {
                                VSystem.deassignCategory(category.value, delProd);
                                deassingStore("AsignarCategories",category.value.name,delProd.title);
                            }
                            production = productions.next();
                        }
                        category = categories.next();
                    }

                    /*var elenco = VSystem.getCast(production.value);
                    var actor = elenco.next();

                    while (actor.done !== true) {
                        VSystem.deassignActor(actor.value,production.value);
                        actor = elenco.next();
                    }*/


                    //Recorro los directores y deasigno la production que pertenece al director/es
                    var directors = VSystem.directors;
                    var director = directors.next();

                    while (director.done !== true) {
                        var productions = VSystem.getProductionsDirector(director.value);
                        var production = productions.next();

                        while (production.done !== true) {
                            let productionTitle = production.value.title;
                            if (productionTitle === selectValueProduc) {

                                VSystem.deassignDirector(director.value, delProd);

                                //deassingStore("AsignarDirectors",director.value.name,delProd.title);
                            }
                            production = productions.next();
                        }
                        director = directors.next();
                    }
                    DelDataBase("Productions",delProd.title);
                }

                produccion = producciones.next();
            }

        }
        //VSystem.removeProduction(delProd);

        selectProduc.options[selectProduc.options.selectedIndex].remove();
        //verificacion.appendChild(document.createTextNode("Producción eliminada con éxito."));
        $(verificacion).append("Producción eliminada con éxito.");
        verificacion.style.color = "green";
    }



    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Eliminar Producción"));
    $(encabezado).append("Eliminar Producción");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formDelProduct = document.createElement("form");
    formDelProduct.setAttribute("class", "form-inline");
    formDelProduct.setAttribute("id", "delete-production");
    formDelProduct.setAttribute("name", "delete-production");
    //divForms.appendChild(formDelProduct);
    $(divForms).append(formDelProduct);

    var formGroupDelProductA = document.createElement("div");
    formGroupDelProductA.setAttribute("class", "form-group");
    //formDelProduct.appendChild(formGroupDelProductA);
    $(formDelProduct).append(formGroupDelProductA);

    var labelProductions = document.createElement("label");
    labelProductions.setAttribute("for", "deleteProduction");
    labelProductions.setAttribute("class", "mr-sm-4 font-weight-bold");
    //labelProductions.appendChild(document.createTextNode("Seleccione una Producción "));
    $(labelProductions).append("Seleccione una Producción ");
    //formGroupDelProductA.appendChild(labelProductions);
    $(formGroupDelProductA).append(labelProductions);

    var selectProductions = document.createElement("select");
    selectProductions.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectProductions.setAttribute("id", "deleteProduction");
    selectProductions.setAttribute("name", "deleteProduc");
    //formGroupDelProductA.appendChild(selectProductions);
    $(formGroupDelProductA).append(selectProductions);

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();


    while (production.done !== true) {
        var productionTitle = production.value.title;
        var optionProductions = document.createElement("option");
        optionProductions.setAttribute("value", productionTitle);
        //optionProductions.appendChild(document.createTextNode(productionTitle));
        $(optionProductions).append(productionTitle);
        //selectProductions.appendChild(optionProductions);
        $(selectProductions).append(optionProductions);

        production = productions.next();
    }
    var formGroupDelProductB = document.createElement("div");
    formGroupDelProductB.setAttribute("class", "form-group");
    //formDelProduct.appendChild(formGroupDelProductB);
    $(formDelProduct).append(formGroupDelProductB);

    var divButtonDelProduct = document.createElement("div");
    divButtonDelProduct.setAttribute("class", "mr-sm-4 mb-sm-0");
    //formGroupDelProductB.appendChild(divButtonDelProduct);
    $(formGroupDelProductB).append(divButtonDelProduct);

    var buttonDelProduct = document.createElement("button");
    buttonDelProduct.setAttribute("type", "button");
    buttonDelProduct.setAttribute("class", "btn btn-outline-primary");
    //buttonDelProduct.appendChild(document.createTextNode("Eliminar"));
    $(buttonDelProduct).append("Eliminar");
    //divButtonDelProduct.appendChild(buttonDelProduct);
    $(divButtonDelProduct).append(buttonDelProduct);
    buttonDelProduct.addEventListener("click", deleteProduction);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);


}





//Código que hace referencia Añadir Categorías
function formCreateCategory() {
    function newCategory() {
        var VSystem = VideoSystem.getInstance();
        var nameCategory = document.forms["add-category"]["nameCategory"].value;
        var imgCategory = document.forms["add-category"]["imgCategory"].value;
        var imgPart = imgCategory.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameCategory == "" || imgCategory == "") {
            //verificacion.appendChild(document.createTextNode("Error al introducir la categoría"));
            $(verificacion).append("Error al introducir la categoría");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var nuevaCategory = new Category(nameCategory);
            nuevaCategory.imgCategory = "imagenes/categorias/" + imgLoc;

            //Añadir nueva categoría al Video System
            VSystem.addCategory(nuevaCategory);

            //Añadir nueva categoría a la base de datos
            addData("Categories", nuevaCategory);
            addDataAssign("AsignarCategories", { category: nuevaCategory.name, Productions: [] });

            /*Limpio los nodos hijos del submenu categorias que se vuelva a pintar
            con la categoría añadida*/

            var submenuCat = document.getElementById("submenu");

            //Limpio los nodos hijos
            while (submenuCat.hasChildNodes()) {
                submenuCat.removeChild(submenuCat.lastChild);
            }

            //Vuelvo a llamar a la función para pintar el menú de nuevo
            categoriesMenuPopulate();
        }
        document.forms["add-category"].reset();
        //verificacion.appendChild(document.createTextNode("Categoría Añadida Correctamente"));
        $(verificacion).append("Categoría Añadida Correctamente");
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Añadir Categorías"));
    $(encabezado).append("Añadir Categorías");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formAddCat = document.createElement("form");
    formAddCat.setAttribute("id", "add-category");
    formAddCat.setAttribute("name", "add-category");
    //divForms.appendChild(formAddCat);
    $(divForms).append(formAddCat);

    var formGroupAddCatA = document.createElement("div");
    formGroupAddCatA.setAttribute("class", "form-group row");
    //formAddCat.appendChild(formGroupAddCatA);
    $(formAddCat).append(formGroupAddCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "nameCategory");
    labelCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelCategory.appendChild(document.createTextNode("Introduzca categoría* "));
    $(labelCategory).append("Introduzca categoría* ");
    //formGroupAddCatA.appendChild(labelCategory);
    $(formGroupAddCatA).append(labelCategory);

    var divInputCategory = document.createElement("div");
    divInputCategory.setAttribute("class", "col-sm-8");
    //formGroupAddCatA.appendChild(divInputCategory);
    $(formGroupAddCatA).append(divInputCategory);

    var inputCategory = document.createElement("input");
    inputCategory.setAttribute("type", "text");
    inputCategory.setAttribute("class", "form-control");
    inputCategory.setAttribute("id", "nameCategory");
    inputCategory.setAttribute("placeholder", "Nombre Categoría");
    //divInputCategory.appendChild(inputCategory);
    $(divInputCategory).append(inputCategory);

    var formGroupAddCatB = document.createElement("div");
    formGroupAddCatB.setAttribute("class", "form-group row");
    //formAddCat.appendChild(formGroupAddCatB);
    $(formAddCat).append(formGroupAddCatB);

    var labelImgCategory = document.createElement("label");
    labelImgCategory.setAttribute("for", "imgCategory");
    labelImgCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgCategory.appendChild(document.createTextNode("Imagen* "));
    //formGroupAddCatB.appendChild(labelImgCategory);
    $(formGroupAddCatB).append(labelImgCategory);

    var divInputImgCategory = document.createElement("div");
    divInputImgCategory.setAttribute("class", "col-sm-8");
    //formGroupAddCatB.appendChild(divInputImgCategory);
    $(formGroupAddCatB).append(divInputImgCategory);

    var inputImgCategory = document.createElement("input");
    inputImgCategory.setAttribute("type", "file");
    inputImgCategory.setAttribute("class", "form-control-file");
    inputImgCategory.setAttribute("id", "imgCategory");
    //divInputImgCategory.appendChild(inputImgCategory);
    $(divInputImgCategory).append(inputImgCategory);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formAddCat.appendChild(divNotaAsterisco);
    $(formAddCat).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupAddCatC = document.createElement("div");
    formGroupAddCatC.setAttribute("class", "form-group row");
    //formAddCat.appendChild(formGroupAddCatC);
    $(formAddCat).append(formGroupAddCatC);

    var divButtonAddCat = document.createElement("div");
    divButtonAddCat.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupAddCatC.appendChild(divButtonAddCat);
    $(formGroupAddCatC).append(divButtonAddCat);

    var buttonAddCat = document.createElement("button");
    buttonAddCat.setAttribute("type", "button");
    buttonAddCat.setAttribute("class", "btn btn-outline-primary");
    //buttonAddCat.appendChild(document.createTextNode("Añadir"));
    $(buttonAddCat).append("Añadir");
    //divButtonAddCat.appendChild(buttonAddCat);
    $(divButtonAddCat).append(buttonAddCat);
    buttonAddCat.addEventListener("click", newCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);


}
//Fin del CreateCategory


//Código que hace referencia añadir Actores
function formCreateActors() {
    function newActor() {
        var nameActor = document.forms["add-actor"]["nameActor"].value;
        var apellidoActor = document.forms["add-actor"]["apellidoActor"].value;
        var bornActor = document.forms["add-actor"]["bornActor"].value;
        var imgActor = document.forms["add-actor"]["imgActor"].value;
        var imgPart = imgActor.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];
        var prodRadio = $('input[name=producActor]:checked', '#add-actor').val();

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }


        if (nameActor == "" || apellidoActor == "" || bornActor == "" || imgActor == "") {
            //verificacion.appendChild(document.createTextNode("Error al introducir la Actriz/or"));
            $(verificacion).append("Error al introducir la Actriz/or");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var productions = VSystem.productions;
            var production = productions.next();
            var foundPro = false;

            while ((production.done !== true) && (!foundPro)) {

                var productionTitle = production.value.title;

                if (productionTitle === prodRadio) {

                    var prodAdd = production.value;

                    foundPro = true;

                }

                production = productions.next()
            }

            var nuevoActor = new Person(nameActor, apellidoActor, bornActor, imgActor);
            nuevoActor.picture = "imagenes/actores/" + imgLoc;

            //Añadir nueva/o actriz/or al VideoSystem
            VSystem.addActor(nuevoActor);
            //Añadir nueva/o actriz/or a la base de datos junto con su producción/es
            addData("Actors", nuevoActor);

            if (prodRadio != undefined) {
                //Asignamos produccion a la nueva/o actriz/or al VideoSystem
                VSystem.assignActor(nuevoActor, prodAdd);
                //Asignamos produccion a la nueva/o actriz/or al VideoSystem
                addDataAssign("AsignarActors", { actor: nuevoActor.lastname1, Productions: [{ title: prodAdd.title }] });
            }


        }
        document.forms["add-actor"].reset();
        //verificacion.appendChild(document.createTextNode("Actriz/or Añadida/o Correctamente"));
        $(verificacion).append("Actriz/or Añadida/o Correctamente");
        verificacion.style.color = "green";

    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Añadir Actores"));
    $(encabezado).append("Añadir Actores");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-4");
    divForms.style.height = "800px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formAddActors = document.createElement("form");
    formAddActors.setAttribute("id", "add-actor");
    formAddActors.setAttribute("name", "add-actor");
    //divForms.appendChild(formAddActors);
    $(divForms).append(formAddActors);

    var formGroupAddActA = document.createElement("div");
    formGroupAddActA.setAttribute("class", "form-group row");
    //formAddActors.appendChild(formGroupAddActA);
    $(formAddActors).append(formGroupAddActA);

    var labelActorName = document.createElement("label");
    labelActorName.setAttribute("for", "nameActor");
    labelActorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelActorName.appendChild(document.createTextNode("Nombre* "));
    $(labelActorName).append("Nombre* ");
    //formGroupAddActA.appendChild(labelActorName);
    $(formGroupAddActA).append(labelActorName);

    var divInputActName = document.createElement("div");
    divInputActName.setAttribute("class", "col-sm-8");
    //formGroupAddActA.appendChild(divInputActName);
    $(formGroupAddActA).append(divInputActName);

    var inputActName = document.createElement("input");
    inputActName.setAttribute("type", "text");
    inputActName.setAttribute("class", "form-control");
    inputActName.setAttribute("id", "nameActor");
    inputActName.setAttribute("placeholder", "Nombre Actriz/or");
    //divInputActName.appendChild(inputActName);
    $(divInputActName).append(inputActName);

    var formGroupAddActB = document.createElement("div");
    formGroupAddActB.setAttribute("class", "form-group row");
    //formAddActors.appendChild(formGroupAddActB);
    $(formAddActors).append(formGroupAddActB);

    var labelApeActor = document.createElement("label");
    labelApeActor.setAttribute("for", "apellidoActor");
    labelApeActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelApeActor.appendChild(document.createTextNode("Primer Apellido* "));
    $(labelApeActor).append("Primer Apellido* ");
    //formGroupAddActB.appendChild(labelApeActor);
    $(formGroupAddActB).append(labelApeActor);

    var divInputApeActor = document.createElement("div");
    divInputApeActor.setAttribute("class", "col-sm-8");
    //formGroupAddActB.appendChild(divInputApeActor);
    $(formGroupAddActB).append(divInputApeActor);

    var inputApeActor = document.createElement("input");
    inputApeActor.setAttribute("type", "text");
    inputApeActor.setAttribute("class", "form-control");
    inputApeActor.setAttribute("id", "apellidoActor");
    inputApeActor.setAttribute("placeholder", "Primer Apellido")
    //divInputApeActor.appendChild(inputApeActor);
    $(divInputApeActor).append(inputApeActor);

    var formGroupAddActC = document.createElement("div");
    formGroupAddActC.setAttribute("class", "form-group row");
    //formAddActors.appendChild(formGroupAddActC);
    $(formAddActors).append(formGroupAddActC);

    var labelBornActor = document.createElement("label");
    labelBornActor.setAttribute("for", "bornActor");
    labelBornActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelBornActor.appendChild(document.createTextNode("Fecha Nacimiento* "));
    $(labelBornActor).append("Fecha Nacimiento* ");
    //formGroupAddActC.appendChild(labelBornActor);
    $(formGroupAddActC).append(labelBornActor);

    var divInputBornActor = document.createElement("div");
    divInputBornActor.setAttribute("class", "col-sm-8");
    //formGroupAddActC.appendChild(divInputBornActor);
    $(formGroupAddActC).append(divInputBornActor);

    var inputBornActor = document.createElement("input");
    inputBornActor.setAttribute("type", "text");
    inputBornActor.setAttribute("class", "form-control");
    inputBornActor.setAttribute("id", "bornActor");
    inputBornActor.setAttribute("placeholder", "MM/DD/YYYY");
    //divInputBornActor.appendChild(inputBornActor);
    $(divInputBornActor).append(inputBornActor);

    var formGroupAddActD = document.createElement("div");
    formGroupAddActD.setAttribute("class", "form-group row");
    //formAddActors.appendChild(formGroupAddActD);
    $(formAddActors).append(formGroupAddActD);

    var labelImgActor = document.createElement("label");
    labelImgActor.setAttribute("for", "imgActor");
    labelImgActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelImgActor.appendChild(document.createTextNode("Imagen* "));
    $(labelImgActor).append("Imagen* ");
    //formGroupAddActD.appendChild(labelImgActor);
    $(formGroupAddActD).append(labelImgActor);

    var divInputImgActor = document.createElement("div");
    divInputImgActor.setAttribute("class", "col-sm-8");
    //formGroupAddActD.appendChild(divInputImgActor);
    $(formGroupAddActD).append(divInputImgActor);

    var inputImgActor = document.createElement("input");
    inputImgActor.setAttribute("type", "file");
    inputImgActor.setAttribute("class", "form-control-file");
    inputImgActor.setAttribute("id", "imgActor");
    //divInputImgActor.appendChild(inputImgActor);
    $(divInputImgActor).append(inputImgActor);

    var formGroupAddActE = document.createElement("div");
    formGroupAddActE.setAttribute("class", "form-group row");
    //formAddActors.appendChild(formGroupAddActE);
    $(formAddActors).append(formGroupAddActE);

    var labelProducActor = document.createElement("label");
    labelProducActor.setAttribute("for", "producActor");
    labelProducActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelProducActor.appendChild(document.createTextNode("Producción/es "));
    $(labelProducActor).append("Producción/es ");
    //formGroupAddActE.appendChild(labelProducActor);
    $(formGroupAddActE).append(labelProducActor);

    var divChecksProducActor = document.createElement("div");
    divChecksProducActor.setAttribute("class", "col-sm-8");
    //formGroupAddActE.appendChild(divChecksProducActor);
    $(formGroupAddActE).append(divChecksProducActor);

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        //divChecksProducActor.appendChild(divChecks);
        $(divChecksProducActor).append(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "radio");
        inputChecks.setAttribute("class", "form-check-input producActor");
        inputChecks.setAttribute("id", "producActor");
        inputChecks.setAttribute("name", "producActor");
        inputChecks.setAttribute("value", production.value.title);
        //divChecks.appendChild(inputChecks);
        $(divChecks).append(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producActor");
        //labelChecks.appendChild(document.createTextNode(production.value.title));
        $(labelChecks).append(production.value.title);
        //divChecks.appendChild(labelChecks);
        $(divChecks).append(labelChecks);

        production = productions.next();
    }

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formAddActors.appendChild(divNotaAsterisco);
    $(formAddActors).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupAddActF = document.createElement("div");
    formGroupAddActF.setAttribute("class", "form-group row");
    //formAddActors.appendChild(formGroupAddActF);
    $(formAddActors).append(formGroupAddActF);

    var divButtonAddAct = document.createElement("div");
    divButtonAddAct.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupAddActF.appendChild(divButtonAddAct);
    $(formGroupAddActF).append(divButtonAddAct);

    var buttonAddAct = document.createElement("button");
    buttonAddAct.setAttribute("type", "button");
    buttonAddAct.setAttribute("class", "btn btn-outline-primary");
    //buttonAddAct.appendChild(document.createTextNode("Añadir"));
    $(buttonAddAct).append("Añadir");
    //divButtonAddAct.appendChild(buttonAddAct);
    $(divButtonAddAct).append(buttonAddAct);
    buttonAddAct.addEventListener("click", newActor);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);

}
//Fin del CreateActors


//Código que hace referencia añadir Directores
function formCreateDirector() {
    function newDirector() {
        var nameDirector = document.forms["add-director"]["nameDirector"].value;
        var apellidoDirector = document.forms["add-director"]["apellidoDirector"].value;
        var bornDirector = document.forms["add-director"]["bornDirector"].value;
        var imgDirector = document.forms["add-director"]["imgDirector"].value;
        var imgPart = imgDirector.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];
        var prodRadio = $('input[name=producDirector]:checked', '#add-director').val();

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }


        if (nameDirector == "" || apellidoDirector == "" || bornDirector == "" || imgDirector == "") {
            //verificacion.appendChild(document.createTextNode("Error al introducir la Directora/or"));
            $(verificacion).append("Error al introducir la Directora/or");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var foundPro = false;
            var productions = VSystem.productions;
            var production = productions.next();

            while ((production.done !== true) && (!foundPro)) {
                var productionTitle = production.value.title;
                if (productionTitle === prodRadio) {
                    var prodAdd = production.value;
                    foundPro = true;
                }
                production = productions.next();
            }

            var nuevoDirector = new Person(nameDirector, apellidoDirector, bornDirector);
            nuevoDirector.picture = "imagenes/directores/" + imgLoc;

            //Añadir nueva/o directora/or al VideoSystem
            VSystem.addDirector(nuevoDirector);
            addData("Directors", nuevoDirector);

            if (prodRadio != undefined) {
                VSystem.assignDirector(nuevoDirector, prodAdd);
                addDataAssign("AsignarDirectors", { director: apellidoDirector, Productions: [prodAdd.title] });
            }


        }
        document.forms["add-director"].reset();
        //verificacion.appendChild(document.createTextNode("Directora/or Añadida/o Correctamente"));
        $(verificacion).append("Directora/or Añadida/o Correctamente");
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Añadir Directores"));
    $(encabezado).append("Añadir Directores");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-4");
    divForms.style.height = "800px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formAddDirectors = document.createElement("form");
    formAddDirectors.setAttribute("id", "add-director");
    formAddDirectors.setAttribute("name", "add-director");
    //divForms.appendChild(formAddDirectors);
    $(divForms).append(formAddDirectors);

    var formGroupAddDirectA = document.createElement("div");
    formGroupAddDirectA.setAttribute("class", "form-group row");
    //formAddDirectors.appendChild(formGroupAddDirectA);
    $(formAddDirectors).append(formGroupAddDirectA);

    var labelDirectorName = document.createElement("label");
    labelDirectorName.setAttribute("for", "nameDirector");
    labelDirectorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelDirectorName.appendChild(document.createTextNode("Nombre* "));
    $(labelDirectorName).append("Nombre* ");
    //formGroupAddDirectA.appendChild(labelDirectorName);
    $(formGroupAddDirectA).append(labelDirectorName);

    var divInputDirectName = document.createElement("div");
    divInputDirectName.setAttribute("class", "col-sm-8");
    //formGroupAddDirectA.appendChild(divInputDirectName);
    $(formGroupAddDirectA).append(divInputDirectName);

    var inputDirectName = document.createElement("input");
    inputDirectName.setAttribute("type", "text");
    inputDirectName.setAttribute("class", "form-control");
    inputDirectName.setAttribute("id", "nameDirector");
    inputDirectName.setAttribute("placeholder", "Nombre Directora/or");
    //divInputDirectName.appendChild(inputDirectName);
    $(divInputDirectName).append(inputDirectName);

    var formGroupAddDirectB = document.createElement("div");
    formGroupAddDirectB.setAttribute("class", "form-group row");
    //formAddDirectors.appendChild(formGroupAddDirectB);
    $(formAddDirectors).append(formGroupAddDirectB);

    var labelApeDirector = document.createElement("label");
    labelApeDirector.setAttribute("for", "apellidoDirector");
    labelApeDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelApeDirector.appendChild(document.createTextNode("Primer Apellido* "));
    $(labelApeDirector).append("Primer Apellido* ");
    //formGroupAddDirectB.appendChild(labelApeDirector);
    $(formGroupAddDirectB).append(labelApeDirector);

    var divInputApeDirect = document.createElement("div");
    divInputApeDirect.setAttribute("class", "col-sm-8");
    //formGroupAddDirectB.appendChild(divInputApeDirect);
    $(formGroupAddDirectB).append(divInputApeDirect);

    var inputApeDirect = document.createElement("input");
    inputApeDirect.setAttribute("type", "text");
    inputApeDirect.setAttribute("class", "form-control");
    inputApeDirect.setAttribute("id", "apellidoDirector");
    inputApeDirect.setAttribute("placeholder", "Primer Apellido");
    //divInputApeDirect.appendChild(inputApeDirect);
    $(divInputApeDirect).append(inputApeDirect);

    var formGroupAddDirectC = document.createElement("div");
    formGroupAddDirectC.setAttribute("class", "form-group row");
    //formAddDirectors.appendChild(formGroupAddDirectC);
    $(formAddDirectors).append(formGroupAddDirectC);

    var labelBornDirector = document.createElement("label");
    labelBornDirector.setAttribute("for", "bornDirector");
    labelBornDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelBornDirector.appendChild(document.createTextNode("Fecha Nacimiento* "));
    $(labelBornDirector).append("Fecha Nacimiento* ");
    //formGroupAddDirectC.appendChild(labelBornDirector);
    $(formGroupAddDirectC).append(labelBornDirector);

    var divInputBornDirect = document.createElement("div");
    divInputBornDirect.setAttribute("class", "col-sm-8");
    //formGroupAddDirectC.appendChild(divInputBornDirect);
    $(formGroupAddDirectC).append(divInputBornDirect);

    var inputBornDirect = document.createElement("input");
    inputBornDirect.setAttribute("type", "text");
    inputBornDirect.setAttribute("class", "form-control");
    inputBornDirect.setAttribute("id", "bornDirector");
    inputBornDirect.setAttribute("placeholder", "MM/DD/YYYY");
    //divInputBornDirect.appendChild(inputBornDirect);
    $(divInputBornDirect).append(inputBornDirect);

    var formGroupAddDirectD = document.createElement("div");
    formGroupAddDirectD.setAttribute("class", "form-group row");
    //formAddDirectors.appendChild(formGroupAddDirectD);
    $(formAddDirectors).append(formGroupAddDirectD);

    var labelImgDirect = document.createElement("label");
    labelImgDirect.setAttribute("for", "imgDirector");
    labelImgDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelImgDirect.appendChild(document.createTextNode("Imagen "));
    $(labelImgDirect).append("Imagen ");
    //formGroupAddDirectD.appendChild(labelImgDirect);
    $(formGroupAddDirectD).append(labelImgDirect);

    var divInputImgDirect = document.createElement("div");
    divInputImgDirect.setAttribute("class", "col-sm-8");
    //formGroupAddDirectD.appendChild(divInputImgDirect);
    $(formGroupAddDirectD).append(divInputImgDirect);

    var inputImgDirect = document.createElement("input");
    inputImgDirect.setAttribute("type", "file");
    inputImgDirect.setAttribute("class", "form-control-file");
    inputImgDirect.setAttribute("id", "imgDirector");
    //divInputImgDirect.appendChild(inputImgDirect);
    $(divInputImgDirect).append(inputImgDirect);

    var formGroupAddDirectE = document.createElement("div");
    formGroupAddDirectE.setAttribute("class", "form-group row");
    //formAddDirectors.appendChild(formGroupAddDirectE);
    $(formAddDirectors).append(formGroupAddDirectE);

    var labelProducDirect = document.createElement("label");
    labelProducDirect.setAttribute("for", "producDirector");
    labelProducDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelProducDirect.appendChild(document.createTextNode("Producción/es "));
    $(labelProducDirect).append("Producción/es ");
    //formGroupAddDirectE.appendChild(labelProducDirect);
    $(formGroupAddDirectE).append(labelProducDirect);

    var divChecksProducDirect = document.createElement("div");
    divChecksProducDirect.setAttribute("class", "col-sm-8");
    //formGroupAddDirectE.appendChild(divChecksProducDirect);
    $(formGroupAddDirectE).append(divChecksProducDirect);

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        var productionTitle = production.value.title;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        //divChecksProducDirect.appendChild(divChecks);
        $(divChecksProducDirect).append(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "radio");
        inputChecks.setAttribute("class", "form-check-input producDirector");
        inputChecks.setAttribute("id", "producDirector");
        inputChecks.setAttribute("name", "producDirector");
        inputChecks.setAttribute("value", productionTitle);
        //divChecks.appendChild(inputChecks);
        $(divChecks).append(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producDirector");
        //labelChecks.appendChild(document.createTextNode(productionTitle));
        $(labelChecks).append(productionTitle);
        //divChecks.appendChild(labelChecks);
        $(divChecks).append(labelChecks);

        production = productions.next();
    }

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formAddDirectors.appendChild(divNotaAsterisco);
    $(formAddDirectors).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupAddDirectF = document.createElement("div");
    formGroupAddDirectF.setAttribute("class", "form-group row");
    //formAddDirectors.appendChild(formGroupAddDirectF);
    $(formAddDirectors).append(formGroupAddDirectF);

    var divButtonAddDirect = document.createElement("div");
    divButtonAddDirect.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupAddDirectF.appendChild(divButtonAddDirect);
    $(formGroupAddDirectF).append(divButtonAddDirect);

    var buttonAddDirect = document.createElement("button");
    buttonAddDirect.setAttribute("type", "button");
    buttonAddDirect.setAttribute("class", "btn btn-outline-primary");
    //buttonAddDirect.appendChild(document.createTextNode("Añadir"));
    $(buttonAddDirect).append("Añadir");
    //divButtonAddDirect.appendChild(buttonAddDirect);
    $(divButtonAddDirect).append(buttonAddDirect);
    buttonAddDirect.addEventListener("click", newDirector);


    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);
}
//Fin del CreateDirector

//Código que hace referencia añadir producción
function formCreateProduction() {
    function newProduction() {
        var titleProduction = document.forms["add-production"]["titleProduction"].value;
        var publiProduction = document.forms["add-production"]["publiProduction"].value;
        var imgProduction = document.forms["add-production"]["imgProduction"].value;
        var imgPart = imgProduction.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        //Select de categorías
        var selectCat = document.forms["add-production"]["productionCategory"];
        var idSelectCat = selectCat.options[selectCat.selectedIndex].value;

        if (titleProduction == "" || publiProduction == "" || imgProduction == "") {
            //verificacion.appendChild(document.createTextNode("Error al añadir la producción"));
            $(verificacion).append("Error al añadir la producción");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var tipo = document.forms[0];
            var long = tipo.length;
            for (var t = 0; t < long; t++) {
                if (tipo[t].checked) {
                    if (tipo[t].value === "movie") {
                        var nuevaMovie = new Movie(titleProduction, publiProduction);
                        nuevaMovie.image = "imagenes/peliculas_series/" + imgLoc;

                        //Añadimos una production de tipo Movie al VideoSystem
                        VSystem.addProduction(nuevaMovie);

                        //Añadimos una production de tipo Movie a la Base de Datos
                        addData("Productions", nuevaMovie);

                        //Asinamos la categoría a la production
                        var categories = VSystem.categories;
                        var category = categories.next();

                        while (category.done !== true) {
                            var catName = category.value.name;
                            if (catName === idSelectCat) {
                                VSystem.assignCategory(category.value, nuevaMovie);
                                assignStore("AsignarCategories", idSelectCat, nuevaMovie.title);
                            }
                            category = categories.next();
                        }


                        //Asignamos las directoras/es a la nueva producción
                        var arrDir = [];

                        $('.producDirector:checked').each(
                            function () {
                                arrDir.push($(this).val());
                            }
                        );


                        var arrDirAsoc = [];
                        var long = arrDir.length;
                        for (var i = 0; i < long; i++) {
                            var found = false;
                            var directors = VSystem.directors;
                            var director = directors.next();

                            while ((director.done !== true) && (!found)) {
                                if (arrDir[i] === director.value.lastname1) {
                                    arrDirAsoc.push(director.value);
                                    found = true;
                                }
                                director = directors.next();
                            }
                        }

                        var long = arrDirAsoc.length;
                        for (var i = 0; i < long; i++) {
                            VSystem.assignDirector(arrDirAsoc[i], nuevaMovie);
                            assignStore("AsignarDirectors", arrDirAsoc[i].lastname1, nuevaMovie.title);
                        }

                        //Asignamos las actrices/es a la nueva producción
                        var arrAct = [];

                        $('.producActor:checked').each(
                            function () {
                                arrAct.push($(this).val());
                            }
                        );


                        var arrActAsoc = [];
                        var long = arrAct.length;
                        for (var a = 0; a < long; a++) {
                            var found = false;
                            var actors = VSystem.actors;
                            var actor = actors.next();

                            while ((actor.done !== true) && (!found)) {
                                if (arrAct[a] === actor.value.lastname1) {
                                    console.log(arrAct[a]);
                                    arrActAsoc.push(actor.value);
                                    found = true;
                                }
                                actor = actors.next();
                            }
                        }

                        var long = arrActAsoc.length;
                        for (var a = 0; a < long; a++) {
                            VSystem.assignActor(arrActAsoc[a], nuevaMovie);
                            console.log(arrActAsoc[a].lastname1 + " " + nuevaMovie.title);
                            assignStore("AsignarActors", arrActAsoc[a].lastname1, nuevaMovie.title);

                        }

                    }

                    //Si el radioButton es de tipo Serie
                    if (tipo[t].value === "serie") {
                        var nuevaSerie = new Serie(titleProduction, publiProduction);
                        nuevaSerie.image = "imagenes/peliculas_series/" + imgLoc;

                        //Añadimos una production de tipo Serie al VideoSystem
                        VSystem.addProduction(nuevaSerie);

                        //Añadimos una production de tipo Serie a la Base de Datos
                        addData("Productions", nuevaSerie);

                        //Asinamos la categoría a la production
                        var categories = VSystem.categories;
                        var category = categories.next();

                        while (category.done !== true) {
                            var catName = category.value.name;
                            if (catName === idSelectCat) {
                                VSystem.assignCategory(category.value, nuevaSerie);
                                console.log(idSelectCat);
                                assignStore("AsignarCategories", idSelectCat, nuevaSerie.title);

                            }
                            category = categories.next();
                        }

                        //Asignamos las directoras/es a la nueva producción
                        var arrDir = [];

                        $('.producDirector:checked').each(
                            function () {
                                arrDir.push($(this).val());
                            }
                        );


                        var arrDirAsoc = [];
                        var long = arrDir.length;
                        for (var i = 0; i < long; i++) {
                            var found = false;
                            var directors = VSystem.directors;
                            var director = directors.next();

                            while ((director.done !== true) && (!found)) {
                                if (arrDir[i] === director.value.lastname1) {
                                    arrDirAsoc.push(director.value);
                                    found = true;
                                }
                                director = directors.next();
                            }
                        }

                        var long = arrDirAsoc.length;
                        for (var i = 0; i < long; i++) {
                            VSystem.assignDirector(arrDirAsoc[i], nuevaSerie);
                            assignStore("AsignarDirectors", arrDirAsoc[i].lastname1, nuevaSerie.title);
                        }

                        //Asignamos las actrices/es a la nueva producción
                        var arrAct = [];

                        $('.producActor:checked').each(
                            function () {
                                arrAct.push($(this).val());
                            }
                        );


                        var arrActAsoc = [];
                        var long = arrAct.length;
                        for (var a = 0; a < long; a++) {
                            var found = false;
                            var actors = VSystem.actors;
                            var actor = actors.next();

                            while ((actor.done !== true) && (!found)) {
                                if (arrAct[a] === actor.value.lastname1) {
                                    console.log(arrAct[a]);
                                    arrActAsoc.push(actor.value);
                                    found = true;
                                }
                                actor = actors.next();
                            }
                        }

                        var long = arrActAsoc.length;
                        for (var a = 0; a < long; a++) {
                            VSystem.assignActor(arrActAsoc[a], nuevaSerie);
                            console.log(arrActAsoc[a].lastname1 + " " + nuevaSerie.title);
                            assignStore("AsignarActors", arrActAsoc[a].lastname1, nuevaSerie.title);

                        }
                    }
                }

            }
            document.forms["add-production"].reset();
            //verificacion.appendChild(document.createTextNode("Se ha añadido la producción correctamente."));
            $(verificacion).append("Se ha añadido la producción correctamente.");
            verificacion.style.color = "green";
        }
    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);
    //encabezado.appendChild(document.createTextNode("Crear Producción"));
    $(encabezado).append("Crear Producción");

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "999px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formAddPro = document.createElement("form");
    formAddPro.setAttribute("class", "form");
    formAddPro.setAttribute("id", "add-production");
    formAddPro.setAttribute("name", "add-production");
    //divForms.appendChild(formAddPro);
    $(divForms).append(formAddPro);

    var formGroupAddProA = document.createElement("div");
    formGroupAddProA.setAttribute("class", "form-group row");
    //formAddPro.appendChild(formGroupAddProA);
    $(formAddPro).append(formGroupAddProA);

    var labelPro = document.createElement("label");
    labelPro.setAttribute("for", "titleProduction");
    labelPro.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelPro.appendChild(document.createTextNode("Titulo Producción* "));
    $(labelPro).append("Titulo Producción* ");
    //formGroupAddProA.appendChild(labelPro);
    $(formGroupAddProA).append(labelPro);

    var divInputProTitle = document.createElement("div");
    divInputProTitle.setAttribute("class", "col-sm-8 p-0");
    //formGroupAddProA.appendChild(divInputProTitle);
    $(formGroupAddProA).append(divInputProTitle);

    var inputProTitle = document.createElement("input");
    inputProTitle.setAttribute("type", "text");
    inputProTitle.setAttribute("class", "form-control");
    inputProTitle.setAttribute("id", "titleProduction");
    inputProTitle.setAttribute("placeholder", "Titulo Producción");
    //divInputProTitle.appendChild(inputProTitle);
    $(divInputProTitle).append(inputProTitle);

    var formGroupAddProB = document.createElement("div");
    formGroupAddProB.setAttribute("class", "form-group row");
    //formAddPro.appendChild(formGroupAddProB);
    $(formAddPro).append(formGroupAddProB);

    var labelPubliPro = document.createElement("label");
    labelPubliPro.setAttribute("for", "publiProduction");
    labelPubliPro.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelPubliPro.appendChild(document.createTextNode("Fecha Publicación* "));
    $(labelPubliPro).append("Fecha Publicación* ");
    //formGroupAddProB.appendChild(labelPubliPro);
    $(formGroupAddProB).append(labelPubliPro);

    var divInputPubliPro = document.createElement("div");
    divInputPubliPro.setAttribute("class", "col-sm-8 p-0");
    //formGroupAddProB.appendChild(divInputPubliPro);
    $(formGroupAddProB).append(divInputPubliPro);

    var inputPubliPro = document.createElement("input");
    inputPubliPro.setAttribute("type", "text");
    inputPubliPro.setAttribute("class", "form-control");
    inputPubliPro.setAttribute("id", "publiProduction");
    inputPubliPro.setAttribute("placeholder", "MM/DD/YYYY");
    //divInputPubliPro.appendChild(inputPubliPro);
    $(divInputPubliPro).append(inputPubliPro);

    var formGroupAddProC = document.createElement("div");
    formGroupAddProC.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProC);

    var labelImgPro = document.createElement("label");
    labelImgPro.setAttribute("for", "imgProduction");
    labelImgPro.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgPro.appendChild(document.createTextNode("Imagen* "));
    formGroupAddProC.appendChild(labelImgPro);

    var divInputImgPro = document.createElement("div");
    divInputImgPro.setAttribute("class", "col-sm-8 p-0");
    formGroupAddProC.appendChild(divInputImgPro);

    var inputImgPro = document.createElement("input");
    inputImgPro.setAttribute("type", "file");
    inputImgPro.setAttribute("class", "form-control-file");
    inputImgPro.setAttribute("id", "imgProduction");
    divInputImgPro.appendChild(inputImgPro);

    //radiobutton tipoProduction
    var fieldsetAddProtipo = document.createElement("fieldset");
    fieldsetAddProtipo.setAttribute("class", "form-group");
    //formAddPro.appendChild(fieldsetAddProtipo);
    $(formAddPro).append(fieldsetAddProtipo);

    var divRadioProduc = document.createElement("div");
    divRadioProduc.setAttribute("class", "row");
    //fieldsetAddProtipo.appendChild(divRadioProduc);
    $(fieldsetAddProtipo).append(divRadioProduc);

    var legendFiel = document.createElement("legend");
    legendFiel.setAttribute("class", "col-form-label col-sm-2 pt-0 font-weight-bold");
    //legendFiel.appendChild(document.createTextNode("Tipo* "));
    $(legendFiel).append("Tipo* ");
    //divRadioProduc.appendChild(legendFiel);
    $(divRadioProduc).append(legendFiel);

    var divRadios = document.createElement("div");
    divRadios.setAttribute("class", "col-sm-10");
    //divRadioProduc.appendChild(divRadios);
    $(divRadioProduc).append(divRadios);

    var divRadioMovie = document.createElement("div");
    divRadioMovie.setAttribute("class", "custom-control custom-radio custom-control-inline");
    //divRadios.appendChild(divRadioMovie);
    $(divRadios).append(divRadioMovie);

    var inputRadioMovie = document.createElement("input");
    inputRadioMovie.setAttribute("type", "radio");
    inputRadioMovie.setAttribute("id", "movie");
    inputRadioMovie.setAttribute("name", "tipo");
    inputRadioMovie.setAttribute("value", "movie");
    inputRadioMovie.setAttribute("class", "custom-control-input");
    inputRadioMovie.setAttribute("checked", "true");
    //divRadioMovie.appendChild(inputRadioMovie);
    $(divRadioMovie).append(inputRadioMovie);


    var labelRadioMovie = document.createElement("label");
    labelRadioMovie.setAttribute("for", "movie");
    labelRadioMovie.setAttribute("class", "custom-control-label");
    //labelRadioMovie.appendChild(document.createTextNode("Movie"));
    $(labelRadioMovie).append("Movie");
    //divRadioMovie.appendChild(labelRadioMovie);
    $(divRadioMovie).append(labelRadioMovie);

    var divRadioSerie = document.createElement("div");
    divRadioSerie.setAttribute("class", "custom-control custom-radio custom-control-inline");
    //divRadios.appendChild(divRadioSerie);
    $(divRadios).append(divRadioSerie);

    var inputRadioSerie = document.createElement("input");
    inputRadioSerie.setAttribute("type", "radio");
    inputRadioSerie.setAttribute("id", "serie");
    inputRadioSerie.setAttribute("name", "tipo");
    inputRadioSerie.setAttribute("value", "serie");
    inputRadioSerie.setAttribute("class", "custom-control-input");
    //divRadioSerie.appendChild(inputRadioSerie);
    $(divRadioSerie).append(inputRadioSerie);

    var labelRadioSerie = document.createElement("label");
    labelRadioSerie.setAttribute("for", "serie");
    labelRadioSerie.setAttribute("class", "custom-control-label");
    //labelRadioSerie.appendChild(document.createTextNode("Serie"));
    $(labelRadioSerie).append("Serie");
    //divRadioSerie.appendChild(labelRadioSerie);
    $(divRadioSerie).append(labelRadioSerie);

    var formGroupAddProD = document.createElement("div");
    formGroupAddProD.setAttribute("class", "form-group row");
    //formAddPro.appendChild(formGroupAddProD);
    $(formAddPro).append(formGroupAddProD);

    var labelProCategory = document.createElement("label");
    labelProCategory.setAttribute("for", "productionCategory");
    labelProCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelProCategory.appendChild(document.createTextNode("Seleccione categoría* "));
    $(labelProCategory).append("Seleccione categoría* ");
    //formGroupAddProD.appendChild(labelProCategory);
    $(formGroupAddProD).append(labelProCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control col-sm-8");
    selectCategory.setAttribute("id", "productionCategory");
    //formGroupAddProD.appendChild(selectCategory);
    $(formGroupAddProD).append(selectCategory);

    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        //optionCategory.appendChild(document.createTextNode(categoryName));
        $(optionCategory).append(categoryName);
        //selectCategory.appendChild(optionCategory);
        $(selectCategory).append(optionCategory);

        category = categories.next();
    }

    var formGroupAddProE = document.createElement("div");
    formGroupAddProE.setAttribute("class", "form-group row");
    //formAddPro.appendChild(formGroupAddProE);
    $(formAddPro).append(formGroupAddProE);

    var labelProducDirect = document.createElement("label");
    labelProducDirect.setAttribute("for", "producDirector");
    labelProducDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelProducDirect.appendChild(document.createTextNode("Directora/or "));
    $(labelProducDirect).append("Directora/or ");
    //formGroupAddProE.appendChild(labelProducDirect);
    $(formGroupAddProE).append(labelProducDirect);

    var divChecksProducDirect = document.createElement("div");
    divChecksProducDirect.setAttribute("class", "col-sm-8");
    //formGroupAddProE.appendChild(divChecksProducDirect);
    $(formGroupAddProE).append(divChecksProducDirect);

    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    while (director.done !== true) {
        var productionDirector = director.value.name + " " + director.value.lastname1;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        //divChecksProducDirect.appendChild(divChecks);
        $(divChecksProducDirect).append(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "checkbox");
        inputChecks.setAttribute("class", "form-check-input producDirector");
        inputChecks.setAttribute("id", "producDirector");
        inputChecks.setAttribute("value", director.value.lastname1);
        //divChecks.appendChild(inputChecks);
        $(divChecks).append(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producDirector");
        //labelChecks.appendChild(document.createTextNode(productionDirector));
        $(labelChecks).append(productionDirector);
        //divChecks.appendChild(labelChecks);
        $(divChecks).append(labelChecks);

        director = directors.next();
    }

    var formGroupAddProF = document.createElement("div");
    formGroupAddProF.setAttribute("class", "form-group row");
    //formAddPro.appendChild(formGroupAddProF);
    $(formAddPro).append(formGroupAddProF);

    var labelProducAct = document.createElement("label");
    labelProducAct.setAttribute("for", "producActor");
    labelProducAct.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelProducAct.appendChild(document.createTextNode("Actriz/or "));
    $(labelProducAct).append("Actriz/or ");
    //formGroupAddProF.appendChild(labelProducAct);
    $(formGroupAddProF).append(labelProducAct);

    var divChecksProducAct = document.createElement("div");
    divChecksProducAct.setAttribute("class", "col-sm-8");
    //formGroupAddProF.appendChild(divChecksProducAct);
    $(formGroupAddProF).append(divChecksProducAct);

    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var productionAct = actor.value.name + " " + actor.value.lastname1;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        //divChecksProducAct.appendChild(divChecks);
        $(divChecksProducAct).append(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "checkbox");
        inputChecks.setAttribute("class", "form-check-input producActor");
        inputChecks.setAttribute("id", "producActor");
        inputChecks.setAttribute("value", actor.value.lastname1);
        //divChecks.appendChild(inputChecks);
        $(divChecks).append(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producActor");
        //labelChecks.appendChild(document.createTextNode(productionAct));
        $(labelChecks).append(productionAct);
        //divChecks.appendChild(labelChecks);
        $(divChecks).append(labelChecks);

        actor = actors.next();
    }

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formAddPro.appendChild(divNotaAsterisco);
    $(formAddPro).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupAddProH = document.createElement("div");
    formGroupAddProH.setAttribute("class", "form-group row");
    //formAddPro.appendChild(formGroupAddProH);
    $(formAddPro).append(formGroupAddProH);

    var divButtonAddPro = document.createElement("div");
    divButtonAddPro.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupAddProH.appendChild(divButtonAddPro);
    $(formGroupAddProH).append(divButtonAddPro);

    var buttonAddPro = document.createElement("button");
    buttonAddPro.setAttribute("type", "button");
    buttonAddPro.setAttribute("class", "btn btn-outline-primary");
    //buttonAddPro.appendChild(document.createTextNode("Añadir"));
    $(buttonAddPro).append("Añadir");
    //divButtonAddPro.appendChild(buttonAddPro);
    $(divButtonAddPro).append(buttonAddPro);
    buttonAddPro.addEventListener("click", newProduction);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);

}
//Fin del CreateProduction

//Código que hace referencia Modificar Categorías
function formUpdateCategory() {
    function updateCategory() {
        var selectCat = document.forms["update-category"]["updateCategory"];
        var idSelectCat = selectCat.options[selectCat.options.selectedIndex].text;
        var nameCat = document.forms["update-category"]["nameCat"].value;
        var imgCategory = document.forms["update-category"]["imgCategory"].value;
        var imgPart = imgCategory.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameCat == "" || imgCategory == "" || idSelectCat == "") {
            //verificacion.appendChild(document.createTextNode("Error al modificar la categoría"));
            $(verificacion).append("Error al modificar la categoría");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var categories = VSystem.categories;
            var category = categories.next();
            var valueC;

            while (category.done !== true) {
                if (category.value.name === idSelectCat) {
                    category.value.name = nameCat;
                    imgCategory = "imagenes/categorias" + imgLoc;

                    modifyCategory(idSelectCat, nameCat);
                    modifyAssignCategory(idSelectCat, nameCat);
                }
                category = categories.next();
            }

        }
        selectCat.options[selectCat.options.selectedIndex].text = nameCat;

        /*Limpio los nodos hijos del submenu categorias que se vuelva a pintar
        con la categoría modificada*/
        var submenuCat = document.getElementById("submenu");

        //Limpio los nodos hijos
        while (submenuCat.hasChildNodes()) {
            submenuCat.removeChild(submenuCat.lastChild);
        }

        //Vuelvo a llamar a la función para pintar el menú de nuevo
        categoriesMenuPopulate();

        //verificacion.appendChild(document.createTextNode("Categoría Modificada Correctamente"));
        $(verificacion).append("Categoría Modificada Correctamente");
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Modificar Categoría"));
    $(encabezado).append("Modificar Categoría");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formUpdCat = document.createElement("form");
    formUpdCat.setAttribute("class", "form");
    formUpdCat.setAttribute("id", "update-category");
    formUpdCat.setAttribute("name", "update-category");
    //divForms.appendChild(formUpdCat);
    $(divForms).append(formUpdCat);

    var formGroupUpdCatA = document.createElement("div");
    formGroupUpdCatA.setAttribute("class", "form-group row");
    //formUpdCat.appendChild(formGroupUpdCatA);
    $(formUpdCat).append(formGroupUpdCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "updateCategory");
    labelCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelCategory.appendChild(document.createTextNode("Seleccionar categoría "));
    $(labelCategory).append("Seleccionar categoría ");
    //formGroupUpdCatA.appendChild(labelCategory);
    $(formGroupUpdCatA).append(labelCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control col-sm-8");
    selectCategory.setAttribute("id", "updateCategory");
    //formGroupUpdCatA.appendChild(selectCategory);
    $(formGroupUpdCatA).append(selectCategory);

    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        //optionCategory.appendChild(document.createTextNode(categoryName));
        $(optionCategory).append(categoryName);
        //selectCategory.appendChild(optionCategory);
        $(selectCategory).append(optionCategory);

        category = categories.next();
    }

    var formGroupUpdCatB = document.createElement("div");
    formGroupUpdCatB.setAttribute("class", "form-group row");
    //formUpdCat.appendChild(formGroupUpdCatB);
    $(formUpdCat).append(formGroupUpdCatB);

    var labelNameCategory = document.createElement("label");
    labelNameCategory.setAttribute("for", "nameCat");
    labelNameCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelNameCategory.appendChild(document.createTextNode("Nombre categoría* "));
    $(labelNameCategory).append("Nombre categoría* ");
    //formGroupUpdCatB.appendChild(labelNameCategory);
    $(formGroupUpdCatB).append(labelNameCategory);

    var divInputNameCategory = document.createElement("div");
    divInputNameCategory.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdCatB.appendChild(divInputNameCategory);
    $(formGroupUpdCatB).append(divInputNameCategory);

    var inputNameCategory = document.createElement("input");
    inputNameCategory.setAttribute("type", "text");
    inputNameCategory.setAttribute("class", "form-control");
    inputNameCategory.setAttribute("id", "nameCat");
    //divInputNameCategory.appendChild(inputNameCategory);
    $(divInputNameCategory).append(inputNameCategory);

    var formGroupUpdCatC = document.createElement("div");
    formGroupUpdCatC.setAttribute("class", "form-group row");
    //formUpdCat.appendChild(formGroupUpdCatC);
    $(formUpdCat).append(formGroupUpdCatC);

    var labelImgCategory = document.createElement("label");
    labelImgCategory.setAttribute("for", "imgCategory");
    labelImgCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelImgCategory.appendChild(document.createTextNode("Imagen* "));
    $(labelImgCategory).append("Imagen* ");
    //formGroupUpdCatC.appendChild(labelImgCategory);
    $(formGroupUpdCatC).append(labelImgCategory);

    var divInputImgCategory = document.createElement("div");
    divInputImgCategory.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdCatC.appendChild(divInputImgCategory);
    $(formGroupUpdCatC).append(divInputImgCategory);

    var inputImgCategory = document.createElement("input");
    inputImgCategory.setAttribute("type", "file");
    inputImgCategory.setAttribute("class", "form-control-file");
    inputImgCategory.setAttribute("id", "imgCategory");
    //divInputImgCategory.appendChild(inputImgCategory);
    $(divInputImgCategory).append(inputImgCategory);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formUpdCat.appendChild(divNotaAsterisco);
    $(formUpdCat).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupUpdCatD = document.createElement("div");
    formGroupUpdCatD.setAttribute("class", "form-group row");
    //formUpdCat.appendChild(formGroupUpdCatD);
    $(formUpdCat).append(formGroupUpdCatD);

    var divButtonUpdCat = document.createElement("div");
    divButtonUpdCat.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupUpdCatD.appendChild(divButtonUpdCat);
    $(formGroupUpdCatD).append(divButtonUpdCat);

    var buttonUpdCat = document.createElement("button");
    buttonUpdCat.setAttribute("type", "button");
    buttonUpdCat.setAttribute("class", "btn btn-outline-primary");
    //buttonUpdCat.appendChild(document.createTextNode("Modificar"));
    $(buttonUpdCat).append("Modificar");
    //divButtonUpdCat.appendChild(buttonUpdCat);
    $(divButtonUpdCat).append(buttonUpdCat);
    buttonUpdCat.addEventListener("click", updateCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);

}
//Fin de UpdateCategory

//Código que hace referencia Modificar Actores
function formUpdateActor() {
    function updateActor() {
        var selectActor = document.forms["update-actor"]["updateActor"];
        var idSelectAct = selectActor.options[selectActor.selectedIndex].value;
        var idSelectActText = selectActor.options[selectActor.selectedIndex].text;
        var nameActor = document.forms["update-actor"]["nameActor"].value;
        var apellidoActor = document.forms["update-actor"]["apellidoActor"].value;
        var bornActor = document.forms["update-actor"]["bornActor"].value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameActor == "" || apellidoActor == "" || bornActor == "" || idSelectActText == "") {
            //verificacion.appendChild(document.createTextNode("Error al modificar la actriz/or"));
            $(verificacion).append("Error al modificar la actriz/or");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var actors = VSystem.actors;
            var actor = actors.next();

            while (actor.done !== true) {
                if (actor.value.lastname1 === idSelectAct) {

                    actor.value.name = nameActor;
                    actor.value.lastname1 = apellidoActor;
                    actor.value.born = bornActor;

                    modifyPerson("Actors", idSelectAct, nameActor, apellidoActor, bornActor);
                    modifyAssignActor("AsignarActors", idSelectAct, apellidoActor);
                }
                actor = actors.next();
            }

        }
        selectActor.options[selectActor.selectedIndex].text = nameActor + " " + apellidoActor;
        //verificacion.appendChild(document.createTextNode("Se ha modifica la Actriz/or correctamente."));
        $(verificacion).append("Se ha modifica la Actriz/or correctamente.");
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Modificar Actriz/or"));
    $(encabezado).append("Modificar Actriz/or");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formUpdAct = document.createElement("form");
    formUpdAct.setAttribute("class", "form");
    formUpdAct.setAttribute("id", "update-actor");
    formUpdAct.setAttribute("name", "update-actor");
    //divForms.appendChild(formUpdAct);
    $(divForms).append(formUpdAct);

    var formGroupUpdActA = document.createElement("div");
    formGroupUpdActA.setAttribute("class", "form-group row");
    //formUpdAct.appendChild(formGroupUpdActA);
    $(formUpdAct).append(formGroupUpdActA);

    var labelActor = document.createElement("label");
    labelActor.setAttribute("for", "updateActor");
    labelActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelActor.appendChild(document.createTextNode("Seleccionar Actriz/or "));
    $(labelActor).append("Seleccionar Actriz/or ");
    //formGroupUpdActA.appendChild(labelActor);
    $(formGroupUpdActA).append(labelActor);

    var selectActor = document.createElement("select");
    selectActor.setAttribute("class", "form-control col-sm-8");
    selectActor.setAttribute("id", "updateActor");
    //formGroupUpdActA.appendChild(selectActor);
    $(formGroupUpdActA).append(selectActor);

    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var actorNameApe = actor.value.name + " " + actor.value.lastname1;
        var optionActor = document.createElement("option");
        optionActor.setAttribute("value", actor.value.lastname1);
        //optionActor.appendChild(document.createTextNode(actorNameApe));
        $(optionActor).append(actorNameApe);
        //selectActor.appendChild(optionActor);
        $(selectActor).append(optionActor);

        actor = actors.next();
    }
    var formGroupUpdActB = document.createElement("div");
    formGroupUpdActB.setAttribute("class", "form-group row");
    //formUpdAct.appendChild(formGroupUpdActB);
    $(formUpdAct).append(formGroupUpdActB);

    var labelActorName = document.createElement("label");
    labelActorName.setAttribute("for", "nameActor");
    labelActorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelActorName.appendChild(document.createTextNode("Nombre* "));
    $(labelActorName).append("Nombre* ");
    //formGroupUpdActB.appendChild(labelActorName);
    $(formGroupUpdActB).append(labelActorName);

    var divInputActName = document.createElement("div");
    divInputActName.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdActB.appendChild(divInputActName);
    $(formGroupUpdActB).append(divInputActName);

    var inputActName = document.createElement("input");
    inputActName.setAttribute("type", "text");
    inputActName.setAttribute("class", "form-control");
    inputActName.setAttribute("id", "nameActor");
    inputActName.setAttribute("placeholder", "Nombre Actriz/or");
    //divInputActName.appendChild(inputActName);
    $(divInputActName).append(inputActName);

    var formGroupUpdActC = document.createElement("div");
    formGroupUpdActC.setAttribute("class", "form-group row");
    //formUpdAct.appendChild(formGroupUpdActC);
    $(formUpdAct).append(formGroupUpdActC);

    var labelApeActor = document.createElement("label");
    labelApeActor.setAttribute("for", "apellidoActor");
    labelApeActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelApeActor.appendChild(document.createTextNode("Primer Apellido* "));
    $(labelApeActor).append("Primer Apellido* ");
    //formGroupUpdActC.appendChild(labelApeActor);
    $(formGroupUpdActC).append(labelApeActor);

    var divInputApeActor = document.createElement("div");
    divInputApeActor.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdActC.appendChild(divInputApeActor);
    $(formGroupUpdActC).append(divInputApeActor);

    var inputApeActor = document.createElement("input");
    inputApeActor.setAttribute("type", "text");
    inputApeActor.setAttribute("class", "form-control");
    inputApeActor.setAttribute("id", "apellidoActor");
    inputApeActor.setAttribute("placeholder", "Primer Apellido");
    //divInputApeActor.appendChild(inputApeActor);
    $(divInputApeActor).append(inputApeActor);

    var formGroupUpdActD = document.createElement("div");
    formGroupUpdActD.setAttribute("class", "form-group row");
    //formUpdAct.appendChild(formGroupUpdActD);
    $(formUpdAct).append(formGroupUpdActD);

    var labelBornActor = document.createElement("label");
    labelBornActor.setAttribute("for", "bornActor");
    labelBornActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelBornActor.appendChild(document.createTextNode("Fecha Nacimiento* "));
    $(labelBornActor).append("Fecha Nacimiento* ");
    //formGroupUpdActD.appendChild(labelBornActor);
    $(formGroupUpdActD).append(labelBornActor);

    var divInputBornActor = document.createElement("div");
    divInputBornActor.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdActD.appendChild(divInputBornActor);
    $(formGroupUpdActD).append(divInputBornActor);

    var inputBornActor = document.createElement("input");
    inputBornActor.setAttribute("type", "text");
    inputBornActor.setAttribute("class", "form-control");
    inputBornActor.setAttribute("id", "bornActor");
    inputBornActor.setAttribute("placeholder", "MM/DD/YYYY");
    //divInputBornActor.appendChild(inputBornActor);
    $(divInputBornActor).append(inputBornActor);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formUpdAct.appendChild(divNotaAsterisco);
    $(formUpdAct).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupUpdActE = document.createElement("div");
    formGroupUpdActE.setAttribute("class", "form-group row");
    //formUpdAct.appendChild(formGroupUpdActE);
    $(formUpdAct).append(formGroupUpdActE);

    var divButtonUpdAct = document.createElement("div");
    divButtonUpdAct.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupUpdActE.appendChild(divButtonUpdAct);
    $(formGroupUpdActE).append(divButtonUpdAct);

    var buttonUpdAct = document.createElement("button");
    buttonUpdAct.setAttribute("type", "button");
    buttonUpdAct.setAttribute("class", "btn btn-outline-primary");
    //buttonUpdAct.appendChild(document.createTextNode("Modificar"));
    $(buttonUpdAct).append("Modificar");
    //divButtonUpdAct.appendChild(buttonUpdAct);
    $(divButtonUpdAct).append(buttonUpdAct);
    buttonUpdAct.addEventListener("click", updateActor);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);
}
//Fin del Código updateActores

//Código que hace referencia Modificar Directores
function formUpdateDirector() {
    function updateDirector() {
        var selectDirector = document.forms["update-director"]["updateDirector"];
        var idSelectDirect = selectDirector.options[selectDirector.selectedIndex].value;
        var idSelectDirectText = selectDirector.options[selectDirector.selectedIndex].text;
        var nameDirector = document.forms["update-director"]["nameDirector"].value;
        var apellidoDirector = document.forms["update-director"]["apellidoDirector"].value;
        var bornDirector = document.forms["update-director"]["bornDirector"].value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameDirector == "" || apellidoDirector == "" || bornDirector == "" || idSelectDirectText == "") {
            //verificacion.appendChild(document.createTextNode("Error al modificar la directora/or"));
            $(verificacion).append("Error al modificar la directora/or");
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var directors = VSystem.directors;
            var director = directors.next();
            var valueD;

            while (director.done !== true) {
                if (director.value.lastname1 === idSelectDirect) {
                    director.value.name = nameDirector;
                    director.value.lastname1 = apellidoDirector;
                    director.value.born = bornDirector;

                    modifyPerson("Directors", idSelectDirect, nameDirector, apellidoDirector, bornDirector);
                    modifyAssignDirector("AsignarDirectors", idSelectDirect, apellidoDirector);
                }
                director = directors.next();
            }




        }
        selectDirector.options[selectDirector.selectedIndex].text = nameDirector + " " + apellidoDirector;
        //verificacion.appendChild(document.createTextNode("Se ha modifica la Directora/or correctamente."));
        $(verificacion).append("Se ha modifica la Directora/or correctamente.");
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    //divEncabezado.appendChild(divEncabezadoA);
    $(divEncabezado).append(divEncabezadoA);

    var encabezado = document.createElement("h2");
    //encabezado.appendChild(document.createTextNode("Modificar Directora/or"));
    $(encabezado).append("Modificar Directora/or");
    //divEncabezadoA.appendChild(encabezado);
    $(divEncabezadoA).append(encabezado);

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    //divEncabezado.appendChild(divEncabezadoB);
    $(divEncabezado).append(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    //spanEncabezado.appendChild(document.createTextNode("Info"));
    $(spanEncabezado).append("Info");
    //divEncabezadoB.appendChild(spanEncabezado);
    $(divEncabezadoB).append(spanEncabezado);

    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    //principal.appendChild(divForms);
    $(principal).append(divForms);

    var formUpdDirect = document.createElement("form");
    formUpdDirect.setAttribute("class", "form");
    formUpdDirect.setAttribute("id", "update-director");
    formUpdDirect.setAttribute("name", "update-director");
    //divForms.appendChild(formUpdDirect);
    $(divForms).append(formUpdDirect);

    var formGroupUpdDirectA = document.createElement("div");
    formGroupUpdDirectA.setAttribute("class", "form-group row");
    //formUpdDirect.appendChild(formGroupUpdDirectA);
    $(formUpdDirect).append(formGroupUpdDirectA);

    var labelDirect = document.createElement("label");
    labelDirect.setAttribute("for", "updateDirector");
    labelDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelDirect.appendChild(document.createTextNode("Seleccionar Directores "));
    $(labelDirect).append("Seleccionar Directores ");
    //formGroupUpdDirectA.appendChild(labelDirect);
    $(formGroupUpdDirectA).append(labelDirect);

    var selectDirect = document.createElement("select");
    selectDirect.setAttribute("class", "form-control col-sm-8");
    selectDirect.setAttribute("id", "updateDirector");
    //formGroupUpdDirectA.appendChild(selectDirect);
    $(formGroupUpdDirectA).append(selectDirect);

    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    while (director.done !== true) {
        var directorNameApe = director.value.name + " " + director.value.lastname1;
        var optionDirect = document.createElement("option");
        optionDirect.setAttribute("value", director.value.lastname1);
        //optionDirect.appendChild(document.createTextNode(directorNameApe));
        $(optionDirect).append(directorNameApe);
        //selectDirect.appendChild(optionDirect);
        $(selectDirect).append(optionDirect);

        director = directors.next();
    }

    var formGroupUpdDirectB = document.createElement("div");
    formGroupUpdDirectB.setAttribute("class", "form-group row");
    //formUpdDirect.appendChild(formGroupUpdDirectB);
    $(formUpdDirect).append(formGroupUpdDirectB);

    var labelDirectName = document.createElement("label");
    labelDirectName.setAttribute("for", "nameDirector");
    labelDirectName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelDirectName.appendChild(document.createTextNode("Nombre* "));
    $(labelDirectName).append("Nombre* ");
    //formGroupUpdDirectB.appendChild(labelDirectName);
    $(formGroupUpdDirectB).append(labelDirectName);

    var divInputDirectName = document.createElement("div");
    divInputDirectName.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdDirectB.appendChild(divInputDirectName);
    $(formGroupUpdDirectB).append(divInputDirectName);

    var inputDirectName = document.createElement("input");
    inputDirectName.setAttribute("type", "text");
    inputDirectName.setAttribute("class", "form-control");
    inputDirectName.setAttribute("id", "nameDirector");
    inputDirectName.setAttribute("placeholder", "Nombre Directora/or");
    //divInputDirectName.appendChild(inputDirectName);
    $(divInputDirectName).append(inputDirectName);

    var formGroupUpdDirectC = document.createElement("div");
    formGroupUpdDirectC.setAttribute("class", "form-group row");
    //formUpdDirect.appendChild(formGroupUpdDirectC);
    $(formUpdDirect).append(formGroupUpdDirectC);

    var labelApeDirector = document.createElement("label");
    labelApeDirector.setAttribute("for", "apellidoDirector");
    labelApeDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelApeDirector.appendChild(document.createTextNode("Primer Apellido* "));
    $(labelApeDirector).append("Primer Apellido* ");
    //formGroupUpdDirectC.appendChild(labelApeDirector);
    $(formGroupUpdDirectC).append(labelApeDirector);

    var divInputApeDirect = document.createElement("div");
    divInputApeDirect.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdDirectC.appendChild(divInputApeDirect);
    $(formGroupUpdDirectC).append(divInputApeDirect);

    var inputApeDirector = document.createElement("input");
    inputApeDirector.setAttribute("type", "text");
    inputApeDirector.setAttribute("class", "form-control");
    inputApeDirector.setAttribute("id", "apellidoDirector");
    inputApeDirector.setAttribute("placeholder", "Primer Apellido");
    //divInputApeDirect.appendChild(inputApeDirector);
    $(divInputApeDirect).append(inputApeDirector);

    var formGroupUpdDirectD = document.createElement("div");
    formGroupUpdDirectD.setAttribute("class", "form-group row");
    //formUpdDirect.appendChild(formGroupUpdDirectD);
    $(formUpdDirect).append(formGroupUpdDirectD);

    var labelBornDirector = document.createElement("label");
    labelBornDirector.setAttribute("for", "bornDirector");
    labelBornDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    //labelBornDirector.appendChild(document.createTextNode("Fecha Nacimiento* "));
    $(labelBornDirector).append("Fecha Nacimiento* ");
    //formGroupUpdDirectD.appendChild(labelBornDirector);
    $(formGroupUpdDirectD).append(labelBornDirector);

    var divInputBornDirect = document.createElement("div");
    divInputBornDirect.setAttribute("class", "col-sm-8 p-0");
    //formGroupUpdDirectD.appendChild(divInputBornDirect);
    $(formGroupUpdDirectD).append(divInputBornDirect);

    var inputBornDirector = document.createElement("input");
    inputBornDirector.setAttribute("type", "text");
    inputBornDirector.setAttribute("class", "form-control");
    inputBornDirector.setAttribute("id", "bornDirector");
    inputBornDirector.setAttribute("placeholder", "MM/DD/YYYY");
    //divInputBornDirect.appendChild(inputBornDirector);
    $(divInputBornDirect).append(inputBornDirector);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    //formUpdDirect.appendChild(divNotaAsterisco);
    $(formUpdDirect).append(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    //notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    $(notaAsterisco).append("(*) Campo Obligatorio");
    //divNotaAsterisco.appendChild(notaAsterisco);
    $(divNotaAsterisco).append(notaAsterisco);

    var formGroupUpdDirectE = document.createElement("div");
    formGroupUpdDirectE.setAttribute("class", "form-group row");
    //formUpdDirect.appendChild(formGroupUpdDirectE);
    $(formUpdDirect).append(formGroupUpdDirectE);

    var divButtonUpdDirect = document.createElement("div");
    divButtonUpdDirect.setAttribute("class", "col-sm-10 mt-3 text-right");
    //formGroupUpdDirectE.appendChild(divButtonUpdDirect);
    $(formGroupUpdDirectE).append(divButtonUpdDirect);

    var buttonUpdDirect = document.createElement("button");
    buttonUpdDirect.setAttribute("type", "button");
    buttonUpdDirect.setAttribute("class", "btn btn-outline-primary");
    //buttonUpdDirect.appendChild(document.createTextNode("Modificar"));
    $(buttonUpdDirect).append("Modificar");
    //divButtonUpdDirect.appendChild(buttonUpdDirect);
    $(divButtonUpdDirect).append(buttonUpdDirect);
    buttonUpdDirect.addEventListener("click", updateDirector);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    //divForms.appendChild(p);
    $(divForms).append(p);
}
//Fin del Código updateDirectores

function generandoFichero(){
  generarFichero();
  var verificacion = document.getElementById("administrar");
  var pFich = document.createElement("p");
  pFich.setAttribute("class","mt-4 font-weight-bold text-center");
  $(verificacion).append(pFich);
  $(pFich).append("Fichero JSON Generado.");
  pFich.style.color = "green";
}
