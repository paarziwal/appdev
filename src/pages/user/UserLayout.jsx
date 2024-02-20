import PropTypes from 'prop-types';

const UserLayout = ({children}) =>{
    return (
        <div className="container">
            <header>
                
            </header>
            <main>
                {children}
            </main>
            <footer></footer>
        </div>
    )
}
UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout