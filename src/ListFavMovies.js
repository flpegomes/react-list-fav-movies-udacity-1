import React, { Component } from 'react';

class ListFavMovies extends Component {
	render() {
    	return (
          	
        	<ol className='list-fav-movies'>
          	<h2>Favorite Movies</h2>
        	{this.props.profiles.map((profile) => (
        		<li key={profile.id} className='list-item'>
					<p>
						O filme favorito da {this.props.users[profile.userID].name} é {this.props.movies[profile.favoriteMovieID].name} <br/>
						<small><strong>{this.props.users[profile.userID].name} favorite movie is {this.props.movies[profile.favoriteMovieID].name}</strong></small>
					</p>
          		</li>
        	))}
  			</ol>
        );
    }
}

export default ListFavMovies;