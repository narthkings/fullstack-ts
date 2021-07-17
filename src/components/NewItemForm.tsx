import { useState } from 'react'
import {} from 'module'
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles/styles'


interface NewItemFormProps {
    onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {

    const [text, setText] = useState<string>("");
    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>

        </NewItemFormContainer>
    )
}

export default NewItemForm
