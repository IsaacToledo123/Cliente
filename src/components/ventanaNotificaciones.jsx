import React ,{useState ,useEffect} from "react";

const VentanaNotificaciones = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/notificaciones");
  
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
  
      const jsonData = await response.json();
      setData(jsonData);
      console.log("Datos obtenidos correctamente:", jsonData);
  
      // Llamar a actualizacionNotificaciones después de un intervalo de tiempo
      setTimeout(() => {
        actualizacionNotificaciones(3000);
      }, 3000);
  
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  
  const actualizacionNotificaciones = (interval) => {
    // Llamar a fetchData después de un intervalo de tiempo
    setTimeout(() => {
      fetchData();
    }, interval);
  };
  
  // Iniciar el proceso de obtención de datos al cargar el componente
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div className="text-center" >
      <table>
        <thead className="bg-black text-white">
          <tr>
            <th>Hora</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((notificacion, index) => (
            <tr key={index}  className="bg-gray-200">
              <td>{notificacion.hora}</td>
              <td>{notificacion.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentanaNotificaciones;
