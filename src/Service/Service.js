import axios from "axios";

export const getAnimeList = async () => {
  const anime = await axios.get("https://api.jikan.moe/v4/anime")

  //console.log({animeList : anime.data})
  return anime.data
}

export const searchAnime = async (q) => {
  const search = await axios.get(`https://api.jikan.moe/v4/anime?q=${q}`)
  //console.log({querydata : search.data})
  return search.data
}

export const detailAnime = async (q) => {
  const detail = await axios.get(`https://api.jikan.moe/v4/anime/${q}/full`)
  //console.log({detail : detail.data.data})
  return detail.data.data
}