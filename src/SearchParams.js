import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA");
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);

    }, [animal, setBreed, setBreeds]);

    useEffect(() => {
        document.getElementById("s-query").innerHTML = location;
    }, [location]);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
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
        </div>
    );
}

export default SearchParams;