import React, { useState } from 'react'
import useSound from 'use-sound'
import CHT from './sounds/DR110CHT.mp3'
import CLP from './sounds/DR110CLP.mp3'
import CYM from './sounds/DR110CYM.mp3'
import KIK from './sounds/DR110KIK.mp3'
import OHT from './sounds/DR110OHT.mp3'
import SNR from './sounds/DR110SNR.mp3'

function DrumKit(){

    const [play] = useSound(SNR)

    return(
        <button onClick={play} >Hello World</button>
    )
}

export default DrumKit