import { Country, State, City } from "country-state-city";
export const formattedCountry = Country.getAllCountries().map((country) => ({
    label: `${country.name}`,
    value: country.isoCode,
}));

export const formattedStates = State.getStatesOfCountry(country).map((state) => ({
    label: state.name,
    value: state.isoCode,
}));

export const formattedCities = City.getCitiesOfState(country, state).map((city) => ({
    label: city.name,
    value: `${city.name.toLocaleLowerCase()} ${city.latitude} ${city.longitude
        }`,
}));