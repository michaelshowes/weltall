require('file-loader?name=[name].[ext]!./index.html')
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './global-scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);