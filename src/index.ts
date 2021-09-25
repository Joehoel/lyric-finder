import 'dotenv/config';
import { Client } from 'genius-lyrics';

const client = new Client(process.env.API_KEY);

export default function search(query: string) {
  return new Promise<LyricsData>((resolve, reject) => {
    if (typeof query !== 'string')
      return reject(
        new TypeError(
          `Expected search query to be a string, received "${typeof query}"!`
        )
      );

    client.songs
      .search(query)
      .then(async songs => {
        const data = {
          title: songs[0].title,
          id: songs[0].id,
          thumbnail: songs[0].thumbnail,
          image: songs[0].image,
          url: songs[0].url,
          artist: {
            name: songs[0].artist.name,
            id: songs[0].artist.id,
            url: songs[0].artist.url,
            image: songs[0].artist.image,
          },
          lyrics: await songs[0].lyrics(false),
        };

        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export interface LyricsData {
  title: string;
  id: number;
  thumbnail: string;
  image: string;
  url: string;
  artist: {
    name: string;
    id: number;
    url: string;
    image: string;
  };
  lyrics?: string;
}
