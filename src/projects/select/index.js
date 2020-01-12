import React from "react"


let selectdata = [{
    value: 'aa',
    label: 'labela'
}, {
    value: 'bb',
    label: 'labelb'
}, {
    value: 'cc',
    label: 'labelc'
}, {
    value: 'dd',
    label: 'labelcd'
}]
function Select() {
    return (

        <select>
            {selectdata.map((elem,index) => {
            return (<option value={elem.value} key={index}>{elem.label}</option>)
            })}
        

        </select>
    )
}
export default Select;
