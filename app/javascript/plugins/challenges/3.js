const challengeScript = () => {
  const inputs = document.querySelectorAll(".controls input");

  function handleUpdate() {
    const unit = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + unit
    );
  }

  inputs.forEach((input) => {
    input.addEventListener("change", handleUpdate);
    input.addEventListener("mousemove", handleUpdate);
  });
};

export { challengeScript };
