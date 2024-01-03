var users=
[
       { username:"joudy", password:"123"},
       { username:"reem",password:"123"},
]
function login()
{
    var inusername = document.getElementById("Lusername").value;
    var inpassword = document.getElementById("Lpassword").value;

    for(var i=0; i<users.length; i++)
    {
        if(users[i].username === inusername && users[i].password ===inpassword )
        {
            alert("login successful");
            window.location.href="review.html";
            return true;
        }
    } 
    alert("invalid username or password")
    return false;
   
}



function resetpass()
{
    let newusername = document.getElementById("Fusername");
    let pass = document.getElementById("Fpassword");
    let look = false;
    for(let i=0; i<users.length ;i++)
    {
        if(users[i].username == newusername.value)
        {
            users[i].password = pass.value;
            alert('the password has changed');
            look = true
        }
    }
    if(look == false)
    {
        alert('this is not user');
    }
}

function signup()
{
    var inusername = document.getElementById("Susername").value;
    var inpassword = document.getElementById("Spassword").value;
    var inemail = document.getElementById("email").value;
    var inage = document.getElementById("age").value;
    var inphone = document.getElementById("phnum").value;
    var confirm = document.getElementById("conpassword").value;

    for(var i=0; i<users.length; i++)
    {
        if(users[i].username === inusername)
        {
            alert("try with another username");
           
            return false;
        }
    } 
    if(inphone>12&&inphone<12)
        {
            alert("number must be 11 digits");
           
            return false;
        }
   
    if(inpassword>8)
    {
        alert("password must be less than 8 char");
       
        return false;
    }

    if(inpassword!==confirm)
    {
        alert("doesnt match")
        return false;
    }

    users.push
    (
        {
            username:inusername,
            password:inpassword
        }
    )
    alert("successfuly")
    return false;
}