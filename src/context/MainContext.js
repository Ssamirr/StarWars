import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';


export const mainContext = createContext(null);

export const Provider = ({ children }) => {
    const [people, setPeople] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [itemOffset, setItemOffset] = useState(1);
    const deleteFavorite = (item) => {
        setFavorites([...favorites.filter(q => q.created !== item.created)]);
        toast("Item is Removed")
    }

    const values = {
        people,
        setPeople,
        favorites,
        setFavorites,
        deleteFavorite,
        isloading,
        setIsloading,
        itemOffset,
        setItemOffset
    }

    return (
        <mainContext.Provider value={values}>{children}</mainContext.Provider>
    )
}