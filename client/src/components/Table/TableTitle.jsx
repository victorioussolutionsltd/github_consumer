import React from 'react'

const TableTitle = ({isLoading, title}) => {
    render() {
        return (
            <>
             <Typography variant="title">
              {
                  isLoading && 
                  <CircularProgress 
                    size={24} 
                    style={{marginLeft: 15, position: 'relative', top: 4}} 
                  />}
              </Typography>
            </>
        )
    }
}

export default TableTitle; 
