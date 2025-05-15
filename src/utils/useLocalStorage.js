import { useEffect, useState } from "react"

const useLocalStorage = () => {

    const[item, setItem] = useState(null);

    useEffect(() => {
        window.localStorage.setItem("FirstName", "Ankit");
        window.localStorage.setItem("LastName", "Raj");
        setItem(window.localStorage);

        return( () => {
            localStorage.clear();
        });
    }, [])

    return item;
}

export default useLocalStorage;