let myLeads = []


const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))

if (Boolean(leadsfromlocalstorage)){
  myLeads = leadsfromlocalstorage
  render(myLeads)
}


tabBtn.addEventListener("click",()=>{
  chrome.tabs.query({active: true, currentWindow:true }, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  }
  )

  //console.log(tabs[0].url)
})

function render(leads){
  let listItems  = " "
  for(let i = 0; i < myLeads.length; i++){
    listItems += `
     <li> 
          <a target = _'blank' href = '${leads[i]}'>
          ${leads[i]}
          </a>

     </li>
              `
  }
   ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)

}
)

 













function getfirstarr (array){
     return array[2]
}

 console.log (getfirstarr(["1", "orange", " biscuit"]))