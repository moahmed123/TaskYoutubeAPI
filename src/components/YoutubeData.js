import React from "react";
import { connect } from "../store";


export const YoutubeData = (props) => {
    console.log("YoutubeData", props.SearchData)
    const data = props.SearchData;
    return (
        <div className='sub--container'>
            <div>

            </div>
            <div className='data--collection'>
                {
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
                        <h2 className='enter-name'>Please Search for Video or channel</h2>

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    SearchData: state.data
});
export default connect(
    mapStateToProps
)(YoutubeData);