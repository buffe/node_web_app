
function route(handle, pathname, response, request){
	console.log("Routing request for pathname : " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response, request);		
	}else{
		console.log("No request handler found for : " + pathname);
	}
}

exports.route = route;
