import React from "react"
import deepCopyFunction from "../utils/deepCopyFunction"

// On crée le Context avec des valeurs par défaut
export const OperationsContext = React.createContext<operationsContextType>({
	operations: [],
	addOperation: () => null,
	updateOperation: () => null,
	deleteOperation: () => null,
})

export default function OperationsProvider({ children }: React.PropsWithChildren): React.ReactElement {
	// Liste des opérations
	const [operations, setOperations] = React.useState<operationType[]>([])

	// Fonction pour ajouter une opération
	const addOperation = (operation: any, quantite: any) => {
		// On fait une copie du tableau operations (fonction de copie profonde optimisée)
		const newOperations = deepCopyFunction(operations)
		// On ajoute l'opération à la fin du tableau
		newOperations.push({
			operation,
			quantite,
		})
		// On met à jour le tableau operations
		setOperations(newOperations)
	}

	// Fonction pour mettre à jour une opération
	const updateOperation = (index: number, update: any) => {
		// On fait une copie du tableau operations
		const newOperations = deepCopyFunction(operations)
		// On met à jour l'opération à l'index donné
		newOperations[index] = {
			...newOperations[index],
			...update,
		}
		// On met à jour le tableau operations
		setOperations(newOperations)
	}

	// Fonction pour supprimer une opération
	const deleteOperation = (index: number) => {
		// On fait une copie du tableau operations
		const newOperations = deepCopyFunction(operations)
		// On supprime l'opération à l'index donné
		newOperations.splice(index, 1)
		// On met à jour le tableau operations
		setOperations(newOperations)
	}

	// N'importe quelle fonction supplémentaire
	// ...

	// On retourne le contexte avec les données en tant que provider
	return (
		<OperationsContext.Provider
			value={{
				operations,
				addOperation,
				updateOperation,
				deleteOperation,
			}}
		>
			{children}
		</OperationsContext.Provider>
	)
}

export type operationsContextType = {
	operations: operationType[]
	addOperation: (operation: operationType["operation"], quantite: operationType["quantite"]) => void
	updateOperation: (index: number, update: { operation?: any; quantite?: operationType["quantite"] }) => void
	deleteOperation: (index: number) => void
}

export type operationType = {
	operation: string
	quantite: number
}
