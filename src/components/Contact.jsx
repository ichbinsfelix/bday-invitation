import React, { useState } from 'react'
import { db } from '../firebase/firebase'

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
    }

    const size = {
        fontSize: '35px'
    }

    const margin = {
        margin: '35px',
        fontSize: '35px'
    }

    const wrapperIcons = {
        display: 'flex',
        marginBottom: '10px'
    }

    const adress = {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
        fontSize: '1.5rem'
    }

    const time = {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 'auto',
        padding: '10%',
        fontSize: '1.5rem'
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
                alert("grazie mille, see you at the corner👍")
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
            </div>


            <form onSubmit={handleSubmit} className="form" style={wrapper}>

                <h1>Bitte aufüllen 🤳 😎</h1>
                <label style={margin}>wer bist du?</label>
                <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <h2 style={margin}>meat or veggie ?</h2>
                <select style={size} value={radio} onChange={(e) => { setRadio(e.target.value) }} >
                    <option style={size} value='meat' defaultValue >&#129385; meat</option>
                    <option style={size} value='veggie'>🍆 veggie</option>
                </select>
                <label style={margin}>wieviel leute? </label>
                <select style={margin} value={dropdown} onChange={(e) => { setDropdown(e.target.value) }} >
                    <option style={size} value={1} defaultValue >1</option>
                    <option style={size} value={2}>2</option>
                    <option style={size} value={3}>3</option>
                    <option style={size} value={4}>4</option>
                    <option style={size} value={5}>5</option>
                    <option style={size} value={6}>6</option>
                </select>

                <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                    Wuhuuuu Saufeeeen
                </button>
            </form>
        </div>
    )
}

export default Contact
