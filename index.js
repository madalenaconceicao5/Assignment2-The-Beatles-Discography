 
 //fzr como na aula e ver
  
  let faces = ['john', 'paul', 'george', 'ringo']

    function changeFaces(){
        let i=0;

        for(let face of faces){
            let number= Math.floor(Math.random() * 5) + 1

            document.getElementById('face' + (i + 1)).src = 'webp/faces/' + face + number + '.webp'
            i++;
        }
    }

    changeFaces();
    setInterval(changeFaces, 1000);