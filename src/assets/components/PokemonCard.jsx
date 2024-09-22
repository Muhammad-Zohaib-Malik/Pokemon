/* eslint-disable react/prop-types */


const PokemonCard = ({pokemonData}) => {
  return (
    <div className="w-full p-10 border shadow-lg h-[400px]   ">
      <li className="flex flex-col items-center pokemon-card">
      <figure>
        <img className="w-28 h-28" src={pokemonData.sprites.other.dream_world.front_default} alt="" />
      </figure>
      <h1 className="text-2xl font-bold">{pokemonData.name}</h1>
      <p className="p-2 mt-3 text-xl text-white rounded-lg w-fit bg-emerald-500 ">
        {
          pokemonData.types.map((currType)=>currType.type.name).join(",")
        }
      </p>
     </li>

     <div className="flex flex-col gap-2 mt-5 text-center">
      <p>
        <span className="font-semibold">Height:{pokemonData.height}</span>
      </p>
      <p>
        <span className="font-semibold">Weight:{pokemonData.weight}</span>
      </p>
      <p>
        <span className="font-semibold">Base Experience:{pokemonData.stats[5].base_stat}</span>
      </p>
     </div>
      
    </div>
  )
}

export default PokemonCard
