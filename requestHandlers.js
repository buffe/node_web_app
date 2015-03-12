function start(){
	console.log("Request handler 'start' was called.");
}

function upload(){
	console.log("Request hander 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
