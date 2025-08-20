import React from 'react'
function Buttons(){
    return(
        <div>
          <h1 className="text-base text-slate-900 font-semibold mb-4 text-left">Fully Rounded Buttons</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <button type="button"
            className="px-6 py-2.5 min-w-[200px] rounded-full cursor-pointer text-white text-sm tracking-wider font-medium border-0 outline-0 bg-blue-700 hover:bg-blue-800">Button</button>
            <button type="button"
              className="px-7 py-3 min-w-[200px] rounded-full cursor-pointer text-white text-base tracking-wider font-medium border-0 outline-0 bg-blue-700 hover:bg-blue-800">Button</button>
            <button type="button"
              className="px-9 py-3.5 min-w-[200px] rounded-full cursor-pointer text-white text-xl tracking-wider font-medium border-0 outline-0 bg-blue-700 hover:bg-blue-800">Button</button>
        </div>
       </div>
    )
}

export default Buttons;