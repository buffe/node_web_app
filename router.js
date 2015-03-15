
function route(handle, pathname, response, postData){
	console.log("Routing request for pathname : " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response, postData);		
	}else{
		console.log("No request handler found for : " + pathname);
	}
}

exports.route = route;
