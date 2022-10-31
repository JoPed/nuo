//React imports 
import { useState, useEffect } from "react";

const UseFetch = (url)=>{

    //getting and setting the data - default is null = no data
    const [data, setData] = useState(null);

    useEffect(() =>{

        fetch(url, {

            //Make sure the website accepts the fetch request for the file/api
            headers: {
                'Accept': "application/json",
                'Content-Type': "text/plain"
            }
        })
        .then(res => res.json()) //When the data has been fetched. then make sure it is in json format
        .then(data =>setData(data)); //then use the setData function (useState) to set the data

    }, [url]);

    //returning the data (useState)
    return [data];
}
export default UseFetch;