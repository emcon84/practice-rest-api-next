'use client'
import {useState} from 'react'
import { Inter } from 'next/font/google'
import { SyntheticEvent } from 'react'
import { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })
interface FormData {
  name: string;
  comment: string;
}

const Home: NextPage = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    comment: '',
  });


  const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  };


  return (
    <main>      
        <h1>Rest Api</h1>
        <form onSubmit={handleSubmit}>
          <div style={{display: 'flex', flexDirection: 'column', marginLeft: '30%', marginRight: '30%'}}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
        </form>
    </main>
  )
}

export default Home;
