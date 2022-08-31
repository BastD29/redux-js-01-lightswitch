import './App.css';

const toggle = () => {
  return {type: 'toggle'}
}

const initialState = 'off';
export const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type){
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state;
  }
}



export default function App(props) {
  const state = props.state;
  const store = props.store;

  const bgColor = state === 'on' ? 'white' : 'black';
  const textColor = state === 'on' ? 'black' : 'white';

  const handleLightSwitchClick = () => {
    store.dispatch(toggle());
  }
  return (
    <div style={{background: bgColor, color: textColor}}>
      <button onClick={handleLightSwitchClick}>
        {state}
      </button>
    </div>
  )
}
