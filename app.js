const git = new GitHub;
const ui =new UI;

document.getElementById('searchUser').addEventListener('keyup',(e)=>{
    const userInput =e.target.value;

    if(userInput !== '')
    {
        git.getUser(userInput)
        .then(data=>{
            if(data.profile.message  === 'Not Found'){
               
                //show alert
                ui.showAlert('User Not Found','alert alert-danger');
                

            }
            else{
                //show profile
                
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
               

            }
        })
    }else{
        ///clear profile
       ui.clearProfile();

    }

});






















