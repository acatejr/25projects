import { useState } from "react"
import data from "./data"
import './style.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(id) {
        setSelected(id === selected ? null : id)
    }

    function handleMultiSelect(id) {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(id)
        console.log(findIndexOfCurrentId)

        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(id)
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultiple(cpyMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Select</button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div className="item">
                            <div onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelect(item.id)
                                    : () => handleSingleSelection(item.id)
                            } className="title">
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection
                                    ? multiple.indexOf(item.id) !== -1 && (
                                        <div className="content">{item.answer}</div>
                                    ) : selected === item.id && (
                                        <div className="content">{item.answer}</div>
                                    )
                            }
                            {/* {
                                selected === item.id || multiple.indexOf(item.id) !== -1 ?
                                    <div className="content">{item.answer}</div>
                                    : null
                            } */}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    )
}