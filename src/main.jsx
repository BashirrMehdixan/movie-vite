import ReactDOM from 'react-dom/client'
import App from '/src/App';
import Providers from "/src/context/Providers";
import 'react-responsive-modal/styles.css';
import "/src/App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providers>
        <App/>
    </Providers>
)
