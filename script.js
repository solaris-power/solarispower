// Função para calcular a economia com energia solar
function calcularEconomia() {
    // Obter o valor do gasto mensal
    const gastoMensal = parseFloat(document.getElementById('gasto-mensal').value);
    
    // Verificar se o valor é válido
    if (isNaN(gastoMensal) || gastoMensal <= 0) {
        alert('Por favor, insira um valor válido para o gasto mensal.');
        return;
    }
    
    // Cálculos de economia (estimativas)
    const gastoAnual = gastoMensal * 12;
    const economiaAnual = gastoAnual * 0.85; // Estimativa de 85% de economia
    const retornoInvestimento = 5; // Estimativa de retorno em 5 anos
    const economiaVinteAnos = economiaAnual * 20; // Economia em 20 anos (vida útil média)
    
    // Formatar valores para moeda brasileira
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
    // Exibir o resultado
    const resultadoDiv = document.getElementById('resultado-economia');
    resultadoDiv.innerHTML = `
        <h3>Sua Economia Estimada</h3>
        <p><strong>Economia anual:</strong> ${formatoMoeda.format(economiaAnual)}</p>
        <p><strong>Retorno do investimento:</strong> Aproximadamente ${retornoInvestimento} anos</p>
        <p><strong>Economia em 20 anos:</strong> ${formatoMoeda.format(economiaVinteAnos)}</p>
        <p>Entre em contato conosco para um orçamento personalizado!</p>
        <a href="#contato" class="cta-button">Solicitar Orçamento</a>
    `;
    
    // Mostrar o resultado
    resultadoDiv.classList.add('show');
}

// Função para navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação para elementos quando entram na viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Navegação fixa com mudança de estilo ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Inicialização do mapa (placeholder - seria implementado com Google Maps ou similar)
function initMap() {
    // Código para inicializar o mapa seria colocado aqui
    console.log('Mapa inicializado');
}

// Chamada quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Solaris Power website loaded');
    // Outras inicializações podem ser colocadas aqui
});
