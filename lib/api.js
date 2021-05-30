export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function fetchOne(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const json = await response.json();
  const data = json[0];
  return data;
}
