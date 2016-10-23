module.exports = function(request, next) {

    console.log(request);

    next((response) => {

        console.log(response);

    })
}