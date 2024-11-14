import { useContext } from 'react';
import { IndexContext } from '../gallery/page';
import CloseButton from 'react-bootstrap/CloseButton';

function LabelledExample() {
  const { setIndex } = useContext(IndexContext);
  return <CloseButton aria-label="Hide" onClick={() => setIndex(null)} />;
}

export default LabelledExample;
