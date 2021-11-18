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
const addNewLike = async (e, id = '') => {
  const container = e.target.parentNode.parentNode;
  const currentNbrLikes = parseInt(container.querySelector('.likes-nbr span').textContent, 10);
  const newNbrLikes = currentNbrLikes + 1;
  container.querySelector('.likes-nbr span').textContent = newNbrLikes;
  await (postLikes(id, newNbrLikes));
};
export {
  url, getLikes, postLikes, addNewLike,
};