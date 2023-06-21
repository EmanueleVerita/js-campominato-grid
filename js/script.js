// chiedo all'utente quante celle vuole generare

const cellGenerator = parseInt(prompt('quante celle vuoi generare?'));


// genero le celle 

const cellContainer = document.querySelector('.container');

for(let i = 1 ; i <= cellGenerator ; i++){

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.append(i);

    newCell.addEventListener('click' , function(){

        this.classList.toggle('active');
        console.log(this.innerHTML);

        


    });

    cellContainer.append(newCell);

}