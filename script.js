window.addEventListener("load", function(){
    const name = document.querySelector("input[name=testName]")
    const date = document.querySelector("input[name=testDate]")
    const rocket = document.querySelector("select[name=rocketType]")
    const boosters = document.querySelector("input[name=numOfBoosters]")
    const wind = document.querySelector("input[name=windRating]")
    const checkbox = document.querySelector("input[name=productionServers]")

    const form = document.querySelector("form")
    form.addEventListener("submit", function(event){
        if (name.value===''||
        date.value===''||
        rocket.option.value===''||
        boosters.value===''||
        wind.value===''||
        checkbox===''){
            alert("All fields required!")
            event.preventDefault();
        }
    })

})