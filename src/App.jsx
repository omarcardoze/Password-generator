import { useState } from 'react'
import { CopyIcon, CopiedIcon } from './components/CopyIcon';
import useGenerator from './hooks/useGenerator'
import { letters } from './utils/letters'

function App() {
  const [password, setPassword] = useState('Your password here!')
  const [isCopied, setIsCopied] = useState(false);
  const [rangeValue, setRangeValue] = useState(8)

  let newPasswordGenerated = ''

  const { copyClipboard } = useGenerator(password, setIsCopied)

  const generatePassword = () => {

    for (let index = 0; index < rangeValue; index++) {
      const generations = letters[Math.floor(Math.random() * (letters.length))]

      newPasswordGenerated += generations
    }

    setPassword(newPasswordGenerated)
  }

  const Handlerange = (event) => {
    setRangeValue(event.target.value)
  }

  return (
    <main className="container">
      <div className="container-generator">
        <h1>Password Generator</h1>

        <div className='password-generated'>
          {password}
          <a onClick={copyClipboard} title='Copy'>
            {isCopied ? <CopiedIcon /> : <CopyIcon />}
          </a>
        </div>

        <p>Password length:</p>

        <div className='range-container'>
          <p className="length-password">{rangeValue}</p>
          <input title='Password length' onChange={Handlerange} value={rangeValue} type="range" min="8" max="16" step="1" />
        </div>

        <button onClick={generatePassword} className="btn">GENERATE</button>
      </div>
    </main>
  )
}

export default App
