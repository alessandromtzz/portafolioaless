function calcularPago() {
    const horas = document.getElementById('horas').value;
    const tipo = document.getElementById('tipoAuto').value;

    let tarifaPorHora = 0;

    switch (tipo) {
        case 'autoChico':
            tarifaPorHora = 20;
            break;
        case 'camioneta':
            tarifaPorHora = 30;
            break;
        case 'camion':
            tarifaPorHora = 40;
            break;
    }

    const total = tarifaPorHora * horas;

    document.getElementById('resultado').textContent = `Total a pagar: $${total.toFixed(2)}`;
}
