import './Pokecard.css';
const getImageUrl = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`


const Pokecard = ({id, name, exp, type}) => (
    <span className="Pokecard">
        <span className="Pokecard-title"><strong>{name}</strong></span>
        <img className="Pokecard-image" src={getImageUrl(id)} alt={name + " image"}></img>

        <span className="Pokecard-type">Type: {type}</span>
        <span className="Pokecard-exp">EXP: {exp}</span>

    </span>
);

export default Pokecard