import cakeType from './../Constants/test.type'

const increment = () => {
   console.log(cakeType.INC)
    return {
        type: testType.INC,
        data: 1
    }
}

const decrement = (val) => {
    return {
        type: testType.DEC,
        data: val
    }    
}

export default {increment,decrement}