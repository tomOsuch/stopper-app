import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   const formatTime = millseconds => {
     return `${Math.floor(millseconds / 60000)}:${Math.floor((millseconds % 60000) / 1000)}:${Math.floor((millseconds % 1000) / 10)}`;
   };

  return (
    <div className={styles.component}>
       {formatTime(time)}
    </div>
  );

};

export default FormattedTime;