import React from 'react';
import FilmsList from '../components/Films/ListContainer';

const Home = () => {
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <main>
      This is the Homepage
      <FilmsList
        numberOfFilms={4}
        filmsOrderBy={`${randomNumber % 2 === 0 ? 'episodeId_ASC' : 'episodeId_DESC'}`}
        gridOptions={{
          xs: 12, sm: 6, md: 3, lg: 3,
        }}
      />
    </main>
  );
};

export default Home;
