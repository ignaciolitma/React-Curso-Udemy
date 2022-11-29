import PropTypes from "prop-types";
// const newMessage = {
//   message: "Hola Mundo",
//   title: "Ignacio"
// }

// Se puede pasar un método al componente. Las promesas son objetos
// React no acepta promesas para renderizar
//dou <> - </> === <Fragment> - </Fragment>.0

const getSaludo = () =>
{
  return "Hola Mundo";
}


export const FirstApp = ({ title, subTitle, name }) =>
{

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: "Ignacio",
  subTitle: "No hay subtítulo",
  title: "No hay título",
}
