var exec = require("child_process").exec;

function start(){
	console.log("Request handler 'start' was called.");

	function sleep(milis){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milis);
	}

sleep(10000);
}

function upload(){
	console.log("Request hander 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
