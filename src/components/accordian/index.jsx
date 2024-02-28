import { useState } from "react"
import data from "./data"
import './style.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null)

    function handleSingleSelection(id) {
        setSelected(id === selected ? null : id)
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div className="item">
                            <div onClick={() => handleSingleSelection(item.id)} className="title">
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === item.id ? 
                                    <div className="content">{item.answer}</div>
                                : null
                            }
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    )
}