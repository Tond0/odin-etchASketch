const boardContainer = document.getElementById("board");
let gridSize = 16;

const buttonResize = document.getElementById("buttonResize");
buttonResize.addEventListener("click", () => OnResizeButtonClicked());

CreateBoard(gridSize);

function CreateBoard(newGridSize) {
  if (boardContainer == null) {
    console.log("Board container is null!");
    return;
  }

  ClearBoard();

  let tileWidth = 100 / newGridSize;
  let tileHeight = 100 / newGridSize;

  //We don't need to for loops but it's just much cleaner.
  for (let i = 0; i < newGridSize; i++) {
    for (let j = 0; j < newGridSize; j++) {
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

function ClearBoard()
{
  while(boardContainer.lastChild)
    boardContainer.removeChild(boardContainer.lastChild)
}

function OnResizeButtonClicked()
{
  let newGridSize = parseInt(prompt("Insert the new grid size"));
  CreateBoard(newGridSize);
}
