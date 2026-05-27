import Figure from 'react-bootstrap/Figure';

function ComponenteProps({url,alt,texto}) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt={alt}
        src={url}
      />
      <Figure.Caption>
       {texto}
      </Figure.Caption>
    </Figure>
  );
}

export default ComponenteProps;