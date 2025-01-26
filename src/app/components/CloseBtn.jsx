import { useContext } from 'react';
import { IndexContext } from '../IndexContext';
import CloseButton from 'react-bootstrap/CloseButton';

function CloseBtn() {
  const { setIndex } = useContext(IndexContext);
  return (
    <div className="p-2.5  rounded-full transition-transform duration-300 border-solid  border-1 hover:scale-110">
      <CloseButton aria-label="Hide" onClick={() => setIndex(null)} />
    </div>
  );
}

export default CloseBtn;
