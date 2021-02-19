const Avatar = (props) => (
  <div className="avatar">
    <img src={`/avatars/${props.imageId}.png`} alt="Avatar" />
    {props.name}
  </div>
);

export default Avatar;
