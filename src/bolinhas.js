import React from 'react';
import "./App.css"

const Bolinhas = ({selecionada, triggerParentUpdate}) =>{

    console.log(selecionada)
    const main = () =>{

        const select = () =>{
            if(selecionada==0){
                return(
                    <div className="bolinhas-container">
                        <div className="ball"></div>
                        <div onClick={()=>triggerParentUpdate(0)} className="bolao"/>
                        <div onClick={()=>triggerParentUpdate(1)} className="bolinha"/>
                        <div onClick={()=>triggerParentUpdate(2)} className="bolinha"/>
                        <div className="ball"></div>
                    </div>
                )
            }else if(selecionada==1){
                    return(
                        <div className="bolinhas-container">
                            <div className="ball"></div>
                            <div onClick={()=>triggerParentUpdate(0)} className="bolinha"/>
                            <div onClick={()=>triggerParentUpdate(1)} className="bolao"/>
                            <div onClick={()=>triggerParentUpdate(2)} className="bolinha"/>
                            <div className="ball"></div>
                        </div>
                    )
            }else if(selecionada==2){
                return(
                    <div className="bolinhas-container">
                        <div className="ball"></div>
                        <div onClick={()=>triggerParentUpdate(0)} className="bolinha"/>
                        <div onClick={()=>triggerParentUpdate(1)} className="bolinha"/>
                        <div onClick={()=>triggerParentUpdate(2)} className="bolao"/>
                        <div className="ball"></div>
                    </div>
                )
            }
        }

        return(
            <div>
                {select()}
            </div>
        )
    }
    const render = () => {
        return main()
    }
    return render()
}
export {Bolinhas}