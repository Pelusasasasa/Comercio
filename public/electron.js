const { ipcMain, Menu, app, BrowserWindow } = require('electron');
const path = require('path');
require('dotenv').config();

const isDev = process.env.NODE_ENV === 'desarrollo';

let mainWindow = null;
let listWindow;

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

function newWindow(direccion, button){
    listWindow = new BrowserWindow({
        parent: mainWindow,
        width: 1000,
        height: 800,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    });

    listWindow.loadURL(isDev ? `http://localhost:3000/${direccion}` : `file//${path.join(__dirname, `../build/index.html/${direccion}`)}`);
    
    // if (isDev) {
    //     listWindow.webContents.openDevTools();
    // };
    console.log("a")
    listWindow.webContents.on('did-finish-load', () => {
        listWindow.webContents.send('informacion', {button});
    });

    listWindow.on('closed', () => listWindow => null);
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
ipcMain.on('open-new-window', (e, {direccion, button}) => {
    newWindow(direccion, button)
});

//Nos llega un funcion con el cliente
ipcMain.on('enviar-cliente', (e, args) => {
    //Mandamos el cliente a la ventana principal
    mainWindow.webContents.send('recibir-cliente', args);

    listWindow.close();
    listWindow = null;
});

ipcMain.on('enviar-producto', (e, args) => {
    mainWindow.webContents.send('recibir-producto', args);
    listWindow.close();
    listWindow = null;
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
    },
    {
        label: 'Tools',
        accelerator: process.platform == "darwin" ? "Comand+D" : "Ctrl+D",
        click(item, focusedWindow ){
            focusedWindow.toggleDevTools();
        }
    }
];

const menu = Menu.buildFromTemplate(menuBarra);
Menu.setApplicationMenu(menu);
