import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'


const TypeWriter = () => {

    //css
    const wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
        paddingTop: '50px'
    }

    return (
        <div style={wrapper}>

            <TypeWriterEffect
                textStyle={{
                    fontFamily: 'Red Hat Display',
                    color: '#3F3D56',
                    fontWeight: 800,
                    fontSize: '3em',
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                    'Hallo Freunde der Sonne, es ist wieder soweit 🌞',
                    'Impfseidank, können Tim & Felix wieder Ihren Geburtstag Feiern 🎉 ',
                    'Gefeiert wird wie letztes Jahr an der Schützengasse 13 in Biel 🇨🇭',
                    'Es gibt Weisswürste und Bier (auch als veggie variante) 🍆',
                    'Wir freuen uns auf euch 🍺',
                ]}
                multiTextDelay={1000}
                typeSpeed={20}
            />

        </div>
    )
}

export default TypeWriter
