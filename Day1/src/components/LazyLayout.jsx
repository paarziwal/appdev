import { Suspense } from "react"
import PropTypes from 'prop-types'
import loading from "../assets/images/loader.gif" 

const LazyLayout = ({ component: Component, ...rest }) => {
    return ( 
        <Suspense fallback={<img src={loading} alt="Loading..." style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }} />}>
            <Component {...rest}/>
        </Suspense>
    )
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout;