import React from "react"

// child to parent  and siblings
function Parent() {
    const [value, setValue] = React.useState(0)
    const [someValue, setSomeValue] = React.useState(0)


    return (
        <div>
            {value}
         <Child1 setValue={setValue} value={value} someValue={someValue} setSomeValue={setSomeValue}></Child1>
         <Child2 setValue={setValue} value={value} someValue={someValue} setSomeValue={setSomeValue}></Child2>
         <button>Increment count from parent</button>
        </div>
    )
}



function Child1(props) {
    // const [someValue, setSomeValue] = React.useState(0)

    const { setValue, value } = props
    return (
        <div>
            <button onClick={() => {
                setValue(value - 1)
            }}>Decrement count from child</button>
        </div>
    )
}


function Child2(props) {
    // const [someValue, setSomeValue] = React.useState(0)
    const { setValue, value } = props
    return (
        <div>
            <button onClick={() => {
                setValue(value - 1)
            }}>Decrement count from child</button>
        </div>
    )
}







export default Parent