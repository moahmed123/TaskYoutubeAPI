import React, { useContext, useRef } from "react";
import { Store, connect } from "../store";
import axios from "axios";
import LoadingBar from 'react-top-loading-bar';

function Search() {
    const { dispatch } = useContext(Store);
    const exampleInput = useRef();
    const ref = useRef(null)
    // Please Add Your Key
    const URl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=//YourKey&type=video&maxResults=15&q=" 

    async function YoutubeSearch(e) {
        e.preventDefault();
        const inputValue = exampleInput.current.value;
        console.log(inputValue);

        if (inputValue) {
            //Start Continuous Loading Bar
            ref.current.continuousStart();
            //staticStart
            ref.current.staticStart();
            try {
                const response = await axios.get(URl + inputValue);
                // const data = JSON.parse(response);
                // const Items = data.items
                dispatch({ type: "SEARCH_DATA_YOUTUBE", payload: response });
                //Complete
                ref.current.complete()
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <>
            <LoadingBar color='#f11946' ref={ref} />
            <form onSubmit={YoutubeSearch} className='form--search'>
                <input type="text" ref={exampleInput} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default connect()(Search);
