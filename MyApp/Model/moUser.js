import Users from '../Data/Users';
export default User = function(user) {  
    this.id = user?.id;
    this.name = user?.name;
    this.email = user?.email;
    this.password = user?.password;
    this.img = user?.img;
    this.phone = user?.phone;
    this.diachi = user?.diachi;
};
User.FindUserbyEmail = (email) => {
    let user = new User(null);        
    for (var i = 0; i < Users.length; i++) {
        if(Users[i].email == email)
        {
            user = Users[i];
        }                  
    }    
    return user;    
}