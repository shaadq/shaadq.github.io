function downloadPDF(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Path to your PDF file
  var pdfURL = "./document/resume.pdf";

  // Create a temporary link element
  var link = document.createElement("a");
  link.href = pdfURL;
  link.target = "_blank"; // Open in a new tab
  link.download = "Resume.pdf"; // File name when downloaded

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger the click event of the link
  link.click();

  // Clean up
  document.body.removeChild(link);
}
