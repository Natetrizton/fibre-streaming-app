import React from "react";

import "./PlayList.css";

import Track from "../Track/Track";

class PlayList extends React.Component{
    constructor(props) {

        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);

    }

    handleNameChange(event){


        this.props.onNameChange(event.target.value);
    }
    
    
    
    

    
    
    
    
    
    
    render(){
        return (
           <div className="TrackList">
           {this.props.track.map(track => {
            
            return (
                <Track
                track ={track}
                key ={track.id}
                onAdd = {this.props.onAdd}
                isRemoveal = {this.props.isRemoval}
                onRemove = {this.props.onRemove}
                
         />
           );
            
            
         } ) }
          </div>
        );
    }


}

export default TrackList;
