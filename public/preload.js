const { contextBridge, ipcRenderer } = require('electron');

// Exponemos una API segura para el renderer
contextBridge.exposeInMainWorld('apiVentanaPrincipal', {
  openNewWindow: (args) => ipcRenderer.send('open-new-window', args),
  enviarCliente: async(args) => {
    ipcRenderer.send('enviar-cliente', args)
  }
});

contextBridge.exposeInMainWorld('apiVentanaSecundaria', {
  recibirCliente: async(callback) => {
    ipcRenderer.on('recibir-cliente', (e,data) => callback(data))
  }
})