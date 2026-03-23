//* Object based singleton

const StationClock = {
    _hour: 12,
    _minute: 0,

    tick() {
        this._minute += 1;

        if (this._minute >= 60) {
            this._minute = 0
            this._hour = (this._hour % 12) + 1
        }
    },

    time() {
        const h = String(this._hour).padStart(2, "0")
        const m = String(this._minute).padStart(2, "0")

        return `${h}:${m}`
    }


}

/*
? console.log('Abubakar Checks:', StationClock.time());
* StationClock.tick()
* StationClock.tick()
? console.log('Time after 2 tick:', StationClock.time());


* const platform1 = StationClock
* const platform2 = StationClock
? console.log('Same instance?:', platform1 === platform2);
*/


//* Singleton in (IFFE or Clousures)
const StationBell = (() => {
    let ringCount = 0;

    const instance = {
        ring() {
            ringCount++;
            return `Abubakar rings bell ${ringCount}`;
        },

        total() {
            return ringCount
        }
    }

    return instance
})()

/*
? console.log(StationBell.ring());
? console.log(StationBell.ring());
? console.log('Total ring count:', StationBell.total());
*/

//* Class Based Singleton

class CounterApp {

    constructor() {
        if (CounterApp._instance) {
            return CounterApp._instance
        }
        this.count = 0
        CounterApp._instance = this
    }

    increment() {
        this.count++
        console.log('Current Value:', this.count);
    }

    decrement() {
        this.count--
        console.log('Current Value:', this.count);
    }

    display() {
        return this.count
    }

    reset() {
        this.count = 0
    }

    static getInstance() {
        if (!CounterApp._instance) {
            return new CounterApp()
        }
        return CounterApp._instance
    }

}

/* 
* const app1 = new CounterApp()
* const app2 = new CounterApp()
? console.log('Same instance?:', app1 === app2);

* for (let i = 0; i < 10; i++) {
*    app1.increment()
* }
? console.log(CounterApp.getInstance());
*/