import {navLinks} from "../constants";
import {getPublicPath} from "../utils/publicPath.js";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img  src={getPublicPath("/logo.svg")} alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src={getPublicPath("/search.svg")} alt="Search" />
                    </button>
                    <button>
                        <img src={getPublicPath("/cart.svg")} alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
