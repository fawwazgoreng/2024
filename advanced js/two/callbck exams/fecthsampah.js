
 // fecth
// const searchButton = document.querySelector('.Search-button');
// searchButton.addEventListener('click', function () {

//     const Keyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=1a98f452&s=' + Keyword.value)
//     .then(response => response.json())
//     .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += hhowCard(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             //ketika tombol detail di klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click',function () {
//                     const imdbID = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=1a98f452&i=' + imdbID)
//                     .then(response => response.json())
//                     .then(m => {
//                         const movieDetail = hhowMovies(m);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = movieDetail;
//                 });
//             });
//         });
//     });
// })