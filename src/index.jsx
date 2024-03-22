import './style.css'

import { createRoot } from 'react-dom/client'
import App from './App'
import HandTrack from './r3f-gist/sensor/HandTrack'

createRoot(document.querySelector('#root')).render(<App />)