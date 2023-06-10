import './app.css'
import App from './App.svelte'
import * as dotenv from 'dotenv';


const app = new App({
  target: document.getElementById('app'),
})

export default app
