import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  wallpaper from './background-image.jpg';
import'./App.css'; // Custom CSS styles

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">My Website</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="app-main">
        <section className="jumbotron">
          <div className="container">
            <h1 className="display-4">Welcome to my website!</h1>
            <p className="lead">Feel free to explore and learn more about me.</p>
          </div>
        </section>
        <section className="app-features">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="feature-item">
                  <i className="fa fa-code fa-4x"></i>
                  <h3>Web Development</h3>
                  <p>High-quality and responsive web development services tailored to your needs.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <i className="fa fa-mobile fa-4x"></i>
                  <h3>Mobile Apps</h3>
                  <p>Design and development of stunning mobile applications for Android and iOS.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <i className="fa fa-paint-brush fa-4x"></i>
                  <h3>UI/UX Design</h3>
                  <p>Creating visually appealing and user-friendly interfaces for exceptional user experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="app-footer text-center">
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

