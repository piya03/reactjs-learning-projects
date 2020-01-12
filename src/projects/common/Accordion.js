import React from "react"

function Accordion(props) {
    const [open, setOpen] = React.useState(false)
    const { heading, containerClass } = props
    // console.log(props.children)
    return (
        <>
            <div className={containerClass}
                onClick={(e) => {
                    setOpen(!open)
                }}
            ><i class="fa fa-angle-down"></i>{heading}</div>
            {open && props.children
            }
        </>
    )
}

export default Accordion