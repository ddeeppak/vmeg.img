function help1(event) {
  event.preventDefault(); // Prevent form submission

  const branch = event.target.elements.BRO.value;
  const start = event.target.elements.from.value;
  const end = event.target.elements.to.value;
  document.write('<html>');
  document.write('<body>');
  document.write("<div style='width:auto;height:auto;margin-top: 20px;margin-left:20px;margin-right: 20px;background-image: linear-gradient(43deg,rgb(89, 205, 255),rgb(138, 251, 225),rgb(118, 251, 194),rgb(89, 205, 255));padding-top: 20px;padding-left: 100px;padding-right: 100px;padding-bottom: 50px;float: left;border-radius:40px'>");
  document.write("<center><p style='font-size:50px;font-weight:bolder;'>WELCOME TO GALLERY</p><p style='font-size:30px'> By&nbspDeskPlayer</p></center>");

  const startChar = start.charAt(8);
  var c4 = start.charAt(9);
  const endChar = end.charAt(8);
  const startDigit = parseInt(start.substring(9));
  const endDigit = parseInt(end.substring(9));

  for (let c = startChar.charCodeAt(0); c <= endChar.charCodeAt(0); c++) {
    const startIndex = (c === startChar.charCodeAt(0)) ? startDigit : 1;
    const endIndex = (c === endChar.charCodeAt(0)) ? endDigit : 10;

    if (c !== 58 && c !== 59 && c !== 60 && c !== 61 && c !== 62 && c !== 64 && c !== 63) {
      for (let i = startIndex; i <= endIndex; i++) {
        const rollNumber = '20881A05' + String.fromCharCode(c);
        const roll = start.substring(0, 8) + rollNumber.substring(8) +c4;
        c4 = String.fromCharCode(c4.charCodeAt(0) + 1);

        if (c4 === ':') c4 = '0';

        document.write("<div style='height:300px;background-color:azure;border-radius: 20px;float: left;margin-right: 20px;margin-left: 20px;width: 200px;margin-top:50px;padding-bottom:10px'>");

        if (roll === '20881A05A8') {
          document.write("<img src='deepak.png' height='250px' width='200px' style='border-top-left-radius: 20px;border-top-right-radius:20px;'>");
        } else {
          document.write(`<img src='http://studentscorner.vardhaman.org/images/${branch}/${roll}.jpg' height='250px' width='200px' style='border-top-left-radius: 20px;border-top-right-radius:20px;'>`);
        }

        document.write("<div><h1 style='text-align:center;margin-top:10px;'>" + roll + "</h1></div>");
        document.write('</div>');
      }
    }
  }

  document.write('</div>');
  document.write('</body>');
  document.write('</html>');
}
