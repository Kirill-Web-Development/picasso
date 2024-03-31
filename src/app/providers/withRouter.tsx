import { BrowserRouter } from "react-router-dom"


export const withRouter = (Component: React.ComponentType) => (...props : any) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Component {...props}/>
        </BrowserRouter>
    )
}