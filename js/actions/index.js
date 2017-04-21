require('isomorphic-fetch');
//make the right repository
var ADD_REPOSITORY = 'ADD_REPOSITORY';
var addRepository = function(repository) {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    }
};
//declare varaible and return for rate repository
var RATE_REPOSITORY = 'RATE_REPOSITORY';
var rateRepository = function(repository, rating) {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating
    };
};
//declare fetch description and return the appropriate status
var fetchDescription = function(repository) {
    return function(dispatch) {
        var url = 'https://api.github.com/repos/' + repository;
        return fetch(url).then(function(response) {
           // fetch.fetchUrl(url [, options], callback)
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchDescriptionSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDescriptionError(repository, error)
            );
        });
    }
};

//add code for the fetch description 
var FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
var fetchDescriptionSuccess = function(repository, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        repository: repository,
        description: description
    };
};
//declare fetch error and return the statement
var FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
var fetchDescriptionError = function(repository, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        repository: repository,
        error: error
    };
};
//export the right repositories
exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;

exports.fetchDescription = fetchDescription;

exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
exports.fetchDescriptionSuccess = fetchDescriptionSuccess;
exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
exports.fetchDescriptionError = fetchDescriptionError;