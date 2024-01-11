import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import ig from './assets/instagram.png';
import gb from './assets/github.png';
import lc from './assets/leetcode.png';

function App() {
  return (
    <div className="App">
           <div className='sideBar'>
            <div className='upperSide'>
                <div className='upperSideTop'><img src={gptLogo} alt='logo' className='logo'/><span className='brand'>My GPT</span> </div>
                  <button className='midBtn'><img src={addBtn} alt='plus button' className='addBtn'/>New Chat</button>
                  <div className='upperSideBottom'>
                    <button className='query'>
                    <img src={msgIcon} alt=''/>What is Programming
                    </button>
                    <button className='query'>
                    <img src={msgIcon} alt=''/>What is Programming
                    </button>
                  </div>
            </div>
            <div className='lowerSide'>
                
                <div className='listItems'><a href="https://www.instagram.com/virajj042" target="_blank" rel="noopener noreferrer"><img src={ig} alt='instagram' className='instagram' style={{cursor:'pointer'}}/>Instagram</a></div>
                <div className='listItems'><a href="https://www.github.com/VRJVOID" target="_blank" rel="noopener noreferrer"><img src={gb} alt='github' className='github' style={{cursor:'pointer'}}/>Github</a></div>
                <div className='listItems'><a href="https://www.leetcode.com" target="_blank" rel="noopener noreferrer"><img src={lc} alt='instagram' className='linkedIn' style={{cursor:'pointer'}}/>LinkedIn</a></div>
                             
            </div>
            </div>         
            <div className='main'>
             
            </div>
    </div>
  );
}

export default App;
