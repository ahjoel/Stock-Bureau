import React from "react"
import Operations from "./pages/Operations"
import OperationsProvider from "./providers/OperationsProvider"

function App() {
	// On wrap le composant Operations dans un provider pour pouvoir accéder aux données du contexte
	return (
		<OperationsProvider>
			<Operations />
		</OperationsProvider>
	)
}

export default App
