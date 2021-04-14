const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'darkMode.js')
        }
    })
    //    win.loadURL(url.format ({ 
    //       pathname: path.join(__dirname, 'index.html'), 
    //       protocol: 'file:', 
    //       slashes: true,
    //       nodeIntegration: true 
    //    })) 
    win.loadURL('https://binarysearch.com/')

    win.maximize();
    win.show();
}

app.on('ready', createWindow) 