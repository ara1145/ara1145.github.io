function browserVersion(){var e=navigator.userAgent,i=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,t=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1,n=e.indexOf("Edge")>-1&&!i,r=e.indexOf("Firefox")>-1,o=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,f=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR"),d=e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");i||t?alert("很抱歉，本站不支持 IE 浏览器"):n?e.split("Edge/")[1].split(".")[0]<90&&alert("很抱歉，您的浏览器版本过旧，可能会遇到问题，建议您升级浏览器"):r?e.split("Firefox/")[1].split(".")[0]<78&&alert("很抱歉，本站最低需要 78 版本的 Firefox 才能渲染大多数内容"):o?e.split("OPR/")[1].split(".")[0]<80&&alert("很抱歉，您的浏览器版本过旧，可能会遇到问题，建议您升级浏览器"):f?e.split("Chrome/")[1].split(".")[0]<90&&alert("很抱歉，您的浏览器版本过旧，可能会遇到问题，建议您升级浏览器"):d&&alert("Safari 的支持情况未知，欢迎反馈")}function setCookies(e,i){let t=new Date((new Date).getTime()+24*i*60*60*1e3).toGMTString();for(let i in e)document.cookie=i+"="+e[i]+";expires="+t}function getCookie(e){var i,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(i=document.cookie.match(t))?unescape(i[2]):null}1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion());