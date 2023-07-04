import cls from './Form.module.scss';
import {useForm, SubmitHandler} from 'react-hook-form';
import { IFormFields } from '../../models/IFormFields';
import {useEffect} from 'react';
import { ICar } from '../../models/ICar';

interface FormProps {
    isOpen: boolean;
    isEdit?: boolean;
    car?: ICar; 
    onSubmit: (car: ICar) => void;
    onClose: () => void;
}

const Form = (props: FormProps) => {

    const {
        register, 
        handleSubmit,
        formState,
        reset,
        setValue,
    } = useForm<IFormFields>();

    const {
        isOpen,
        isEdit,
        car,
        onSubmit,
        onClose,
    } = props;

    const {errors} = formState;

    useEffect(() => {
        if(isOpen && isEdit && car) {
            setValue('company', car.car);
            setValue('model', car.car_model);
            setValue('vin', car.car_vin);
            setValue('year', car.car_model_year.toString());
            setValue('color', car.car_color);
            setValue('price', car.price);
            setValue('availability', car.availability);
        } else {
            reset();
        }
    }, [isOpen, isEdit, car])

    const onSubmitForm: SubmitHandler<IFormFields> = (data) => {
        
        onSubmit({
            id: car ? car.id : Date.now(),
            car: data.company,
            car_model: data.model,
            car_vin: data.vin,
            car_model_year: parseInt(data.year),
            car_color: data.color,
            price: data.price,
            availability: data.availability
        })
        onClose();
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitForm)} className={cls.form}>
        {errors?.company && <p className={cls.error}>{errors.company.message}</p>}
        <label className={cls.labelInput}>
            <p className={cls.labelText}>Company:</p>
            <input
                {...register('company', {
                    required: 'Company is require field!',
                })}
                type='text'
                disabled={isEdit}
                className={cls.input}
                placeholder='Enter company...'
            />
        </label>
        {errors?.model && <p className={cls.error}>{errors.model.message}</p>}
        <label className={cls.labelInput}>
            <p className={cls.labelText}>Model:</p> 
            <input
                {...register('model', {
                    required: 'Model is require field!',
                })}
                type='text'
                disabled={isEdit}
                className={cls.input}
                placeholder='Enter model...'
            />
        </label>
        {errors?.vin && <p className={cls.error}>{errors.vin.message}</p>}
        <label className={cls.labelInput}>
            <p className={cls.labelText}>VIN:</p> 
            <input
                {...register('vin', {
                    required: 'VIN is require field!',
                    
                })}
                type='text'
                disabled={isEdit}
                className={cls.input}
                placeholder='Enter vin...'
            />
        </label>
        {errors?.year && <p className={cls.error}>{errors.year.message}</p>}
        <label className={cls.labelInput}>
            <p className={cls.labelText}>Year:</p>
            <input
                {...register('year', {
                    required: 'Year is require field!',
                    pattern: {
                        value: /^(19[2-9]\d|20[0-1]\d|202[0-3])$/,
                        message: 'Year is not correct'
                    }
                })}
                type='text'
                disabled={isEdit}
                className={cls.input}
                placeholder='Enter year...'
            />
        </label>
        {errors?.color && <p className={cls.error}>{errors.color.message}</p>}
        <label className={cls.labelInput}>
            <p className={cls.labelText}>Color:</p>
            <input
                {...register('color', {
                    required: 'Color is require field!',
                })}
                className={cls.input}
                type='text'
                placeholder='Enter color...'
            />
        </label>
        {errors?.price && <p className={cls.error}>{errors.price.message}</p>}
        <label className={cls.labelInput}>
            <p className={cls.labelText}>Price:</p>
            <input
                {...register('price', {
                    required: 'Price is require field!',
                })}
                className={cls.input}
                type='text'
                placeholder='Enter price...'
            />
        </label>
        
        <label className={cls.labelInput}>
            <p className={cls.labelText}>Availability:</p>
            <input
                {...register('availability')}
                type='checkbox'
                className={cls.inputAvalible}
            />
        </label>
        
        <button className={cls.btn}>send</button>
    </form>
    </div>
  )
}

export default Form
