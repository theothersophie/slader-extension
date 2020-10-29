chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    
  var newxff = (Math.floor((Math.random()*100000000))).toString();
  var gotxff = false;
  for(var n in details.requestHeaders){
      gotxff = details.requestHeaders[n].name.toLowerCase()=="x-forwarded-for";
      if(gotxff){
          details.requestHeaders[n].value = newxff;
          break;
      }
  }
  if(!gotxff){
      details.requestHeaders.push({name:"X-Forwarded-For",value:newxff});
  }
    console.log(details);
    return { requestHeaders: details.requestHeaders };
}, {
    urls: ['*://*.slader.com/*']
}, ['blocking', 'requestHeaders']);





chrome.webRequest.onSendHeaders.addListener(function(details) {
    console.log(details.requestHeaders);
    return { requestHeaders: details.requestHeaders };
}, {urls: ['*://*.slader.com/textbook/*']},
 ['requestHeaders']);