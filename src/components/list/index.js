import React from 'react';

class Navlist extends React.Component{

  render(){
    return (
      <div>
        <ul>
          {this.props.data.map(v=>(
            <li 
                key={v.name}
                onClick={elm=>{
                    this.props.selectAvatar(v)
                }}
            >{v.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Navlist;