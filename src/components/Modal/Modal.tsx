import { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '../../utils/ClassNames/ClassNames';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalPorps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

const Modal = (props: ModalPorps) => {

    const { 
        children, 
        className, 
        isOpen, 
        onClose,
        title
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }

    const closeHandler = () => {
        onClose();
    }

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    }, [closeHandler])

    useEffect(() => {
      if(isOpen) {
        window.addEventListener('keydown', onKeyDown);
      }

      return () => {
        window.removeEventListener('keydown', onKeyDown);
      }
    }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
         <div className={cls.content} onClick={onContentClick}>
            <h2 className={cls.title}>
              {title}
            </h2>
            <div className={cls.contentBottom}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
