var movies=[];
function finishing(){
    var movie1=document.getElementById("movie_1").value;
    var movie2=document.getElementById("movie_2").value;
    var movie3=document.getElementById("movie_3").value;
    var movie4=document.getElementById("movie_4").value;
    movies.push(movie1);
    movies.push(movie2);
    movies.push(movie3);
    movies.push(movie4);
    document.getElememtById("displaying").innerHTML=movies;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sorting(){
    movies.sort();
    document.getElementById("displaying").innerHTML=movies;


}