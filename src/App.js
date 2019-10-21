import React from 'react';
import PropTypes from 'prop-types'; //  prop-types 설치 : npm i prop-types => 내가 전달 받은 props가 내가 원하는 props인지를 확인  #2.4 Protection with PropTypes
import axios from 'axios';
import Movie from  "./Movie";
import "./App.css";

class App extends React.Component{ //클래스 컴포넌트
    state = {
      isLoading : true,
      movies : []
    };

    getMovies = async () => {
      const {data: { data : { movies } }} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      
      // this.setState({ movies : movies }); //movies : movies 와 movies 가 동일하게 동작한다. 
      this.setState({ movies, isLoading : false }); //movies : movies 와 movies 가 동일하게 동작한다. 
    }

    componentDidMount(){
      // setTimeout(()=>{
      //   this.setState({isLoading : false})
      // },6000);

      this.getMovies();
    }
    render() {
      const { isLoading, movies } = this.state;
      return (<section className="contatiner">{ isLoading ? (<div className="loader">
                                                          <span className="loader__text">Loading...</span>
                                                         </div>) 
                                                      : (
                                                        <div className="movies">
                                                           { 
                                                             movies.map(movie => 
                                                              { console.log(movie); return <Movie key={movie.id}
                                                                          id={movie.id} 
                                                                          year={movie.year} 
                                                                          title={movie.title} 
                                                                          summary={movie.summary} 
                                                                          poster={movie.medium_cover_image}
                                                                          genres={movie.genres} /> })
                                                           }
                                                        </div>
                                                      )
                                            }</section> )
      
    }
}

export default App;
