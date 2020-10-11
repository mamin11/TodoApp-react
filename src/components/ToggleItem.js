import React, { Component } from 'react'

class ToggleItem extends Component {

    
    getStyle = (status) => {

        return status ? 'switch-hidden checked' : 'unchecked'

                    // if(status === true)
                    // {
                    //     return 'switch-hidden checked';
                    // }
                    // else {
                    //     return 'unchecked';
                    // }

        }

    
    render() {
        
        const {id, name, title, status} = this.props.item;

        return (
            <div>
                <div id="about">
                    <h1>{title}</h1>
                    <input 
                    name={name} 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this, id)} 
                    id={name} 
                    className={this.getStyle(status)}
                    /><label for={name}></label>
                    <p className="paragraph">{status ? 'Okay' : 'Sorry'}</p>
                </div>
                
            </div>
        )
    }
}

export default ToggleItem;