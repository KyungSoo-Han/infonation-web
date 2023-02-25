let arra;

 function GetBoardList() {
  const grid =  $('#gridContainer').dxDataGrid('instance');;

  fetch("http://39.117.158.182:9081/api/board", {
     
     method: "GET",
     mode: 'cors', 
     headers:{
         'Content-Type': 'application/json',
         //'Authorization' : 'Bearer ' + localStorage.getItem('token')
     }
   })
 .then(response => response.json())
 .then(response => {
      //console.log(response)
      
      console.log('2');
      arra = response.data;
      grid.option('dataSource', arra);
     
     //console.log(  response.data.json());
     
      //debugger;
 })
 .catch(error => console.log(error));

};
