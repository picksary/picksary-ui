import "./button.css"


export const Button = ({ children, label, stateChange, classNameAttr }) => {

    return (
        <button className={classNameAttr} type="button" onClick={stateChange}>
            {children}
            <span>{label}</span>
        </button>
    )
}