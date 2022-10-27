const { BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        frame: false,
        resizable: false,
        //show: false,
        //fullscreenable: false
        //fullscreen: true
    });
    win.loadURL("http://localhost:3000");

    return win
};

module.exports = createWindow()