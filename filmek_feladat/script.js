const APIURL = 'https://nodejs111.dszcbaross.edu.hu/api/movie';

const gridAreas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

async function loadMovies() {
    try {
        const response = await fetch(APIURL);
        if (!response.ok) {
            throw new Error('Hálózati hiba');
        }

        const movies = await response.json();

        const gallery = document.getElementById('gallery');
        const movieList = document.getElementById('movie-list');

        // Tartalom törlése
        gallery.innerHTML = '';
        movieList.innerHTML = '';

        movies.forEach((movie, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = movie.title;
            a.href = "#";
            li.appendChild(a);
            movieList.appendChild(li);

            const div = document.createElement('div');
            div.className = 'movie-item';

            if (gridAreas[index]) {
                div.style.gridArea = gridAreas[index];
            }

            const img = document.createElement('img');
            img.src = movie.image;
            img.alt = movie.title;

            div.appendChild(img);

            const title = document.createElement('h3');
            title.textContent = movie.title;
            title.className = 'movie-title';

            const tagContainer = document.createElement('div');
            tagContainer.className = 'tags-container';

            const genreTag = document.createElement('span');
            genreTag.textContent = movie.genre;
            genreTag.className = 'tag';

            const ratingTag = document.createElement('span');
            ratingTag.textContent = `${movie.age_rating}+`;
            ratingTag.className = 'tag';

            tagContainer.appendChild(genreTag);
            tagContainer.appendChild(ratingTag);

            div.appendChild(title);
            div.appendChild(tagContainer);


            gallery.appendChild(div);
        });

    } catch (error) {
        console.error('Hiba az adatok betöltésekor:', error);
        document.getElementById('gallery').innerHTML = '<p>Nem sikerült betölteni a filmeket.</p>';
    }
}


document.addEventListener('DOMContentLoaded', loadMovies);