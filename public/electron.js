// import isDev from 'electron-is-dev';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
// const isDev = require('electron-is-dev');
// console.log(isDev)

const isDev = true;


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow();
    mainWindow.maximize();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file//${path.join(__dirname, '../build/index.html')}`);
    
    if (isDev) {
        mainWindow.webContents.openDevTools();
    };

    mainWindow.on('closed', () => mainWindow => null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

app.on('active', () => {
    if (mainWindow === null) {
        createWindow();
    };
});