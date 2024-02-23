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
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }

    function añadirEventoClickAlLiBiography() {
        liBiography.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDeBiography').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }

    function añadirEventoClickAlLiAppearance() {
        liAppearance.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDeAppearance').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }
    function añadirEventoClickAlLiConnections() {
        liConnections.on('click', function(){
            ocultarTodosLosCuadros();
            $('#cuadroDeConnections').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }

    async function buscarSuperHero(){
        const superHeroApi = await getSuperHeroFromApi(txtIdNumero.val());            
        await Promise.resolve();
        
        if(!isAplicacionSuperHeroIniciada){
            mostrarCard();
            mostrarCuadroDePowerStats();  
            isAplicacionSuperHeroIniciada = true;
        }
        else{
            limpiarEtiquetasPDeLosCuadros();
        }           
        cargarSuperHero(superHeroApi);       
        gestorApiSuperHero.añadirClaseCssALaCardSegunGenero(superHeroApi.appearance.gender); 
        gestorApiSuperHero.añadirClaseCssALosIconosEscudoSegunGenero(superHeroApi.appearance.gender); 
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

    function removerClaseSeleccionadoATodasLasEtiquetasLi(){
        $(liPowerStats).removeClass('seleccionado');
        $(liBiography).removeClass('seleccionado');
        $(liAppearance).removeClass('seleccionado');
        $(liConnections).removeClass('seleccionado');
        $(liChart).removeClass('seleccionado');
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
    
    function validarValorIngresadoPorElUsuario(valor){
        if(!validarSiEsNumero(valor)){
            alert('debes ingresar solo numero');
        }
    }

    function validarSiEsNumero(valor){
        return isNaN(valor);
    }
    function validarSiEstaFueraDeRango(valor){
        if(valor <= 0 || valor > 734){
            console.log();            
        }
    }
    iniciarAplicacionSuperHero(); 
});


