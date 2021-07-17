import React from 'react'
import { ColumnContainer, ColumnTitle } from '../styles/styles'
import AddNewItem from './AddNewItem'

type ColumnProps = {
    text: string;
}

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem dark toggleBtnText="Add another task" onAdd={console.log}  />
        </ColumnContainer>
    )
}

export default Column
