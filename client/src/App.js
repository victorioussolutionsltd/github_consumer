import React from 'react';
import SearchForm from './components/SearchForm';
import Table from './components/Table'
import Options from './components/Options';

class App extends React.Component {

  state = {
    repositoryName: '',
    repositories: [],
    page: 0,
    pageSize: 10,
    sort: false,
  }

  handleSortChange = (value) => {
    this.setState({sort: value});
  }

  onPageChanged = (page) => {
    const { pageSize, repositoryName } = this.state;
    this.setState({page : page});
    this.getGitHubData(repositoryName, page, pageSize);
  }

  onChangeRowsPerPage = (pageSize) => {
    const { repositoryName, page } = this.state;
    this.setState( {pageSize: pageSize});
    this.getGitHubData(repositoryName, page, pageSize);
  }

  getGitHubData = (name, page = 0, pageSize = 3, sort = false) => {
    const API = `api/hello?page=${page}&name=${name}&pageSize=${pageSize}&sort=${sort}`;
    fetch(API)
   .then(results => {
       return results.json();
     })
     .then(response => {
        this.setState({ repositories: response.data})
     })
     .catch(Error => {
     console.log(Error)
   })
  };

  repositoryChange = (name) => {
    const { pageSize, sort } = this.state;
    this.setState({repositoryName: name});
    this.getGitHubData(name, 0, pageSize, sort);
  }

  render() {
    const { page, repositories, sort } = this.state;

    return (
      <div className="App">
        <SearchForm onSubmit={this.repositoryChange} />
        <Options sort={sort} onSortedChanged={this.handleSortChange} />
        <Table data={repositories} 
        count={100} 
        page={page} 
        onPageChanged={this.onPageChanged}
        onChangeRowsPerPage={this.onChangeRowsPerPage}
        />
      </div>
    );
  }
}

export default App;
