import React, { useEffect, useState } from "react";
import { Button } from "@storybook/components";
import { useArgs,useParameter  } from "@storybook/manager-api";

export const PanelContent: React.FC = ({

}) => {
  const [args, updateArgs,resetArgs] = useArgs();
  const stateMachine = useParameter('stateMachine',[])
  const [stateMachineIndex,setStateMachineIndex] = useState(0)
  const [sleepInterval, setSleepInterval] = useState(1000);
  const handleInputChange = (e:any) => {
    setSleepInterval(e.target.value);
  };
  const [playInProgress,setPlayInProgress] = useState(false);

  useEffect(() => {
      if(stateMachine.length>0)updateArgs(stateMachine[0]);

  }, []);
  return(
          <>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            secondary
            small
            style={{ margin: '10px' }}
            onClick={
              ()=>{
                if(stateMachineIndex+1<stateMachine.length){
                updateArgs(stateMachine[stateMachineIndex+1]);
                console.log(stateMachineIndex+1);
                setStateMachineIndex(prev => prev+1);
              }
              }}
              >
            Increment state
          </Button>
          <Button
            secondary
            small
            style={{ margin: '10px' }}
            onClick={
              ()=>{
                if(stateMachineIndex>0){
                updateArgs(stateMachine[stateMachineIndex-1]);
                console.log(stateMachineIndex-1);
                setStateMachineIndex(prev => prev-1);}
              }}
              >
            Decrement state
          </Button>
          </div>
          <br />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <label htmlFor="sleepInterval">Time between transition (ms): </label>
          <input
            style={{ margin: '5px' }}
            id="sleepInterval"
            type="text"
            value={sleepInterval}
            onChange={handleInputChange}
            />
          </div> 
          <br />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>         
          <Button
            secondary
            small
            style={{ margin: '5px' }}
            onClick={
              async ()=>{
                if(playInProgress)return;
                setPlayInProgress(true);
                for(let i=0;i<stateMachine.length;i++){
                  updateArgs(stateMachine[i]);
                  await new Promise(resolve => setTimeout(resolve, sleepInterval));
                }
                setPlayInProgress(false);
              }}
              >
            Play State
          </Button>
          </div>
            </>
  )
};
