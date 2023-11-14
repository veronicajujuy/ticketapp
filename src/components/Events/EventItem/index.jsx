// eslint-disable-next-line react/prop-types
const EventItem = ({ info, image, name, onClick, id }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={() => onClick(id)}>Ver mas</button>
    </div>
  );
};

export default EventItem;
