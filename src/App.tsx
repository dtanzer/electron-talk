import React from 'react'

export function App() {
	return <div>
		<h1>Hello from React</h1>

		<button onClick={_ => window.api.sendEvent('Hello from Renderer') }>Send!</button>
	</div>
}