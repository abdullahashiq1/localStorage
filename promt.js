const alertOn = () =>{
    alert('Hi Friends!')
}

const confirmMe = () =>{
   const pleaseConfirm = confirm('Are you OK!')
    console.log(pleaseConfirm);
    if(pleaseConfirm === true){
        alert('Alright! Give')
    }else{
        console.log('Can i help U!')
    }
}

const promtMe = () =>{
    const name = prompt('Naam bolo!');
    console.log(name)
    if(name === null){
        alert('I kick you from this platform!')
    }else{
        console.log('Thank u!for having with us!')
    }
}