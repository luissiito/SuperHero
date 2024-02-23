import GestorApiSuperHero from "./GestorApiSuperHero.js";

const gestorApiSuperHero = new GestorApiSuperHero();

$(function() {
    const txtIdNumero = $('form input[type="text"]');
    const botonBuscar = $('form .btn[type="submit"]');;
    const liPowerStats = $('.card .card-body .d-flex li:nth-child(1)');
    const liBiography = $('.card .card-body .d-flex li:nth-child(2)');
    const liAppearance = $('.card .card-body .d-flex li:nth-child(3)');
    const liConnections = $('.card .card-body .d-flex li:nth-child(4)');
    const liChart = $('.card .card-body .d-flex li:nth-child(5)');    
    let isAplicacionSuperHeroIniciada = false;
    
    function añadirEventoClickAlInputBuscar() {
        botonBuscar.on('click', async function(e){
            e.preventDefault();
            ocultarImagenPrincipal();
            buscarSuperHero();         
        });
    }
    
    function añadirEventoClickAlLiPowerStats() {
        liPowerStats.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDePowerStats').show();
        });
    }

    function añadirEventoClickAlLiBiography() {
        liBiography.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDeBiography').show();
        });
    }

    function añadirEventoClickAlLiAppearance() {
        liAppearance.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDeAppearance').show();
        });
    }
    function añadirEventoClickAlLiConnections() {
        liConnections.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDeConnections').show();
        });
    }

    async function buscarSuperHero(){
        const superHeroApi = await getSuperHeroFromApi(txtIdNumero.val());            
        await Promise.resolve();
        
        if(!isAplicacionSuperHeroIniciada){
            mostrarCard();
            isAplicacionSuperHeroIniciada = true;
            mostrarCuadroDePowerStats();  
        }
        else{
            limpiarEtiquetasPDeLosCuadros();
        }           
        cargarSuperHero(superHeroApi);        
    }

    function cargarSuperHero(superHeroApi){
        gestorApiSuperHero.setSuperHero(superHeroApi);
        gestorApiSuperHero.setInfoImagen();
        gestorApiSuperHero.setInfoNombre();
        gestorApiSuperHero.setInfoPowerStats();
        gestorApiSuperHero.setInfoBiography();
        gestorApiSuperHero.setInfoAppearance();
        gestorApiSuperHero.setInfoConnections();
    }

    async function getSuperHeroFromApi(idSuperHero){
        let superHeroApi = await obtenerInformacionDesdeUnaApi(`https://superheroapi.com/api.php/4905856019427443/${idSuperHero}`);
        return superHeroApi;
    }   

    function limpiarEtiquetasPDeLosCuadros(){
        const etiquetasPDelCuadroPowerStates = document.querySelectorAll('main .card .card-body p');
        for(let etiquetaP of etiquetasPDelCuadroPowerStates){
            etiquetaP.textContent = '';
        }
    }

    function mostrarCard(){        
        $('main div.card').show();        
    }

    function ocultarCard(){        
        $('main div.card').hide();        
    }
    
    function mostrarCuadroDePowerStats(){
        $('#cuadroDePowerStats').show();
    }

    function ocultarTodosLosCuadros(){
        $('#cuadroDePowerStats').hide();
        $('#cuadroDeBiography').hide();
        $('#cuadroDeAppearance').hide();
        $('#cuadroDeConnections').hide();
    }   

    function ocultarImagenPrincipal(){
        $('main img.imagenPrincipal').hide();
    }

    function iniciarAplicacionSuperHero(){ 
        ocultarCard();
        ocultarTodosLosCuadros();
        añadirEventoClickAlInputBuscar();
        añadirEventoClickAlLiPowerStats();
        añadirEventoClickAlLiBiography();
        añadirEventoClickAlLiAppearance();
        añadirEventoClickAlLiConnections();        
        gestorApiSuperHero.añadirIconoEscudoALasEtiquetasLiDelCuadroPowerStates();          
    }    
    iniciarAplicacionSuperHero(); 
});


