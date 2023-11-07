import React from 'react';

const Hero = () => {
    return (
        <>
{/* Hero */}
<div className="p-5 text-center bg-image rounded-3" style={{backgroundImage: 'url("https://lh5.googleusercontent.com/p/AF1QipPryKK0Oi4JKZ_lkpxiK_JoYvJHgaC6FayTw8T8=w426-h240-k-no")', height: 400}}>
  <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">SMP NEGERI 3 GENTENG</h1>
        <h4 className="mb-3">Ilmuku Terpadu Disini</h4>
        <a className="btn btn-outline-light btn-lg" href="#!" role="button">Bantuan</a>
      </div>
    </div>
  </div>
</div>
{/* Hero */}

        </>
    );
}

export default Hero;
