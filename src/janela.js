import React, {Component, useState} from 'react'
import "./App.css"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import gato0 from "./gato0.jfif"
import gato1 from "./gato1.jfif"
import gato2 from "./gato2.jfif"

const Janela = () =>{
    const [janelaAmostra, setarJanela] = useState(0)

    const rederPhoto = () =>{

        if(janelaAmostra==0){
            return <img src={gato0} alt="" />
        }else if(janelaAmostra==1){
            return <img src={gato1} alt="" />
        }else if(janelaAmostra==2){
            return <img src={gato2} alt="" />
        }
    }
    const arrbk = () =>{
        if(janelaAmostra==0){
            return ''
        }else{
            return <IoIosArrowBack onClick={()=>setarJanela(janelaAmostra-1)} className="arrow1" />
        }
    }
    const arrfw = () =>{
        if(janelaAmostra==2){
            return ''
        }else{
            return <IoIosArrowForward onClick={()=>setarJanela(janelaAmostra+1)} className="arrow2" />
        }
    }
    const main = () => {
        return(
            <div className="janela">
               {arrbk()}
                    {rederPhoto()}
                {arrfw()}
            </div>
        )
    }
    const render = () =>{
        return(
            main()
        )
    }
    return render()
}
export {Janela}