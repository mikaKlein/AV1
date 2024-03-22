// Seleciona todos os elementos com a classe 'favoritos'
const elementos2 = document.querySelectorAll('.favoritos');
// Seleciona todos os elementos com a classe 'video'
const elementos1 = document.querySelectorAll('.video');

// Função para adicionar a classe 'oculto' aos elementos 'video'
function ocultarVideo() {
    elementos1.forEach(elemento1 => {
        elemento1.classList.add('oculto');
    });
}

// Função para remover a classe 'oculto' dos elementos 'video'
function mostrarVideo() {
    elementos1.forEach(elemento1 => {
        elemento1.classList.remove('oculto');
    });
}

// Adiciona event listeners para cada elemento 'favoritos'
elementos2.forEach(elemento2 => {
    // Quando o mouse passa sobre um elemento 'favoritos', oculta os elementos 'video'
    elemento2.addEventListener('mouseover', ocultarVideo);
    // Quando o mouse sai de um elemento 'favoritos', mostra novamente os elementos 'video'
    elemento2.addEventListener('mouseout', mostrarVideo);
});

// Seleciona o elemento de vídeo
const meuVideo = document.getElementById('meuVideo');
// Seleciona o botão de reprodução
const botaoPlay = document.getElementById('botaoPlay');

// Adiciona um event listener para o clique no botão de reprodução
botaoPlay.addEventListener('click', () => {
    // Verifica se o vídeo está pausado
    if (meuVideo.paused) {
        // Se estiver pausado, reproduz o vídeo
        meuVideo.play();
    } else {
        // Se não estiver pausado, pausa o vídeo
        meuVideo.pause();
    }
});