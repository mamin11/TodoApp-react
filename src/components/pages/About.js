import React from 'react'
import ToggleItems from '../ToggleItems';

class About extends React.Component {

    state = {
        items: [
            {
                id: 1,
                name: 'check1',
                title: 'GOOD',
                status: false
            },
            {
                id: 2,
                name: 'check2',
                title: 'CHEAP',
                status: false
            },
            {
                id: 3,
                name: 'check3',
                title: 'FAST',
                status: false
            }
        ]
    };

    markComplete = (id) => {
        // console.log(id)
        this.setState({ items: this.state.items.map( item => {
            if(item.id === id) {
                this.checkOthers(item)
            item.status = !item.status
            //console.log(id);
            }
            return item
        })})
        }

        checkOthers = (item) => {

            if((this.state.items[0].status === true) && (this.state.items[1].status === true) && (this.state.items[2].status === false) ) {
                this.setState({items: this.state.items.map( item => {
                    if(item.id === 1) {item.status = true}
                    if(item.id === 2) {item.status = false}
                    if(item.id === 3) {item.status = false}
                })})
            }
            if((this.state.items[0].status === true) && (this.state.items[2].status === true) && (this.state.items[1].status === false) ) {
                this.setState({items: this.state.items.map( item => {
                    if(item.id === 1) {item.status = false}
                    if(item.id === 2) {item.status = false}
                    if(item.id === 3) {item.status = true}
                })})
            }
            if((this.state.items[0].status === false) && (this.state.items[1].status === true) && (this.state.items[2].status === true) ) {
                this.setState({items: this.state.items.map( item => {
                    if(item.id === 1) {item.status = false}
                    if(item.id === 2) {item.status = true}
                    if(item.id === 3) {item.status = false}
                })})
            }
        }

    render() {
    return (
        <React.Fragment>
            <div className="toggle-group" >
                <ToggleItems items={this.state.items} markComplete={this.markComplete}></ToggleItems>
            </div>
        </React.Fragment>
    )
    }
}

export default About;
