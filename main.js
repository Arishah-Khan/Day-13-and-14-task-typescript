"use strict";
// Question no 37
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size = "Large", message = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the message : ${message}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love python");
// Question no 38
// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Dubai", "UAE");
// Question no 39
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    return `${city} ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Tokyo", "Japan"));
// Question no 40
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist 1", "The First Album"));
console.log(make_album("Artist 2", "The Second Album"));
console.log(make_album("Artist 3", "The Third Album", 12));
// Question no 41
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let Magician = ["Harry Blaine", "Dynamo", "David Copperfield", "Albus Dumbledore"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(Magician);
// Question no 42
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let Magicians = ["Harry Blaine", "Dynamo", "David Copperfield", "Albus Dumbledore"];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        Magician[i] = "The Great " + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
make_great(Magicians);
show_magician(Magicians);
