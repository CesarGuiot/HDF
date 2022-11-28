function init(){
    $("#ticket_form").on("submit",function(e){
        guardaryeditar(e);
    });
}

$(document).ready(function() {
    $('#tick_descrip').summernote({
        height: 200,
        lang: "es-ES",
        popover:{
            Image:[],
            link: [],
            air: []
        }
    });

    $.post("../../controller/categoria.php?op=combo",function(data, status){
        $('#cat_id').html(data);
    });
});

function guardaryeditar(e){
    console.log($('#usu_id').val());
    e.preventDefault();
    var formData = new FormData($("#ticket_form")[0]);
    $.ajax({
        url: "../../controller/ticket.php?op=insert",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(data){
            $('#tick_titulo').val('');
            $('#tick_descrip').summernote('reset');
            swal("Correcto!", "Registrado Correctamente", "success");
        }
 
    });
}

init();