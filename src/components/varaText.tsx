import {useEffect} from 'react';
import Vara from 'vara';

function VaraText({ text }: { text: string }) {
    useEffect(() => {
      var vara = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: text,
            fontSize: 40,
            strokeWidth: 0.7,
          },
        ]
      );
    }, []);
  
    return (
        <div className='p-6 max-w-m mx-auto bg-white rounded-xl shadow-lg flex flex-col justify-center items-center space-x-4 mb-4'>
             <div id="vara-container" className=""></div>
        </div>
    );
  }
  export default VaraText