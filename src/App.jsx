import { useEffect, useState } from 'react'

function App() {
  const [activeKey, setActiveKey] = useState('');
  const [soundName, setSoundName] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      const validKeys = ['Q','W','E','A','S','D','Z','X','C'];
      if (validKeys.includes(key)) {
        playSound(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.addEventListener("keydown", handleKeyPress);
  }, [])
    
  const playSound = (key) => {
    const audioElement = document.getElementById(key)
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setActiveKey(key);
    }
  }
  // INTEGRA LA FUNZIONE
  const displaySound = (key) => {
    const currentAudio = drumKeys.find((keyData) => keyData.keyTrigger === key);
    if (currentAudio) {
      setSoundName(currentAudio.id)
    }
   };

  return (
    <div id="drum-machine">
      <h1>Try this drum machine</h1>
    <div id="display">
      {drumKeys.map((keyData) => (
      <DrumKey
        key={keyData.id}
        {...keyData} 
        isActive={activeKey === keyData.keyTrigger}
        onClick={() => {
          playSound(keyData.keyTrigger); 
          displaySound(keyData.keyTrigger);
        }}
      />
    ))}
    <div id="sound-display">
      <p className='p-no-higlight'>{soundName}</p>
    </div>
     </div>
     </div>
  )
}


const DrumKey = ({ id, sound, keyTrigger, active, onClick}) => {
  return (
    <div id={id} className='drum-pad' onClick={onClick}>
      <p className="p-no-higlight">{keyTrigger}</p>
      <audio className='clip' src={sound} id={keyTrigger} />
    </div>
  )
}

const drumKeys = [
  {
    id: "Heater1",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    keyTrigger: "Q"
  },
  {
    id: "Heater2",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    keyTrigger: "W"
  },
  {
    id: "Heater3",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    keyTrigger: "E"
  },
  {
    id: "Heater4",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    keyTrigger: "A"
  },
  {
    id: "Clap",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    keyTrigger: "S"
  },
  {
    id: "DiscOH",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    keyTrigger: "D"
  },
  {
    id: "KickNHat",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    keyTrigger: "Z"
  },
  {
    id: "Kick",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    keyTrigger: "X"
  },
  {
    id: "Drum",
    sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    keyTrigger: "C"
  }
];

export default App
