
 let myLeads = []
 const inputEl= document.querySelector('#input-el')
 const inputBtn= document.querySelector('#input-btn')
 const ulEl= document.querySelector('#ul-el')
 const saveTab = document.querySelector('#save-tab')
 const deleteBtn= document.querySelector('#delete-btn')


const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
   myLeads= leadsFromLocalStorage
   render(myLeads)
}
const tab = [
   {url: 'https://www.linkedin.com/in/ariori-oluwatomisin-31531818a/'}
]
saveTab.addEventListener ('click', function(){
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  })

   myLeads.push(tab[0].url)
   localStorage.setItem('myLeads', JSON.stringify(myLeads))
   render(myLeads)
})


function render(leads){
   let listItems= ''
   for (let i=0; i<leads.length; i++) {
      // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] + "</a></li>"
      listItems += `
         <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
         </li>
      `
   }

   ulEl.innerHTML = listItems
}

inputBtn.addEventListener ('click', function(){
   myLeads.push(inputEl.value)
   inputEl.value=''
   localStorage.setItem('myLeads', JSON.stringify(myLeads))
   render(myLeads)
})

deleteBtn.addEventListener('dblclick', function(){
   localStorage.clear()
   myLeads=[]
   render(myLeads)
} )

