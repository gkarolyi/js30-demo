const challengeScript = () => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const cities = [];

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => cities.push(...data));

  const findMatches = (wordToMatch, citiesArray) => {
    return citiesArray.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  const formatMatch = (nameToFormat, partialMatch) => {
    const regex = new RegExp(partialMatch, "gi");
    return nameToFormat.replace(
      regex,
      `<span class="bg-indigo-50">${partialMatch}</span>`
    );
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const createSuggestionItem = (place, partialMatch) => {
    return `
              <li class="px-4 py-4 flex flex-row justify-between w-9/12 mx-auto capitalize">
                <span class="name">${formatMatch(
                  place.city,
                  partialMatch
                )}, ${formatMatch(place.state, partialMatch)}</span>
                <span class="population">${numberWithCommas(
                  place.population
                )}</span>
              </li>
            `;
  };

  function displayMatches() {
    if (this.value == "") {
      suggestions.innerHTML = suggestionsReset;
      return;
    }
    const matches = findMatches(this.value, cities);
    const html = matches
      .map((place) => createSuggestionItem(place, this.value))
      .join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");
  const suggestionsReset = suggestions.innerHTML;

  searchInput.addEventListener("keyup", displayMatches);
};

export { challengeScript };
