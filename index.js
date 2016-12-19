function fetchJsFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                //var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(httpRequest.responseText); //data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

global.startEditor = function() {

  fetchJsFile('snippets.js', function(data){
        monaco.languages.registerCompletionItemProvider('powershell', {
            provideCompletionItems:  () => {
                var snippets = eval(data);
                for(var i=0; i<snippets.length; i++) {
                  snippets[i].kind = 14; // monaco.languages.CompletionItemKind.Snippet
                }
                return snippets;
            }
        });

        var editor = monaco.editor.create(document.getElementById('container'), {
            value: getCode(),
            language: 'powershell',
            theme: 'hc-black' //'vs-dark'
        });

        editor.setPosition({ lineNumber: 4, column: 1 });
  });

    function getCode() {
	return `# PowerCLI SketchPad (MIT License) - Powered By DoubleCloud Inc.
# No guarantee by anyone or any organization. Use at your own risk.
# Type dc to get started
`;
    }

}