import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className='profile'>
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      <div className='profile--headding-container'>
        <h1 className='profile--headding'>Anirudh MK</h1>
        <p className='profile--sub-headding'>Backend Web Develper</p>
        <p className='profile--text'>GTech Mulearn</p>
      </div>
      <div className='profile--button-container'>
        <a href="" className='profile--button'>
          <FontAwesomeIcon icon={faEnvelope} color='#000' size='lg' /><p>Email</p>
        </a>
        <a href="" className='profile--button' style={{ backgroundColor: 'tomato' }}>
          <FontAwesomeIcon icon={faLinkedin} size='lg' color='#fff' /><p style={{ color: '#fff' }}>LinkedIn</p>
        </a>
      </div>
      <div className='profile--about'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quibusdam distinctio minus voluptatibus nesciunt dolorem beatae consequuntur deleniti vero dignissimos quaerat ex fuga at doloremque odio minima rerum consectetur quam?</p>
        <h1>Interestes</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae possimus, soluta eligendi quos in amet quia libero earum corporis, voluptatibus voluptas provident accusamus quas tempore consequatur pariatur neque, magnam quisquam.</p>
      </div>
      <footer className='profile--footer'>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} size='lg' color='white' />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} size='lg' color='white' />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} size='lg' color='white' />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} size='lg' color='white' />
        </a>
      </footer>
    </div>
  )
}

export default App