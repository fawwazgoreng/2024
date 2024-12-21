
const searchButton = document.querySelector('.Search-button');
searchButton.addEventListener('click', async function () {
    try {
    const Keyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=1a98f452&s=' + Keyword.value)
    const movies = await getMovies(Keyword.value);
    updateUI(movies);
    } catch (error) {
        alert(error);
    };
});


function getMovies(Keyword) {
    return fetch('http://www.omdbapi.com/?apikey=1a98f452&s=' + Keyword)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if (response.Response === 'False') {
                throw new Error(response.Error);
            }
            return response.Search;
        });
        // .then mengembalikan promise butuh keyword async dan await
    }
    
    function updateUI(movies) {
        let cards = '';
        movies.forEach(m => cards += hhowCard(m));
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;
    }

    


    
    //event binding
    document.addEventListener('click', async function(e) {
        try {
            if ( e.target.classList.contains('modal-detail-btn')) {
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbID);
            updateUIDetail(movieDetail);
        }} catch(err) {
            alert(err);
        }
    });
    
    function getMovieDetail(imdbid) {
        return fetch('http://www.omdbapi.com/?apikey=1a98f452&i=' + imdbid)
            .then(response => {
                if (response.Response === 'False') {
                    throw new Error(response.Error);
                }
                return response.json();
            })
            .then(m => m);
    }; 
    
    function updateUIDetail(m) {
        if (m.Response === 'true') {
            const movieDetail = showMovies(m);
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = movieDetail;
        } else {
            alert(m.Error);
        }
    };
    
    function hhowCard(m) {
        return ` <div class="col-md-4 my-5">
        <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
                         <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                             <a href="#" class="btn btn-primary modal-details-button" data-bs-toggle="modal"
                             data-bs-target="#MoviesDetails" data-imdbid="${m.imdbID}">show detail</a>
                     </div>
                 </div>
             </div>`;
 };
 
 function showMovies(m) {
     return `<div class="container-fluid">
                 <div class="row">
                     <div class="col-md-3">
                         <img src="${m.Poster}" class="img-fluid" alt="">
                     </div>
                     <div class="col-md">
                         <ul class="list-group">
                             <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                             <li class="list-group-item"><strong>Directur :</strong> ${m.Director} </li>
                             <li class="list-group-item"><strong> actors : </strong>${m.Actors}</li>
                             <li class="list-group-item"><strong> Writer</strong> ${m.Writer}</li>
                             <li class="list-group-item"><strong> plot :</strong><br> ${m.Plot}</li>
                         </ul>
                     </div>
                 </div>
             </div>`;
 };