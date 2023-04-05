const HomePage = () => {
	const main = document.querySelector('main');


  main.innerHTML = `
		<div id="header" class="text-center">
			<h1>Whitelist Rosaire</h1>
		</div>
		<div class="justify-content-center mt-4">
			<div class="row m-2">
				<div class="col-sm-12">
					<div class="input-group">
						<input type="email" class="form-control " placeholder="Rechercher">
						<button id="searchBtn" class="btn btn-primary ml-1" >Rechercher</button>
					</div>
				</div>
			</div>
			<div class="mt-3"> 
				<div class="stats alert alert-info text-center" role="alert">
					Nombre de présents : 2 | Total invités : 3 
				</div>
			</div>
			<table id="table" class="table table-striped">
				<thead>
					<tr>
					<th scope="col">Prénom</th>
					<th scope="col">Nom</th>
					<th scope="col">Présent</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td>Mark</td>
					<td>Otto</td>
					<td>
						<button type="button" class="isValid validate btn btn-success d-flex align-items-center">
							<span class="validate mx-auto isValid">Rentré</span>
						</button>
					</td>
					</tr>
					<tr>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>
						<button type="button" class=" isValid validate btn btn-success d-flex align-items-center">
							<span class="mx-auto isValid">Rentré</span>
						</button>
					</td>
					</tr>
					<tr>
					<td>Larry</td>
					<td>the Bird</td>
					<td>
						<button type="button" class="validate btn btn-secondary d-flex align-items-center">
							<span class="mx-auto">Absent</span>
						</button>
					</td>
					</tr>
				</tbody>
				</table>
		</div>
  `;
  const searchBtn = document.querySelector('#searchBtn');
  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
  });

  const containerTable = document.querySelector('#table');
  const validate = containerTable.getElementsByClassName('validate');
  const validateButtonsArray = Array.from(validate);

  validateButtonsArray.forEach((validateButton) => {
    validateButton.addEventListener('click', async () => {
      const isValid = validateButton.classList.contains('isValid');
      // const lb = validateButton;
      if (isValid) {
        validateButton.classList.remove('isValid');
        validateButton.classList.remove('btn-success');
        validateButton.classList.add('notValid');
        validateButton.classList.add('btn-secondary');
        validateButton.innerHTML = '<span class="mx-auto">Absent</span>';
      } else {
        validateButton.classList.remove('notValid');
        validateButton.classList.remove('btn-secondary');
        validateButton.classList.add('isValid');
        validateButton.classList.add('btn-success');
        validateButton.innerHTML = '<span class="mx-auto">Rentré</span>';
      }

      // const articleId = validateButton.getAttribute('id');

      // request = {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     id_membre: idMember,
      //     id_article: articleId,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };

      // await fetch(`https://vinced.azurewebsites.net/favorites`, request);
    });
  });
};

export default HomePage;
