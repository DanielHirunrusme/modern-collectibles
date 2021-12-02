import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export const Newsletter = () => {

  const [email, setEmail] = useState(null);
  const [empty, setEmpty] = useState(true);
  const [result, setResult] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    if(email) {
      const mcResult = await addToMailchimp(email);
      setResult(mcResult);
      console.log(result);
    }
  }

  const onChange =(e) => {
    setEmail(e.target.value);
    if(e.target.value.length > 0) {
      console.log('filled')
      setEmpty(false);
    } else {
      console.log('not filled');
      setEmpty(true);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
    <form onSubmit={(e)=>handleSubmit(e)} className="form-wrapper mb-2">
     
        {/* <label for="email">Enter your email address</label> */}
        <input className={`${!empty && 'bg-black text-white'}`} onChange={(e)=> onChange(e)} placeholder="Email address" required type="email" name="email" />
     
      <button type="submit" role="submit" className={`${!empty && 'bg-black text-white'}`}>
        Subscribe
      </button>
    </form>
    {/* <p>Sign-up to receive updates from Jing Daily about future articles, collaborations, drops and more. For more information about the content we send our see our Read page.</p> */}
    <div className="mt-4 mx-auto">{result && result.msg && <div dangerouslySetInnerHTML={{ __html: result.msg }}></div>}</div>
    </div>
  )
}

export default Newsletter
