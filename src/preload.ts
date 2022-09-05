import { contextBridge, ipcRenderer, } from 'electron'

const api = {
	sendEvent: (message: string) => ipcRenderer.sendSync('--some-message', message)
}

console.log('exposing...')
contextBridge.exposeInMainWorld('api', api)

ipcRenderer.on('--event-from-main', (event, ...args) => console.log('args', args))

declare global {
	interface Window {
		api: typeof api
	}
}
