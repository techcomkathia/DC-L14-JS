for(let i=1; i<4; i++){
    //a cada repetição do laço externo, o laço interno será executado 2 vezes
    for(let j=1; j<=2; j++){
        console.log(`i ${i} e j ${j}`)
    }
}

//laço externo 
for(let x=1; x<=3; x++){   
    //laço interno 
    for(let y=1; y<=4; y++){
        console.log("*".repeat(y))
    }
}

