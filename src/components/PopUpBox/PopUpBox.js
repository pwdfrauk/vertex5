import classes from './PopUpBox.module.css'
const PopUpbox = (props)=> {
    return (
    <div className={classes.pupUpBoxArea}>
        <div className={classes.popUpBoxContent}>
        <div className={`alert ${props.ClassName}`}>
            <h4 className="alert-heading">{props.popupTitle}</h4>
            <p>{props.popupinfo}</p>
            <hr />
            <button onClick={props.OnClick} className="btn btn-success">Ok</button>
        </div>
        </div>
    </div>
    )
    

}
export default PopUpbox;