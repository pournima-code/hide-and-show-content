import React, { useState } from 'react';


const MyTabComponent = ({children}) => {
    const [ activityIndex, setActivityIndex] = useState(0); 
    const tabs = React.Children.map(children,(child,index)=>{
        return(
            <button
                key = {`text+${index}`}
                isActive = { activityIndex === index }
                disabled = { activityIndex === index }
                className = { activityIndex === index ? "btn-active" : "btn" }
                onClick = { () => {setActivityIndex(index)} }
            >
                {child.props.title}
            </button>
        )
    })
    const view = React.Children.map(children,(child,index)=>{
        return (
            <div className='view'>{child.props.children}</div>
        )
    })
    return (
        <div className="tabs">
            {tabs}
            {view[activityIndex]}
        </div>
    );
}
 
export default MyTabComponent;