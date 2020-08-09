import {performance} from 'perf_hooks'

class Benchmark {
    public N: number
    private previousN: number = 0
    private timerOn: boolean = false
    private start: number = 0
    private duration: number = 0
    private benchmarkDuration: number = 1_000
    
    constructor() {
        this.N = 1000
    }

    public startTimer() {
        this.start = performance.now()
        // console.log(this.start)
    }

    public stopTimer() {
        this.duration = performance.now() - this.start
    }

    public resetTimer() {
        this.start = 0
        this.duration = 0
    }

    public runLongEnough(): boolean {
        console.log(this.duration, this.benchmarkDuration)
        if (this.duration >= this.benchmarkDuration) {
            return true
        }
        else {
            this.N *= 2
            return false
        }
    }

    public createResults(description: string) {
        // console.log("hello", this.N, this.duration, this.N/this.duration)
        const rate = this.N / (this.duration / 1_000)

        console.log(description)
        console.log(`Ran for ${this.duration}ms, with ${this.N}ops, so ${rate}ops/s`)
    }
}

export function bench(description: string, fn: (b: Benchmark) => void): void {
    const b = new Benchmark()
    do {
        b.resetTimer()
        b.startTimer()
        fn(b)
        b.stopTimer()
    } while (!b.runLongEnough())

    b.createResults(description)
}