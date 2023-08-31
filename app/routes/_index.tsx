import {Link} from '@remix-run/react';

export default function Index() {
  return (
   <main id="main">
   <h1 className= "text-3xl font-bold underline">Hello I'm</h1>
   <h1 id="cheryl-text">cheryl</h1>
   <h1 id="zhang-text">zhang</h1>
   <p id="developer-text">full stack developer @utsc</p>

   <Link to="/projects" id="projects-link"> Projects</Link>
   <Link to="/" id="home-link"> Home</Link>
   <Link to="/about" id="about-link"> About</Link>
   </main>
  );
}
