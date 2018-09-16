const {app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		resizable: false,
        frame: false,
        icon: path.join(__dirname, 'src/img/icons/png/64x64.png')
	})

	const startUrl = process.env.ELECTRON_START_URL || url.format({
			pathname: path.join(__dirname, '/../build/index.html'),
			protocol: 'file:',
			slashes: true
	});
	mainWindow.loadURL(startUrl);

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})
