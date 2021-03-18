import classes from './DescriptionPart.module.css';

const DescriptionPart = function(props) {
  return (
    <span className={`${classes.DescriptionPart} ${props.item ? classes.DescriptionPart_Item : classes.DescriptionPart_Value}`}>
      {props.item ? props.item : props.value}
    </span>
  );
}

export default DescriptionPart;
