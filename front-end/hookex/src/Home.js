import React from 'react';


function Home() {
  return (
<div className="Home" style={{ width: '100vw', height: '100vh', position: 'relative', background: '#F7F3F3' }}>
  <div className="name" style={{ width: '60%', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '2rem', fontFamily: 'Audiowide', fontWeight: '400', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>GEEK</div>
  <div className="slogan" style={{ width: '60%', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '2rem', fontFamily: 'Loved by the King', fontWeight: '400', top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>Generate the Excellence, Empower the Knowledge!</div>
  <div className="Line1" style={{ width: '70%', position: 'absolute', border: '1px black solid', top: '68%', left: '15%' }}></div>
  <div className="Project" style={{ width: '20%', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '2rem', fontFamily: 'Audiowide', fontWeight: '400', top: '80%', left: '10%' }}>Project</div>
  <div className="AboutUs" style={{ width: '20%', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '2rem', fontFamily: 'Audiowide', fontWeight: '400', top: '80%', left: '40%' }}>About us</div>
  <div className="Vision" style={{ width: '20%', position: 'absolute', textAlign: 'center', color: 'black', fontSize: '2rem', fontFamily: 'Audiowide', fontWeight: '400', top: '80%', left: '70%' }}>Vision</div>
  <div className="Ellipse2" style={{ width: '150px', height: '150px', position: 'absolute', background: '#98DFD8', borderRadius: '50%', top: '20%', left: '46%' }} src="img/eclipse.png" alt="23" />
  <img className="LogoYellow" style={{ width: '150px', position: 'absolute', top: '21%', left: '46%' }} src="img/logo_yellow.png" alt="23" />
  <div className="MenuBar" style={{ width: '120px', height: '20px', position: 'absolute', background: '#FFFFFF', top: '10px', right: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
    <img src="img/home.png" alt="Home" style={{ width: '20px', height: '20px' }} />
    <img src="img/human.png" alt="User" style={{ width: '20px', height: '20px' }} />
  </div>
</div>






  )

  }

export default Home;