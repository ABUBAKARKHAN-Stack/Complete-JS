const foreginWeatherApi = {
    fetch_weather(city_name) {
        return {
            city_name,
            temp_f: 72,
            wind_speed_mph: 6,
            condition: "partly_cloud"
        }
    }
}

class WeatherAdapter {
    constructor(foreginAPI) {
        this._api = foreginAPI
    }

    getWeather(city_name) {
        const raw = this._api.fetch_weather(city_name)
        return {
            city: raw.city_name,
            tempC: Math.round((raw.temp_f - 32) * (5 / 9)),
            wind_speed_kmh: Math.round(raw.wind_speed_mph * 1.6),
            condition: raw.condition
        }
    }
}

const weather = new WeatherAdapter(foreginWeatherApi)
const report = weather.getWeather("Karachi")
// console.log(report);

const localStorageSim = (() => {
    const store = new Map()
    return {
        getItem(key) {
            return store.has(key) ? store.get(key) : null
        },
        setItem(key, value) {
            store.set(key, value)
        },
        length() {
            return store.size
        },
        clear() {
            store.clear()
        }
    }
})()

class AsyncStorageAdapter {
    constructor(syncStorage) {
        this._storage = syncStorage;
    }

    async getItem(key) {
        const raw = this._storage.getItem(key);
        try {
            return JSON.parse(raw)
        } catch (error) {
            return raw
        }
    }

    async setItem(key, value) {
        this._storage.setItem(key, JSON.stringify(value));
    }

    async getLength() {
        return this._storage.length()
    }
}

const runAsyncStorageDemo = async () => {
    const storage = new AsyncStorageAdapter(localStorageSim)

    await storage.setItem("user", { id: 1, name: "Abubakar" })

    const res = await storage.getItem("user")
    console.log(res);

    console.log(await storage.getLength());


}

runAsyncStorageDemo()