import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [bracket, setBracket] = useState(false);
  const [dark, setDark] = useState(true);

  function buttonClickHandler(buttonValue) {
    if (buttonValue === 'AC') {
      setValue('');
      setPreviousValue('');
    }
    else if (buttonValue === '=') {
      try {
        setPreviousValue(value);
        setValue(eval(value).toString());
      }
      catch (error) {
        setValue("Error");
      }
    }
    else if (buttonValue === 'DEL') {
      setValue(value.slice(0, -1));
    }
    else {
      setValue((prevValue) => prevValue + buttonValue);
    }
  }

  function bracketHandler() {
    if (!bracket) {
      setValue((prevValue) => prevValue + '(');
      setBracket(!bracket);
    }
    else {
      setValue((prevValue) => prevValue + ')');
      setBracket(!bracket);
    }
  }

  function toggleTheme() {
    if (dark) {
      setDark(!dark);
    }
    else {
      setDark(!dark);
    }
  }

  return (
    <div className={`w-full h-full flex flex-col justify-center items-center ${!dark ? 'bg-[#f3f3f6]' : 'bg-[#1E1C27]'}`}>
      <div className={`w-full flex justify-between items-centerbg ${dark ? 'bg-[#262837]' : 'bg-[#efeff2]'}`}>
        <h1 className={`m-6 font-bold text-2xl ${dark ? 'text-white' : 'text-black'}`}>MyCalc</h1>
        <div className='m-6 text-2xl'>
          {!dark
            ? <i class="fa-solid fa-moon text-black" onClick={toggleTheme}></i>
            : <i class="fa-solid fa-sun text-yellow-500" onClick={toggleTheme}></i>
          }
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className='mt-16 flex flex-col w-[25%] rounded-md mb-14 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
          <div className={`flex flex-col items-end ${dark ? 'bg-[#262837]' : 'bg-[#FFFFFF]'} w-[8%] min-w-full h-[100px] rounded-lg`}>
            <div className='pt-2 pr-4 opacity-50'>{previousValue}</div>
            <div className='pb-4 pr-4 pt-2 text-2xl'>{value}</div>
          </div>
          <div className={`${dark ? 'bg-[#161420]' : 'bg-[#F2F2F7]'} flex justify-center items-center flex-wrap gap-3 py-4 rounded-b-lg`}>
            <button className='bg-[#F5955F] h-20 w-20 rounded-md text-xl' onClick={() => buttonClickHandler('AC')}>AC</button>
            <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={bracketHandler}>()</button>
            <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('%')}>%</button>
            <button className='bg-[#525298] h-20 w-20 rounded-md text-xl' onClick={() => buttonClickHandler('/')}>/</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('7')}>7</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('8')}>8</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('9')}>9</button>
            <button className='bg-[#525298] h-20 w-20 rounded-md text-xl' onClick={() => buttonClickHandler('*')}>*</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('4')}>4</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('5')}>5</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('6')}>6</button>
            <button className='bg-[#525298] h-20 w-20 rounded-md text-xl' onClick={() => buttonClickHandler('-')}>-</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('1')}>1</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('2')}>2</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('3')}>3</button>
            <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('+')}>+</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('0')}>0</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('.')}>.</button>
            <button className={`h-20 w-20 rounded-md text-xl ${dark ? 'bg-[#262837] text-white' : 'bg-[#FFFFFF] text-black'}`} onClick={() => buttonClickHandler('DEL')}>DEL</button>
            <button className='bg-[#F5955F] h-20 w-20 rounded-md text-xl' onClick={() => buttonClickHandler('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
