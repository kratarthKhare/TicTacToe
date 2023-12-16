var playerBox = document.querySelector('[data-playerBox]');
var newBox = document.querySelector('.new');
var winningCombos = [['1','5','9'], ['1','4','7'], ['1','2','3'], ['2','5','8'], ['3','5','7'], ['3','6','9'], ['4','5','6'], ['7','8','9']];

var currPlayer = 'X';

for(let i=1; i<=9; i++)
{
    let box = document.querySelector(`#box${i}`);
    box.addEventListener('click', played);
}

newBox.addEventListener('click', () => {
    game('newGame');
})

function played(event)
{
   event.target.textContent = currPlayer;
   event.target.classList.add('pointer');

   var check = checkGameOver();

   if(check == true)
      return;

   turn();
}

function turn()
{
    currPlayer = currPlayer === 'X' ? 'O' : 'X';

    playerBox.textContent = `Current Player - ${currPlayer}`;

}

function checkGameOver()
{
    for(let i=0; i<8; i++)
    {
        let box1 = document.querySelector(`#box${winningCombos[i][0]}`);
        let box2 = document.querySelector(`#box${winningCombos[i][1]}`);
        let box3 = document.querySelector(`#box${winningCombos[i][2]}`);

        if(box1.innerText === currPlayer &&  box2.textContent === currPlayer && box3.textContent === currPlayer)
        {
              box1.classList.add('greenBlock');
              box2.classList.add('greenBlock');
              box3.classList.add('greenBlock');
              game('won');
              return true;
        } 
    }

        
    var count = 0;

    for(let i=1; i<=9; i++)
    {
        let box = document.querySelector(`#box${i}`);

        if(box.textContent !== '')
           count++; 

        if(count === 9)
         {
            game('draw');
            return true;
         } 
    } 
    
}

function game(result)
{

      if(result === 'draw')
         playerBox.textContent = 'Game Tied';

      else if(result === 'won') 
         playerBox.textContent = `Player Won - ${currPlayer}`;  

      else if(result === 'newGame')
      {
         currPlayer = 'X';
         playerBox.textContent = `Current Player - ${currPlayer}`;

         for(let i=1; i<=9 ;i++)
        {
            let box = document.querySelector(`#box${i}`);
            box.textContent =  '';
            box.classList.remove('pointer');
            box.classList.remove('greenBlock');
        }   
      }   

}

