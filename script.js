let addNotes = document.querySelector('#addNotes')
let addContent = document.querySelector('#addContent')


showNotes()

function showNotes(){
    addContent.innerHTML = localStorage.getItem('notes') ;
}

function updateStorage(){
    localStorage.setItem('notes', addContent.innerHTML)
}

function getFormattedDateTime() {
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0'); 
    let year = now.getFullYear();
    
    let hours24 = now.getHours();
    let hours = hours24 % 12 || 12; 
    let ampm = hours24 >= 12 ? 'pm' : 'am'; 
    let minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${day}-${month}-${year} ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
}


addNotes.addEventListener('click', () => {
    addContent.innerHTML += `
    <div class="noteBox">
                <p contenteditable="true" class="inputBox"></p>

                <div class="allBtn">
                 <h4>${getFormattedDateTime()}</h4>
                    <div class="removeBox">
                        <i class="fa-solid fa-trash deleteNotes"></i>
                    </div>
                </div>
            </div>
    `
    updateStorage()
})


addContent.addEventListener('click',(event)=>{
    if(event.target.classList.contains('deleteNotes')){
        let noteBox = event.target.closest('.noteBox')
            noteBox.remove()
            updateStorage()
    }
})


addContent.addEventListener('input',(e)=>{
    if(e.target.classList.contains('inputBox')){
        updateStorage()
    }
})
