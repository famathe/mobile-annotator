function Description(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
