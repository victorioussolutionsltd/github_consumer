import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Modal} from '@material-ui/core';
import {style, getModalStyle} from './style'

const RepositoryDetails = ({
  visible, 
  githubRepositoryInformation,
   onModalClosed}) => {
  const classes = makeStyles(style)();
  const [modalStyle] = React.useState(getModalStyle);
  const [information] = React.useState(githubRepositoryInformation);

  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={visible}
        onClose={onModalClosed}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{information.name}</h2>
          <Avatar alt="avatar" src={information.avatar_url} />
          <p id="simple-modal-description">
            {
              information.private? 'Private' : 'Public'
            }
          </p>
        </div>
      </Modal>
    </>
  );
}

export default RepositoryDetails;