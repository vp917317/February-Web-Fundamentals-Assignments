        const contain = document.querySelector('.main')
        const input = document.querySelector('#input')

        const button = document.querySelector('button')
        button.addEventListener('click' , search)

        const buttonIndian = document.getElementById('indian')
        buttonIndian.addEventListener('click' , searchIndian)

        const buttonItalian = document.getElementById('italian')
        buttonItalian.addEventListener('click' , searchItalian)

        const buttonFrench = document.getElementById('french')
        buttonFrench.addEventListener('click' , searchFrenchn)

        const buttonChinese= document.getElementById('chinese')
        buttonChinese.addEventListener('click' , searchChinese)


     function fetchData(q){
    console.log("fetching data...", q)
const baseURL = `https://api.edamam.com/search?q=${q}&app_id=a6d62631&app_key=db65596bbd8f8d675d159c99933c8890&from=0&to=20`;
    fetch(baseURL).then( (something) => {
        return something.json()
    } ).then( (buttler) => {
        console.log(buttler)
        display(buttler.hits)
    } ).catch( (error) => {
        console.log("got some error ", error)
    } )
}


function search(e){
         e.preventDefault()

           const query = input.value 
           fetchData(query)
          
     }

 
     function searchIndian(Ind){
        Ind.preventDefault()

          var query1 = buttonIndian.value
          
          fetchData(query1)
          
    }

    function searchItalian(Italian){
        Italian.preventDefault()

          const query2 = buttonItalian.value
          fetchData(query2)
    }

    function searchChinese(Chinese){
        Chinese.preventDefault()

          const query3 = buttonChinese.value
          fetchData(query3)
    }

    function searchFrenchn(French){
        French.preventDefault()

          const query4 = buttonFrench.value
          fetchData(query4)
    }
     
    
     
     function display(s){
        contain.innerHTML =''
        for(let i=0; i<s.length; i++){
            const dis = s[i]
            html = `<div class="card">
            <img class="img" width="200px" height="200px" src="${dis.recipe.image}"/>
            <div class="name"><h2 class="dish-name">${'Dish Name:-'} </h2><h2>${dis.recipe.label}</h2></div>
            <h3 class="h3">${'Dish Type :-' + dis.recipe.dishType}  <br>  ${'cuisine type:-' + dis.recipe.cuisineType}
                <br> ${'mealType:-' + dis.recipe.mealType}</h3>
            <p class="ingredients">${ 'Ingredient :-' + dis.recipe.ingredientLines}</p>
            <h4>${'Time for preparation:-' + dis.recipe.totaltime}</h4>
            <p>${dis.recipe.source}</p>
            <a class="ahref" href="${dis.recipe.url}">full recipe video</a> </div>
                  `

                  contain.innerHTML = contain.innerHTML + html
        }
     }