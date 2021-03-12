const name = 'Josh Perez';
const element = <h1>{name}</h1>;

const user = {
  firstName: 'Harper',
  lastName: 'Brooks'
}

const formatName = function(user) {
  return `${user.firstName} ${user.lastName}`;
}

const Developers = function() {
  return (
    <div>
      {element}
      <h2>{formatName(user)}</h2>
    </div>
  );
}

export default Developers;