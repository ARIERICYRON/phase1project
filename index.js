const init = () => {
  document.addEventListener('DOMContentLoaded', init);
}

const api_url = ('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
async function getVehicle(Make_ID, Name_ID){
   const response = await fetch (api_url)
   const data = await response.json()
   console.log(data)
   document.getElementById('container').innerHTML = data.Make_ID
   document.getElementById('container').innerHTML = data.Name_ID
  
}
getVehicle()
