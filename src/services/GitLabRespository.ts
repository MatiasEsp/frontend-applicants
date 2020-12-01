class GitLabRepository implements Repository
{
    private getAccessToken()
    {
       // 
    }
    
    private assertLoggedIn()
    {
        //
    }

    public getUserByName(name: string)
    {
        this.assertLoggedIn();

        try {
        // axios
            //...
        } catch (e) {
            e.response.error_code;
            
            if (e.......) {
                throw new UnnableToConnectToGitlabError();
            }
        }
    }
}
