import PropTypes from 'prop-types'
import "../assets/css/admin.css"

const AdminLayout = ({children}) =>{
    return ((
        <div className="admin_container">
            <aside>
                {/*Sidenav*/}
            </aside>
            <main>
                {children}
            </main>
        </div>
    ))
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AdminLayout