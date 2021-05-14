window.addEventListener('DOMContentLoaded', ()=>{
  

  // retour.addEventListener('click', ()=>{
  //      window.location = '/accueil'
  // })


  deleteMemo()
  updateMemo()

})

updateMemo = () =>{
  const memo = document.querySelectorAll('.fa-camera')

  for(const idElement of memo){
      idElement.addEventListener('click', function(){
        const idMemo = this.getAttribute('memoId');
          if (confirm('Voulez-vous modifier ce Memo ?') ){
              window.location = `/memo/updateMemo/${idMemo}`;
          } 
      })
  }

}


deleteMemo = () => {
  const memo = document.querySelectorAll('.fa-trash-alt')
  
  for(const idElement of memo){
    console.log(idElement)
      idElement.addEventListener('click', async function(){
        const idMemo = this.getAttribute('memoid');
          console.log(idMemo)
          if (confirm('Voulez-vous supprimer ce Memo ?') ){
            await axios.post(`/memo/deleteMemo/${idMemo}`)
              window.location.reload(true)
              
          } 
      })
  }

}