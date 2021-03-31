const challengeScript = () => {
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );
  console.table(fifteen);

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const fullNames = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
  );
  console.log(fullNames);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const inventorsSorted = inventors.sort((previous, current) =>
    previous.year > current.year ? 1 : -1
  );

  console.table(inventorsSorted);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

  console.log(totalYears);

  // 5. Sort the inventors by years lived
  const oldestSorted = inventors.sort((previous, current) =>
    previous.passed - previous.year < current.passed - current.year ? 1 : -1
  );

  console.table(oldestSorted);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  const pageLinks = Array.from(document.querySelectorAll(".mw-category a"));
  const de = pageLinks
    .map((link) => link.textContent)
    .filter((streetName) => streetName.includes("de"));
  console.log(de);

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const peopleSorted = people.sort((a, b) => {
    const lastName = (person) => person.split()[0];
    return lastName(a) > lastName(b) ? 1 : -1;
  });

  console.log(peopleSorted);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
  ];

  const dataInstances = data.reduce((obj, item) => {
    obj[item] = obj[item] + 1 || 0;
    return obj;
  }, {});

  console.log(dataInstances);
};

export { challengeScript };
