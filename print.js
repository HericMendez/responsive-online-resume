document.getElementById("btnDownload").addEventListener("click", function () {
  var content = document.getElementById("pdfContent");

  html2canvas(content, { scale: 2 }).then((canvas) => {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF("p", "mm", "a4");

    var imgWidth = 210;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Redimensiona para caber em uma única página
    var maxHeight = 297; // Altura da página A4
    if (imgHeight > maxHeight) {
      imgWidth = (imgWidth * maxHeight) / imgHeight;
      imgHeight = maxHeight;
    }

    doc.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      imgWidth,
      imgHeight
    );
    doc.save("Currículo Héric Vinícius Mendes.pdf");
  });
});
