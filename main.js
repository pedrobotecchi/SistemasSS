const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules' ,'.bin', 'electron')
})

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})