import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

class Options extends React.Component {
    render() {
        const { sort, onSortedChanged } = this.props;

        return (
          <>
            <FormControlLabel
              control={<Checkbox checked={sort} onChange={(event) => onSortedChanged(event.target.checked)}  label='Sorted results'/>}
              label="Sorted"
            />
           </>
        )
    }
}

Options.propTypes = {
    sort: PropTypes.bool.isRequired,
    onSortedChanged: PropTypes.func.isRequired,
  };

export default Options;