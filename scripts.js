function calculateTip(event) {
    event.preventDefault() //significa que vai pegar nesse elemento e vai prevenir para que não faça o comportamento default (neste caso, deixa de fazer o refesh da página)

    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if (bill === '' | serviceQual == 0) {
        alert('Please, fill the values!')
        return;
    }

    if (numOfPeople == '' | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none'; //fazer o elemento desaparecer
    } else {
        document.getElementById('each').style.display = 'block'; //fazer o elemento aparecer
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2); //para colocar o valor com 2 casas decimais
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = 'block';

}

document.getElementById('totalTip').style.display = 'none'; //fazer apagar um elemento html
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calculateTip)