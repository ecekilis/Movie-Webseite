const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", function () {
        movieLists[i].style.transform = `translateX(${movieLists[i].
        computedStyleMap().get("transform")[0].x.value - 300}px)`
    });

});



const ball = document.querySelector(".toogle-ball");
const items=  document.querySelectorAll(".container, .navbar, .sidebar, .toggle, .toggle-ball, .movie-list-filter select");

ball.addEventListener("click", function(){
    console.log("click");

});