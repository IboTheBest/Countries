const elHeroList = document.querySelector(".heroList")
const elSelect = document.querySelector(".select")
const elSearch = document.querySelector(".search")
function renderCountryes(array, list){
    list.innerHTML = null
    array.map(item =>{
        let elCountryItem = document.createElement("li")
        elCountryItem.className = "w-[264px] rounded-md bg-white shadow-lg overflow-hidden"
        elCountryItem.innerHTML = `
        <img class="w-full h-[160px] object-cover" src="${item.flag}" alt="${item.name}" width="264" height="160">
        <div class="p-6">
            <h2 class="count-title text-[#111517] mb-4 text-[18px] leading-[26px] font-extrabold">${item.name}</h2>
            <p class="count-info font-bold text-[14] mb-2 leading 4">Population: <span class="font-extralight text-[14] leading 4">${item.population}</span></p>
            <p class="count-info font-bold text-[14] leading 4">Capital: <span class="font-extralight text-[14] leading 4">${item.capital}</span></p>
        </div>
                <div class="flex justify-between  p-5">
            <button class="rounded-full border-[3px] border-black w-[35px] h-[35px] flex justify-center items-center ">
                <img src="./images/liked.png" alt="" width="25" >
            </button>
            <button class="rounded-full border-[3px] border-black w-[35px] h-[35px] flex justify-center items-center ">
                <img src="./images/more.png" alt="" width="25" >
            </button>
            <button class="rounded-full border-[3px] border-black w-[35px] h-[35px] flex justify-center items-center ">
                <img src="./images/saved.png" alt="" width="25" >
            </button>
        </div>
        `        
        elHeroList.append(elCountryItem)
    })
}
renderCountryes(countrys, elHeroList)


function renderSelect(array, list){
    array.map(item =>{
        let elOption = document.createElement("option")
        // elOption.innerHTML = `
        //     <option value="${item.capital.toLowerCase()}">${item.capital}</option>
        elOption.value = item.capital.toLowerCase()
        elOption.textContent = item.capital
        elSelect.append(elOption)
    })
}
renderSelect(countrys, elSelect)

elSelect.addEventListener("change", function(evt){
    if(evt.target.value == "all"){
        renderCountryes(countrys, elHeroList)
    }else{
        let result = countrys.filter(item => item.capital.toLowerCase() == evt.target.value)
    renderCountryes(result, elHeroList)
    }
    
})

elSearch.addEventListener("input", function(event){
    let value = event.target.value.toLowerCase()
    let searched = countrys.filter(item => item.name.toLowerCase().includes(value))
    renderCountryes(searched, elHeroList)
})

function changeImg(){
    let butn =  document.querySelector(".dark")
    butn.src = './images/brightness.png'
    document.body.className = "bg-[#202C36]"
    let elHeader = document.querySelector(".header")
    elHeader.classList.add("bg-[#2B3844]")
    elSearch.classList.add("bg-[#2B3844]")
    elSelect.classList.add("bg-[#2B3844]") 
    let eGeneralTitle =  document.querySelector(".general-title")
    eGeneralTitle.classList.add("text-white") 
    let elCountryItem = document.querySelectorAll("li")
    elCountryItem.toggle("make-dark")
    let countryTitle = document.querySelectorAll("count-title")
    let countyInfo = document.querySelectorAll(".count-info")
    countryTitle.toggle("make-text-dark")
    countyInfo.toggle("make-text-dark")

}