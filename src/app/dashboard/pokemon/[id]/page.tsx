import { Pokemon } from "@/pokemons";

interface Props {
    params: { id: string }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon: Pokemon = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`,
        { cache: 'force-cache' }
    ).then(res => res.json());
    console.log(pokemon.name)

    return pokemon;
}

export default async function PokemonPage({ params }: Props) {
    const pokemon = await getPokemon(params.id)
    return (
        <div>
            <h1>
                Pokemon {params.id}
            </h1>
            <div>
                {JSON.stringify(pokemon)}

            </div>
        </div>
    )
}
