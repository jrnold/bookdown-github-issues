!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.ShareThisViaLinkedIn=e.ShareThisViaLinkedIn||{})}(this,function(e){"use strict";function n(e,n,t){var r=this.getText(e),o=this.getShareUrl(r,t);return'<a href="'+o+'" target="_blank" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635z" fill="currentcolor"/></svg></a>'}function t(e){var n=e.trim();return n.length>i-2&&(n=n.slice(0,i-3).trim()+"…"),"“"+n+"”"}function r(e,n){return"https://www.linkedin.com/shareArticle?mini=true&summary="+encodeURIComponent(e)+"&url="+encodeURIComponent(n)}function o(e,n){e.preventDefault();var t=n.ownerDocument.defaultView.open(n.firstChild.href,"share_via_linked_in","height=440,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width=640");t.opener=null}var i=250,a="linked-in";e.render=n,e.getText=t,e.getShareUrl=r,e.action=o,e.name=a,Object.defineProperty(e,"__esModule",{value:!0})});