### commit
- snapshot of the project meaning photo of my project
- each commit contains
    - a pointer to the snapshot 
    - metadata
        - who commited, why and when
    - a pointer to the previous commit
- first commit has no parents
- also merged commit has 2 parents 
- in a commit, children commit know their parents, but parent commit don't know their children 
- it can create DAG direct acyclic graph, in that way, no cycles can be formed 
- branches are nothing but labels for commit
    - they don't contain commits but they point at commits 
- HEAD is git's way of knowing your location, 
    - its a pointer, but instead of pointing at commit, it points at a branch
    - when we do git checkout bugFix, what happens is HEAD moves to bugFix branch
- what if you want to focus on specific commit instead of branch? git calls it detached HEAD

### staging
- where you code can live?
    - your working dir
    - staging area, where we prep where your next commit will go
    - repository 
- when we git add, we move changes to the staging area 
- when we do git commit we move the changes from staging to commit, saving them permanently

### git checkout 
- it moves HEAD only

### git reset
- it moves the branch pointer 
![alt text](image.png)
- 

### git revert
- adds new commit
- undo's a commit, jo bhi commit kiya usko undo karna 

### rebase
- rewrite history, rewrites history with new commits 
- never rebase commits you have pushed 

### git reflog
- it shows everywhere the git HEAD has pointed recently, commit, checkout 
- it expires 90 days, 30 days for sure