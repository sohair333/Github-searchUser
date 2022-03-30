class GitHub{
    constructor(){
        this.client_id='b509846d01a53c41507f';
        this.client_secret='1adaed0c1508fa0f082229117cde03383788a4a2';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user) {
        const profileResponse =await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const reposResponse =await fetch(`https://api.github.com/users/${user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}