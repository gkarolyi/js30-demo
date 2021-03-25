const challengeScript = () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const setHand = (timeUnit, handElement, partition = 60) => {
    const degrees = (timeUnit / partition) * 360 + 90;
    handElement.style.transform = `rotate(${degrees}deg)`;
  };

  const setTime = () => {
    const now = new Date();
    setHand(now.getSeconds(), secondHand);
    setHand(now.getMinutes(), minuteHand);
    setHand(now.getHours(), hourHand, 12);
  };

  setInterval(setTime, 1000);
};

export { challengeScript };
