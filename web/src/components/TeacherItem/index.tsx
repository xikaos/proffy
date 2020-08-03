import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/3723250?s=460&u=cb87055791d78d4e44f6091a8f30be1bfe47540d&v=4" alt=""/>
            <div>
              <strong>Francisco Zanatta</strong>
              <span>Software Engineer</span>
            </div>
          </header>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. A ordem dos tratores não altera o pão duris. Quem num gosta di mé, boa gentis num é. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em Contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;