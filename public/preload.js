const { contextBridge, ipcRenderer } = require('electron');

// Exponemos una API segura para el renderer
contextBridge.exposeInMainWorld('api', {
  openNewWindow: (args) => ipcRenderer.send('open-new-window', args),
});