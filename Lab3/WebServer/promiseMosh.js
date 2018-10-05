console.log('Before');
/*
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});
console.log('After');
/*
//using callback
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'mosh' });
  }, 2000);
}
*/
//using promise
function getUser(id)
{
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({ id: id, gitHubUsername: 'mosh' });
    reject(new Error(" user error"));
  });
});
}

getUser(1).then((result)=>{console.log(result)}).catch((err)=>{console.log(err.message)});


/*
//using callback
function getRepositories(username) {
  
    return new Promise((resolve,reject)={
        setTimeout(() => {
    console.log('Calling GitHub API...');
    resolve(['repo1', 'repo2', 'repo3']);
  }, 2000);
    });
}

*/
//using promise
const getRepositories = new Promise((resolve,reject)=>{

  setTimeout(()=>{
    console.log('calling Github API...');
    resolve(['repo1','repo2','repo3']);
    reject(new Error("error repos"));
  },2000);
});

getRepositories.then((result)=>{console.log(result)}).catch((err)=>{console.log(err.message)});

/*
//using Callback
function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback(['commit']);
  }, 2000);
}
*/
//using promise
const getCommits = new Promise((resolve,reject)=>{

setTimeout(()=>{
  console.log("Calling GitHub API...");
  resolve(['commit']);
  reject(new Error("err commit"));
},2000);
});

getCommits.then((result)=>{console.log(result)}).catch((err)=>{err.message});

