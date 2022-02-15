

class UserGetter{


    user = {
            email: null,
            firstName: null,
            lastName: null,
            personalNumber: null
        };

    getUser(username, password) {
        fetch(this.User).then(this.user = this.User);
        return this.user;
    }

    User = {email:"test@test.com", firstName:"John", lastName:"Doe", personalNumber:1234567890}
}
const UGetter = new UserGetter();

export default UGetter;
