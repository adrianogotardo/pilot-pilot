const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'imgs', 'trayIcon.png');

function createTray() {
    const tray = new Tray(iconPath);
    tray.setToolTip('pilot');
    return tray;
}

module.exports = createTray()