var name = ''
var project = ''
var cost = 0

setTimeout(getName, 20)

function getName () {
  name = 'Emil'

  setTimeout(getProject, 15)
}

function getProject () {
  project = 'Hyperdivision'

  setTimeout(getCost, 25)
}

function getCost () {
  cost = 100

  console.log(name, project, cost)
}
