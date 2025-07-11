function IconsList({ logo }) {
  return (
    <li>
      <img src={logo.src} alt={logo.alt} />
    </li>
  );
}
export default IconsList;
