const loadChallengeScript = () => {
  const challengeWrapper = document.getElementById("challenge-wrapper");
  const challengeMissing = document.getElementById("challenge-missing");
  if (!challengeWrapper || challengeMissing) return;

  const challengeId = challengeWrapper.dataset.challengeId;
  import(`./challenges/${challengeId}.js`)
    .then((module) => {
      module.challengeScript();
    })
    .catch((error) => console.log(error));
};

export { loadChallengeScript };
