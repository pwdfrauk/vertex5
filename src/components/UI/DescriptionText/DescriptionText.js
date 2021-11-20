import classes from './DescriptionText.module.css'
const DescriptionText = (props)=> {
    return (
        <p className={classes.DescriptionText} 
        style={{
            color:`${props.Color}`, 
            fontSize: `${props.Size}`,
            fontWeight:`${props.Weight}`,
            lineHeight:`${props.LineHeight}`,
            paddingBottom: `${props.PaddingBottom}`
        }}>
            {props.children}
        </p>
    )
}
export default DescriptionText;