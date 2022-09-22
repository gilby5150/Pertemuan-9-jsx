import React from 'react';
class Nav extends React.Component {
    render() {
        return (
            <div class="b-example-divider">
                <header class="d-flex justify-content-center py-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="/Contact" class="nav-link">Contact</a></li>
                        <li class="nav-item"><a href="/Comment" class="nav-link">Comment</a></li>
                    </ul>
                </header>
            </div>
        )
    }
}


export default Nav;
