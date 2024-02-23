export default class GestorApiSuperHero{
    constructor(){
        this.superHero = {};        
    } 

    getSuperHero(){
        return this.superHero;
    }

    setSuperHero(nuevoSuperHero){
        this.superHero = nuevoSuperHero;
    }

    setInfoImagen(){
        const imagenSuperHero = document.querySelector('.card img');
        imagenSuperHero.src = this.getSuperHero().image.url;
    }

    setInfoNombre(){
        const nombreSuperHero = document.querySelector('.card-body .card-title');
        nombreSuperHero.textContent = this.getSuperHero().name.toUpperCase();
    }

    setInfoPowerStats(){        
        const liIntelligence = document.querySelector('#cuadroDePowerStats li:nth-child(1)');
        const liStrength = document.querySelector('#cuadroDePowerStats li:nth-child(2)');
        const liSpeed = document.querySelector('#cuadroDePowerStats li:nth-child(3)');
        const liDurability = document.querySelector('#cuadroDePowerStats li:nth-child(4)');
        const liPower = document.querySelector('#cuadroDePowerStats li:nth-child(5)');
        const liCombat = document.querySelector('#cuadroDePowerStats li:nth-child(6)');

        const pIntelligence = document.createElement('p');
        const pStrength = document.createElement('p');
        const pSpeed = document.createElement('p');
        const pDurability = document.createElement('p');
        const pPower = document.createElement('p');
        const pCombat = document.createElement('p');

        pIntelligence.textContent = `${this.getSuperHero().powerstats.intelligence}`;
        pStrength.textContent = `${this.getSuperHero().powerstats.strength}`;
        pSpeed.textContent = `${this.getSuperHero().powerstats.speed}`;
        pDurability.textContent = `${this.getSuperHero().powerstats.durability}`;
        pPower.textContent = `${this.getSuperHero().powerstats.power}`;
        pCombat.textContent = `${this.getSuperHero().powerstats.combat}`;
     
        liIntelligence.appendChild(pIntelligence);
        liStrength.appendChild(pStrength);
        liSpeed.appendChild(pSpeed);
        liDurability.appendChild(pDurability);
        liPower.appendChild(pPower);
        liCombat.appendChild(pCombat);
    }

    setInfoBiography(){        
        const liFullName = document.querySelector('#cuadroDeBiography li:nth-child(1)');
        const liAlterEgos = document.querySelector('#cuadroDeBiography li:nth-child(2)');
        const liAliases = document.querySelector('#cuadroDeBiography li:nth-child(3)');
        const liPlaceOfBirth= document.querySelector('#cuadroDeBiography li:nth-child(4)');
        const liFirstAppearance = document.querySelector('#cuadroDeBiography li:nth-child(5)');
        const liPublisher = document.querySelector('#cuadroDeBiography li:nth-child(6)');

        const pFullName = document.createElement('p');
        const pAlterEgos = document.createElement('p');
        const pAliases = document.createElement('p');
        const pPlaceOfBirth = document.createElement('p');
        const pFirstAppearance = document.createElement('p');
        const pPublisher = document.createElement('p');

        pFullName.textContent = `${this.getSuperHero().biography['full-name']}`
        pAlterEgos.textContent = `${this.getSuperHero().biography['alter-egos']}`
        pAliases.textContent = '';
        for(let i = 0; i < this.getSuperHero().biography.aliases.length; i++){
            pAliases.textContent += `${this.getSuperHero().biography.aliases[i]}. `;
        }
        pPlaceOfBirth.textContent = `${this.getSuperHero().biography['place-of-birth']}`
        pFirstAppearance.textContent = `${this.getSuperHero().biography['first-appearance']}`
        pPublisher.textContent = `${this.getSuperHero().biography.publisher}`;

        liFullName.appendChild(pFullName);
        liAlterEgos.appendChild(pAlterEgos);
        liAliases.appendChild(pAliases);
        liPlaceOfBirth.appendChild(pPlaceOfBirth);
        liFirstAppearance.appendChild(pFirstAppearance);
        liPublisher.appendChild(pPublisher);
    }

    setInfoAppearance(){        
        const liGender = document.querySelector('#cuadroDeAppearance li:nth-child(1)');
        const liRace = document.querySelector('#cuadroDeAppearance li:nth-child(2)');
        const liHeight = document.querySelector('#cuadroDeAppearance li:nth-child(3)');
        const liWeight= document.querySelector('#cuadroDeAppearance li:nth-child(4)');
        const liEyeColor = document.querySelector('#cuadroDeAppearance li:nth-child(5)');
        const liHairColor = document.querySelector('#cuadroDeAppearance li:nth-child(6)');

        const pGender = document.createElement('p');
        const pRace = document.createElement('p');
        const pHeight = document.createElement('p');
        const pWeight = document.createElement('p');
        const pEyeColor = document.createElement('p');
        const pHairColor = document.createElement('p');

        pGender.textContent = `${this.getSuperHero().appearance.gender}`;
        pRace.textContent = `${this.getSuperHero().appearance.race}`;
        pHeight.textContent += `${this.getSuperHero().appearance.height[1]}`;
        pWeight.textContent = `${this.getSuperHero().appearance.weight[1]}`;
        pEyeColor.textContent = `${this.getSuperHero().appearance['eye-color']}`;
        pHairColor.textContent = `${this.getSuperHero().appearance['hair-color']}`;

        liGender.appendChild(pGender);
        liRace.appendChild(pRace);
        liHeight.appendChild(pHeight);
        liWeight.appendChild(pWeight);
        liEyeColor.appendChild(pEyeColor);
        liHairColor.appendChild(pHairColor);
    }

    setInfoConnections(){
        const pGroupAffiliation = document.querySelector('#groupAffiliation');
        const pRelatives = document.querySelector('#relatives');

        pGroupAffiliation.textContent = this.getSuperHero().connections['group-affiliation'];
        pRelatives.textContent = this.getSuperHero().connections.relatives;
    }
    
    añadirIconoEscudoALasEtiquetasLiDelCuadroPowerStates(){
        const etiquetasLiDelCuadroPowerStates = document.querySelectorAll('#cuadroDePowerStats li');
        for(let etiquetaLi of etiquetasLiDelCuadroPowerStates){
            const iconoEscudo = document.createElement('i');
            this.añadirPropiedadesAlIconoEscudo(iconoEscudo);
            etiquetaLi.insertBefore(iconoEscudo,etiquetaLi.firstChild);
        }
    }
    añadirPropiedadesAlIconoEscudo(iconoEscudo){       
        iconoEscudo.className += 'fas fa-shield-virus fa-xl';
        iconoEscudo.style.color = '#c9594f';
    }
}