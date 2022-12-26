import React, { useContext } from 'react'
import { mainContext } from '../context/MainContext';


function FavoritesTable() {
    let { favorites, deleteFavorite, setFavorites } = useContext(mainContext);

    return (
        <>
            {favorites.length > 0 ?
                <table className="w3-table-all w3-centered">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Gender</td>
                            <td>Height</td>
                            <td>Mass</td>
                            <td>
                                <button className="del-button" onClick={() => setFavorites([])}>Delete All</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favorites.map((item, key) => {
                                return <tr key={key}>
                                    <td>{item?.name}</td>
                                    <td>{item?.gender}</td>
                                    <td>{item?.height}</td>
                                    <td style={{ background: item.mass === "unknown" && "red" }}>{item?.mass === "unknown" ? "" : item.mass}</td>
                                    <td>

                                        <button style={{ background: "red" }} className="del-button" onClick={() => deleteFavorite(item, `${key}-good`)}>Delete From Favorites</button>

                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> : <h1 className='not-found'>Favorite list is empty</h1>}


        </>
    )
}

export default FavoritesTable