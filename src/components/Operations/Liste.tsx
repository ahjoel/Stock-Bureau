import React from "react"
import { OperationsContext } from "../../providers/OperationsProvider"
import Ligne from "./Ligne"

export default function Liste() {
	// On récupère le contexte et ses données
	const { operations } = React.useContext(OperationsContext)

	// On affiche la liste des opérations
	if (operations.length === 0) return <p>Aucune opération</p>

	return (
		<ul>
			{operations.map((operation, index) => (
				<Ligne key={index} index={index} />
			))}
		</ul>
	)
}
