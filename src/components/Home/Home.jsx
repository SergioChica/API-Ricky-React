import React, { useState,useEffect } from 'react'
import { Header } from "../Layouts/Header/Header";
import { Main } from "../Layouts/Main/Main";
import { Cards } from '../Cards/Cards';
import { data } from 'autoprefixer';



export const Home = () => {
  const [character, setCharacter] = useState([])

  const URL = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    fetch(URL)
    .then(response => response.json() )
    .then( data => {
      setCharacter(data.results);
    })
    .catch(error => {
      alert('Error fetching data:', error)
    })
  }, [])

  return (
    <>
      <Header>
        <h1 className=' text-green-600  text-[30px] '>API Ricky and Morty - Sergio Chica</h1>
      </Header>
      <Main>
        <section className='h-full w-full flex justify-center  '>
          <div className=' h-full w-[80%] flex flex-wrap gap-4 '>
           {character.map(character => 
            <Cards
              img={character.image}
              title={character.name}
              text={character.species}
            />
          ) } 
          </div>
        </section>
      </Main>
    </>
  )
}
