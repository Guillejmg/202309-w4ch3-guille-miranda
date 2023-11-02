
import './task.card.scss';
import { CharacterData } from '../../model/types';
import { Category } from '../../model/types';

type Props = {
  Character: CharacterData;
  Categorys: Category
};

export function Card({Character}: Props) {

function makeExtraData(item: typeof Character) {
  let result = '';
  if (King in item) {
    result = `<li>Años de reinado: ${item.kingdomYears}</li>`;
  } else if (Fighter in item) {
    result = `
      <li>Arma: ${item.weapon}</li>
      <li>Destreza: ${item.skill}</li>`;
  } else if (item in Advisor) {
    result = `
      <li>Sirve a: ${item.advisorBoss.name}</li>`;
  } else {
    result = `
        <li>Peloteo: ${item.servilityGrade}</li>
        <li>Asesora a: ${item.patron.name}</li>`;
  }

  return result;
}

return (
  <>
  <li className="character col">
  <div className="card character__card">
    <img src="/img/${character.name.toLowerCase()}.jpg" alt="${
    character.name
  } ${character.family}" className="character__picture 
    ${!character.isAlive && 'card-img-top'}" />
    <div className="card-body">
      <h2 className="character__name card-title h4">${Character.name} ${
    Character.family
  }</h2>
      <div className="Character__info">
        <ul className="list-unstyled">
          <li>Edad: ${Character.age} años</li>
          <li>
            Estado: ${
              Character.isAlive
                ? `<i className="fas fa-thumbs-up">`
                : `<i className="fas fa-thumbs-down">`
            }
            </i>
            </i>
          </li>
        </ul>
      </div>
      <div className="Character__overlay">
        <ul className="list-unstyled">
            ${makeExtraData(Character)}
        </ul>
        <div className="character__actions">
          <button className="character__action btn talk">habla</button>
          <button className="character__action btn dead">muere</button>
        </div>
      </div>
</li>
</>
)
          }
