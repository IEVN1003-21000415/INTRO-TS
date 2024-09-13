import './style.css'
/**import './temas-ts/01-tiposDat.ts'
import './temas-ts/02-intefas.ts'
import './temas-ts/03-funciones.ts'
import './temas-ts/04-desestructuracion.ts'
import './temas-ts/05-destructura-funciones.ts'
import './temas-ts/08-herencias.ts'
import './temas-ts/practica1-Formulageneral.ts'**/
import './temas-ts/Practica 2-area.ts'
import './temas-ts/practica2-Volumen.ts'

import typescriptLogo from './typescript.svg'

import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
