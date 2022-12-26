import React, { useContext, useEffect } from 'react'
import { mainContext } from '../context/MainContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Paginate from './Paginate';

function Table() {
    // const notify = () => toast("Wow so easy!");

    let { people, setPeople, favorites, setFavorites, deleteFavorite, isloading, setIsloading, itemOffset } = useContext(mainContext);
    useEffect(() => {
        setIsloading(true);
        fetch(`https://swapi.dev/api/people/?page=${itemOffset}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data.results)
                setIsloading(false);
            })
            .catch(err => {
                console.log(err)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemOffset])

    const favoriteDrivers = (item) => {
        toast("Item is added")
        setFavorites([...favorites, item]);
    }


    return (
        <>
            {isloading
                ?
                <div className='loader'> <span className="loader--inside"></span> </div>
                :
                <>
                    <table className="w3-table-all w3-centered">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Gender</td>
                                <td>Height</td>
                                <td>Mass</td>
                                <td>Favorite</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                people.map((item, key) => {
                                    return <tr key={key}>
                                        <td>{item?.name}</td>
                                        <td>{item?.gender}</td>
                                        <td>{item?.height}</td>
                                        <td style={{ background: item.mass === "unknown" && "red" }}>{item?.mass === "unknown" ? "" : item.mass}</td>
                                        <td>

                                            {favorites.find(q => q?.created === item?.created) ? (<button style={{ background: "red" }} className="del-button" onClick={() => deleteFavorite(item)}>Delete From Favorites</button>)
                                                : (<button onClick={() => favoriteDrivers(item)}>Add To Favorites</button>)}
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <Paginate />
                </>
            }

        </>
    )
}

export default Table