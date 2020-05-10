import {
    RequetebddId
} from "./requete.js"

//Recuperer id passé dans l'url
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

// Récuperer et affiché élement correspondant à l'ID
function getProduitID() {

    const getProduitIDs = new RequetebddId
    getProduitIDs.getInformationId(id)
        .then((responseText) => {

            const titre = responseText.name
            const image = responseText.imageUrl
            const prix = responseText.price
            const description = responseText.description
            const optionList = responseText.lenses

            let titreProduit = document.getElementById('titre_produit')
            let imgProduitChoisit = document.getElementById('produit_choisit')
            let descriptionProduitChoisit = document.getElementById('description')
            let prixProduitChoisit = document.getElementById('prix')
            let lentille = document.getElementById('lentille-select')

            // récuperer option + affichage liste déroulante
            const optionTableau = optionList
            for (let i = 0; i < optionTableau.length; i++) {
                let option = document.createElement('option')
                lentille.appendChild(option)
                option.setAttribute('value', optionTableau[i])
                option.innerHTML = optionTableau[i]
            }

            imgProduitChoisit.setAttribute('src', image)
            prixProduitChoisit.innerHTML = prix + ' €'
            descriptionProduitChoisit.innerHTML = description
            titreProduit.innerHTML = titre


        })

}

window.onload = getProduitID()

//   Vérifier Option + quantités
const optionChoice = document.getElementById('lentille-select')
const btnValidation = document.getElementById('btnPanier')
const quantiteChoice = document.getElementById('quantite')



optionChoice.addEventListener('change', function (e) {
    if (e.target.value != 'ko') {
        btnValidation.removeAttribute('disabled')

    } else {
        btnValidation.setAttribute('disabled', '')

    }
})