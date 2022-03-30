class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }
    showProfile(usr){

        this.profile.innerHTML =`
            <div class="card card-boody mb-3">
                <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2 " src="${usr.avatar_url}">
                    <a href="${usr.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>    

                <div class="col-md-9">
                    <span class="bg-success p-2">Public repos:${usr.public_repos}</span>
                    <span class="bg-secondary p-2">Public Gists:${usr.public_gists}</span>
                    <span class="bg-info p-2">Followers:${usr.followers}</span>
                    <span class="bg-primary p-2">Following:${usr.following}</span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${usr.company}</li>
                    <li class="list-group-item">Location: ${usr.location}</li>
                    <li class="list-group-item">Website/Blog: ${usr.blog}</li>
                    <li class="list-group-item">Member Since: ${usr.created_at}</li>

                    </ul>
                </div>
                </div>

            </div>
            <h4 class="page-heading mb-3">Latest Repos </h3>
            <div id="repos"></div>
        `;    
    }

    clearProfile(){
        this.profile.innerHTML='';
    }
    showAlert(msg,className)
    {
        this.clearAlert();
        const div =document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(msg));
        const containerItem = document.querySelector('.item');
        const searchBox =document.querySelector('.searchUser');
      
        containerItem.insertBefore(div,searchBox);
        setTimeout(()=>{
            this.clearAlert();
        },3000);

    }
    clearAlert()
    {
        const currAlert =document.querySelector('.alert');
        if(currAlert)
        {
            currAlert.remove();
        }
    }
    showRepos(repos)
    {   
        let output='';
        for(let i=0;i<repos.length;i++) {
            output+=`
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">

                <a href="${repos[i].html_url}" target="_blank">${repos[i].name}</a>

            </div>
            <div class="col-md-6">

                <span class="bg-success p-2">Stars:${repos[i].stargazers_count}</span>
                <span class="bg-secondary p-2">Watchers:${repos[i].watchers_count}</span>
                <span class="bg-info p-2">Forks:${repos[i].forms_count}</span>

            </div>
            </div>
            </div>
            `;
        }
        document.getElementById('repos').innerHTML=output;

    }

}