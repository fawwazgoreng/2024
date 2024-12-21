$(`.Search-button`).on(`click`, function() {

    $.ajax({
        url: "http://www.omdbapi.com/?apikey=1a98f452&s=" + $(`.input-keyword`).val(),
        success: results => {
            const movies = results.Search;
            let card = "";
            movies.forEach(m => {
                card += hhowCard(m);
            });
            $('.movie-container').html(card);
    
            //ketika detail diklik
    
            $('.modal-details-button').on(`click`, function () {
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=1a98f452&i=` + $(this).data('imdbid'),
    
                    success: m => {
                        const MoVies = hhowMovies(m);
                    $(`.modal-body`).html(MoVies);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });


})








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

function hhowMovies(m) {
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