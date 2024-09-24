const VCard = require('vcard-creator').default;
const fs = require('fs');
const path = require('path');

const generateVCard = (user, file) => {
    const imagePath = path.join(__dirname, '../../images', file);
    const image = fs.readFileSync(imagePath, { encoding: 'base64', flag: 'r' });
    
    // Define a new vCard
    const myVCard = new VCard();
    myVCard.addName(user.name);
    myVCard.addEmail(user.email);
    myVCard.addPhoneNumber(user.phone, 'WORK');
    myVCard.addPhoto(image, 'JPEG');

    // Define the folder where the vCard file will be saved
    const folderPath = path.join(__dirname, '../../vCards');
    
    // Ensure the folder exists, if not, create it
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const fileName = user.email + "_vcfFile.vcf";
    const filePath = path.join(folderPath, fileName);
    
    // Write the vCard file in the specified folder
    fs.writeFileSync(filePath, myVCard.getOutput());

    return fileName;
}

module.exports = generateVCard;
