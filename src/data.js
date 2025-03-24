export const API_KEY = `AIzaSyAWXxY6Ki2iCbadiqqJU6Yw0051wvafk08`


export const valueConverter = (value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+ 'mln'
    }else if (value >= 1000){
        return Math.floor(value/1000)+ 'K'
    }else{
        return value
    }
}