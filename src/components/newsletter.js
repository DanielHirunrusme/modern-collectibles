import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export const Newsletter = () => {

  const [email, setEmail] = useState(null);
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

  return (
    <div className="max-w-4xl mx-auto">
    <form onSubmit={(e)=>handleSubmit(e)} className="form-wrapper mb-2">
      <div className="input-wrapper">
        {/* <label for="email">Enter your email address</label> */}
        <input onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email address" required type="email" name="email" />
      </div>
      <button type="submit" role="submit">
        Subscribe
      </button>
    </form>
    {/* <p>Sign-up to receive updates from Jing Daily about future articles, collaborations, drops and more. For more information about the content we send our see our Read page.</p> */}
    <div className="mt-4 max-w-2xl mx-auto">{result && result.msg && <div dangerouslySetInnerHTML={{ __html: result.msg }}></div>}</div>
    </div>
  )
}

export default Newsletter
