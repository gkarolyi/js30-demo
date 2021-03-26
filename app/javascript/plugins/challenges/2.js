const challengeScript = () => {
  // select hand elements
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  /**
   *
   * @param {Number} timeUnit The number of units of time passed
   * @param {HTML object} handElement The hand element to move
   * @param {Number} partition The number of units represented by 360 degrees - 60 by default for seconds and minutes
   */
  const setHand = (timeUnit, handElement, partition = 60) => {
    // calculate current orientation in degrees
    const degrees = (timeUnit / partition) * 360 + 90;
    // remove transition styles when completing the circle to avoid 'rewinding' effect
    if (timeUnit == 0) {
      handElement.classList.remove("transition");
      // add transition style again once hand has passed 12
    } else if (timeUnit == 1) {
      handElement.classList.add("transition");
    }
    // rotate the hand element to the correct orientation
    handElement.style.transform = `rotate(${degrees}deg)`;
  };

  const setTime = () => {
    const now = new Date();
    setHand(now.getSeconds(), secondHand);
    setHand(now.getMinutes(), minuteHand);
    setHand(now.getHours(), hourHand, 12);
  };

  // set hands as soon as the script loads, then set the interval
  setTime();
  setInterval(setTime, 1000);
};

export { challengeScript };
