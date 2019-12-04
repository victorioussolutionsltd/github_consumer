import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './style';

class SearchForm extends React.Component {

  state = {
    userName : '',
  }

  updateUserName = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    const { classes, onSubmit } = this.props;
    const { userName } = this.state;
    
    return (
      <>
        <TextField
          id="city"
          label="Organization/User Name"
          type="search"
          className={classes.textField}
          onChange={this.updateUserName}
          margin="normal"
        />
        <p />
        <Button onClick={() => {onSubmit(userName)}}>Search</Button>
      </>
    );
  }
}
SearchForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(style)(SearchForm);
