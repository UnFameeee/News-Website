<!-- PROJECT LOGO -->
<br />
<!-- <div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://firebasestorage.googleapis.com/v0/b/hoaiphong-4cfd9.appspot.com/o/logo.jpg?alt=media&token=848e1981-5300-4bfc-807a-53b0b1ecc706" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Basic News Website</h3>
  <p align="center">
     Cre: UnFame
     This project is base on: https://www.youtube.com/watch?v=tlTdbc5byAs&list=PLj-4DlPRT48lGpll2kC4wOsLj7SEV_lYu
    <br />
<!--     <a href=""><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
  </p>
</div>


## News-Website
Basic News Website. Cre: UnFame

## Framework and Technology used
### Requirement
- npm version 8.1.2
```sh
npm install -g npm@8.1.2
```
- node version v16.13.2 
```sh
https://nodejs.org/dist/v16.13.2/
```
- ReactJS (Front-End)
- NodeJS (Back-End)
- Database (MongoDB) 
```sh
For database i use https://cloud.mongodb.com
```

## How to run the project (Follow the sequence)
### Back-End
1. Go to .env file change the string connection to database (MongoDB)
2. Go to the folder api, then type: "yarn start"
3. The Backend will start on localhost:5000

### Front-End 
1. Go to file package.json, adding/changing this line: "proxy":"{your backend hosted URL}". For my project it is: "proxy":"http://localhost:5000/api/"
2. Go to the folder fe, then type: "npm start"
3. The Frontend will start on localhost:3000

## Contribution
Any information please contact me through this email: 
```sh
quocthang036@gmail.com
```
