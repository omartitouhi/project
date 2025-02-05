import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="logo-container">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <h1>Welcome to Vite</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p>
        Edit <code>src/main.js</code> and save to test HMR
      </p>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more about Vite
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))