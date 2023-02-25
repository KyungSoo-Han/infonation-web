let arra;

 function Login() {
  var form =  $('#form').dxForm('instance');
  fetch("http://39.117.158.182:9081/api/user/login", {
     
     method: "POST",
     mode: 'cors', 
     headers:{
         'Content-Type': 'application/json',
       },
     body:JSON.stringify({
        email: form.option('formData').login_id,
        password: form.option('formData').password
     })
   })
 .then(response => response.json())
 .then(response => {
      console.log(response)
      //console.log(token);
      if(response.status != 'OK' ){

        alert('로그인 실패');
        return;
      }
      //token = response.token;
      //localStorage.setItem('token',token);
      alert('로그인 성공');
      //console.log('2');
      //arra = response.data;
      //grid.option('dataSource', arra);
     
      //console.log(  response.data.json());
     
      //debugger;
 })
 .catch(error => {
                console.log(error); });

};
