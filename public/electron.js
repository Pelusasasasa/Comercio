// import isDev from 'electron-is-dev';

const electron = require('electron');
const { ipcMain, Menu } = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
// const isDev = require('electron-is-dev');
// console.log(isDev)

const isDev = true;

let mainWindow = null;
let listClientWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.maximize();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file//${path.join(__dirname, '../build/index.html')}`);
    
    if (isDev) {
        mainWindow.webContents.openDevTools();
    };

    mainWindow.on('closed', () => mainWindow => null);
};

function newWindow(direccion){
    listClientWindow = new BrowserWindow({
        parent: mainWindow,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    });

    listClientWindow.loadURL(isDev ? `http://localhost:3000/${direccion}` : `file//${path.join(__dirname, `../build/index.html/${direccion}`)}`);
        if (isDev) {
        listClientWindow.webContents.openDevTools();
    };

    listClientWindow.on('closed', () => listClientWindow => null);
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

//Abrimos una ventana nueva con la direccion elegida
ipcMain.on('open-new-window', (e, path) => {
    newWindow(path)
});

//Nos llega un funcion con el cliente
ipcMain.on('enviar-cliente', (e, args) => {
    //Mandamos el cliente a la ventana principal
    mainWindow.webContents.send('recibir-cliente', args);

    listClientWindow.close();
    listClientWindow = null;
});

//Menu Secundario
const menuBarra = [
    {
        label: "Datos",
        submenu: [
            {
                label: "Numeros",
                click(){
                    const focusedWindow = BrowserWindow.getFocusedWindow();
                    if (focusedWindow) {
                        console.log(newWindow)
                        newWindow('cliente/lista');
                    }
                }
            },
            {
                label: "Provedores"
            },
            {
                label: "Rubros"
            },
            {
                label: "Vendedores"
            },
            {
                label: "Cuentas"
            },
            {
                label: "Imprimir Venta"
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(menuBarra);
Menu.setApplicationMenu(menu);
