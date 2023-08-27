class Utils {

    static randomize(arr) {
        let randomizeArr = []
        // let copyArr = [...arr]
        let copyArr = [].concat(arr)
        for (let i = 0; i < arr.length; i++) {
            let rnd = Math.floor(Math.random() * copyArr.length)
            randomizeArr.push(copyArr[rnd])
            copyArr.splice(rnd, 1)
        }
        return randomizeArr
    }

}
