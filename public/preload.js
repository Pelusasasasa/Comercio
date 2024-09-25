const { contextBridge, ipcRenderer } = require('electron');

// Exponemos una API segura para el renderer
contextBridge.exposeInMainWorld('apiVentanaPrincipal', {
  openNewWindow: (args) => ipcRenderer.send('open-new-window', args),
  enviarCliente: async(args) => {
    ipcRenderer.send('enviar-cliente', args)
  },
  enviarProducto: async( args ) => {
    ipcRenderer.send('enviar-producto', args)
  }
});

contextBridge.exposeInMainWorld('apiVentanaSecundaria', {
  recibirCliente: async(callback) => {
    ipcRenderer.on('recibir-cliente', (e,data) => callback(data))
  },
  recibirProducto: async(callback) => {
    ipcRenderer.on('recibir-producto', (e, data) => callback(data))
  },
  informacion: async(callback) => {
    ipcRenderer.on('informacion', (e, data) => {
      console.log("A")
      console.log(data)
      callback(data)
    })
  }
});