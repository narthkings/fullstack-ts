import { AppContainer } from './styles/styles'
import  Column  from './components/Column'
import  Card  from './components/Card'
import AddNewItem from './components/AddNewItem';

function App() {

  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>

      <Column text="In Progress">
        <Card text="Learn TS" />
      </Column>

      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>

      <AddNewItem onAdd={console.log} toggleBtnText="+ Add another list"  />
    </AppContainer>
  );
}

export default App;
