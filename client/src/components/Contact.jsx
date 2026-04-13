import React, {useState, useEffect} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('') // '', 'sending', 'sent', 'error'

  useEffect(()=>{
    let t
    if(status === 'sent') t = setTimeout(()=> setStatus(''), 3500)
    return ()=> clearTimeout(t)
  },[status])

  const submit = async (e)=>{
    e.preventDefault();
    if(status === 'sending') return
    setStatus('sending')
    try{
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if(res.ok){
        setStatus('sent')
        setForm({name:'',email:'',message:''})
      } else {
        setStatus('error')
      }
    }catch(err){ setStatus('error') }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12,maxWidth:560}}>
        <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} aria-label="Name" />
        <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} aria-label="Email" />
        <textarea required placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} aria-label="Message" />
        <button className="btn btn-primary" type="submit" disabled={status==='sending'}>{status==='sending' ? 'Sending…' : 'Send'}</button>
        <div aria-live="polite">
          {status==='sent' && <div style={{color:'green'}}>Thanks — message sent.</div>}
          {status==='error' && <div style={{color:'crimson'}}>There was an error sending your message.</div>}
        </div>
      </form>
    </section>
  )
}
