import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixtures from "@test/fixtures/stormglass_weather_3_hours.json";
import stormGlassNormalized3HoursFixtures from '@test/fixtures/stormglass_normalized_response_3_hours.json'

jest.mock('axios');

describe('stormGlass client', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    it('should return the normalized forecast from the StormGlass service', async () => {
        const lat = -33.792726;
        const lng = 151.289824;

        mockedAxios.get.mockResolvedValue({ data: stormGlassWeather3HoursFixtures })
        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalized3HoursFixtures);
    });
});
