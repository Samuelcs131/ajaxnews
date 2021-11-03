import { Link } from "react-router-dom" 

const Nav = () => {


    return (
<div className="container">
<header className="blog-header py-3">
  <div className="row flex-nowrap justify-content-between align-items-center">
    <div className="text-center">
      <a className="blog-header-logo text-dark fs-2" href="/">Ajax News</a>
    </div>
  </div>
</header>
      
      
     
<hr  className="mb-0 mt-0"/>
<div className="nav-scroller py-1 mb-2">
  <nav className="nav d-flex justify-content-between">
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/HTML5`}}>HTML5</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/CSS3`}}>CSS3</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/JavaScript`}}>JavaScript</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/NodeJs`}}>NodeJs</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/Sass`}}>Sass</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/ReactJs`}}>ReactJs</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/MySQL`}}>MySQL</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/Design`}}>Design</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/Angular`}}>Angular</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/SweetAlert2`}}>SweetAlert2</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/Pyhton`}}>Pyhton</Link>
    <Link className="p-2 link-secondary" to={{pathname: `/categoria/Java`}}>Java</Link>
  </nav>
</div>
</div>
     );
}
 
export default Nav;