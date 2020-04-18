const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const massageOne = document.querySelector('#message-1')
const massageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;

    massageOne.textContent = 'Loding...'
    massageTwo.textContent = ''

    fetch('http://localhost:3000/global?address='+ location).then((response) =>{
    response.json().then((data)=>{
        if(data.error){
            massageOne.textContent = data.error
        }else{
            massageOne.textContent = data.data.Country,
            massageTwo.textContent = data.data.Update_time,
            massageOne.textContent = data.data.Confirmed_cases,
            console.log(data.data.Total_deaths),
            console.log(data.data.Total_recovered),
            console.log(data.data.Active_patients)
        }
    })
})
})