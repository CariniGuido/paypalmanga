import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";

const useProducts = () => {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    //1- Armar la referencia (sync)
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

      console.log('Query:', q.toString());  // Agrega este console.log

    //2- Consumir la referencia (asynch)
    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((doc) => {
          const data = doc.data();
          // Imprime la estructura de cada documento en la consola
          console.log(`Estructura del documento (${doc.id}):`, data);

          // Retorna el objeto con los datos del documento
          return {
            id: doc.id,
            ...data,
          };
        });
        setProductos(productos);
        // Agrega aquí cualquier lógica adicional después de obtener los datos
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return {
    productos,
    loading,
  };
};

export default useProducts;
