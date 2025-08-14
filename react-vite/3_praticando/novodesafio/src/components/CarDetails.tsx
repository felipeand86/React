interface CarDetailsProps {
  brand: string;
  km: number;
  color: string;
  newCar: boolean;
}

const CarDetails = ({ brand, km, color, newCar }: CarDetailsProps) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails