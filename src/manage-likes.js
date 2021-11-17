const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const idApp = 'sNKLeXAeMyPD4Nokxkg0';

const getLikes = async () => {
  const likeUrl = `${url + idApp}/likes`;
  const resp = await fetch(likeUrl);
  return resp;
};
const postLikes = async (id = '', nbrLikes = 0) => {
  const likeUrl = `${url + idApp}/likes`;
  const data = {
    item_id: id,
    likes: nbrLikes,
  };
  const resp = await fetch(likeUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res);
  return resp;
};
export { url, getLikes, postLikes };