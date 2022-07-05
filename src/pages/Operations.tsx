import React from "react"
import Formulaire from "../components/Operations/Formulaire"
import Liste from "../components/Operations/Liste"
import { OperationsContext } from "../providers/OperationsProvider"

export default function Operations() {
	// On récupère le contexte et ses données
	const { operations } = React.useContext(OperationsContext)

	// On affiche le contexte
	return (
		<div>
			<h1>Operations</h1>
			<h2>Nouvelle opération</h2>
			<Formulaire />

			<h2>Liste des opérations</h2>
			<Liste />

			<h2>Contenu du tableau "operations"</h2>
			<pre>{JSON.stringify(operations, null, 1)}</pre>
			<input type="button" value="Enregistrer" onClick={() => alert("A faire")} />
		</div>
	)
}
