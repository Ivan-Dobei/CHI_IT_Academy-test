import { SyntheticEvent } from 'react';
import { useActions } from '../../hooks/useActions';
import cls from './DeleteForm.module.scss';

interface DeleteFormProps {
    onCancelForm: () => void;
    itemId: number;
}

const DeleteForm = (props: DeleteFormProps) => {

    const {deleteCarById} = useActions();

    const {
        onCancelForm, 
        itemId
    } = props;

    const onSubmitForm = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
    }

    const onDeleteItem = () => {
        deleteCarById(itemId);
        onCancelForm();
    }

  return (
    <form className={cls.form} onSubmit={onSubmitForm}>
        <h3 className={cls.title}>Are you shure that you want to delete the car from table?</h3>
        <div className={cls.btns}>
            <button className={cls.btn} onClick={onCancelForm}>No</button>
            <button className={cls.btn} onClick={onDeleteItem}>Yes</button>
        </div>
    </form>
  )
}

export default DeleteForm
