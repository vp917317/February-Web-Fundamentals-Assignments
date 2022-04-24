const somePromise = fetch('https://reqres.in/api/users?page=2 ')

somePromise
    .then( (data) => {return data.json()} )
    .then(result => {
        console.log(result)
        const someArr = result.data
        for(let i=0; i< someArr.length; i++){
           
            
            const newElement = document.createElement('div')
            

            newElement.className = "maincard"
            newElement.innerHTML = `  <div> <img class="image" src="${someArr[i].avatar}" width="200px" height="200px"/></div>
                                     <div class="name"> First Name :- ${someArr[i].first_name} <br> Last Name :- ${someArr[i].last_name}</div
                                     <div class="nemail"> Email :- ${someArr[i].email}</div> 
                                    `
            
            document.querySelector('body').appendChild(newElement)
            
        }
    })
    


    