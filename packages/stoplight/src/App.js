import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl={process.env.REACT_APP_OPENAPI_FILE_URL} />
    </div>
  );
}

export default App;
