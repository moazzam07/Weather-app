import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen flex flex-col">
      <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="flex flex-col bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 class="md-8 text-4x1 ml-3 text-xl text-center">Weather App</h1>
          <div class="flex-1 flex flex-col items-center justify-center mt-8">
            <Image 
              src="/images/perfect-day.svg"
              width="200"
              height="150"
            />           
          </div>
          <div class="flex-1 flex flex-col mt-8 items-center">
            <h2>Find Weather of your city</h2>
          </div>
          <div class="flex-1 flex flex-col mt-7 items-center">
            <input
              type="text"
              class="block border border-black w-80 p-3 rounded mb-4"
              name="City"
              placeholder="City" 
            />
          </div>
        </div>  
      </div>
    </div>
 )
}
