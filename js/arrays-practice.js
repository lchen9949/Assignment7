//STEP 1
var favoriteMov = [];
favoriteMov[0] = "Night at the Museum.";
favoriteMov[1] = "Tom and Jerry.";
favoriteMov[2] = "Frozen.";
favoriteMov[3] = "Braveheart.";
favoriteMov[4] = "Titanic.";
console.log (favoriteMov[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Night at the Museum.";
movies[1] = "Tom and Jerry.";
movies[2] = "Frozen.";
movies[3] = "Braveheart.";
movies[4] = "Titanic.";
console.log (movies[0]);


//STEP 3
var movies = new Array(5);
movies[0] = "Night at the Museum.";
movies[1] = "Tom and Jerry.";
movies[2] = "Frozen.";
movies[3] = "Braveheart.";
movies[4] = "Titanic.";
movies.splice(2,0,"Frozen.")
console.log (movies.length);

//STEP 4
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic." ];
delete movies[0];
console.log (movies);

//STEP 5
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic.","Mission Impossible.","Top Gun." ];
for (var i = 0; i<movies.length; i++) {
    console.log (movies[i]);
}

//STEP 6
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic.","Mission Impossible.","Top Gun." ];
for (var single in movies) {
    console.log (movies[single]);
}

//STEP 7
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic.","Mission Impossible.","Top Gun." ];
var movieSore = movies.sort();
for (var single in movieSore) {
    console.log (movieSore[single]);
}

//STEP 8
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic.","Mission Impossible.","Top Gun." ];
console.log ("Movies I like:")
console.log ("\n");
for (var i = 0; i<movies.length; i++) {
    console.log (movies[i]);
}
console.log ("\n");

var leastFavMovies =["Harry Potter.", "Superbabies.", "2012."];
console.log("Movies I regret watching:")
console.log ("\n");
for (var item in leastFavMovies) {
    console.log (leastFavMovies[item]);
}
console.log ("\n");


//STEP 9
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic.","Mission Impossible.","Top Gun." ];

var leastFavMovies =["Harry Potter.", "Superbabies.", "2012."];

movies = movies.concat(leastFavMovies);

movies.sort(function (a,b) {
    return b.localeCompare(a);
});

console.log (movies);


//STEP 10
movies = ["Night at the Museum.", "Tom and Jerry.", "Frozen.", "Braveheart.", "Titanic.","Mission Impossible.","Top Gun." ];

var leastFavMovies =["Harry Potter.", "Superbabies.", "2012."];

movies = movies.concat(leastFavMovies);

movies.sort(function (a,b) {
    return b.localeCompare(a);
});

var lastMovie = movies[movies.length-1];
console.log (lastMovie);

