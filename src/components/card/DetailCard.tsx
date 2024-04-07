import './DetailCard.css'

interface DetailCardProps {
    title: string;
}

export const DetailCard = ({title}: DetailCardProps) => {
  return (
    <div className='CardContainer'>
        <div>
            <p className='Title'>{title}</p>
            <p className='Description'>Description</p>
            <p className='Description'>62Mil/100m²</p>
            
        </div>
    </div>
  )
}
