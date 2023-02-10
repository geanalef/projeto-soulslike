import "./index.css";

import Header from "./componentes/Header";
import Section from "./componentes/Section";
import ListItem from "./componentes/ListItem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/Demon's%20Souls",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21812_IGDB-144x192.jpg",
    alt: "Imagem do jogo Demons Souls",
  },
  {
    url: "https://www.twitch.tv/directory/game/Dark%20Souls",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29433_IGDB-144x192.jpg",
    alt: "Imagem do jogo Dark Souls",
  },
  {
    url: "https://www.twitch.tv/directory/game/Dark%20Souls%20III",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/490292_IGDB-144x192.jpg",
    alt: "Imagem do jogo Dark Souls III",
  },
  {
    url: "https://www.twitch.tv/directory/game/Sekiro%3A%20Shadows%20Die%20Twice",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/506415_IGDB-144x192.jpg",
    alt: "Imagem do jogo Sekiro",
  },
  {
    url: "https://www.twitch.tv/directory/game/Elden%20Ring",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-144x192.jpg",
    alt: "Imagem do jogo Elden Ring",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/distortion2",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/distortion2-profile_image-bb052bec695cc197-70x70.png",
    alt: "Imagem de Distortion2",
  },
  {
    url: "https://www.twitch.tv/search?term=dinossindgeil",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e1e9622a-54b4-4e9b-bfa4-5c125494f0e9-profile_image-150x150.png",
    alt: "Imagem de Dinossindgeil",
  },
  {
    url: "https://www.twitch.tv/canaltaticads",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e35f5f70-f82a-4301-ae8f-5ee32dc6d63b-profile_image-70x70.png",
    alt: "Imagem de TaticaDs",
  },
];

const socialListData = [
  {
    url: "https://www.linkedin.com/in/gean-alef-a6040a12b/",
    imageUrl: "/assets/linkedin.svg",
    alt: "linkedin de Gean Alef",
  },
  {
    url: "https://www.instagram.com/gean.alef/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram de Gean Alef",
  },
  {
    url: "https://www.youtube.com/@geanalef2566/streams",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube de Gean Alef",
  },
  {
    url: "https://www.twitch.tv/agrias02",
    imageUrl: "/assets/twitch.svg",
    alt: "Twitch de Gean Alef",
  },
];

function App() {
  return (
    <div className="App">
      {/* Incluir header aqui*/}
      <Header />

      {/* Incluir main aqui*/}
      <main>
        {/* Incluir sections aqui*/}
        <Section
          title="Meus Jogos"
          subtitle="Os gemas que eu mais curto jogar!"
          className="games-list"
        >
          {/*Items da lista*/}

          {/*O method MAP vai retornar um novo array de um array existente chamado*/}
          {gameListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas rede"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
