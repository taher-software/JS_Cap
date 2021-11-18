const getComm = async () => {
  const subBtn = document.querySelector('#submit_btn');
  const comUl = document.querySelector('#comment_div');
  const id = subBtn.getAttribute('data');
  const comCount = document.querySelector('#com_count');
  const get = () => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sNKLeXAeMyPD4Nokxkg0/comments?item_id=${id}`)
    .then((res) => res.json());

  const mealCom = await get();
  comCount.innerHTML = `${mealCom.length > 0 ? `${mealCom.length}` : '0'}`;

  comUl.innerHTML = '';

  if (mealCom.length > 0) {
    mealCom.forEach((e) => {
      const comLi = document.createElement('li');
      comLi.className = 'comment';
      comLi.innerHTML = `
      <span class="bold">${e.creation_date} ${e.username}</span>: ${e.comment}
      `;
      comUl.appendChild(comLi);
    });
  }
};

const postComm = () => {
  const userInp = document.querySelector('#yourname');
  const userCom = document.querySelector('#insight');
  const subBtn = document.querySelector('#submit_btn');
  const post = (id, name, insight) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sNKLeXAeMyPD4Nokxkg0/comments',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(
        {
          item_id: id,
          username: name,
          comment: insight,
        },
      ),
    })
    .then((res) => res.text());
  getComm();

  subBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const id = subBtn.getAttribute('data');
    const name = userInp.value;
    const comment = userCom.value;
    if (name !== '' && comment !== '') {
      userInp.value = '';
      userCom.value = '';
      await post(id, name, comment)
        .then(() => getComm());
    } else {
      alert('Please insert both your name and comment');
    }
  });
};

export default postComm;

