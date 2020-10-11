import React from 'react';
import PropTypes from 'prop-types';
import ToggleItem from './ToggleItem';


class ToggleItems extends React.Component {
    render() {

        return this.props.items.map((item) => (
            <ToggleItem  key={item.id} item={item} markComplete={this.props.markComplete}></ToggleItem>
        ));
    }
}

//Proptypes
// ToggleItem.propTypes = {
//     items: PropTypes.array.isRequired
// }

export default ToggleItems;