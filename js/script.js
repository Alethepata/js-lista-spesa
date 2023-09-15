const content = document.getElementById('list');

const list = ['pane', 'pasta', 'salumi', 'bibite', 'fazzoletti', 'tonno'];

let i = 0;
while( i < list.length){ 
    content.innerHTML += `<li class=" border-bottom list-group-item p-2 text-secondary">${list[i]}</li>`;      
    i++ 
    
}


