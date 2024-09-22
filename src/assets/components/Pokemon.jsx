import { useState } from "react";
import { useEffect } from "react"
import PokemonCard from "./PokemonCard";


const Pokemon = () => {
  const [pokemon,setPokemon]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [search,setSearch]=useState("")
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res=await fetch(API)
      const data=await res.json()

      const detailedPokemon=data.results.map(async(currPokemon)=>{
        const res=await fetch(currPokemon.url)
        const data=await res.json()
        return data
      })
      

      const detailedResponse=await Promise.all(detailedPokemon)
      
      setPokemon(detailedResponse)
      setLoading(false)
      console.log(detailedResponse)

    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error)
    }
    
  }

  


  useEffect(()=>{
    fetchPokemon()
  },[])

  const seaarcData=pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(search.toLowerCase()))



  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>Error: {error.message}</h1>
  }
  return (
    <div className="max-w-[1200px] mx-auto p-10">
      <h1 className="mb-10 text-4xl font-bold text-center">Pokemon</h1>
      <div className="flex items-center justify-center ">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search Pokemon" className="w-[32] p-2 rounded-md border-2 border-gray-300 outline-none" />
      </div>
      <div className="">
        <ul className="grid w-full grid-cols-1 gap-10 p-10 rounded-lg sm:grid-cols-2 md:grid-cols-3 ">
         {
          seaarcData.map((currPokemon)=>(
            <PokemonCard key={currPokemon.id} pokemonData={currPokemon}/>
          )
         )
        }
        {
          search.length>0 && seaarcData.length===0 && (
            <h1 className="text-2xl font-bold text-center">No search result</h1>
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default Pokemon
