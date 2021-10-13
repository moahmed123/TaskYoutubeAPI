import React, { useState, useContext } from "react";
import { Store, connect } from "../store";
import NounFilter from '../noun_filter.svg';
import axios from "axios";
import Pth from '../action/paths'
// import { useState } from "react";

export const SubHeader = (props) => { 
    const { dispatch } = useContext(Store);   
    const data = props.subHeader;
    const [filter, SetFilter] = useState(false);    

    console.log("data", data)
    if(data){
        return (                  
            <div className='data--collection sub_header'>
                <div className='result--count'>
                    <p>
                        {`About ${data.totalResults} filtered results`}                        
                    </p>
                </div> 
                <div className='filter--count'>
                    <button onClick={()=> SetFilter(true)}> 
                        <img src={NounFilter}/>
                        <h6>Fillter</h6>
                    </button>
                </div> 
                {
                   filter?
                        <div className='popup--filter'>
                            <span className='closs-popups' onClick={()=> SetFilter(false)} >X</span>
                            <h4>Filter By :</h4>
                            <ul>
                                <li onClick={async()=>{                                     
                                     try {
                                        const response = await axios.get(Pth.api + props.SearchValue + "&order=rating");                                                                                
                                        dispatch({ type: "SEARCH_DATA_YOUTUBE", payload: response });
                                        dispatch({ type: "Sub_header_YOUTUBE", payload: response });
                                        //close popups.
                                        SetFilter(false)
                                    } catch (error) {
                                        console.error(error);
                                    }
                                    }}> Rating </li>
                            </ul>    
                        </div>                                      
                    : 
                        null
                }
                
            </div>            
        )
    }else{
        return('');
    }
}
const mapStateToProps = (state) => ({
    subHeader: state.subHeader,
    SearchValue: state.SeachValue
});
export default connect(
    mapStateToProps
)(SubHeader);