import Ingredient from './components/ingredients/Ingredient';
import INGREDIENTS from './api/mock-data'

function App() {
    return (
        <div className="App">
            {
                INGREDIENTS.map(ingredient =>
                    <Ingredient {...ingredient}/>)
            }
        </div>
    );
}

export default App;