/* Build 1012 **/

try {
 console.log("QS one-liner.js");
} catch(errConsoleLog) { ; }

var JQUERY_URL = "https://vendor1.quickspark.com/jquery.1.8.3.min.js";

var lsExcluded = [];
var jq = 1;
var g_tag = 1;
var nojquery ="vc=d2zh93q";


if (navigator.userAgent.indexOf('MSIE') > -1 || navigator.appVersion.indexOf('Trident/') > -1) {
  lsExcluded[lsExcluded.length] = "vc=c2hmbx5&wsc=silk";
}

var myScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
})();

var g_tag_run = myScript.src;

if (g_tag_run.indexOf("vc=n8zsb63") > 0){
	g_tag = 2;
}
if (g_tag_run.indexOf("vc=rr2np8r") > 0){
	g_tag = 2;
}
if (g_tag_run.indexOf("vc=x8x2cmq") > 0){
	g_tag = 2;
}
function lsLog(msg) {
        try {
        console.log("QS: " + msg);
    }
    catch (e) {}
}

function loadLSScript(url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
                script.onreadystatechange = function () {
                        if (script.readyState == "loaded" || script.readyState == "complete") {
                                script.onreadystatechange = null;
                                if (typeof callback != 'undefined')
                                        callback();
                                }
                        };
        } else { //Others
                script.onload = function () {
                        if (typeof callback != 'undefined')
                                callback();
                };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
}

function lsLoadIntegrationScript() {
    var url = myScript.src.replace("one-liner", "integration");

    if (window.location.search.indexOf("lslocal") > 0) {
    	if (url.indexOf("leasestation") > 0){
        	url = url.replace("https://vendor1.leasestation.com", "https://quicksparktools.com/integration");
        }
        else{
        	url = url.replace("https://vendor1.quickspark.com", "https://quicksparktools.com/integration");
        }
        lsLog('Running locally.');
    }

    loadLSScript(url);
}

function lsCheckExcluded() {
        for (var i = 0; i < lsExcluded.length; i++) {
                if (myScript.src.indexOf(lsExcluded[i]) > -1) {
                        lsLog("Found lsExclude record for Internet Explorer for: " + lsExcluded[i]);
                        return true;
                }
        }

        return false;
}

if (myScript.src.indexOf(nojquery) > -1) {
	jq = 2;
}

if (myScript.src.indexOf("vc=94qpt47") > -1){
	jq = 2;
}

if (myScript.src.indexOf("vc=2b26y53") > -1){
	jq = 2;
}

/************************************  STARTS HERE  ************************************/

if (g_tag === 1){
	if (!lsCheckExcluded()) {
		document.addEventListener("DOMContentLoaded", function() { 
        	lsLog("Loading scripts...");
        	if (typeof jQuery == 'undefined') {
        		if (jq === 1){
               		lsLog('Loading jQuery.');
                	loadLSScript(JQUERY_URL, lsLoadIntegrationScript);
            	} else {
					setTimeout(function(){
						lsLoadIntegrationScript();
					},400);
        		}
    		} else {
                lsLoadIntegrationScript();
        	}
    	});
	} else {
        lsLog("Vendor script disabled.");
    }
} else {
	if (!lsCheckExcluded()) {
		lsLog("Loading scripts...");

        if (typeof jQuery == 'undefined') {
        	if (jq === 1){
        		lsLog('Loading jQuery.');
                loadLSScript(JQUERY_URL, lsLoadIntegrationScript);
            } else {
				setTimeout(function(){
					lsLoadIntegrationScript();
				},400);
        	}
    	} else {
        	lsLoadIntegrationScript();
    	}
    } else {
        lsLog("Vendor script disabled.");
    }
}

