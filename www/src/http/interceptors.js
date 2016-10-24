import StorageTool from '../tools/local_storage';

module.exports = function(request, next) {

    console.log(request);

    console.log(StorageTool.fetch());

    next((response) => {

        console.log(StorageTool.save());

        console.log(response, response.headers, response.headers.map, response.headers.map.Token);

    })
}