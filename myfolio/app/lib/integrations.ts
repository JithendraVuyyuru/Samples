export const integrationEndpoints = {
  twitter: "https://api.twitter.com/2/users",
  instagram: "https://graph.instagram.com",
  github: "https://api.github.com/users",
  youtube: "https://www.googleapis.com/youtube/v3",
  spotify: "https://api.spotify.com/v1",
  maps: "https://maps.googleapis.com/maps/api",
  openGraph: "https://opengraph.io/api/1.1/site",
};

export function buildOpenGraphUrl(url: string) {
  return `${integrationEndpoints.openGraph}?url=${encodeURIComponent(url)}`;
}
