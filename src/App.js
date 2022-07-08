import { Provider } from "react-redux";
import AuthProvider from "./contexts/AuthProvider";
import store from "./redux/store";
import Main from "./Routes";
import './sass/main.scss';
import './sass/typography.scss';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </Provider>
  );
}

export default App;
