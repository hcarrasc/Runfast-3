/*
import Audic from "audic";

const path = "/Users/hc/Music/Music HC/";

const audic = new Audic(
  path + "Franz Hlusek _ Jorge Nava - Cosmic Dreamer (Fast Distance Mix).mp3"
);
await audic.play();

audic.addEventListener("ended", () => {
  audic.destroy();
});
*/

const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("src/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
