$(document).ready(function () {

    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    $(".row img").click(function (e){
        e.preventDefault();
        var id = $(this).attr('id');
        switch (id){
            case 'php':
                var titulo = "PHP";
                var msg = "<h5>Formação</h5>"+
                "<p>IFMG - Instituto Federal de Minas Gerais - Campos Barbacena-MG</p>"+
                "<p>Uninove - Universidade Nove de Julho - São Paulo-SP</p>"+
                "<h5>Trabalho</h5>"+
                "<p>"+
                   "Sistema WEB de Listas de Materiais Odontológicos Acadêmicos na Dental Solident: www.academicosolident.com.br.<br>"+
                    "Entre outros projetos internos da empresa: WebService, E-Commerce."+
                "</p>";
                showModal(titulo, msg);
                break;
            case 'java':
                var titulo = "Java";
                var msg = "<h5>Formação</h5>"+
                "<p>Uninove - Universidade Nove de Julho - São Paulo-SP</p>"+
                "<p>FIAP - Cursando</p>"+
                "<h5>Trabalho</h5>"+
                "<p>"+
                   "Sistema de cadastro e controle de materiais odontológicos para licitações na Dental Solident.";
                "</p>";
                showModal(titulo, msg);
                break;
            case 'mysql':
                var titulo = "Java";
                var msg = "<h5>Formação</h5>"+
                "<p>IFMG - Instituto Federal de Minas Gerais - Campos Barbacena-MG</p>"+
                "<p>Uninove - Universidade Nove de Julho - São Paulo-SP</p>"+
                "<h5>Trabalho</h5>"+
                "<p>"+
                   "Todo o banco de dados dos projetos da empresa Dental Solident.";
                "</p>";
                showModal(titulo, msg);
                break;
            case 'swift':
                var titulo = "Swift";
                var msg = "<h5>Formação</h5>"+
                "<p>Google</p>"+
                "<p>Udemy</p>"+
                "<p>StackoverFlow</p>"+
                "<h5>Trabalho</h5>"+
                "<p>"+
                   "Desenvolvimento de um App de consulta para o aluno de odontologia das faculdades atendidas pela Dental Solident";
                "</p>";
                showModal(titulo, msg);
                break;
            case 'android':
                var titulo = "Android";
                var msg = "<h5>Formação</h5>"+
                "<p>Google</p>"+
                "<p>Udemy</p>"+
                "<p>StackoverFlow</p>"+
                "<h5>Trabalho</h5>"+
                "<p>"+
                   "Desenvolvimento de um App de consulta para o aluno de odontologia das faculdades atendidas pela Dental Solident";
                "</p>";
                showModal(titulo, msg);
                break;
            case 'js':
                var titulo = "Java Script";
                var msg = "<h5>Formação</h5>"+
                "<p>Google</p>"+
                "<p>Udemy</p>"+
                "<p>StackoverFlow</p>"+
                "<h5>Trabalho</h5>"+
                "<p>"+
                   "Pau para toda obra!!";
                "</p>";
                showModal(titulo, msg);
                break;
                
            default:
                break;
        }
    })
});

function showModal(titulo, msg){

    $('.modal-title').html(titulo);
    $('.modal-body').html(msg)

    $('.modal').modal('show');
}