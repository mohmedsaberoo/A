import {useCallback,useEffect,useRef,useState} from 'react'
import {T} from '../i18n'
import {store} from '../store'
import {scr} from '../scramble'
import {rm} from '../env'

export default function Intro({gl,progress}){
  const [out,setOut]=useState(rm),[gone,setGone]=useState(rm),[show,setShow]=useState(false)
  const nm=useRef(null)
  const enter=useCallback(()=>{
    if(store.entered)return
    store.entered=true;store.started=true;setOut(true)
    const nt=document.getElementById('nt');nt&&scr(nt,'ELEVEN',1200)
  },[])
  useEffect(()=>{
    if(rm){store.started=true;store.entered=true;return}
    const nt=document.getElementById('nt');if(nt)nt.textContent='MOHAMED'
    const id=setTimeout(()=>nm.current&&scr(nm.current,'ELEVEN',1500,()=>{setShow(true);const b=document.getElementById('enter');b&&b.focus()}),1700)
    return()=>clearTimeout(id)
  },[])
  useEffect(()=>{if(gl==='fail')enter()},[gl,enter])
  useEffect(()=>{if(!out)return;const id=setTimeout(()=>setGone(true),1300);return()=>clearTimeout(id)},[out])
  useEffect(()=>{ // keep the page behind the intro out of the tab order until it closes
    const els=['main','nav'].map(i=>document.getElementById(i));if(!out)els.forEach(e=>{if(e)e.inert=true})
    return()=>els.forEach(e=>{if(e)e.inert=false})
  },[out])
  if(gone)return null
  return (
    <div id="intro" className={out?'out':''} role="dialog" aria-modal="true" aria-label="Intro">
      <T as="button" k="skip" className="btn" id="skip" onClick={enter}>SKIP INTRO</T>
      <div id="ldr" aria-hidden="true"><i style={{width:progress+'%'}}/></div>
      <span className="mono" id="pct" aria-hidden="true">{progress}%</span>
      <div>
        <div id="in-name" ref={nm} aria-live="polite">MOHAMED</div>
        <T as="p" k="tag" className={'mono'+(show?' on':'')} id="in-sub">THINK BEYOND THE SURFACE.</T>
        <T as="button" k="enter" className={'btn p'+(show?' on':'')} id="enter" onClick={enter}>[ ENTER EXPERIENCE ]</T>
      </div>
    </div>
  )
}
