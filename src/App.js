import './style.css';
import qrCodePng from './images/image-qr-code.png';

function App() {
  return (
    <div className='page'>
      <main>
        <Component />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function Component() {
  return (
    <div className='component'>
      <img src={qrCodePng} alt='' />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://www.frontendmentor.io/profile/deserthawk">deserthawk</a>.
    </div>
  );
}

export default App;