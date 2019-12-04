import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import TableColumnRenderer from '../TableColumnRenderer';
import MUIDataTable from 'mui-datatables';

class Table extends React.Component {

  getColumns = () => [
    {
    label: 'Repository',
    options: {
      customBodyRender: information => (
        <TableColumnRenderer jsonInformation={information}/>
      ),
    }
  }
  ];

  getOptions = (changePage, page, count, onChangeRowsPerPage) => ({
    download: false,
    print: false,
    filter: false,
    search: false,
    sort: false,
    serverSide: true,
    viewColumns: false,
    responsive: "scrollMaxHeight",
    selectableRows: "none",
    count: count,
    page: page,
    rowsPerPageOptions: [3, 10, 100],

    onChangeRowsPerPage,
    
    onTableChange: (action, tableState) => {
        switch (action) {
          case 'changePage':
            changePage(tableState.page);
            break;
        }
      }
  });

  render() {
    const { data, count, page, onPageChanged, onChangeRowsPerPage } = this.props;

    return (
      <>
        <Card>
          <CardContent>
            <MUIDataTable
              columns={this.getColumns()}
              data={data}
              options={this.getOptions(onPageChanged, page, count, onChangeRowsPerPage)}
              title={'Repositories'}
            /> 
          </CardContent>
        </Card>
      </>
    );
  }
}
Table.propTypes = {
  count: PropTypes.number,
  data: PropTypes.instanceOf(Object).isRequired,
  onPageChanged: PropTypes.func.isRequired,
  page: PropTypes.number,
  onChangeRowsPerPage: PropTypes.func.isRequired
};

export default Table;
