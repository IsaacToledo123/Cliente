import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from './ModalCalendario';

const MiCalendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    // Abre el modal aquí o realiza cualquier otra acción que desees
    // Por ejemplo, podrías tener un estado que controle la visibilidad del modal
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
        /*  { title: 'Evento 1', date: '2024-01-20' },
          { title: 'Evento 2', date: '2024-01-25' },*/
        ]}
        dateClick={handleDateClick}
      />

      {selectedDate && (
        <Modal
          isOpen={true} // Puedes usar un estado para controlar la visibilidad del modal
          onClose={() => setSelectedDate(null)}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
};

export default MiCalendario;
