// faster/easier way to access/unpack variables from array, objects (later videos)

const bob = {
	first: 'bob',
	last: 'sanders',
	city: 'chicago',
	siblings: {
		sister: 'jane',
	},
}

const last = 'some value'
const {
	last: shakeAndBake,
	first,
	city,
	zip,
	siblings: { sister: favoriteSibling },
} = bob
console.log(first, city, zip, shakeAndBake, favoriteSibling)

// const firstName = bob.first
// const lastName = bob.last
// const sister = bob.siblings.sister

// console.log(firstName, lastName, sister)

// function printPerson(person) {
// 	// console.log(person.first)
// 	const { first, last } = person
// 	console.log(first, last)
// }
function printPerson({ first, last, city, siblings: { sister } }) {
	console.log(first, last, sister)
}

printPerson(bob)
