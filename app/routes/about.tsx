import {Link} from '@remix-run/react';

export default function About() {
  return (
   <>
   <h1>About page</h1>
   <Link to="/projects" id="projects-link"> Projects</Link>
   <Link to="/" id="home-link"> Home</Link>
   <Link to="/about" id="about-link"> About</Link>
   
   </>
  );
}