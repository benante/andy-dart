import { useContext } from 'react';
import { IndexContext } from '../IndexContext';
import CloseButton from 'react-bootstrap/CloseButton';

function CloseBtn() {
  const { setIndex } = useContext(IndexContext);
  return (
    <CloseButton
      aria-label="Hide"
      className="p-2.5   rounded-full shadow-md transition-transform duration-300 border-solid  border-1 hover:scale-110"
      onClick={() => setIndex(null)}
    />
  );
}

export default CloseBtn;
