
function route(handle, pathname, response){
	console.log("Routing request for pathname : " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);		
	}else{
		console.log("No request handler found for : " + pathname);
	}
}

exports.route = route;
