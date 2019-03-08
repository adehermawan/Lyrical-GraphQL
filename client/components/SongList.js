import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {

    renderSong(){
        return this.props.data.songs.map((song,index) => {
            return(
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }

    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <ul className="collection">
            { this.renderSong() }
            </ul>
            <Link
            to="songs/new"
            className="btn-floating btn-large red right"
            >
            <i className="material-icons">add</i>
            </Link>
            </div>
        );
    }
}

const query = gql`
{
    songs {
        id
        title
    }
}
`;

export default graphql(query)(SongList);