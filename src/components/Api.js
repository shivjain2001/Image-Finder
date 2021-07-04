
import axios from 'axios';
import { useState, useEffect } from 'react';
const count = 1;    //declared to fetch the data only once.

function LoadImages() {
    const [state, setState] = useState([])
    /*If we dont use useEffect than the api will be called a thousand times again and again.
    for this we have componentdidmount in classbased component and useEffect in function based component*/
  /*used count variable so that API is hited for only one time. useEffect function helps here as this is a function
    based component. When we use class based component we use Componentdidmount(whenever a function is mounted, only once it is called) but here its a function based component
    so useEffect is used.*/
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/photos/?client_id=S_PyoFvLnTZJg1UfAQjK3NtWZt_LLjFSWZOEuZnI4zw")
            .then((data) => {
                setState(data.data);
            })
    }, [count])
    return state;
}

function SearchImages(query) {
    const [state, setState] = useState([])
    /*If we dont use useEffect than the api will be called a thousand times again and again.
    for this we have componentdidmount in classbased component and useEffect in function based component*/
  /*used count variable so that API is hited for only one time. useEffect function helps here as this is a function
    based component. When we use class based component we use Componentdidmount(whenever a function is mounted, only once it is called) but here its a function based component
    so useEffect is used.*/
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=S_PyoFvLnTZJg1UfAQjK3NtWZt_LLjFSWZOEuZnI4zw")
            .then((data) => {
                setState(data.data.results)
            })
    }, [query])
    return state;
}
export { LoadImages , SearchImages }