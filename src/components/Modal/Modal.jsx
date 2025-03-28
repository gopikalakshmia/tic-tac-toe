import { useEffect } from 'react';
import '../Modal/Modal.css';
import Confetti from "react-confetti";
import {  useWindowSize } from "react-use";
import victorySound from "../../assets/Victory.mp3";
export default function Modal({ open,handleReset,winner }) {
    const {width,height}=useWindowSize();
    useEffect(()=>{
      if(winner){
        const audio=new Audio(victorySound);
        audio.volume = 0.7; 
        audio.play();
      
      }
    },[winner])
  return (
    <>
      {open && (
        <div className="popUp">
           <Confetti  width={width} height={height}  gravity={0.3}  // Increase gravity for faster fall
        initialVelocityX={10} // Faster horizontal spread
        initialVelocityY={15} // Faster upward burst
        tweenDuration={20} />
          <div className='popContent'>
          <h1>🎉 Player {winner} Wins! 🎉</h1>
          <p>Great job! Click below to play again.</p>
          <button onClick={()=>handleReset()}>Restart</button>
          </div>
          
        </div>
      )}
    </>
  );
}
