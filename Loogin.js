var users
[
    {username:"joudy", password:"123"},
    {username:"reem", password:"123"},
]

function login()
{
    var inUsername = document.getElementById("Lusername").value;
    var inPassword = document.getElementById("Lpassword").value;
    for(var i=0; i<users.length; i++)
    {
        if(users[i].username === inUsername && users[i].inPassword ===inPassword )
        {
            alert("login succesful");
           window.location.href="review.html"
           return true;
        }
    }
    alert("invalid username or password");
    return false;
}