let creaArticoloBtn = document.querySelector(`#creaArticolo`);

let alertBar = document.querySelector(`#alert`);


creaArticoloBtn.addEventListener(`click`, ()=>{
    
    if(document.querySelector(`#titolo`).value ==`` && document.querySelector(`#articolo`).value ==``){


        alert('Inserisci  il titolo ed il paragrafo!');
        
    }else if(document.querySelector(`#titolo`).value ==``){

        alert(`Inserisci  il titolo!`);

    }else if(document.querySelector(`#articolo`).value ==``)
        {

            alert(`Inserisci l' articolo!`);

        }else{
        let titolo = document.querySelector(`#titolo`).value;
        let articolo = document.querySelector(`#articolo`).value;
        
        
        
        let date = new Date();
        let formatDate = date.toLocaleDateString();
        
        
        let dataOdierna = document.createElement(`p`);
        
        dataOdierna.innerHTML = formatDate;
        
        
        let tit = document.createElement(`h2`);
        let art = document.createElement(`p`);
        
        tit.innerHTML = titolo;
        art.innerHTML = articolo;
        
        let articoloCompleto = document.createElement(`div`);
        
        articoloCompleto.appendChild(tit);
        articoloCompleto.appendChild(art);
        articoloCompleto.appendChild(dataOdierna);
        
        
        document.body.appendChild(articoloCompleto);
        
        document.querySelector(`#titolo`).value =``;
        articolo = document.querySelector(`#articolo`).value =``;
        
    }
    
});