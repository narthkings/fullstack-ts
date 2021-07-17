import { useState } from 'react'
import { AddNewItemButton } from '../styles/styles'
import NewItemForm from './NewItemForm'


interface AddNewItemProps {
    onAdd(text: string): void;
    toggleBtnText: string;
    dark?: boolean
}

const AddNewItem = ({ onAdd, toggleBtnText, dark }: AddNewItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false)
    if (showForm) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text)
                    setShowForm(false)
                }}
            />
        )
    }

    return (
        <AddNewItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleBtnText}
        </AddNewItemButton>
    )
}

export default AddNewItem
