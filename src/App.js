import React from 'react';
import './App.css';
import Row from './Componets/Rows.Componet';
import requests from './request';
import Banner from './Componets/Banner.compoent';
import Nav from './Componets/nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horro Movies' fetchUrl={requests.fetchHorroMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentariesMovies} />
      
    </div>
  );
}

export default App;
