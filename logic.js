const boardContainer = document.getElementById("board");

CreateBoard();

function CreateBoard() {
  if (boardContainer == null) {
    console.log("Board container is null!");
    return;
  }

  let tileWidth = boardContainer.offsetWidth / 16;
  let tileHeight = boardContainer.offsetHeight / 16;

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const currentDivTile = document.createElement("div");
      currentDivTile.className = "boardTile";

      currentDivTile.style.width = tileWidth + "px";
      currentDivTile.style.height = tileHeight + "px";

      currentDivTile.style.backgroundColor = "#ffffff";

      currentDivTile.addEventListener("mousedown", (e) => {
        e.preventDefault();
        currentDivTile.style.backgroundColor = "#000000";
      });

      currentDivTile.addEventListener("mousemove", function (e) {
        if (e.buttons == 1 || e.buttons == 3) {
          currentDivTile.style.backgroundColor = "#000000";
        }
      });

      boardContainer.appendChild(currentDivTile);
    }
  }
}
