const names = ['Sharnaji', 'PELE', 'messi', 'Mahi' , 'jairam']

const classList = ['one', 'two', 'three', 'four' ,'five']

 for(let i = 0; i<names.length; i++){
     const newElement = document.createElement('p')
     newElement.innerText = names[i]
     newElement.classList.add(classList[i])
    const target = document.querySelector('h1')
     target.appendChild(newElement)
 }