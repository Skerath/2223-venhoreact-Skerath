import Ingredient from './components/transactions/Ingredient';

function App() {
    const ingredientID = 5;
    const name = "Test";
    const level_requirement = 3;
    const modifiers = [{
        naam: "test1", level: 1, maxlevel: 1
    }, {
        naam: "test2", level: 2, maxlevel: 3
    }, {
        naam: "test3", level: 3, maxlevel: 5
    }];
    const uses = [
        "Usecase1",
        "Usecase2"
    ]
    return (<div className="App">
            <Ingredient ingredientID={ingredientID} name={name} level_requirement={level_requirement} modifiers={modifiers} uses={uses}/>
        </div>);
}

export default App;