document.addEventListener("DOMContentLoaded", async () => {
    const baseURL = "https://api.thedogapi.com/v1";
    const racaList = document.getElementById('racaList');
    const racaImage = document.getElementById('racaImage');
    const racaDescription = document.getElementById('racaDescription');
    const randomRacaButton = document.getElementById('randomRacaButton');
    let todasRacas = [];

    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${baseURL}/${endpoint}`);
            if (!response.ok) {
                throw new Error(`Falha ao buscar dados de ${endpoint}`);
            }
            return response.json();
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao buscar os dados.');
        }
    };

    const showLoading = (show) => {
        const loader = document.getElementById('loading');
        loader.style.display = show ? 'flex' : 'none';
    };

    const renderRacaList = async () => {
        showLoading(true);
        const racas = await fetchData('breeds');
        showLoading(false);
        todasRacas = racas;

        if (racas) {
            racaList.innerHTML = racas.map(({ id, name }) => `
                <li class="cursor-pointer p-2 bg-white hover:bg-gray-100 rounded shadow transition-colors" data-id="${id}">
                    ${name}
                </li>
            `).join('');
            
            racaList.querySelectorAll('li').forEach(racaItem => {
                racaItem.addEventListener('click', async () => {
                    const racaId = racaItem.getAttribute('data-id');
                    await renderRacaInfo(racaId);
                });
            });
        }

        renderRandomRaca();
    };

    const renderRacaInfo = async (racaId) => {
        showLoading(true);
        const raca = await fetchData(`breeds/${racaId}`);
        showLoading(false);

        if (raca) {
            let imageURL = 'https://via.placeholder.com/600';
            if (raca.reference_image_id) {
                const image = await fetchData(`images/${raca.reference_image_id}`);
                imageURL = image ? image.url : imageURL;
            }
            racaImage.src = imageURL;
            racaImage.alt = raca.name || 'Imagem da raça';
            racaDescription.innerHTML = `
                <div class="text-center mb-4">
                    <h3 class="text-xl font-bold">${raca.name}</h3>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-100 p-4 rounded-lg shadow-inner">
                        <p><strong>Altura:</strong> ${raca.height.metric || 'Não disponível'} cm</p>
                        <p><strong>Peso:</strong> ${raca.weight.metric || 'Não disponível'} kg</p>
                        <p><strong>Expectativa de Vida:</strong> ${raca.life_span || 'Não disponível'}</p>
                        <p><strong>Grupo da Raça:</strong> ${raca.breed_group || 'Não disponível'}</p>
                    </div>
                    <div class="bg-gray-100 p-4 rounded-lg shadow-inner">
                        <p><strong>Função:</strong> ${raca.bred_for || 'Não disponível'}</p>
                        <p><strong>Temperamento:</strong> ${raca.temperament || 'Não disponível'}</p>
                    </div>
                </div>
            `;
        }
    };

    const renderRandomRaca = () => {
        if (todasRacas.length > 0) {
            const randomIndex = Math.floor(Math.random() * todasRacas.length);
            const randomRacaId = todasRacas[randomIndex].id;
            renderRacaInfo(randomRacaId);
        }
    };

    randomRacaButton.addEventListener('click', renderRandomRaca);

    await renderRacaList();
});
