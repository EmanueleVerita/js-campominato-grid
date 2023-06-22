const playButton = document.querySelector('button');

playButton.addEventListener('click' , function(){

    const cellContainer = document.querySelector('.container');

    cellContainer.innerHTML = ' ';

for(let i = 1 ; i <= 100 ; i++){

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.append(i);

    newCell.addEventListener('click' , function(){

        this.classList.toggle('active');
        console.log(this.innerHTML);

        


    });

    cellContainer.append(newCell);

}


})



