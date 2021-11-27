import classes from './Input.module.css'
const Input =(props)=> {
    return(
        <>
            <label className={[classes.FormLabel, 'form-label'].join(' ')}
            style={{}}>{props.Label}</label>
            <input 
            value={props.Value}
            className={[classes.Input, 'form-control'].join(' ')}
            name={props.Name}
            type={props.Type} 
            placeholder={props.Placeholder}
            onChange = {props.OnChange}
            style={{
                background:`${props.Background}`,
                width: `${props.Width}`,
                borderColor: `${props.BorderColor}`
            }}
           required={props.Required}
             />
        </>
    )
}
export default Input;