
document.write(`
<!--  copyright footer style  -->
<link rel="stylesheet" href="assets/css/copyright-footer.css">

<!--  copyright footer  -->
<footer class="mw--footer-copyright">
  <span>Copyright &copy; 2022<!--  [ - <span id="copyright_current_year">0000</span>]  --></span>
</footer>

`)


  // year
  function updateyear() {
    let today = new Date();

    // return number
    let year = today.getFullYear();

    // value -> ID of the html element
    const IDCollection = ["copyright_current_year"];

    // return value array with number as a index
    const val = [year];
    for (let i = 0; i < IDCollection.length; i++) {
      document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
  }

  updateyear();