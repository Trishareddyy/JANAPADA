function calculateTotal() {
    var tickets = parseInt(document.getElementById('tickets').value);
    var cost = parseFloat(document.getElementById('cost').value);
    var total = tickets * cost;
    document.getElementById('total').value = isNaN(total) ? '' : total.toFixed(2);
  }
  