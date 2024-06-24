# Git Flow

## Creating repo on github
- Create new repo on github
- Select owner and give repo a name
- Make repo private
- Click create repo

## Create a local copy of the project
- Grab the `npx tiged` command
```
npx tiged https://github.com/appacademy/aa02-advanced-array#full-time aa02-advanced-array
```
- `cd` into the directory you want the project to be in
ex: `cd app-academy`
- Copy paste the `npx tiged` command into the terminal
- `cd` into the newly created directory ex:
  - `cd aa02-advanced-array`
  - Confirm with you're in the file with `ls`
  - You should see the package.json, problems, and test directory
- Inside folder; create `.gitignore`
  - `touch .gitignore`
- Inside the `.gitignore` add the line
  - `/node_modules`
  * If it doesnt get ignored; can also try
  `node_modules` or `node_modules/`
- run `npm install`
- `git init`
- `git add README.md`
- `git commit -m "first commit"`
- `git branch -M main`
- ```git remote add origin https://github.com/brandonlaursen/array-methods-demo.git```
- `git push -u origin main`
- `git add .`
- `git commit -m ‘message’`
- `git push`

## Share with partner
- Click settings
- Click collaborators
- Click add people
- Enter your pairs github user name

## Partner
- Check email or github notifications
- Accept invite
- `cd` into the directory you want the project to be in
ex: `cd app-academy`
- `git clone` the repo link
  - ex: `git clone <replace-with-repo-link>`
- run `npm install`

## Git flow
Anytime you make changes and want to swap driver and navigator role
- `git add .`
- `git commit -m ‘message’`
- `git push`

## Pair
- `git pull`


## If you get this error:
```
Please commit your changes or stash them before you merge.
```
- `git stash && git pull`
