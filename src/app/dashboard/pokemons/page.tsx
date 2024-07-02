import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";



const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons: SimplePokemon[] = data.results.map(( pokemon ) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemon&#39;s List <small>(static)</small></span>
            <PokemonGrid pokemons={ pokemons } />
        </div>
    );
}