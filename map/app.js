// MAP Method
const people = [
	{
		name: 'bob',
		age: 20,
		positions: 'developer',
	},
	{
		name: 'anna',
		age: 25,
		positions: 'designer',
	},
	{
		name: 'susy',
		age: 30,
		positions: 'the boss',
	},
	{
		name: 'john',
		age: 26,
		positions: 'intern',
	},
]

//  Quokka.js – Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making a new one

const getAges = (person) => person.age * 2

const ages = people.map(getAges)
console.log(ages)

const newPeople = people.map((item) => {
	return {
		firstName: item.name.toUpperCase(),
		oldAge: item.age + 20,
	}
})

console.log(newPeople)

const names = people.map((person) => `<h2>${person.name}</h2>`)
const result = document.querySelector('#result')

result.innerHTML = names.join('')
