const getLocal = localStorage.getItem('Hello');
console.log(getLocal);


const setItem = () =>{
    const foods = ['milk', 'water', 'hooney', 'Sorbat'];
    localStorage.setItem('Foods', JSON.stringify(foods));

}

const getItem = () =>{
    const getItem =  localStorage.getItem('foods');
    console.log(getItem);
    
}