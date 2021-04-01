const filter1500s = (array) => {
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = array.filter((item) => item.year >= 1500 && item.year < 1600);
  console.table(fifteen);
};

const fullNames = (array) => {
  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const fullNamesArray = array.map((item) => `${item.first} ${item.last}`);
  console.log(fullNamesArray);
};

const inventorsSortByBirthdate = (array) => {
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const inventorsSorted = array.sort((previous, current) =>
    previous.year > current.year ? 1 : -1
  );

  console.table(inventorsSorted);
};

const alertTotalYears = (array) => {
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  const totalYears = array.reduce((total, item) => {
    return total + (item.passed - item.year);
  }, 0);
  alert(totalYears);
};

const inventorsSortByAge = (array) => {
  // 5. Sort the inventors by years lived
  const oldestSorted = array.sort((previous, current) =>
    previous.passed - previous.year < current.passed - current.year ? 1 : -1
  );
  console.table(oldestSorted);
};

const boulevardsInParis = () => {
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  const pageLinks = Array.from(document.querySelectorAll(".mw-category a"));
  const de = pageLinks
    .map((link) => link.textContent)
    .filter((streetName) => streetName.includes("de"));
  console.log(de);
};

const sortPeopleAlphabetically = (array) => {
  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const peopleSorted = array.sort((a, b) => {
    const lastName = (person) => person.split()[0];
    return lastName(a) > lastName(b) ? 1 : -1;
  });
};

const sumListInstances = (array) => {
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const dataInstances = array.reduce((obj, item) => {
    obj[item] = obj[item] + 1 || 0;
    return obj;
  }, {});
  console.log(dataInstances);
};

const tableSortable = (table) => {
  const sortRows = (table, colIndex) => {
    const rows = table.querySelectorAll("tbody tr");
    const selector = "td:nth-child(" + (colIndex + 1) + ")";
    rows.forEach((row) => {
      console.log(row);
      console.log(selector);
      const node = row.querySelector(selector);
      console.log(node);
      const value = node.innerText;
      console.log(value);
    });
  };

  const siblingIndex = (node) => {
    let count = 0;
    while ((node = node.previousElementSibling)) {
      count++;
    }
    return count;
  };

  const sortTableHandler = (table) => {
    return function (event) {
      if (event.target.tagName.toLowerCase() == "a") {
        sortRows(table, siblingIndex(event.target.parentNode));
        event.preventDefault();
      }
    };
  };

  const thead = table.querySelector("thead");
  const headers = thead.querySelectorAll("th");
  headers.forEach((header) => {
    header.innerHTML = "<a href='#'>" + header.innerHTML + "</a>";
  });
  thead.addEventListener("click", sortTableHandler(table));
};

const challengeScript = () => {
  const inventorsTable = document.getElementById("inventors-table");
  const inventors = JSON.parse(inventorsTable.dataset.inventors);

  const peopleList = document.getElementById("people-list");
  const people = JSON.parse(peopleList.dataset.people);

  const itemsList = document.getElementById("items-list");
  const items = JSON.parse(itemsList.dataset.items);

  function clickHandler(event) {
    console.log(event);
  }

  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.addEventListener("click", clickHandler));

  tableSortable(inventorsTable);
};

export { challengeScript };
