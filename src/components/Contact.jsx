import React, { useState } from 'react'
import { db } from '../firebase'

import '../app.css'

const Contact = () => {

    // css
    const wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '50px',
        color: '#444',
        border: '1px solid #1890ff',
    }
    const checkbox = {
        height: '50px',
        width: '50px'
    }

    const wrapperIcons = {
        display: 'flex',
    }

    const adress = {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%'
    }

    const time = {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 'auto',
        padding: '10%'
    }

    const beer = {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        padding: '10%'
    }

    //Hooks
    const [name, setName] = useState('')
    const [radio, setRadio] = useState('meat')
    const [dropdown, setDropdown] = useState(1)

    const [loader, setLoader] = useState(false)

    //Firebase
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)

        db.collection("contacts")
            .add({
                name: name,
                food: radio,
                persons: dropdown,
            })
            .then(() => {
                setLoader(false)
                alert("Your message has been submitted👍")
            })
            .catch((error) => {
                alert(error.message)
                setLoader(false)
            })

        setName("")
        setRadio("")
        setDropdown("")
    }


    return (

        <div>

            <div style={wrapperIcons}>
                <div style={adress}><h5>🏠</h5> <h6><a href="https://goo.gl/maps/mvE6gd77iX2ubAzd9">Schützengasse 13, Biel</a> </h6> </div>
                <div style={time} ><h5>⌚</h5> <h6>11:00 </h6></div>
                <div style={beer} >🍻🍻🍻</div>
            </div>



            <form onSubmit={handleSubmit} className="form" style={wrapper}>

                <h1>Bitte aufüllen 🤳 😎</h1>
                <label>wer bist du?</label>
                <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <h2>meat or veggie</h2>
                <h3>Radiobutton is: {radio}</h3>
                <label>🥩: </label>
                <input type="radio" style={checkbox} checked={radio === 'meat'} value='meat' onChange={(e) => { setRadio(e.target.value) }} />
                <label >🍆</label>
                <input type="radio" style={checkbox} checked={radio === 'veggie'} value='veggie' onChange={(e) => { setRadio(e.target.value) }} />
                <label>how many?👪 {dropdown} </label>
                <select value={dropdown} onChange={(e) => { setDropdown(e.target.value) }} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>

                <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact
