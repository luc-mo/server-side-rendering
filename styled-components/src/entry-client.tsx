import ReactDOM from 'react-dom/client'
import { App } from './App'

const root = document.getElementById('root') as HTMLElement
ReactDOM.hydrateRoot(root, <App />)