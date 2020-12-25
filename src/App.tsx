import React, {useEffect, useState} from 'react';
import Life from "./components/Life";
import {useDispatch, useSelector} from "react-redux";
import {countsAction, widthAction} from "./redux/actions";
import {ReducersType} from "./redux/store";

const App:React.FC = () => {
  const [flShow, setFlShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const count: number = useSelector<ReducersType, number>(state => state.count);
  const width = useSelector<ReducersType, number>(state => state.width);
  function getStyle(): object {

    return {display: 'flex', flexDirection: window.innerHeight > width ? 'column' : 'row'};
  }
  function onChangeHandler(event: any) {
    dispatch(countsAction(event.target.value));
  }
  function onClickShow() {
    setFlShow(true);
  }
  function getLifeInstances(): JSX.Element[] {
    const res: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      res.push(<Life key={i}/>)
    }
    return res;
  }

  useEffect(() => {
    function handlerResize() {
      dispatch(widthAction(window.innerWidth));
    }
    window.addEventListener('resize',  handlerResize);
    return (() => window.removeEventListener('resize', handlerResize))
  }, [])
  return <div style={getStyle()}>
    {!flShow && <div>
      <label>Enter number of the Life instances</label>
      <input onChange={onChangeHandler}/>
      <button onClick={onClickShow}>Show Life Instances</button>
    </div>}
    {flShow && getLifeInstances()}
  </div>
}


export default App;
