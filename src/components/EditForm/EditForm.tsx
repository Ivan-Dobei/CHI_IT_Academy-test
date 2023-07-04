import React from 'react'
import { useActions } from '../../hooks/useActions';
import { findCarById } from '../../utils/FindCarById/FindCarById';
import Form from '../Form/Form'

interface EditFormProps {
  isOpen: boolean;
  onClose: () => void;
  carId: number;
}

const EditForm = (props: EditFormProps) => {

  const {
    carId, 
    isOpen, 
    onClose,
  } = props;

  const {editCar} = useActions();

  const car = findCarById(carId);

  return (
    <div>
      <Form
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={editCar}
        car={car}
        isEdit={true}
      />
    </div>
  )
}

export default EditForm
