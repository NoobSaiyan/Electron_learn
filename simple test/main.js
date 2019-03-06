const {app,BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({width:800,height:600,icon:__dirname+'/rocketyard_icon.png'});

    win.loadFile('index.html')

    win.webContents.openDevTools();

    win.on('closed',() => {
        win = null;
    });

}

app.on('ready',createWindow);

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit;
    }
});
