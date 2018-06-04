function getAjaxData(url, callback) {
    const request = new XMLHttpRequest();          
    request.addEventListener('load', function () { 
        if (this.status === 200) {                 
            callback(JSON.parse(request.responseText));
        } else {                                   
            console.log('Something is probably wrong with the url');
        }
    });
    request.addEventListener('error', function () { 
        callback(null, true);
    });     
    request.open("GET", url);
    request.send();
}

const url = 'https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json';
// const url2 = 'https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json'

getAjaxData(url, (data, err) => {
	if(err)
		console.log('Server error like timeout');
	else
    	console.log(data);
});
