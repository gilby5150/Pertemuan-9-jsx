function Nav() {
    return(
    <div className="b-example-divider">
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
                <li className="nav-item"><a href="/Comment" className="nav-link">Comment</a></li>
                <li className="nav-item"><a href="/Search" className="nav-link">Search</a></li>
            </ul>
        </header>
    </div>
    )
}


export default Nav;
