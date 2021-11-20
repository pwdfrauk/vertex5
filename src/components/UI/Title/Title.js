import classes from './Title.module.css'
const Title = (props)=> {
    return(
        <h2 className= {[classes.Title, props.Class].join(' ')} 
        style={{
            color:`${props.Color}`, 
            width:`${props.Width}`,
            fontSize: `${props.Size}`,
            paddingBottom: `${props.PaddingBottom}`,
            fontWeight:`${props.Bold}`
            
            }}>
        {props.children}
        </h2>
    )
}
export default Title;