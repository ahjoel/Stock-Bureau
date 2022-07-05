import React from "react"
import { OperationsContext } from "../../providers/OperationsProvider"

export default function Ligne({ index }: { index: number }) {
	// On récupère le contexte et ses données
	const { operations, updateOperation, deleteOperation } = React.useContext(OperationsContext)

	// On utilise des states pour la ligne
	const [operation, setOperation] = React.useState<string>(operations[index].operation)
	const [quantite, setQuantite] = React.useState<number>(operations[index].quantite)

	// On affiche la liste des opérations
	// Pour l'update l'idéal serait de faire apparaître une Modal qui demande le nouveau nom et la nouvelle quantité
	// Ou ajouter l'update à chaque onChange sur operation et quantite
	return (
		<li>
			#{index} - <input type="text" name="operation" value={operation} onChange={(e) => setOperation(e.target.value)} />
			<input type="number" name="quantite" value={quantite} onChange={(e) => setQuantite(parseInt(e.target.value))} />
			<button onClick={() => updateOperation(index, { operation, quantite })}>Update</button>
			<button onClick={() => deleteOperation(index)}>Delete</button>
		</li>
	)
}
