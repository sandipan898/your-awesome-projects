
# Certificate Generator  :trophy:

## Basic Overview
<p align = "justify">
This project contains a simple script that helps automate the generation of 1000's or colossal amounts of certificates. The code reads the data from a sample excel file (student.xlsx) and converts it into a JSON File. Then it writes the participant's name and general event information on the certificate template pdf file. I have made a sample certificate template manually using word and procreate on Ipad. The code generates a CertificateFolder with certificates of all participants in pdf format. Hence this simple script could save the time of event organizers.
</p>

## Motivation :bulb:

<img align = "left" alt="certificate_gif" width = "200" hieght = "500" src = "https://media1.giphy.com/media/nCRkXBaeCPyeX1fkrc/giphy.gif?cid=ecf05e47yqur8yye55qqznuuhhy9o79zdbxkh1o4p4b6c7hj&rid=giphy.gif">
<p align = "justify">
The motivation behind the project is to help people who work in managing events like webinars, hackathons, competitions that could automate their tasks and save their precious time. The project idea could be applied in forms/candidates applications generation in pdf format for various domains.
</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Screenshots  :camera:

![certificate gif](https://github.com/hema8Codes/Certificate_Generator/blob/main/projectscreenshot.png?raw=true)

## Tech Stack   :computer:

<p align = "justify">
  <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
</p>

* Nodejs

* Dependencies/ libraries used : 

   * minimist
   
   * pdf-lib
   
   * xlsx
   
   
## Installation

<p align = "justify">
To run run this project locally in your system:-
</p>

 * Download and install Visual Studio Code 
 
   [Visual Studio Code Link](https://code.visualstudio.com/download/ "Visual Studio Code")
 
 * Download and install Node.js 
 
    [Node.js Link](https://nodejs.org/en/download/ "Node.js")
    
 * Clone this repository and open certificate folder in vscode  
    
 * install these libraries
   
   * npm init --yes
   
   * npm install minimist

   * npm install pdf-lib
 
   * npm install xlsx
 
 ## How to use?
 
 * run using command below

   * node CertificateGen.js --source=students.xlsx --dest=CertificateFolder
   
 * You can make changes in the code and use different certificate template to customize it according to your requirements.  
 
 ## License
 
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT](https://choosealicense.com/licenses/mit/)

 
   




  
