// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 3

// *************
// * PROBLEM 1 *
// *************

// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the update function
// with the animal as the context, and 'Trogdor' as a parameter.
// return the result of your updateAnimal invocation

// CODE HERE...
function callBinding(magicAnimals, updateAnimal, id) {
	for (var i = 0; i < magicAnimals.length; i++) {
		if (magicAnimals[i]['id'] === id) {
			return updateAnimal.call(magicAnimals[i], 'Trogdor');
		}
	}
}

// *************
// * PROBLEM 2 *
// *************

// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and the array ['being majestic', 'eating rainbows'] as a parameter.
// return the result of your updateAnimal invocation

// CODE HERE...
function applyBinding(magicAnimals, updateAnimal, id) {
	for (var i = 0; i < magicAnimals.length; i++) {
		if (magicAnimals[i]['id'] === id) {
			return updateAnimal.apply(magicAnimals[i], ['being majestic', 'eating rainbows']);
		}
	}
}

// *************
// * PROBLEM 3 *
// *************

// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter:
// $q (Custom promise object).
// NOTE: $q is an injected library, that works like angular's $q object.
// promiseMe will be invoked by test and the test will expect a promise back.
// In your function, create a custom promise, then create a timeout with a duration of 20 ms.
// The timeout function should update the variable foo (seen below) to equal 'bar'.
// After the timeout is completed, the promise should be resolved with the new update foo variable.
// NOTE: Manually invoking your function here will alter the 'foo' variable before tests run, causing them to fail.

var foo;
// using the build-in Promise constructor
function promiseMe() {
	let custom	= new Promise((resolve, reject) => {
		setTimeout(()=> {
			foo = 'bar';
			resolve(foo)
		}, 20)
	})
	return custom
}
/*  using the $q library:

function promiseMe($q) {
	var defered = $q.defer();

	setTimeout(function () {
		defered.resolve(foo = "bar");
	}, 20);

	return defered.promise;
}
*/

// *************
// * PROBLEM 4 *
// *************

// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters:
// $q (Custom promise object), $http (Custom request function).
// NOTE: $http is a function created to simulate the angular $http.
// Set up your custom promise, then make a GET request using $http to '/api/users'.
// Make an array of emails (array of strings) from the returned data (You will need to console log or debug to figure this out),
// and then pass the array as you complete your promise.

// without using $q

function emailList($q, $http) {
	let custom = new Promise ((resolve, reject) => {
		let list = $http.get('/api/users').then(res => {
			return resolve(res.data.map(e => e.email))
		})
	})

	return custom;
}

/*
function emailList($q, $http){
    var defered = $q.defer();

    $http({
        method: "GET",
        url: '/api/users'
    }
    ).then(res => {
        var emails = [];
        for (var i = 0; i < res.data.length; i++) {
            console.log(emails);
            emails.push(res.data[i].email);

        }
        defered.resolve(emails);
    });

return defered.promise
}

*/