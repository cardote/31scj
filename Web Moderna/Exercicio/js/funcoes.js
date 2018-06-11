$(document).ready(function () {

    var cursos = [{
        "id": "curso-1",
        "titulo": "Desenvolvimento de Soluções"
    }, {
        "id": "curso-2",
        "titulo": "Arquitetura Java"
    }, {
        "id": "curso-3",
        "titulo": "Arquitetura .NET"
    }, {
        "id": "curso-4",
        "titulo": "Projetos Integrados"
    }, {
        "id": "curso-5",
        "titulo": "Gestão de Processos"
    }, {
        "id": "curso-6",
        "titulo": "Compiladores"
    }];

    var lista = $("#listaCursos");

    lista.empty();
    
    $.each(cursos, function (i, element) {
        lista.append($("<option>", {
            text: element.titulo,
            value: element.id
        }));
    })

});



