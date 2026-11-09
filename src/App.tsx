import { useState } from 'react'
import castielImg from './assets/hero.png'
import reactLogo from './assets/images.jpeg'
import viteLogo from './assets/flash.png'
import { FaGitlab, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const saveToLocalStorage = (count : number) => {
    localStorage.setItem('count', String(count));
  }

    return (
    <>
      <section id="center">
        <div className="hero">
          <img src={castielImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>


        <button
          type="button"
          className="counter"
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
            saveToLocalStorage(newCount);
            console.log('Count saved to localStorage:', newCount);
          }}
        >
          Count is {count}
        </button>
      
      </section>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#docs-icon"></use>
          </svg>
          <h2>Next steps</h2>
          <p>Learn more about Vite</p>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <FaGitlab
                  color="#25D366"
                   />
                </svg>
                GitLab
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <FaWhatsapp 
                    color="#25D366"
                  />
                </svg>
                Whatsapp
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                 <FaYoutube 
                  color="#25D366"
                 />
                </svg>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
