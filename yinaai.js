// Not IE
var link = document.getElementsByTagName('head')[0],
    cssURL = 'https://cdn.jsdelivr.net/npm/yinaai/yinaai.min.css',
    linkTag = document.createElement('link');
 
    linkTag.id = 'Yinaai-style';
 linkTag.href = cssURL;
 linkTag.setAttribute('rel','stylesheet');
 linkTag.setAttribute('media','all');
 linkTag.setAttribute('type','text/css');
 
link.appendChild(linkTag);
// IE
cssUrl = 'https://cdn.jsdelivr.net/npm/yinaai/yinaai.min.css',
document.createStyleSheet(cssURL);