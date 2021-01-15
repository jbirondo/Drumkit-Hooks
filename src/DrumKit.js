import React from 'react'
import useSound from 'use-sound'
import CHT from './sounds/DR110CHT.mp3'
import CLP from './sounds/DR110CLP.mp3'
import CYM from './sounds/DR110CYM.mp3'
import KIK from './sounds/DR110KIK.mp3'
import OHT from './sounds/DR110OHT.mp3'
import SNR from './sounds/DR110SNR.mp3'

function DrumKit(){

    const [playCHT] = useSound(CHT)
    const [playCLP] = useSound(CLP)
    const [playCYM] = useSound(CYM)
    const [playKIK] = useSound(KIK)
    const [playOHT] = useSound(OHT)
    const [playSNR] = useSound(SNR)

    return(
        <>
            <button onClick={playCHT} >CHT</button>
            <button onClick={playCLP} >CLP</button>
            <button onClick={playCYM} >CYM</button>
            <button onClick={playKIK} >KIK</button>
            <button onClick={playOHT} >OHT</button>
            <button onClick={playSNR} >SNR</button>
        </>
    )
}

export default DrumKit