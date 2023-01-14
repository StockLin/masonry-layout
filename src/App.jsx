import React from 'react';


function App() {
  const data = Array.from(Array(15).keys()).map((_, idx) => ({
    id: idx + 1,
    name: `food${idx + 1}`,
    imageUrl: `./images/food${idx + 1}.jpg`
  }));

  return (
    <div className="App">
      <div className=' bg-gray-100'>
        <h1 className=' text-3xl font-bold text-center py-8'>MasonryLayout</h1>

        <div className=' container mx-auto p-4'>
          <div className=' space-y-4 columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4'>
            {
              data?.map(d => (
                <div key={d.id} className=' relative group rounded-md overflow-hidden bg-gray-200 break-inside-avoid shadow-lg hover:scale-105 duration-300'>
                  <div className=' absolute opacity-0  w-full h-full bg-black/50 text-white text-3xl flex justify-center items-center group-hover:opacity-100 duration-300'>
                    <h3 className=' border-white border p-2 px-8 cursor-pointer rounded-md hover:bg-white hover:text-black/80 duration-300'>{d.name}</h3>
                  </div>
                  <img src={d.imageUrl} alt="none" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
