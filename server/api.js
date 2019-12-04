const fetch = require('node-fetch')
import { mockResponse } from '../mockResponse'

const paginateCollection = (array, page_size, page_number) => (array.slice(page_number * page_size, (page_number + 1) * page_size))

const getDataFromAPIMock = (name) => {
  return new Promise((resolve, reject) => {
    resolve(mockResponse);
  } )
}

const getDataFromAPI = (name) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${name}/repos`)
    .then((results) => resolve(results.json())).catch((Error) => {
      console.log(Error);
      reject(Error);
    });
  });
}

const parseRequest = (req) => {
  const page = req.query.page === 'undefined'? 0 : parseInt(req.query.page, 10);
  const pageSize = req.query.pageSize === 'undefined'? 3 :  parseInt(req.query.pageSize, 10);
  const sort = req.query.sort === 'undefined'? false : req.query.sort === 'true';
  const githubAccountName = req.query.name;

  return {
    githubAccountName,
    page,
    pageSize,
    sort,
  }
} 

export const fetchRepositoriesInformation = (req, res) => {
    const reqParams = parseRequest(req);

    getDataFromAPI(reqParams.githubAccountName)
    .then((detailedData) => {
  
      const filteredResult = detailedData.map( item => ([JSON.stringify(item)]));

      const paginatedResult = paginateCollection(filteredResult, reqParams.pageSize, reqParams.page);

      if (reqParams.sort ){
        paginatedResult.sort();
      }
        
      const response = {
        data: paginatedResult,
        count: detailedData.length,
      }

      res.send(JSON.stringify(response));
    })
  }