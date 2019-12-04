This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

What is missing:

- Some automated tests
- Error handling (GitHub has got a limit of queries for unauthenticated user)
- filtering via API (Node.js should handle it to my understanding rather than by ReactJS).

There are bugs.

Sorting can be resolved on the Frontend level as well as backend one. The MUI Datatable has got a sorting flag for the column as well as customSort handler (like onTableChange).

I have not added any tests. Pagination can be improved.
API shall be changed to something meaningful (/api/hello is not for deployment).

It took 32 years ( :-) ).


Go to root directory and run

### `yarn install`

Then, go to client sub-folder and type:

### `yarn install`

To run the application, type in the root folder:

### `yarn dev`