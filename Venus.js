function register(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email && password){
        const user = {user, password};
        localStorage.setItem('user', JSON.stringify(user));
        alert('Register successfully!')}
    else{
        alert('Please enter email and password!')
    }
    }
