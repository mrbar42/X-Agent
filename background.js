var userAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36";

var requestFilter = {
    urls: [
        "<all_urls>"
    ]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    var headers = details.requestHeaders;
    for(var i = 0, l = headers.length; i < l; ++i) {
        if( headers[i].name == 'User-Agent' ) {
            break;
        }
    }
    if(i < headers.length) {
        headers[i].value = userAgent;
    }
    return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);

