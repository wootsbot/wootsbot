import Script from 'next/script';

export default function AmpIncludeCustomElement(props) {
  return (
    <script
      async
      custom-element={props.name}
      src={'https://cdn.ampproject.org/v0/' + props.name + '-' + props.version + '.js'}
      key={props.name}
    />
  );
}
