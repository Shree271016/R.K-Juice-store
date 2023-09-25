import { createStore } from 'redux';
import MyRoutes from './MyRoutes';
import './mystyle.css' 
import { Provider } from 'react-redux';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyContextProvider } from './components/Pages/admin/hooks/my/MyContext';

const App = () => {

    return (
      <MyContextProvider>
        <MyRoutes/>
      </MyContextProvider>
  );
}


export default App;
