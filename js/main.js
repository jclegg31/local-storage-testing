//Create a button that adds 1 to a botScore stored in localStorage

//When the page loads, we set a botScore to 0
//as long as there is not a botScore set already
if (!localStorage.getItem('botScore')) {
  localStorage.setItem('botScore', 0)
}

//Click a button and then add one to the botScore
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne() {
  //get value out of local storage and store in botScoreVal
  //Add one and then set that new valule to the localStorage
  let botScoreVal = Number(localStorage.getItem('botScore'))
  botScoreVal += 1
  localStorage.setItem('botScore', botScoreVal)
}
