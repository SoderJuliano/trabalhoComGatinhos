import React from 'react';
import "./App.css"

const Bolinhas = (selecionada) =>{

    
    const main = () =>{

        const select = () =>{
            if(selecionada.selecionada==0){
                return(
                    <div className="bolinhas-container">
                        <div className="bolao"/>
                        <div className="bolinha"/>
                        <div className="bolinha"/>
                    </div>
                )
            }else if(selecionada.selecionada==1){
                    return(
                        <div className="bolinhas-container">
                            <div className="bolinha"/>
                            <div className="bolao"/>
                            <div className="bolinha"/>
                        </div>
                    )
            }else{
                return(
                    <div className="bolinhas-container">
                        <div className="bolinha"/>
                        <div className="bolinha"/>
                        <div className="bolao"/>
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