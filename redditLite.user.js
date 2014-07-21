// ==UserScript==
// @name        Reddit Lite
// @namespace   reddit.com
// @description Reddit theme.
// @version     1.0.0
// @grant       GM_addStyle
// @match       *://*.reddit.com/*
// @run-at      document-start
// ==/UserScript==

GM_addStyle(
	'a.title{color:#1462c1!important;}\n' +
	'a:visited.title{color:#999!important;}\n' +
	'a:hover.title{color:#ff4500!important;}\n' +
	'a:active.title{color:#000!important;}\n' +
	'.link{border-bottom:1px solid #ddd;margin:0;padding:8px 0;}\n' +
	'.comment .child{border-left:1px dotted #808080;}\n' +
	'.last-clicked{border-left:0;border-right:0;border-top:0;}\n' +
	'div.md p{line-height:1.6em;margin-bottom:1em;}\n' +
	'.link .usertext .md{padding:0 1em;}\n'
);
