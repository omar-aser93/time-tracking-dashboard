import { useState } from 'react';
import data from './data.json';

const App = () => {
  const [timeFrame, setTimeFrame] = useState('daily');
  return (
    <main className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-8 md:px-25 py-20 md:py-65  bg-[hsl(226,43%,10%)] font-['Rubik']">
      <section className="flex flex-col gap-4 w-full rounded-[16px] bg-[hsl(235,46%,20%)] md:w-[22%] ">
       <div className="rounded-[20px] bg-[#5746EA] p-8 flex md:block">
        <img src="./images/image-jeremy.png" alt="profile" className='w-20 h-20 rounded-[100%] border-2 border-white mb-2 md:mb-10 mr-5' />
        <div className='flex flex-col'>
          <p className='text-[hsl(236,59%,77%)]'>Report for</p>
          <h1 className='text-white text-[20px] md:text-[40px] leading-[45px] font-light mb-0 md:mb-13'> Jeremy Robson</h1>
       </div>
       </div>
       <div className="flex flex-row items-center justify-between gap-4 px-8 py-2 md:flex-col md:items-start mb-2 md:mb-0">
        <p onClick={() => setTimeFrame('daily')} className={`${timeFrame === 'daily' ? 'text-white' : ''} text-[hsl(235,45%,61%)] text-lg hover:cursor-pointer hover:text-white`}>Daily</p>
        <p onClick={() => setTimeFrame('weekly')} className={`${timeFrame === 'weekly' ? 'text-white' : ''} text-[hsl(235,45%,61%)] hover:cursor-pointer hover:text-white`}>Weekly</p>
        <p onClick={() => setTimeFrame('monthly')} className={`${timeFrame === 'monthly' ? 'text-white' : ''} text-[hsl(235,45%,61%)] hover:cursor-pointer hover:text-white`}>Monthly</p>
       </div>
      </section>
      <section className='w-full md:w-[75%] h-full flex flex-wrap gap-8 flex-col md:flex-row'>
        {data.map((item) => (          
          <div key={item.title} className={`flex flex-col gap-4 rounded-[16px] w-full md:w-[30%] overflow-hidden`} style={{ backgroundColor: item.bg }}>          
            <div className="relative h-10"><img src={`./images/icon-${item.title.toLowerCase()}.svg`} alt="icon" className='absolute right-4 top-[-10px]' /></div>          
            <div className="flex flex-col justify-between bg-[hsl(235,46%,20%)] rounded-[16px] h-full z-10 p-7 hover:bg-[#34397B] hover:cursor-pointer">
              <div className="flex justify-between items-center mb-2 md:mb-6">
                <p className="text-white text-lg">{item.title}</p>
                <img src='./images/icon-ellipsis.svg' alt="icon" className='hover:cursor-pointer' />
              </div>
              <div className='flex flex-row items-center justify-between md:flex-col md:justify-start md:items-start'>
                <h2 className="text-white text-4xl md:text-6xl font-light">{item.timeframes[timeFrame].current}hrs</h2>
                <p className="text-[hsl(235,45%,61%)]">Last {timeFrame === 'daily' ? 'Day' : timeFrame === 'weekly' ? 'Week' : 'Month'} - {item.timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>                 
        ))}
      </section>
      
    </main>    
  );
};

export default App;
