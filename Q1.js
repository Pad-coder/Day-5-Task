//A:- Write a constructor for the class Movie, which takes a String representing the title of the movie, 
      //a String representing the studio, and a String representing the rating as its arguments, 
      //and sets the respective class properties to these values.
class movie {
    constructor(movie, studio, rating){
    this.movie=movie;
    this.studio=studio;
    this.rating=rating;
    }
    getrating(){
    return "The ratig is " + this.rating
    }
    }
    
//B:- The constructor for the class Movie will set the class property rating to "PG" as 
      //default when no rating is provided.

    class movie {
    constructor(title, studio, rating){
    this.title = title;
    this.studio=studio;
    this.rating="PG";
    }
    }

//C:- Write a method getPG, which takes an array of base type Movie as its argument, 
      //and returns a new array of only those movies in the input array with a rating of “PG”. 
      //You may assume the input array is full of Movie instances. The returned array need not be full.

    const movieArray =[
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    ];
    const pgMovies = Movie.getPG(moviesArray);
    console.log("PG Rated Movies:");
    pgMovies.forEach(movies=> {
    console.log("Title:", movie.title, "Studio:", movies.studio, "Rating:", movie.rating);
    });
    
//D:- Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
        //the studio “Eon Productions”, and the rating “PG­13”
        
    const CasinoRoyale= new movie("Casino Royale", "Eon Productions", "PG13");
    console.log("Title:", casinoRoyale.title);
    console.log("Studio:", casinoRoyale.studio);
    console.log("Rating:", casinoRoyale.Rating);
    