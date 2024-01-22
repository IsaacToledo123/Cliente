import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, selectedDate }) => {

  if (!isOpen) {
    return null;
  }

  const [showInput, setShowInput] = useState(false);
  const [form ,setForm]=useState({
    hora:"",
    descripcion:""
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const insertar = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/notificaciones",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Error al reservar");
      }

      setShowInput(false);
     
    } catch (error) {
      console.error("Error al insertar:", error);
    }
  };


  const handleButtonClick = () => {
    setShowInput(true);
  };


  const handleInputBlur = () => {
    setShowInput(false);
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-96 p-6 rounded shadow-lg z-50">
        <h2 className="text-2xl font-bold mb-4">Detalles de la fecha seleccionada</h2>
        <p className="text-gray-700 mb-4">{selectedDate}</p>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        1-2 pm
      </button>

      {showInput && (
        <form>
          <input
            type="text"
            name="descripcion"
            onChange={handleChange}
            value={form.descripcion}
            className="border rounded p-2 mt-2"
            placeholder="Descripción"
          />
          <button
            className='bg-green-400 hover:bg-green-700 font-bold py-2 px-4 rounded'
            onClick={() => insertar()}
          >
            Aceptar
          </button>
        </form>
      )}
<br /> 
       <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
