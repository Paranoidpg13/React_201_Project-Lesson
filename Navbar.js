import { useNavigate, Link } from "react-router-dom";

const Navbar = ({searchText, setSearchText}) => {
    const navigate = useNavigate()
    const updateSearchText = (e) => {
        navigate('/search')
        setSearchText(e.target.value)
    }
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">Movie Browser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/*" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="">Action</Link></li>
                <li><Link className="dropdown-item" to="">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} />
            <button className="btn btn-outline-success" type="submit" onClick={setSearchText}>Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
  }
/*
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ searchText, setSearchText }) => {

    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi programatik

    // make a state to save the current user input value
    const [inputValue, setInputValue] = useState(searchText)

    // Set the Input Value
    const setInput = (e) => {
        setInputValue(e.target.value);
    }

    // Function For Search Button and setSearchText AFTER: THE RIGHT WAY
    const submitSearchHandler = (event) => {
        // What Happen After the search button being triggered:
        event.preventDefault(); // to prevent refresh
        setSearchText(inputValue); // the inputValue will assigned to searchText
        navigate('/search'); // it will navigate to search endpoint

    };

    // // Function For SetUpdateSearchText BEFORE THE WRONG WAY
    // const updateSearch = (event) => {
    //     // Mengupdate state searchText dengan nilai input
    //     // event.target.value adalah nilai dari input search
    //     setSearchText(event.target.value);
    // };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                {/* Pakai Link Bukan <a> dan to="" bukan href="" */} 
/*
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={submitSearchHandler}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        value={inputValue} 
                        onChange={setInput}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
*/
export default Navbar;
