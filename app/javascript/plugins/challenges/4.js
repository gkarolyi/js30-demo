const filter1500s = (parentElement) => {
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const array = JSON.parse(parentElement.dataset.inventors);
  const filtered = array.filter(
    (item) => item.year >= 1500 && item.year < 1600
  );
  populateTable(parentElement, filtered);
};

const fullNames = (array) => {
  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  return array.map((item) => `${item.first} ${item.last}`);
};

const inventorsSortByBirthdate = (parentElement) => {
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const array = JSON.parse(parentElement.dataset.inventors);
  const inventorsSorted = array.sort((previous, current) =>
    previous.year > current.year ? 1 : -1
  );
  populateTable(parentElement, inventorsSorted);
};

const totalYearsLived = (array) => {
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  const totalYears = array.reduce((total, item) => {
    return total + (item.passed - item.year);
  }, 0);
  return `Total years lived: ${totalYears}`;
};

const inventorsSortByAge = (parentElement) => {
  // 5. Sort the inventors by years lived
  const array = JSON.parse(parentElement.dataset.inventors);
  const oldestSorted = array.sort((previous, current) =>
    previous.passed - previous.year < current.passed - current.year ? 1 : -1
  );
  populateTable(parentElement, oldestSorted);
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

const resetInventorsTable = (parentElement) => {
  const inventors = JSON.parse(parentElement.dataset.inventors);
  populateTable(parentElement, inventors);
};

const sortPeopleAlphabetically = (parentElement, event) => {
  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const array = JSON.parse(parentElement.dataset.listItems);
  if (event.target.innerText === "reset") {
    populateList(parentElement, array);
    event.target.innerText = "Alphabetical sort";
  } else {
    const peopleSorted = array.sort((a, b) => {
      const lastName = (person) => person.split()[0];
      return lastName(a) > lastName(b) ? 1 : -1;
    });
    populateList(parentElement, peopleSorted);
    event.target.innerText = "reset";
  }
};

const sumListInstances = (parentElement) => {
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const listContainer = parentElement.querySelector(".list-container");
  const itemsCounter = parentElement.querySelector(".items-counter");
  const array = listContainer.innerText.split("\n");
  const dataInstances = array.reduce((obj, item) => {
    obj[item] = obj[item] + 1 || 0;
    return obj;
  }, {});
  const formattedCounter = Object.entries(dataInstances).map((arr) =>
    arr.join(": ")
  );
  populateList(parentElement, formattedCounter, ".items-counter");
};

const addRandomItems = (parentElement, event) => {
  const items = JSON.parse(parentElement.dataset.listItems);
  if (event.target.innerText === "reset") {
    populateList(parentElement, items);
    event.target.innerText = "Add random items";
    sumListInstances(parentElement);
  } else {
    const randomItems = items.sort(() => 0.5 - Math.random()).slice(0, 20);
    populateList(parentElement, items.concat(randomItems));
    event.target.innerText = "reset";
    sumListInstances(parentElement);
  }
};

const populateTable = (parentElement, data) => {
  const body = parentElement.querySelector("tbody");
  body.innerHTML = "";
  const rowHtml = parentElement.dataset.rowHtml;
  data.forEach((item, index) => {
    const newRow = body.insertRow();
    if (index % 2 === 0) {
      newRow.classList.add("bg-white");
    } else {
      newRow.classList.add("bg-gray-50");
    }
    const html = [
      index + 1,
      item["first"],
      item["last"],
      item["year"],
      item["passed"],
    ]
      .map((cell) => {
        return rowHtml.replace("PLACEHOLDER", cell);
      })
      .join("");
    newRow.innerHTML = html;
  });
};

const populateList = (parentElement, data, query = ".list-container") => {
  const listContainer = parentElement.querySelector(query);
  listContainer.innerHTML = "";
  const liHtml = parentElement.dataset.liHtml;
  data.forEach((item) => {
    listContainer.insertAdjacentHTML(
      "beforeend",
      liHtml.replace("PLACEHOLDER", item)
    );
  });
};

const createButton = (parentElement, btnName, callback) => {
  const btnContainer = parentElement.querySelector(".buttons-container");
  const btnHtml = parentElement.dataset.btnHtml;
  btnContainer.insertAdjacentHTML(
    "beforeend",
    btnHtml.replace("PLACEHOLDER", btnName)
  );
  btnContainer.lastElementChild.addEventListener("click", (event) =>
    callback(parentElement, event)
  );
};

const challengeScript = () => {
  const inventorsTable = document.getElementById("inventors-table");
  const inventors = JSON.parse(inventorsTable.dataset.inventors);

  const peopleList = document.getElementById("people-list");
  const people = JSON.parse(peopleList.dataset.listItems);

  const itemsList = document.getElementById("items-list");
  const items = JSON.parse(itemsList.dataset.listItems);

  populateTable(inventorsTable, inventors);
  createButton(inventorsTable, "reset", resetInventorsTable);
  createButton(inventorsTable, "1500s only", filter1500s);
  console.log(fullNames(inventors));
  createButton(inventorsTable, "birthdate ascending", inventorsSortByBirthdate);
  console.log(totalYearsLived(inventors));
  createButton(inventorsTable, "age descending", inventorsSortByAge);

  populateList(peopleList, people);
  createButton(peopleList, "Alphabetical sort", sortPeopleAlphabetically);

  populateList(itemsList, items);
  sumListInstances(itemsList);
  createButton(itemsList, "+20 random items", addRandomItems);
};

export { challengeScript };
