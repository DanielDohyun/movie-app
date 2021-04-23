import React from 'react';
import './FavoritePage.scss';

function FavoritePage() {
    return (
        <div className='fav'>
            <h3>Favorite Movies By Me</h3>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage;
