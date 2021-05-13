const { app, BrowserWindow } = require('electron');
const path = require('path');
if (require('electron-squirrel-startup')) { 
  app.quit();
}
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 550,
    title: "KSCO - Hub",
    resizable:false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenuBarVisibility(false);
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});