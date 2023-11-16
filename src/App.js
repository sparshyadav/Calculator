import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');

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

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className='mt-36 flex flex-col w-[25%] rounded-md mb-14'>
        <div className='flex flex-col items-end bg-[#262837] w-[8%] min-w-full h-20 rounded-lg'>
          <div className='pt-2 pr-4'>{previousValue}</div>
          <div className='pb-4 pr-4 pt-2 text-2xl'>{value}</div>
        </div>
        <div className='bg-[#161420] flex justify-center items-center flex-wrap gap-3 mb-6 py-4 rounded-b-lg'>
          <button className='bg-[#F5955F] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('AC')}>AC</button>
          <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('')}>()</button>
          <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('%')}>%</button>
          <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('/')}>/</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('7')}>7</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('8')}>8</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('9')}>9</button>
          <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('*')}>*</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('4')}>4</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('5')}>5</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('6')}>6</button>
          <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('-')}>-</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('1')}>1</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('2')}>2</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('3')}>3</button>
          <button className='bg-[#525298] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('+')}>+</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('0')}>0</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('.')}>.</button>
          <button className='bg-[#262837] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('DEL')}>DEL</button>
          <button className='bg-[#F5955F] h-20 w-20 rounded-md' onClick={() => buttonClickHandler('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
