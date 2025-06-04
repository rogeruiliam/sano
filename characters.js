// Carrega os dados dos personagens
fetch('personagens.json')
    .then(response => response.json())
    .then(data => {
        const personagensGrid = document.getElementById('personagens-grid');
        const detalhesPersonagem = {
            avatarImg: document.getElementById('avatar-img'),
            nickname: document.getElementById('nickname'),
            level: document.getElementById('level'),
            forca: document.getElementById('forca'),
            agilidade: document.getElementById('agilidade'),
            vitalidade: document.getElementById('vitalidade'),
            energia: document.getElementById('energia'),
            poder_ataque: document.getElementById('poder_ataque'),
            sucesso_ataque: document.getElementById('sucesso_ataque'),
            poder_combate: document.getElementById('poder_combate'),
            defesa: document.getElementById('defesa'),
            ataque_percent: document.getElementById('ataque_percent'),
            defesa_percent: document.getElementById('defesa_percent'),
            dano_magico: document.getElementById('dano_magico')
        };

        // Cria os cards dos personagens
        data.forEach(personagem => {
            const card = document.createElement('div');
            card.className = 'personagem-card';
            card.innerHTML = `
                <img src="images/personagens/${personagem.nickname}.png" alt="${personagem.nickname}">
                <h3>${personagem.nickname}</h3>
            `;

            // Adiciona eventos de clique
            card.addEventListener('click', () => {
                atualizarDetalhes(personagem);
            });

            personagensGrid.appendChild(card);
        });

        // Função para atualizar os detalhes do personagem
        function atualizarDetalhes(personagem) {
            detalhesPersonagem.avatarImg.src = `images/personagens/${personagem.nickname}.png`;
            detalhesPersonagem.nickname.textContent = personagem.nickname;
            detalhesPersonagem.level.textContent = personagem.level;
            detalhesPersonagem.forca.textContent = personagem.forca;
            detalhesPersonagem.agilidade.textContent = personagem.agilidade;
            detalhesPersonagem.vitalidade.textContent = personagem.vitalidade;
            detalhesPersonagem.energia.textContent = personagem.energia.join(' - ');
            detalhesPersonagem.poder_ataque.textContent = personagem.poder_ataque.join(' - ');
            detalhesPersonagem.sucesso_ataque.textContent = personagem.sucesso_ataque;
            detalhesPersonagem.poder_combate.textContent = personagem.poder_combate;
            detalhesPersonagem.defesa.textContent = personagem.defesa;
            detalhesPersonagem.ataque_percent.textContent = personagem.ataque_percent.join(' - ');
            detalhesPersonagem.defesa_percent.textContent = personagem.defesa_percent;
            detalhesPersonagem.dano_magico.textContent = personagem.dano_magico.join(' - ');
        }

        // Configura o botão de detalhes
        document.getElementById('detalhes-btn').addEventListener('click', () => {
            window.location.href = 'detalhes.html';
        });
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));