import React from 'react';
import '../css/Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">The best of young adult books. Young-adult books are books marketed to adolescents, roughly between the ages of 12 and 17, and usually feature main characters in that age range.</p>
              </div>
              <div className="col-sm-4 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="#" className="text-white">Like on Facebook</a></li>
                  <li><a href="#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand">Library App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
      
      {this.props.children}

      <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Library APP is &copy; kami</p>
      </div>
    </footer>
    </div>
    );
  }
}

export default Nav;
