
function check(){
    let user=document.getElementById("username");
    var pwd = document.getElementById("password");
    function caller(user,pwd,callback){
        if(user.value=="admin" && pwd.value=="12345")
        {
            callback(user,pwd,false)
            document.location.href = "./todo.html";
            return false;
        }
        else {
            alert("Incorrect Username or Password");
            return false;
        }
    }
    caller(user,pwd,function(error){
        console.log(error);
    })
}