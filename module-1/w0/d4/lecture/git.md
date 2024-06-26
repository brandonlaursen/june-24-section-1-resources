# Git Flow

## Creating repo on github
- Create new repo on github
- Select owner and give repo a name
- Make repo private
- Click create repo

## Create a local copy of the project
- Grab the `npx tiged` command
```
npx tiged https://github.com/appacademy/aa01-expressions#full-time aa01-expressions
```
- `cd` into the directory you want the project to be in
ex: `cd app-academy`
- Copy paste the `npx tiged` command into the terminal
- `cd` into the newly created directory ex:
  - `cd aa01-expressions`
  - Confirm with you're in the file with `ls`
  - You should see the `package.json`, `problems`, and `test` directory
- Inside folder; create `.gitignore`
  - `touch .gitignore`
- Inside the `.gitignore` add the line
  - `/node_modules`
  * If it doesnt get ignored; can also try
  `node_modules` or `node_modules/`
- run `npm install`
- Run these commands
  - Can copy paste commands from Github
```
echo "# test1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/brandonlaursen/expressions-demo.git
git push -u origin main
```
## Git flow
Anytime you make changes and want to push those changes
- `git add .`
- `git commit -m ‘message’`
- `git push`
