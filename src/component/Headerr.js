import React from 'react';
import SMP from "../SMP.png";
const Header = () => {
    return (
<>
  <nav className="navbar bg-body-tertiary primary">
    <div className="container-fluid">
      <a className="navbar-brand">
      <img style={{marginRight : "20px"}} src={SMP} alt="Logo" width={60} height={54}  className="d-inline-block align-text-top" />
        SMP NEGERI 3 GENTENG
      </a>
    </div>
  </nav>
</>

    );
}

export default Header;
