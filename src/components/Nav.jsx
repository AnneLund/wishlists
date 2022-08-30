import {Link} from 'react-router-dom'

const nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="../wishlists">Ønskesedler</Link>
                </li>
                {/* <li>
                    <Link to="../valdemar">Valdemar</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default nav;