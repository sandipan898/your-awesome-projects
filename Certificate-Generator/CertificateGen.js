//install these libraries

// npm install pdf-lib
// npm install minimist
// npm install xlsx

// run using command below

// node CertificateGen.js --source=students.xlsx --dest=CertificateFolder


let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");
let XLSX = require("xlsx");

// You can edit it as a requirement for customization

let CertificateGeneralinfo = {
    CompetionName: "HackWiz Competition",
    OrganizedBy: "Sicilian Defense Club",
    CDate: "14th June 2021",
    Place: "Sicilian Najdorf University"
}

let args = minimist(process.argv);
// console.log(args.source);
// console.log(args.dest);
var workbook = XLSX.readFile(args.source);
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); // Conversion of excel data to JSON
//console.log(xlData);

let json = JSON.stringify(xlData);

// Writing the JSON
fs.writeFileSync("certificate.json", json, "utf-8");

let certiJSON = fs.readFileSync("certificate.json", "utf-8");
let certificates = JSON.parse(certiJSON); //conversion to JSON to JSO -> array of teams object
// console.log(certificates);

fs.mkdirSync(args.dest); // creation of CertificateFolder

for (let i = 0; i < certificates.length; i++) {
    let CertiFileName = path.join(args.dest, certificates[i].First_Name + "_" + certificates[i].Last_Name + ".pdf");
    // console.log(CertiFileName);
    generateCertificate(certificates[i], CertificateGeneralinfo, CertiFileName);
}

function generateCertificate(Partipant, CertificateGeneralinfo, CertiFileName) {
    // this function creates pdf for certificate of a participant in CertificateFolder
    // here we will use pdf-lib to create the pdf

    let Name = Partipant.First_Name + " " + Partipant.Last_Name;

    let pdfDocument = pdf.PDFDocument; 
    let originalTemplateBytes = fs.readFileSync("Template.pdf"); 
    let prmToLoadBytes = pdfDocument.load(originalTemplateBytes); 
    prmToLoadBytes.then(function (pdfdoc) { 
        let page = pdfdoc.getPage(0);

        page.drawText(Name, {
            x: 350,
            y: 285,
            size: 18,
        });
        page.drawText(CertificateGeneralinfo.CompetionName, {
            x: 492,
            y: 252,
            size: 16
        });
        page.drawText(CertificateGeneralinfo.OrganizedBy, {
            x: 370,
            y: 177,
            size: 16
        });
        page.drawText(CertificateGeneralinfo.CDate, {
            x: 270,
            y: 126,
            size: 16
        });
        page.drawText(CertificateGeneralinfo.Place, {
            x: 484,
            y: 126,
            size: 16
        });
        let promiseToSave = pdfdoc.save();
        promiseToSave.then(function (changedBytes) {  
            fs.writeFileSync(CertiFileName, changedBytes);
        })
    })
}












