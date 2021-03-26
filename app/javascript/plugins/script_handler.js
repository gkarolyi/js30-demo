const loadChallengeScript = () => {
  const challengeWrapper = document.getElementById("challenge-wrapper");
  if (!challengeWrapper) return;

  const challengeId = challengeWrapper.dataset.challengeId;
  import(`./challenges/${challengeId}.js`)
    .then((module) => {
      module.challengeScript();
    })
    .catch(() => console.log("Script not found"));
};

export { loadChallengeScript };
