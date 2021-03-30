const challengeScript = () => {
  const panels = document.querySelectorAll(".panel");

  function toggleOpen() {
    const currentlyOpen = document.querySelector(".open");
    if (currentlyOpen) {
      currentlyOpen.classList.remove("open");
    }
    if (currentlyOpen != this) {
      this.classList.toggle("open");
    }
  }

  function toggleActive(event) {
    if (event.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  }

  panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive)
  );
};

export { challengeScript };
