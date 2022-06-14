window. addEventListener ("load", function() { loader. style. display = 'none'; });

AOS.init();

const rippleButton = document.querySelector("button");

function mousePositionToCustomProp(event, element) {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
}

rippleButton.addEventListener("click", (e) => {
  mousePositionToCustomProp(e, rippleButton);
  rippleButton.classList.add("pulse");
  rippleButton.addEventListener(
    "animationend",
    () => {
      rippleButton.classList.remove("pulse");
    },
    { once: true }
  );
});