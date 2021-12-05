
const Title = (props)=> {
    return(
        <h2 className={`${props.Class} ${props.Animate}`}
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