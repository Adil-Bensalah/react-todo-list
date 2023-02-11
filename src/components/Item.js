export default function Item(props) {
  return (
    <div>
      <li className="list-item">
        <p>{props.txt}</p>

        <button
          onClick={() => {
            props.delFunc(props.id);
          }}
        >
          Supprimer
        </button>
      </li>
    </div>
  );
}
