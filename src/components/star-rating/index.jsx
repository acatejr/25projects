import { useEffect, useState } from "react";
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function StarRating({numStars=5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(idx) {
        setRating(idx)
    }

    function handleMouseEnter(idx) {
        setHover(idx)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return <div className="star-rating">
        {[...Array(numStars)].map((_, index) => {
                index += 1                
                return ( <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick = {() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    />
                )
            })
        }
    </div>

}