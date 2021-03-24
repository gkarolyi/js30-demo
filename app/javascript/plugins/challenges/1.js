const challengeScript = () => {
  const restoreKey = (event) => {
    if (event.propertyName === "transform") {
      event.target.classList.remove("playing");
    }
  };

  const playSound = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.addEventListener("transitionend", restoreKey);
  });

  const keyPress = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (audio) {
      playSound(audio);
      const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
      if (key) {
        key.classList.add("playing");
      }
    }
  };

  window.addEventListener("keydown", (event) => {
    keyPress(event);
  });
};

export { challengeScript };
