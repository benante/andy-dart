import { useContext } from 'react';
import { IndexContext } from '../IndexContext';
import CloseButton from 'react-bootstrap/CloseButton';

function CloseBtn() {
  const { setIndex } = useContext(IndexContext);
  return (
    <CloseButton
      aria-label="Hide"
      className=" p-2.5  bg-slate-400 border-1 border-solid rounded-3xl"
      onClick={() => setIndex(null)}
    />
  );
}

export default CloseBtn;
