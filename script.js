// Función para mostrar/ocultar el texto en las cards
function toggleCard(cardElement) {
    const shortText = cardElement.querySelector('.short-text');
    const longText = cardElement.querySelector('.long-text');

    if (longText.classList.contains('d-none')) {
        // Mostrar texto largo y ocultar el corto
        shortText.classList.add('d-none');
        longText.classList.remove('d-none');
    } else {
        // Mostrar texto corto y ocultar el largo
        longText.classList.add('d-none');
        shortText.classList.remove('d-none');
    }
}


// Inicialización de Gráficas (Ajustadas a la nueva paleta de colores)
document.addEventListener('DOMContentLoaded', function() {

    // --- Gráfica 1: Desigualdad en el acceso a recursos ---
    const ctx1 = document.getElementById('desigualdadChart').getContext('2d');
    const desigualdadChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Escuelas con Suficientes', 'Escuelas con Insuficientes'],
            datasets: [{
                label: 'Porcentaje de Acceso a Recursos de Calidad',
                data: [85, 35], // Datos de ejemplo
                backgroundColor: [
                    '#28a745', // Verde (Suficientes)
                    '#007bff'  // Azul (Insuficientes)
                ],
                borderColor: [
                    '#1e7e34',
                    '#0056b3'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // --- Gráfica 2: Brecha digital ---
    const ctx2 = document.getElementById('brechaDigitalChart').getContext('2d');
    const brechaDigitalChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Acceso a Internet en Casa', 'Sin Acceso a Internet en Casa'],
            datasets: [{
                label: 'Acceso a Internet',
                data: [60, 40], // Datos de ejemplo
                backgroundColor: [
                    '#007bff', // Azul (Con Acceso)
                    '#28a745'  // Verde (Sin Acceso)
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distribución de Acceso Digital'
                }
            }
        }
    });
});