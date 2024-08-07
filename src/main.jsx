import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from '/src/App';
import Providers from "/src/context/Providers";
import {store} from "/src/app/store";
import 'react-responsive-modal/styles.css';
import "/src/App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Providers>
            <App/>
        </Providers>
    </Provider>
)
