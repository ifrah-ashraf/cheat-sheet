const axios = require("axios")

//1. fetch
//how to send fetch request
function main_1(){
    fetch("https://catfact.ninja/fact")
        .then(async (response) => {
            const data = await response.json()
            console.log(data)
        })
}

//this is the slightly good syntax for fetch request  
async function main_2(){
    const response  =  await fetch("https://catfact.ninja/fact")
    const data  = await response.json()
    console.log(data)
}


//2.axios
//using axios library in lesser line though it is external library

async function main(){
    const response  =  await axios.get("https://catfact.ninja/fact")
    
   //it will automatically give the whole json data or any other tu=ypes of data(like text)
    console.log(response.data)
}

//run the different main function to get to know more about that


//post reuqest with fetch
async function main_4(){
    const response  =  await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST", //try here with GET also
    },)
    const data  = await response.json()
    console.log(data)
}

//post req qith axios 

async function main_5() {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts")
    console.log(response.data)
}

main_5()