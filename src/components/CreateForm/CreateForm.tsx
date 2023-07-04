import { useActions } from '../../hooks/useActions';
import Form from '../Form/Form';
import cls from './CreateForm.module.scss';

interface CreateFormProps {
  isOpen: boolean;
  onClose: () => void;
} 

const CreateForm = (props: CreateFormProps) => {

  const {
    isOpen,
    onClose,
  } = props;

  const {createCar} = useActions();

  return (
    <div>
      <Form
        isEdit={false}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={createCar}
      />
    </div>
  )
}

export default CreateForm
