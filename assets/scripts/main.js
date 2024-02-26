import GestorApiSuperHero from "./GestorApiSuperHero.js";

$(function() {
    const txtIdNumero = $('form input[type="text"]');
    const botonBuscar = $('form .btn[type="submit"]');;
    const liPowerStats = $('.card .card-body .d-flex li:nth-child(1)');
    const liBiography = $('.card .card-body .d-flex li:nth-child(2)');
    const liAppearance = $('.card .card-body .d-flex li:nth-child(3)');
    const liConnections = $('.card .card-body .d-flex li:nth-child(4)');
    const liChart = $('.card .card-body .d-flex li:nth-child(5)'); 
    const gestorApiSuperHero = new GestorApiSuperHero();
    let isAplicacionSuperHeroIniciada = false;
    
    function añadirEventoClickAlInputBuscar() {
        botonBuscar.on('click', async function(e){
            e.preventDefault();
            ocultarImagenPrincipal();
            buscarSuperHero(txtIdNumero.val());         
        });
    }
    
    function añadirEventoClickAlLiPowerStats() {
        liPowerStats.on('click', function(){
            gestorApiSuperHero.playSonidoGameJump();
            ocultarTodosLosCuadros();
            $('#cuadroDePowerStats').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }

    function añadirEventoClickAlLiBiography() {
        liBiography.on('click', function(){
            gestorApiSuperHero.playSonidoGameJump();
            ocultarTodosLosCuadros();
            $('#cuadroDeBiography').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }

    function añadirEventoClickAlLiAppearance() {
        liAppearance.on('click', function(){
            gestorApiSuperHero.playSonidoGameJump();
            ocultarTodosLosCuadros();
            $('#cuadroDeAppearance').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }
    function añadirEventoClickAlLiConnections() {
        liConnections.on('click', function(){
            gestorApiSuperHero.playSonidoGameJump();
            ocultarTodosLosCuadros();
            $('#cuadroDeConnections').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }
    function añadirEventoClickAlLiChart() {
        liChart.on('click', function(){
            gestorApiSuperHero.playSonidoGameJump();
            ocultarTodosLosCuadros();
            $('#cuadroDeChart').show();
            removerClaseSeleccionadoATodasLasEtiquetasLi();
            $(this).addClass('seleccionado');
        });
    }

    async function buscarSuperHero(idSuperHero){
        const superHeroApi = await getSuperHeroFromApiById(idSuperHero);            
        await Promise.resolve();
        
       if(!isAplicacionSuperHeroIniciada){
            mostrarCard();
            mostrarCuadroDePowerStats();  
            liPowerStats.addClass('seleccionado');
            isAplicacionSuperHeroIniciada = true;
        }
        else{
            limpiarEtiquetasPDeLosCuadros();
            removerCuadroDelIdenticadorSelSuperHero();
        }        
        cargarSuperHero(superHeroApi);     
        removerClasesCssAlIdentificadorDelSuperHero();  
        gestorApiSuperHero.añadirClaseCssALaCardSegunGenero(superHeroApi.appearance.gender); 
        gestorApiSuperHero.añadirClaseCssALosIconosEscudoSegunGenero(superHeroApi.appearance.gender); 
        gestorApiSuperHero.añadirClaseCssAlCuadroDelIdentificadorSegunGenero(superHeroApi.appearance.gender); 
    }

    async function buscarPrimerSuperHero(){
        const superHeroApi = await getFirstSuperHeroFromApiById();  
        await Promise.resolve();        

        mostrarCard();
        mostrarCuadroDePowerStats();
        liPowerStats.addClass('seleccionado');
        isAplicacionSuperHeroIniciada = true;    
        cargarSuperHero(superHeroApi);
        removerClasesCssAlIdentificadorDelSuperHero();       
        gestorApiSuperHero.añadirClaseCssALaCardSegunGenero(superHeroApi.appearance.gender); 
        gestorApiSuperHero.añadirClaseCssALosIconosEscudoSegunGenero(superHeroApi.appearance.gender); 
        gestorApiSuperHero.añadirClaseCssAlCuadroDelIdentificadorSegunGenero(superHeroApi.appearance.gender); 
    }

    function cargarSuperHero(superHeroApi){
        gestorApiSuperHero.setSuperHero(superHeroApi);
        gestorApiSuperHero.setInfoImagen();
        gestorApiSuperHero.setInfoNombre();
        gestorApiSuperHero.setInfoPowerStats();
        gestorApiSuperHero.setInfoBiography();
        gestorApiSuperHero.setInfoAppearance();
        gestorApiSuperHero.setInfoConnections();
        gestorApiSuperHero.setInfoChart();
        gestorApiSuperHero.setInfoIdentificador();
    }

    async function getSuperHeroFromApiById(idSuperHero){
        let superHeroApi = await obtenerInformacionDesdeUnaApi(`https://superheroapi.com/api.php/4905856019427443/${idSuperHero}`);
        return superHeroApi;
    }   
    async function getFirstSuperHeroFromApiById(){
        let superHeroApi = await obtenerInformacionDesdeUnaApi(`https://superheroapi.com/api.php/4905856019427443/1`);
        return superHeroApi;
    }   

    function limpiarEtiquetasPDeLosCuadros(){
        const etiquetasPDelCuadroPowerStates = document.querySelectorAll('main .card .card-body p');
        for(let etiquetaP of etiquetasPDelCuadroPowerStates){
            etiquetaP.remove();
        }
    }
    function removerCuadroDelIdenticadorSelSuperHero(){
        document.querySelector('main .card .identificadorDelSuperHero').remove();
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
        const cuadros = [$('#cuadroDePowerStats'), $('#cuadroDeBiography'), $('#cuadroDeAppearance'),
                          $('#cuadroDeConnections'), $('#cuadroDeChart')];
        for (const cuadro of cuadros){
            cuadro.hide();
        }
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
    function removerClasesCssAlIdentificadorDelSuperHero(){
        $('main .card .identificadorDelSuperHero').removeClass('female, male');
    }

    function cambiarPlaceHolderDelInputBuscar(){
        txtIdNumero.val('1');
        setTimeout(()=>{
            txtIdNumero.val('');
            txtIdNumero.attr("placeholder", "número de super hero");
        }, 1200);
    }

    function iniciarAplicacionSuperHero(){ 
        ocultarTodosLosCuadros();
        buscarPrimerSuperHero();
        cambiarPlaceHolderDelInputBuscar();
        añadirEventoClickAlInputBuscar();
        añadirEventoClickAlLiPowerStats();
        añadirEventoClickAlLiBiography();
        añadirEventoClickAlLiAppearance();
        añadirEventoClickAlLiConnections();
        añadirEventoClickAlLiChart();     
        gestorApiSuperHero.añadirIconoEscudoALasEtiquetasLiDelCuadroPowerStates();          
    }    
    
    function validarValorIngresadoPorElUsuario(valor){
        if(!validarSiEsNumero(valor)){
            alert('debes ingresar sólo números');
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


