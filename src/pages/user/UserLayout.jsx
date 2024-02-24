import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import "../../assets/css/UserLayout.css"


const UserLayout = ({children}) =>{
    return (
        <div className="user_container">
            <header>
                <Header/>
            </header>
            <main className="user_main">
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout