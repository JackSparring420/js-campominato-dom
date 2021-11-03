// 1 Creo una funzione dove vado a creare un arry dove posizione le bombe
    // 1.1 l'array rimane sempre di 16 posizioni, ma il numero delle bombe varia in base a quante caselle genera il gioco
// 2 Creo una variabile in cui riporto la funzione
// 3 Metto a confronto i numeri dell'array con le posizoni dei singoli quadrati
    // 3.1 se corrisponde aggiungo la classe bomb per cambiare il colore del quadrato
// 4 Porto la cdlasse bomb su tette le mine per scoprirle tutte


const gridCont = document.getElementById("grid");

let livello = prompt("Scegli: facile, medio, difficile");

while ((livello !== "facile") && (livello !== "medio") && (livello !=="difficile")){
    livello = prompt("Scegli: facile, medio, difficile");
}



let dimensione;
if(livello == "facile") {
    dimensione = 100
    difficolta = "facile"
} else if( livello == "medio"){
    dimensione = 81
    difficolta = "medio"
} else if (livello== "difficile"){
    dimensione = 49;
    difficolta ="difficile";
}

let bomb = createBombs(dimensione);

for(let i = 1; i<= dimensione; i++) {
    // let newElement = elementGen("div", "square", "difficolta")
    let newElement = document.createElement("div")
    newElement.classList.add(difficolta)
    newElement.classList.add("square")
    
    let found = false;

    newElement.innerText += i;
    newElement.addEventListener("click",
    function() {
        this.classList.add("click-true");
                    
            for (let a = 0; a <= bomb.length ; a++){
                if (i === bomb[a]) {
                    found = true;
                }

            }
                
            if (found === true) {
                    this.classList.add("bomb");
            }
        }
        
    )
    
    gridCont.appendChild(newElement)
}

// funzioni utili

// function elementGen(elementGen, classPlus, classPlusB) {
    // let node= document.createElement(elementGen);
    // node.classList.add(classPlus)
    // node.classList.add(classPlusB)
//     return node
// }

function createBombs(numberSquare){

    let bombs =[];

    for (let i = 0; i < 16; i ++){
        
        let randombomb = Math.floor(Math.random() * numberSquare) + 1;

        // let trovato = false;
        // if (randombomb === bombs[i]){
        //     trovato = true;
        // }
        // if (trovato == false){
        //     bombs.push(randombomb);
        // }
        if (bombs.includes(randombomb)) {
            i--;
        }  else {
            bombs.push(randombomb);
        }         
    }
    console.log(bombs); 
    return bombs
}