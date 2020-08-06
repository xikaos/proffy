import React from 'react'
import api from '../../services/api';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
  id: number,
  name: string,
  avatar: string,
  subject: string,
  bio: string,
  cost: number,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', { user_id: teacher.id })
  }

  return (
    <article className="teacher-item">
          <header>
            <img src={ teacher.avatar } alt=""/>
            <div>
              <strong>{ teacher.name }</strong>
              <span>{ teacher.subject }</span>
            </div>
          </header>
          <p>
            { teacher.bio }
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ { teacher.cost }</strong>
            </p>
            <a 
              target="_blank"
              onClick={ createNewConnection }
              href={ `https://api.whatsapp.com/send?phone=${teacher.whatsapp}&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20através%20do%20Proffy!` }
            >
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em Contato
            </a>
          </footer>
        </article>
  );
}

export default TeacherItem;