export default function ListItem(props) {
  return (
    <li>
      <a target="-blank" href={props.url}>
        <img src={props.imageUrl} alt={props.alt} />
      </a>
    </li>
  );
}
