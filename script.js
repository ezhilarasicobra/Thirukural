const container=document.createElement('div')
container.setAttribute('id','containerid')
document.body.append(container)

container.innerHTML=`
<h1 class="heading">THIRUKURAL DETAILS IN BOTH TAMIL AND ENGLISH</h1>
<img class="pic" src="https://static.india.com/wp-content/uploads/2018/01/Thiruvalluvar.jpg?impolicy=Medium_Resize&w=1200&h=800"></img>
<br>
<input class="number"type="text"/>
<button class="button">Search Thirukural By Number</button>
`
const onsearch=document.querySelector('.button')
onsearch.addEventListener('click',(event)=>{
  const thirukuralnumber=document.querySelector('.number').value;
  displaydataonscreen(thirukuralnumber)
})
/*async function getdata(thurukuralnumber){
  try{
    let url=`https://api-thirukkural.vercel.app/api?num=${thurukuralnumber}`
     const response=await fetch(url)
    const data= await response.json();
    console.log(data);
  }
  catch(error){
    console.log(error.message)
  }

}*/

async function displaydataonscreen(thirukuralnumber){
  try{
    let url=`https://api-thirukkural.vercel.app/api?num=${thirukuralnumber}`
     const response=await fetch(url)
    const data= await response.json();
    console.log(data)
    const resultcontainer=document.createElement('div')
     resultcontainer.setAttribute('id','resultid')
    document.body.append(resultcontainer);
    const divres=document.createElement('div') 
    divres.innerHTML=`<p>Number :${data.number}</p>
    <p>Tamil Name:${data.sect_tam}</p>
    <p>Module Name:${data.chapgrp_tam}</p>
    <p>Chapter Name:${data.chap_tam}</p>
    <p>${data.line1}</p>
    <p>${data.line2}</p>
    <p>Tamil Explanation:${data.tam_exp}</p>
    <p>English Name:${data.sect_eng}</p>
    <p>Module Name:${data.chapgrp_eng}</p>
    <p>Chapter Name:${data.chap_eng}</p>
    <p>${data.eng}</p>
    <p>English Explanation:${data.eng_exp}</p> `     
    resultcontainer.append(divres)
  }
  catch(error){
    console.log(error.message)
  }
}

