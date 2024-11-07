import musicNote from './assets/music.quarternote.3.svg'
import person2 from './assets/person.2.fill.svg'
import terminal from './assets/apple.terminal.svg'

import './App.css'

function App() {
  return (
    <div className="container is-flex is-flex-direction-column is-align-items-center
    is-justify-content-center" style={{ minHeight: '100vh' }}>
      
      <div className="is-size-2 mb-6">Coming soon!</div>
      
      <div className="columns">
        <div className="column">
          <figure className='image is-64x64'>
            <img src={musicNote} alt="Music note" />
          </figure>
        </div>
        <div className="column">
          <figure className='image is-64x64'>
            <img src={person2} alt="Music note" />
          </figure>
        </div>
        <div className="column">
          <figure className='image is-64x64'>
            <img src={terminal} alt="Music note" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default App
