import AuthProvider from "./contexts/AuthProvider";
import Main from "./Routes";
import './sass/main.scss';
import './sass/typography.scss';

function App() {
  return (
    <div>
      <AuthProvider>
        <Main />
      </AuthProvider>

    </div>
  );
}

export default App;
