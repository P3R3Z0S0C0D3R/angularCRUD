var app = angular.module("myMovieApp", []);
app.controller("myMovieController", ["$scope", function ($scope) {
	
    //1. Movie Object
    $scope.Movie = {
        title: '',
        rank: '',
        id: '',
    };
	
    //2. MovieList To Display Data In HTML Table
    $scope.MovieList = [
		{
			title: "The Shawshank Redemption",
			rank: "001",
			id: "tt0111161"
		},
		{
			title: "The Godfather",
			rank: "002",
			id: "tt0068646"
		},
		{
			title: "The Godfather: Part II",
			rank: "003",
			id: "tt0071562"
		},
		{
			title: "Pulp Fiction",
			rank: "004",
			id: "tt0110912"
		},
		{
			title: "The Good, the Bad and the Ugly",
			rank: "005",
			id: "tt0060196"
		},
		{
			title: "The Dark Knight",
			rank: "006",
			id: "tt0468569"
		},
		{
			title: "12 Angry Men",
			rank: "007",
			id: "tt0050083"
		},
		{
			title: "Schindler's List",
			rank: "008",
			id: "tt0108052"
		},
		{
			title: "The Lord of the Rings: The Return of the King",
			rank: "009",
			id: "tt0167260"
		},
		{
			title: "Fight Club",
			rank: "010",
			id: "tt0137523"
		},
		{
			title: "Star Wars: Episode V - The Empire Strikes Back",
			rank: "011",
			id: "tt0080684"
		},
		{
			title: "The Lord of the Rings: The Fellowship of the Ring",
			rank: "012",
			id: "tt0120737"
		},
		{
			title: "One Flew Over the Cuckoo's Nest",
			rank: "013",
			id: "tt0073486"
		},
		{
			title: "Inception",
			rank: "014",
			id: "tt1375666"
		},
		{
			title: "Goodfellas",
			rank: "015",
			id: "tt0099685"
		},
		{
			title: "Star Wars",
			rank: "016",
			id: "tt0076759"
		},
		{
			title: "Seven Samurai",
			rank: "017",
			id: "tt0047478"
		},
		{
			title: "Forrest Gump",
			rank: "018",
			id: "tt0109830"
		},
		{
			title: "The Matrix",
			rank: "019",
			id: "tt0133093"
		},
		{
			title: "The Lord of the Rings: The Two Towers",
			rank: "020",
			id: "tt0167261"
		},
		{
			title: "City of God",
			rank: "021",
			id: "tt0317248"
		},
		{
			title: "Se7en",
			rank: "022",
			id: "tt0114369"
		},
		{
			title: "The Silence of the Lambs",
			rank: "023",
			id: "tt0102926"
		},
		{
			title: "Once Upon a Time in the West",
			rank: "024",
			id: "tt0064116"
		},
		{
			title: "Casablanca",
			rank: "025",
			id: "tt0034583"
		},
		{
			title: "The Usual Suspects",
			rank: "026",
			id: "tt0114814"
		},
		{
			title: "Raiders of the Lost Ark",
			rank: "027",
			id: "tt0082971"
		},
		{
			title: "Rear Window",
			rank: "028",
			id: "tt0047396"
		},
		{
			title: "It's a Wonderful Life",
			rank: "029",
			id: "tt0038650"
		},
		{
			title: "Psycho",
			rank: "030",
			id: "tt0054215"
		},
		{
			title: "Leon: The Professional",
			rank: "031",
			id: "tt0110413"
		},
		{
			title: "Sunset Blvd.",
			rank: "032",
			id: "tt0043014"
		},
		{
			title: "American History X",
			rank: "033",
			id: "tt0120586"
		},
		{
			title: "Apocalypse Now",
			rank: "034",
			id: "tt0078788"
		},
		{
			title: "Terminator 2: Judgment Day",
			rank: "035",
			id: "tt0103064"
		},
		{
			title: "Saving Private Ryan",
			rank: "036",
			id: "tt0120815"
		},
		{
			title: "Memento",
			rank: "037",
			id: "tt0209144"
		},
		{
			title: "City Lights",
			rank: "038",
			id: "tt0021749"
		},
		{
			title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
			rank: "039",
			id: "tt0057012"
		},
		{
			title: "Alien",
			rank: "040",
			id: "tt0078748"
		},
		{
			title: "Modern Times",
			rank: "041",
			id: "tt0027977"
		},
		{
			title: "Spirited Away",
			rank: "042",
			id: "tt0245429"
		},
		{
			title: "North by Northwest",
			rank: "043",
			id: "tt0053125"
		},
		{
			title: "Back to the Future",
			rank: "044",
			id: "tt0088763"
		},
		{
			title: "Life Is Beautiful",
			rank: "045",
			id: "tt0118799"
		},
		{
			title: "The Shining",
			rank: "046",
			id: "tt0081505"
		},
		{
			title: "The Pianist",
			rank: "047",
			id: "tt0253474"
		},
		{
			title: "Citizen Kane",
			rank: "048",
			id: "tt0033467"
		},
		{
			title: "The Departed",
			rank: "049",
			id: "tt0407887"
		},
		{
			title: "M",
			rank: "050",
			id: "tt0022100"
		},
		{
			title: "Paths of Glory",
			rank: "051",
			id: "tt0050825"
		},
		{
			title: "Vertigo",
			rank: "052",
			id: "tt0052357"
		},
		{
			title: "Django Unchained",
			rank: "053",
			id: "tt1853728"
		},
		{
			title: "Double Indemnity",
			rank: "054",
			id: "tt0036775"
		},
		{
			title: "The Dark Knight Rises",
			rank: "055",
			id: "tt1345836"
		},
		{
			title: "Aliens",
			rank: "056",
			id: "tt0090605"
		},
		{
			title: "Taxi Driver",
			rank: "057",
			id: "tt0075314"
		},
		{
			title: "American Beauty",
			rank: "058",
			id: "tt0169547"
		},
		{
			title: "The Green Mile",
			rank: "059",
			id: "tt0120689"
		},
		{
			title: "Gladiator",
			rank: "060",
			id: "tt0172495"
		},
		{
			title: "The Intouchables",
			rank: "061",
			id: "tt1675434"
		},
		{
			title: "WALL-E",
			rank: "062",
			id: "tt0910970"
		},
		{
			title: "The Lives of Others",
			rank: "063",
			id: "tt0405094"
		},
		{
			title: "Toy Story 3",
			rank: "064",
			id: "tt0435761"
		},
		{
			title: "The Great Dictator",
			rank: "065",
			id: "tt0032553"
		},
		{
			title: "The Prestige",
			rank: "066",
			id: "tt0482571"
		},
		{
			title: "A Clockwork Orange",
			rank: "067",
			id: "tt0066921"
		},
		{
			title: "Lawrence of Arabia",
			rank: "068",
			id: "tt0056172"
		},
		{
			title: "Amelie",
			rank: "069",
			id: "tt0211915"
		},
		{
			title: "To Kill a Mockingbird",
			rank: "070",
			id: "tt0056592"
		},
		{
			title: "Reservoir Dogs",
			rank: "071",
			id: "tt0105236"
		},
		{
			title: "Das Boot",
			rank: "072",
			id: "tt0082096"
		},
		{
			title: "The Lion King",
			rank: "073",
			id: "tt0110357"
		},
		{
			title: "Cinema Paradiso",
			rank: "074",
			id: "tt0095765"
		},
		{
			title: "Star Wars: Episode VI - Return of the Jedi",
			rank: "075",
			id: "tt0086190"
		},
		{
			title: "The Treasure of the Sierra Madre",
			rank: "076",
			id: "tt0040897"
		},
		{
			title: "The Third Man",
			rank: "077",
			id: "tt0041959"
		},
		{
			title: "Once Upon a Time in America",
			rank: "078",
			id: "tt0087843"
		},
		{
			title: "Requiem for a Dream",
			rank: "079",
			id: "tt0180093"
		},
		{
			title: "Eternal Sunshine of the Spotless Mind",
			rank: "080",
			id: "tt0338013"
		},
		{
			title: "Full Metal Jacket",
			rank: "081",
			id: "tt0093058"
		},
		{
			title: "Oldboy",
			rank: "082",
			id: "tt0364569"
		},
		{
			title: "Braveheart",
			rank: "083",
			id: "tt0112573"
		},
		{
			title: "L.A. Confidential",
			rank: "084",
			id: "tt0119488"
		},
		{
			title: "Bicycle Thieves",
			rank: "085",
			id: "tt0040522"
		},
		{
			title: "Chinatown",
			rank: "086",
			id: "tt0071315"
		},
		{
			title: "Singin' in the Rain",
			rank: "087",
			id: "tt0045152"
		},
		{
			title: "Princess Mononoke",
			rank: "088",
			id: "tt0119698"
		},
		{
			title: "Monty Python and the Holy Grail",
			rank: "089",
			id: "tt0071853"
		},
		{
			title: "Metropolis",
			rank: "090",
			id: "tt0017136"
		},
		{
			title: "Rashomon",
			rank: "091",
			id: "tt0042876"
		},
		{
			title: "Some Like It Hot",
			rank: "092",
			id: "tt0053291"
		},
		{
			title: "Amadeus",
			rank: "093",
			id: "tt0086879"
		},
		{
			title: "2001: A Space Odyssey",
			rank: "094",
			id: "tt0062622"
		},
		{
			title: "All About Eve",
			rank: "095",
			id: "tt0042192"
		},
		{
			title: "Witness for the Prosecution",
			rank: "096",
			id: "tt0051201"
		},
		{
			title: "The Sting",
			rank: "097",
			id: "tt0070735"
		},
		{
			title: "The Apartment",
			rank: "098",
			id: "tt0053604"
		},
		{
			title: "Grave of the Fireflies",
			rank: "099",
			id: "tt0095327"
		},
		{
			title: "Indiana Jones and the Last Crusade",
			rank: "100",
			id: "tt0097576"
		}
    ];

    //3. Create An Add Function That Will Add New Movie To Our Existing MovieList
    $scope.AddMovie = function (movie) {

        var movie = angular.copy(movie);

        $scope.MovieList.push(movie);

        $scope.ShowTable = true;
        $scope.Movie = {};
    };
	
    //4. Edit Any Movie From MovieList.
    $scope.EditMovie = function (movie) {

        angular.forEach($scope.MovieList, function (item) {

            if (movie.rank == item.rank) {
                var editMovie = angular.copy(item);
                $scope.Movie = editMovie;
            }
        });
    };

    //5.Delete Selected Movie From MovieList.
    $scope.DeleteMovie = function (movie) {
        var index = $scope.MovieList.indexOf(movie);
        $scope.MovieList.splice(index, 1);
    };

    //6.Update Edited Movie.
    $scope.UpdateMovie = function (movie) {

        angular.forEach($scope.MovieList, function (item) {
            if (movie.rank == item.rank) {
                item.title = movie.title;
                item.id = movie.id;
            }
        });
        $scope.Movie = {};
    };
	
    //7.Cancel Editing Selected Movie.
    $scope.Cancel = function () {
        $scope.Movie = {};
    };
}]);