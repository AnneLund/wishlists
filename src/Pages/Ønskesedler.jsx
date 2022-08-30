import {Link, Routes, Route} from 'react-router-dom'


const Wishlists = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/rebecca">Rebeccas ønskeseddel</Link>
                </li>
                <li>
                    <Link to="/valdemar">Valdemars ønskeseddel</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Wishlists;