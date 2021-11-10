import cakeType from './../Constants/cake.type'



const buy_cake = () => {
   console.log(cakeType.BUY_CAKE)
    return {
        type: cakeType.BUY_CAKE,
        data: 1
    }

}

const sell_cake = (val) => {

    return {
        type: cakeType.SELL_CAKE,
        data: val
    }
    
}

export default {buy_cake,sell_cake}