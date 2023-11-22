document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var genre = document.getElementById("genre").value;
    var country = document.getElementById("country").value;
    
    var searchParameters = {
        name: name,
        genre: genre,
        country: country
    };
    
    searchComposers(searchParameters);
});

function searchComposers(parameters) {
    // make API call and retrieve results
    function searchComposers(parameters){
        var url = "http://www.rotaryspin.com/mc/api/composers.php?key1=" + 
        query + "&key2=" + parameters.genre + "&key3=" +
        parameters.country;
        var xhr = new XMLHttpRequest(); 
    }
    // parse the response (in either JSON or XML format)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            // Parse the response (in either JSON or XML format)
            // Display the results in the 'results' div
            
            // Example using JSON
            var data = JSON.parse(response);
            var composers = data.composers;
            var resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";
            
            composers.forEach(function(composer) {
                var composerDiv = document.createElement("div");
                composerDiv.textContent = composer.name;
                resultsDiv.appendChild(composerDiv);
            });
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();

    // display the results in the 'results' div
}

