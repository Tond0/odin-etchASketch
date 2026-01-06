const boardContainer = document.getElementById("board");
const gridSize = 16;

CreateBoard();

function CreateBoard() {
  if (boardContainer == null) {
    console.log("Board container is null!");
    return;
  }

  let tileWidth = 100 / gridSize;
  let tileHeight = 100 / gridSize;

  //We don't need to for loops but it's just much cleaner.
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const currentDivTile = document.createElement("div");
      currentDivTile.className = "boardTile";

      currentDivTile.style.width = tileWidth + "%";
      currentDivTile.style.height = tileHeight + "%";

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
