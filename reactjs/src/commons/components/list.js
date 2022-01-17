import data from "./data/data.js"
import Menu from './menu'

function list() {
    return(
        <>
            <h1>list</h1>
            <Menu items={data}/>
        </>
        
    )
}

export default list;