document.getElementById('search-btn').addEventListener('click', () => {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    fetch('./cities.json') // Make sure the file is located correctly
        .then(response => response.json())
        .then(data => filterResults(keyword, data))
        .catch(error => console.error('Error fetching data:', error));
});
function filterResults(keyword, data) {
    const searchResults = document.getElementById('results');
    searchResults.innerHTML = ''; // Clear previous results
    let matches
    Object.keys(data).forEach(key => {
        if(key.toLowerCase().includes(keyword) ) {
            matches = data[key];

        }
        else if(key ==='countries'){
            matches = data[key].filter(city => city.name.toLowerCase().includes(keyword));
            console.log(matches)

        }
          
      });
      if (matches?.length > 0) {
        console.log(matches)
searchResults.style.display = 'block'
       if(matches.length === 1){ {
        matches[0].cities.forEach(city => {
            console.log(city)
            
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            
            const cityName = document.createElement('h2');
            cityName.textContent = city.name;
            
            const cityImage = document.createElement('img');
            cityImage.src = city.imageUrl;
            cityImage.alt = city.name;
            
            const cityDescription = document.createElement('p');
            cityDescription.textContent = city.description;
            
            resultDiv.appendChild(cityName);
            resultDiv.appendChild(cityImage);
            resultDiv.appendChild(cityDescription);
            
            searchResults.appendChild(resultDiv);
        })
       }
       }else{
        matches.forEach(match => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            
            const cityName = document.createElement('h2');
            cityName.textContent = match.name;
            
            const cityImage = document.createElement('img');
            cityImage.src = match.imageUrl;
            cityImage.alt = match.name;
            
            const cityDescription = document.createElement('p');
            cityDescription.textContent = match.description;
            
            resultDiv.appendChild(cityName);
            resultDiv.appendChild(cityImage);
            resultDiv.appendChild(cityDescription);
            
            searchResults.appendChild(resultDiv);
        });
       }
           
    
    }else{
        searchResults.innerHTML = '<p>No results found.</p>';
    }
    if (searchResults.innerHTML === '') {
        searchResults.innerHTML = '<p>No results found.</p>';
    }
}
document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('results').style.display = 'none';

})
