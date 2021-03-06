import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA");
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets(){
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        })
        setPets(animals || [])
    }



    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({  breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);

    }, [animal, setBreed, setBreeds]); 

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Location">
                    </input>
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <label htmlFor="s-query">
                    <h3 id="s-query">Empty</h3>
                </label>
                <button>Submit</button>
            </form>
            <Results pets = {pets}/>
        </div>
    );
}

export default SearchParams;