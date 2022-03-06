var foo = document.createElement('script');
foo.src = chrome.runtime.getURL('audio.js');
document.documentElement.prepend(foo);
