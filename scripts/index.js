const initialCards = [
  "Yosemite Valley",
  "Lake Louise",
  "Bald Mountains",
  "Latemar",
  "Vanoise National Park",
  "Lago di Braies  ",
];

const cardData = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//* elements *//
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const editProfileModal = document.querySelector("#profile-edit-modal");
const profileModalCloseButton = editProfileModal.querySelector(
  "#modal-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector('#add-card-form');
const addCardModalCloseButton = addNewCardModal.querySelector('#modal-close-button');
const addCardFormElement = addNewCardModal.querySelector('.modal__form');
const cardTitleInput = addCardFormElement.querySelector('.modal__input_type_title');
const cardUrlInput = addCardFormElement.querySelector('.modal__input_type_url');

//* functions *//
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

// function openModal() {
//     nameInput.value = profileTitle.textContent;
//     jobInput.value = profileDescription.textContent;

//     editProfileModal.classList.add("modal_opened");
// }

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  // const cardImage.src = cardData.link;
  // const cardImage.alt = cardData.name;
  // cardData.link = card Element.querySelector('.');
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

//* event handlers *//
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(editProfileModal);
};

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value
  renderCard({name, link}, cardListEl);
  closePopup(addCardModal);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

//* event listeners *//
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
  //   profileEditModal.classList.add("modal_opened");

});

// TODO - use anonymous function and pass appropriate modal to handler function
// use profileEditButton handler as an example
profileModalCloseButton.addEventListener("click", () => {
    closePopup(editProfileModal )});
addNewCardButton.addEventListener("click", () => {
    openModal(addNewCardModal)});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener('submit', handleAddCardFormSubmit);

addCardModalCloseButton.addEventListener("click", () => {
  closePopup(addNewCardModal)});

cardData.forEach((data) => renderCard(data, cardListEl)
);
