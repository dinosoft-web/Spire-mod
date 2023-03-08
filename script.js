const mainHexes = document.querySelectorAll('.main')
const textContainer = document.querySelector('.text-container')

const formationToggle = () => {
	const formations = document.querySelectorAll('.title')
	const contents = document.querySelectorAll('.content')

	formations.forEach((form, idx) => {
		form.addEventListener('click', () => {
			contents[idx].classList.toggle('active')
		})
	})
}

DATA = [
	{
		title: 'Débuter la Subsidiarité',
		text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
	Consequuntur, porro consectetur optio voluptate vitae minima excepturi
	autem enim incidunt reiciendis accusantium natus possimus eligendi
	reprehenderit at recusandae eum praesentium deserunt veritatis
	cupiditate iure! Nemo id dolorem, recusandae dolor nam, amet ipsam
	aspernatur, at error libero perferendis sequi rem tenetur repellendus
	incidunt quia. Error modi obcaecati cum assumenda illum, non quia
	aperiam amet quod perferendis ipsa. Nulla consequatur maiores non quia
	nihil eos? Officiis illum dolor esse, impedit sunt ipsa voluptatibus
	obcaecati odit dolore, facere iusto nostrum minima modi. Amet iure
	aliquam molestiae ab blanditiis enim nobis labore iste, repudiandae
	vero!`,
		offers: [
			{
				title: 'Formations',
				trainings: [
					{ title: 'Formation 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Coaching',
				trainings: [
					{ title: 'Coaching 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Mentorat',
				trainings: [
					{ title: 'Mentorat 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Supervision',
				trainings: [
					{ title: 'Supervision 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Supervision 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Supervision 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Supervision 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Supervision 5', duration: '2', rating: '4,5', link: '' },
				],
			},
		],
	},
	{
		title: 'Management & Leadership',
		text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
	Consequuntur, porro consectetur optio voluptate vitae minima excepturi
	autem enim incidunt reiciendis accusantium natus possimus eligendi
	reprehenderit at recusandae eum praesentium deserunt veritatis
	cupiditate iure! Nemo id dolorem, recusandae dolor nam, amet ipsam
	aspernatur, at error libero perferendis sequi rem tenetur repellendus
	incidunt quia. Error modi obcaecati cum assumenda illum, non quia
	aperiam amet quod perferendis ipsa. Nulla consequatur maiores non quia
	nihil eos? Officiis illum dolor esse, impedit sunt ipsa voluptatibus
	obcaecati odit dolore, facere iusto nostrum minima modi. Amet iure
	aliquam molestiae ab blanditiis enim nobis labore iste, repudiandae
	vero!`,
		offers: [
			{
				title: 'Formations',
				trainings: [
					{ title: 'Formation 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Coaching',
				trainings: [
					{ title: 'Coaching 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Mentorat',
				trainings: [
					{ title: 'Mentorat 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 5', duration: '2', rating: '4,5', link: '' },
				],
			},
		],
	},
	{
		title: 'Qualité de vie et des Conditions de Travail',
		text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
	Consequuntur, porro consectetur optio voluptate vitae minima excepturi
	autem enim incidunt reiciendis accusantium natus possimus eligendi
	reprehenderit at recusandae eum praesentium deserunt veritatis
	cupiditate iure! Nemo id dolorem, recusandae dolor nam, amet ipsam
	aspernatur, at error libero perferendis sequi rem tenetur repellendus
	incidunt quia. Error modi obcaecati cum assumenda illum, non quia
	aperiam amet quod perferendis ipsa. Nulla consequatur maiores non quia
	nihil eos? Officiis illum dolor esse, impedit sunt ipsa voluptatibus
	obcaecati odit dolore, facere iusto nostrum minima modi. Amet iure
	aliquam molestiae ab blanditiis enim nobis labore iste, repudiandae
	vero!`,
		offers: [
			{
				title: 'Formations',
				trainings: [
					{ title: 'Formation 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Coaching',
				trainings: [
					{ title: 'Coaching 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Mentorat',
				trainings: [
					{ title: 'Mentorat 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 5', duration: '2', rating: '4,5', link: '' },
				],
			},
		],
	},
	{
		title: 'Comité de Direction ',
		text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
	Consequuntur, porro consectetur optio voluptate vitae minima excepturi
	autem enim incidunt reiciendis accusantium natus possimus eligendi
	reprehenderit at recusandae eum praesentium deserunt veritatis
	cupiditate iure! Nemo id dolorem, recusandae dolor nam, amet ipsam
	aspernatur, at error libero perferendis sequi rem tenetur repellendus
	incidunt quia. Error modi obcaecati cum assumenda illum, non quia
	aperiam amet quod perferendis ipsa. Nulla consequatur maiores non quia
	nihil eos? Officiis illum dolor esse, impedit sunt ipsa voluptatibus
	obcaecati odit dolore, facere iusto nostrum minima modi. Amet iure
	aliquam molestiae ab blanditiis enim nobis labore iste, repudiandae
	vero!`,
		offers: [
			{
				title: 'Formations',
				trainings: [
					{ title: 'Formation 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Coaching',
				trainings: [
					{ title: 'Coaching 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Mentorat',
				trainings: [
					{ title: 'Mentorat 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 5', duration: '2', rating: '4,5', link: '' },
				],
			},
		],
	},
	{
		title: 'Gestion des Emplois et des Parcours Professionels',
		text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
	Consequuntur, porro consectetur optio voluptate vitae minima excepturi
	autem enim incidunt reiciendis accusantium natus possimus eligendi
	reprehenderit at recusandae eum praesentium deserunt veritatis
	cupiditate iure! Nemo id dolorem, recusandae dolor nam, amet ipsam
	aspernatur, at error libero perferendis sequi rem tenetur repellendus
	incidunt quia. Error modi obcaecati cum assumenda illum, non quia
	aperiam amet quod perferendis ipsa. Nulla consequatur maiores non quia
	nihil eos? Officiis illum dolor esse, impedit sunt ipsa voluptatibus
	obcaecati odit dolore, facere iusto nostrum minima modi. Amet iure
	aliquam molestiae ab blanditiis enim nobis labore iste, repudiandae
	vero!`,
		offers: [
			{
				title: 'Formations',
				trainings: [
					{ title: 'Formation 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Formation 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Coaching',
				trainings: [
					{ title: 'Coaching 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Coaching 5', duration: '2', rating: '4,5', link: '' },
				],
			},
			{
				title: 'Mentorat',
				trainings: [
					{ title: 'Mentorat 1', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 2', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 3', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 4', duration: '2', rating: '4,5', link: '' },
					{ title: 'Mentorat 5', duration: '2', rating: '4,5', link: '' },
				],
			},
		],
	},
]

mainHexes.forEach((hex, dataIndex) => {
	hex.addEventListener('click', () => {
		textContainer.classList.remove('hidden')
		for (i = 0; i <= mainHexes.length - 1; i++) {
			mainHexes[i].classList.remove('active')
		}
		hex.classList.add('active')
		textContainer.innerHTML = `<h2>${DATA[dataIndex].title}</h2>
		<p>
			${DATA[dataIndex].text}
		</p>			
					`
		const formationContainer = document.createElement('div')
		formationContainer.classList.add('formation-container')
		textContainer.appendChild(formationContainer)
		const titleContainer = document.createElement('div')
		titleContainer.classList.add('title-container')
		formationContainer.appendChild(titleContainer)
		DATA[dataIndex].offers.map((offer) => {
			const title = document.createElement('div')
			title.classList.add('offer-title')
			title.textContent = `${offer.title}`
			titleContainer.appendChild(title)
		})

		const formationDetailsContainer = document.createElement('div')
		formationDetailsContainer.classList.add('formation-details-container')
		formationContainer.appendChild(formationDetailsContainer)

		const offerTitles = document.querySelectorAll('.offer-title')

		offerTitles.forEach((offer, offerIndex) => {
			offer.addEventListener('click', () => {
				for (i = 0; i <= offerTitles.length - 1; i++) {
					offerTitles[i].classList.remove('active')
				}
				formationDetailsContainer.innerHTML = ''
				offerTitles[offerIndex].classList.add('active')
				DATA[dataIndex].offers[offerIndex].trainings.map((training, index) => {
					const formation = document.createElement('div')
					formation.classList.add('formation')
					const formationTitle = document.createElement('div')
					formationTitle.classList.add('title')
					formationTitle.innerHTML = `<span>${DATA[dataIndex].offers[offerIndex].trainings[index].title}</span>
		
					<svg width="25px" height="25px" viewBox="0 0 1024 1024">
						<path
							fill="#fff"
							d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
						/>
					</svg>`
					formation.appendChild(formationTitle)
					const formationContent = document.createElement('div')
					formationContent.classList.add('content')
					formationContent.innerHTML = `				
										<div class="line">
											<svg
												width="30px"
												height="20px"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.8284 6.75736C12.3807 6.75736 12.8284 7.20507 12.8284 7.75736V12.7245L16.3553 14.0653C16.8716 14.2615 17.131 14.8391 16.9347 15.3553C16.7385 15.8716 16.1609 16.131 15.6447 15.9347L11.4731 14.349C11.085 14.2014 10.8284 13.8294 10.8284 13.4142V7.75736C10.8284 7.20507 11.2761 6.75736 11.8284 6.75736Z"
													fill="#0F1729"
												/>
											</svg>
											<p>${DATA[dataIndex].offers[offerIndex].trainings[index].duration} heures</p>
										</div>
										<div class="line">
											<svg
												width="25px"
												height="25px"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M11.0748 3.25583C11.4141 2.42845 12.5859 2.42845 12.9252 3.25583L14.6493 7.45955C14.793 7.80979 15.1221 8.04889 15.4995 8.07727L20.0303 8.41798C20.922 8.48504 21.2841 9.59942 20.6021 10.1778L17.1369 13.1166C16.8482 13.3614 16.7225 13.7483 16.8122 14.1161L17.8882 18.5304C18.1 19.3992 17.152 20.0879 16.3912 19.618L12.5255 17.2305C12.2034 17.0316 11.7966 17.0316 11.4745 17.2305L7.60881 19.618C6.84796 20.0879 5.90001 19.3992 6.1118 18.5304L7.18785 14.1161C7.2775 13.7483 7.1518 13.3614 6.86309 13.1166L3.3979 10.1778C2.71588 9.59942 3.07796 8.48504 3.96971 8.41798L8.50046 8.07727C8.87794 8.04889 9.20704 7.80979 9.35068 7.45955L11.0748 3.25583Z"
													stroke="#000000"
													stroke-width="2"
												/>
											</svg>
											<p>Note : ${DATA[dataIndex].offers[offerIndex].trainings[index].rating}/5</p>
										</div>
										<button>En savoir plus</button>
												`
					formation.appendChild(formationContent)
					formationDetailsContainer.appendChild(formation)
				})
				formationToggle()
			})
		})
	})
})
