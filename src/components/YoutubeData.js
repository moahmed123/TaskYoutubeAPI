import React, { useState, useEffect } from "react";
import { connect } from "../store";
import SubHeader from './SubHeader';
import LoadingImage from './../Loader.gif'


export const YoutubeData = (props) => {
    console.log("YoutubeData", props.SearchData)
    const data = props.SearchData;
    console.log(data, data.length);
    const [Loading, setLoading] = useState(0);
    useEffect(() => {
        console.log(Loading,"Loading", "props.LoadingData", props.LoadingData);
         if(props.LoadingData){
            setLoading(true)
            console.log(Loading,"Loading");
         }       
    })
    return (
        <div className='sub--container'>
            <SubHeader/>
            <div className='data--collection'>
                {
                    Loading?   
                        data.length > 0 ?                                             
                                data.map((doc, key) => {
                                    console.log("Image:  ", doc.snippet.thumbnails.url)
                                    return (
                                        <div className='colection--box' key={key}>
                                            <div className='box--image'>
                                                <img
                                                    className='Image'
                                                    src={doc.snippet.thumbnails.medium.url}
                                                    width={doc.snippet.thumbnails.medium.width}
                                                    height={doc.snippet.thumbnails.medium.height} />
                                            </div>
                                            

                                            <div className='box--data'>
                                                <h4>{doc.snippet.title}</h4>
                                                <p>{doc.snippet.description}</p>
                                            </div>

                                        </div>
                                    )
                                })                        
                            :
                            
                            <div className='center-image'>
                                <img src={LoadingImage}/>
                            </div>                            
                    :
                        <h2 className='enter-name'>Please Search for Video or channel</h2>

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    SearchData: state.data,
    LoadingData: state.Loading
});
export default connect(
    mapStateToProps
)(YoutubeData);