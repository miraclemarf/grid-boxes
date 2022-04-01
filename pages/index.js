import { useState } from 'react'
import styles from '../styles/Masonry.module.css'

export default function Masonry() {
    const arrColor =
        ['maroon', 'aqua', 'teal', 'fuchsia', 'lime', 'yellow', 'silver', 'darkgoldenrod', 'darkorange']

    const [data, setShuffle] = useState(arrColor)
    const handleClick = (event) => {
        setShuffle([...arrColor.sort(() => Math.random() - 0.5)])
    };
    return (
        <div>
            <div className={styles.container}>
                {
                    data.map((item, index) =>
                        <div onClick={handleClick} key={index} style={{ backgroundColor: item }}>{index + 1}</div>
                    )
                }
            </div>
        </div>

    )
}
