type AmpIncludeCustomElementProps = {
  name: string;
  version: string;
};

export default function AmpIncludeCustomElement(props: AmpIncludeCustomElementProps) {
  return (
    <script
      async
      custom-element={props.name}
      src={'https://cdn.ampproject.org/v0/' + props.name + '-' + props.version + '.js'}
      key={props.name}
    />
  );
}
