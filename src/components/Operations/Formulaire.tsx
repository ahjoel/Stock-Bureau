import React from "react"
import { OperationsContext } from "../../providers/OperationsProvider"

export default function Formulaire() {
	// On récupère le contexte et ses données
	const { addOperation } = React.useContext(OperationsContext)

	// On crée des states pour le formulaire
	const [operation, setOperation] = React.useState<string>("")
	const [quantite, setQuantite] = React.useState<number>(0)

	// Fonction pour effacer le formulaire
	const clearForm = () => {
		setOperation("")
		setQuantite(0)
	}

	return (
		<form>
			<label>
				Operation:
				<input type="text" name="operation" value={operation} onChange={(e) => setOperation(e.target.value)} />
			</label>

			<label>
				Quantite:
				<input type="number" name="quantite" value={quantite} onChange={(e) => setQuantite(parseInt(e.target.value))} />
			</label>

			<input type="button" value="Effacer" onClick={() => clearForm()} />

			<input
				type="button"
				value="Insérer"
				onClick={() => {
					addOperation(operation, quantite)
					clearForm()
				}}
			/>
		</form>
	)
}
