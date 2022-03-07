import {useLocation } from "react-router"
const withRouter = (Component) => {
    const Cover = (props) => {
        const history = useLocation()
        return <Component history={history} {...props} />
    }
    return Cover
}

export default withRouter