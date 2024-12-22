import { useContext } from 'react';
import { IndexContext } from '../IndexContext';
import CloseButton from 'react-bootstrap/CloseButton';

function CloseBtn() {
  const { setIndex } = useContext(IndexContext);
  return (
    <CloseButton
      aria-label="Hide"
      className=" p-2.5 border-gray-400  border-2 border-solid rounded-3xl"
      onClick={() => setIndex(null)}
    />
  );
}

export default CloseBtn;
