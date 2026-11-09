import {memo} from 'react'
import {T} from '../i18n'
import {store} from '../store'
const hv=i=>({onMouseEnter:()=>{store.hov=i},onFocus:()=>{store.hov=i},onMouseLeave:()=>{store.hov=-1},onBlur:()=>{store.hov=-1}})
function Expertise(){
  return (
<section id="expertise">
<T as="h2" k="e_h" className="rv">SIX DISCIPLINES.<br/>ONE MINDSET.</T>
<T as="p" k="e_hint" className="hint mono">HOVER OR FOCUS A CARD TO PULL ITS 3D OBJECT FORWARD</T>
<div className="grid" id="ex">
<div className="card glass rv" tabIndex={0} {...hv(0)}><span className="n mono">01</span><T as="h3" k="e1t">RED TEAM &amp; ETHICAL HACKING</T><T as="p" k="e1d">Understanding offensive security methodologies and authorized security testing.</T></div>
<div className="card glass rv" tabIndex={0} {...hv(1)}><span className="n mono">02</span><T as="h3" k="e2t">NETWORK SECURITY</T><T as="p" k="e2d">Exploring network architecture, protocols, traffic analysis, and network protection.</T></div>
<div className="card glass rv" tabIndex={0} {...hv(2)}><span className="n mono">03</span><T as="h3" k="e3t">WEB APPLICATION SECURITY</T><T as="p" k="e3d">Studying application vulnerabilities, security testing, and secure development principles.</T></div>
<div className="card glass rv" tabIndex={0} {...hv(3)}><span className="n mono">04</span><T as="h3" k="e4t">REVERSE ENGINEERING</T><T as="p" k="e4d">Exploring software behavior, binary analysis concepts, and application internals.</T></div>
<div className="card glass rv" tabIndex={0} {...hv(4)}><span className="n mono">05</span><T as="h3" k="e5t">CRYPTOGRAPHY</T><T as="p" k="e5d">Understanding encryption, hashing, cryptographic principles, and secure communication.</T></div>
<div className="card glass rv" tabIndex={0} {...hv(5)}><span className="n mono">06</span><T as="h3" k="e6t">SECURITY RESEARCH</T><T as="p" k="e6d">Technical investigation, continuous learning, and practical security analysis.</T></div>
</div>
</section>
  )
}

export default memo(Expertise)
