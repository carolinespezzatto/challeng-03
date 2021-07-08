const optionClass = document.getElementById("class")
const optionType = document.getElementById("type")
const optionFaction = document.getElementById("faction")
const optionRace = document.getElementById("race")

const searchClasses = async () => {
  let response = await axios.get('http://localhost:3000/allCardsInfo')
  let classes = response.data.classes
  for (let i = 0; i < classes.length; i++) {
    let element = classes[i]
    let option = document.createElement('option')
    option.innerHTML= `<option value="classes-options" class="-classes-options">${element}</option>`
    optionClass.add(option)  
  }
}

const searchTypes = async () => {
  let response = await axios.get('http://localhost:3000/allCardsInfo')
  let types = response.data.types
  for (let i = 0; i < types.length; i++) {
    let element = types[i]
    let option = document.createElement('option')
    option.innerHTML= `<option value="classes-options" class="-classes-options">${element}</option>`
    optionType.add(option)  
  }
}

const searchFactions = async () => {
  let response = await axios.get('http://localhost:3000/allCardsInfo')
  let factions = response.data.factions
  for (let i = 0; i < factions.length; i++) {
    let element = factions[i]
    let option = document.createElement('option')
    option.innerHTML= `<option value="classes-options" class="-classes-options">${element}</option>`
    optionFaction.add(option)  
  }
}

const searchRaces = async () => {
  let response = await axios.get('http://localhost:3000/allCardsInfo')
  let races = response.data.races
  for (let i = 0; i < races.length; i++) {
    let element = races[i]
    let option = document.createElement('option')
    option.innerHTML= `<option value="classes-options" class="-classes-options">${element}</option>`
    optionRace.add(option)  
  }
}

async function optionsClass() {
  let response = await axios.get('http://localhost:3000/classFilter/' + optionClass.value)
  for (let i = 0; i < response.data.length; i++) {
    let element = response.data[i]
    if (element.img == null) {
      document.getElementById('container-cards').innerHTML += 
      `
      <div class="no-image-card">
        <p id="card-name">${element.name}</p>
      </div>
      ` 
    } else {
      document.getElementById('container-cards').innerHTML += `<img id="img-cards" src="${element.img}" alt="">`
    }
  }
}

async function optionsType() {
  let response = await axios.get('http://localhost:3000/typeFilter/' + optionType.value)
  for (let i = 0; i < response.data.length; i++) {
    let element = response.data[i]
    if (element.img == null) {
      document.getElementById('container-cards').innerHTML += 
      `
      <div class="no-image-card">
        <p id="card-name">${element.name}</p>
      </div>
      ` 
    } else {
      document.getElementById('container-cards').innerHTML += `<img id="img-cards" src="${element.img}" alt="">`
    }
  }
}

async function optionsFaction() {
  let response = await axios.get('http://localhost:3000/factionFilter/' + optionFaction .value)
  for (let i = 0; i < response.data.length; i++) {
    let element = response.data[i]
    if (element.img == null) {
      document.getElementById('container-cards').innerHTML += 
      `
      <div class="no-image-card">
        <p id="card-name">${element.name}</p>
      </div>
      ` 
    } else {
      document.getElementById('container-cards').innerHTML += `<img id="img-cards" src="${element.img}" alt="">`
    }
  }
}

async function optionsRace() {
  let response = await axios.get('http://localhost:3000/raceFilter/' + optionRace .value)
  for (let i = 0; i < response.data.length; i++) {
    let element = response.data[i]
    if (element.img == null) {
      document.getElementById('container-cards').innerHTML +=
      `
      <div class="no-image-card">
        <p id="card-name">${element.name}</p>
      </div>
      ` 
    } else {
      document.getElementById('container-cards').innerHTML += `<img id="img-cards" src="${element.img}" alt="">`
    }
  }
}

searchClasses()
searchTypes()
searchFactions()
searchRaces()
