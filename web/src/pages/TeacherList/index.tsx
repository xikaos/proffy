import React, { useState, FormEvent } from 'react';

import './styles.css'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={ subject }
            onChange={ event => { setSubject(event.target.value) }}
            options={[
              { value: 'Física', label: 'Física' },
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'História', label: 'História' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            value={ week_day }
            onChange={ event => { setWeekday(event.target.value) } }
            options={[
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
              { value: '0', label: 'Domingo' },
            ]}
          />
          <Input
            name="time"
            label="Hora"
            value={ time }
            onChange={ event => { setTime(event.target.value) } }
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        { teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={ teacher } />;
          }) 
        }
      </main>
    </div>
  )
}

export default TeacherList;