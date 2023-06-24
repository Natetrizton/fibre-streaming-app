import React from "react";


import "./Track.css";

class SearchBar extends React.Component{
   constructor(props){

    super(props);
      this.state={
        term:""
      };
      
      this.addTrack=this.addTrack.bind(this);
      this.removeTrack=this.removeTrack.bind(this);
      
}

addTrack(event){
    this.props.onAdd(this.props.track);
}

removeTrack(){
    this.props.onRemove(this.state.track);
}

renderAction(){
    if(this.props.isRemoval){

        return{
            <button className="Track-action" onClick=(this.removeTrack)>  -  </button>
        };

        
    }
    return{
        <button className="Track-action" onClick=(this.addTrack)>  +  </button>

    };
}


render(){
    return(

        <div className="Track">

        <div
        </div>
    );
}

}


export default SearchBar;