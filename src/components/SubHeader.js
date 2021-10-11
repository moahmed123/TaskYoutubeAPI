import React from "react";
import { connect } from "../store";
import NounFilter from '../noun_filter.svg';

export const SubHeader = (props) => {    
    const data = props.subHeader;
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
                    <button onClick={()=> console.log('Filter Data ')}> 
                        <img src={NounFilter}/>
                        <h6>Fillter</h6>
                    </button>
                </div>                                       
            </div>            
        )
    }else{
        return('');
    }
}
const mapStateToProps = (state) => ({
    subHeader: state.subHeader
});
export default connect(
    mapStateToProps
)(SubHeader);