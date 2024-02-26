
async function obtenerInformacionDesdeUnaApi(url){
    let datos = {};
    const solicitudHttp = {
        dataType: 'json',
        url:url,
        type: 'GET',
        success: function(data){
            return data;
        },
        error: function(error){
            return 'HUBO UN ERROR EN LA URL INGRESADA';
        }
    };
    datos = await $.ajax(solicitudHttp);
    
    return datos;
}