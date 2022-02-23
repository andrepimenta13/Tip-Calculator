function calculateTip(event) {
    event.preventDefault() //significa que vai pegar nesse elemento e vai prevenir para que não faça o comportamento default (neste caso, deixa de fazer o refesh da página)

    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if (bill === '' | serviceQual == 0) {
        alert('Please, fill the values!')
        return;
    }

}

document.getElementById('totalTip').style.display = 'none'; //fazer apagar um elemento html
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calculateTip)

//58:22