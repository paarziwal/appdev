import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Navbar';
const UserLayout = ({children}) =>{
    return (
        <div className="container">
            <header>
                <Header/>
            </header>
            <main>
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