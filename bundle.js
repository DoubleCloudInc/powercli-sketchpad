!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(module,exports){(function(global){"use strict";function fetchJsFile(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var e=JSON.parse(n.responseText);t&&t(e)}},n.open("GET",e),n.send()}global.startEditor=function(){function getCode(){return"# PowerCLI SketchPad (MIT License) - Powered By DoubleCloud Inc.\n# No guarantee by anyone or any organization. Use at your own risk.\n# Type dc to get started\n"}fetchJsFile("snippets.json",function(data){monaco.languages.registerCompletionItemProvider("powershell",{provideCompletionItems:function provideCompletionItems(){for(var snippets=eval(data),i=0;i<snippets.length;i++)snippets[i].kind=14;return snippets}});var editor=monaco.editor.create(document.getElementById("container"),{value:getCode(),language:"powershell",theme:"hc-black"});editor.setPosition({lineNumber:4,column:1})})}}).call(exports,function(){return this}())}]);